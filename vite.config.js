import fs from 'node:fs'
import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import {
  DEFAULT_LANGUAGE,
  LANGUAGES,
  hreflangLinks,
  languageDirection,
  localizePath,
  ogLocale,
  pageUrl,
  siteName,
  sitePages,
} from './src/data/seo.js'

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const HREFLANG_START = '<!-- hreflang:start -->'
const HREFLANG_END = '<!-- hreflang:end -->'

const hreflangBlock = (pagePath) =>
  [
    HREFLANG_START,
    ...hreflangLinks(pagePath).map(
      ({ hreflang, href }) =>
        `    <link rel="alternate" hreflang="${hreflang}" href="${href}" />`,
    ),
    `    ${HREFLANG_END}`,
  ].join('\n')

// Static HTML for every page in every language:
//   dist/index.html                      (he home, from index.html + hreflang)
//   dist/services/<slug>/index.html      (he)
//   dist/ru/…, dist/en/…                 (ru / en)
// Each file has its own lang/dir, title, description, canonical, Open Graph
// and hreflang, so search engines see the right data without running JS.
function multilingualPages() {
  let outDir = 'dist'

  return {
    name: 'multilingual-pages',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },

    // Hebrew home page: only adds the hreflang links (index.html itself is unchanged)
    transformIndexHtml(html) {
      return html.replace('</head>', `    ${hreflangBlock('/')}\n  </head>`)
    },

    closeBundle() {
      const indexFile = path.join(outDir, 'index.html')
      if (!fs.existsSync(indexFile)) {
        return
      }
      const template = fs.readFileSync(indexFile, 'utf8')

      for (const language of LANGUAGES) {
        for (const page of sitePages) {
          if (language === DEFAULT_LANGUAGE && page.path === '/') {
            continue // dist/index.html is the Hebrew home page already
          }

          const { title, description } = page.meta(language)
          const safeTitle = escapeHtml(title)
          const safeDescription = escapeHtml(description)
          const url = pageUrl(language, page.path)

          const replacements = [
            [/<html lang="[^"]*" dir="[^"]*">/, `<html lang="${language}" dir="${languageDirection(language)}">`],
            [/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`],
            [/(name="description"\s+content=")[^"]*(")/, `$1${safeDescription}$2`],
            [/(rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`],
            [/(property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`],
            [/(property="og:title"\s+content=")[^"]*(")/, `$1${safeTitle}$2`],
            [/(property="og:description"\s+content=")[^"]*(")/, `$1${safeDescription}$2`],
            [/(property="og:locale"\s+content=")[^"]*(")/, `$1${ogLocale[language]}$2`],
            [/(property="og:site_name"\s+content=")[^"]*(")/, `$1${escapeHtml(siteName[language])}$2`],
            [/(name="twitter:title"\s+content=")[^"]*(")/, `$1${safeTitle}$2`],
            [/(name="twitter:description"\s+content=")[^"]*(")/, `$1${safeDescription}$2`],
            [/<!-- hreflang:start -->[\s\S]*?<!-- hreflang:end -->/, hreflangBlock(page.path)],
          ]

          let html = template
          for (const [pattern, replacement] of replacements) {
            if (!pattern.test(html)) {
              this.warn(`multilingual-pages: no match for ${pattern} (${language} ${page.path})`)
            }
            html = html.replace(pattern, replacement)
          }

          const pageDir = path.join(outDir, localizePath(language, page.path))
          fs.mkdirSync(pageDir, { recursive: true })
          fs.writeFileSync(path.join(pageDir, 'index.html'), html)
        }
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), multilingualPages()],
})
