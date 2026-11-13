// Texts of the accessibility statement and the privacy policy (he / ru / en).
// Update LAST_UPDATED and the contact details here when they change.

export const LEGAL_CONTACT = {
  phone: '050-762-97-39',
  phoneHref: 'tel:+972507629739',
  email: 'Exodusmoving2026@gmail.com',
};

const LAST_UPDATED = {
  he: 'נובמבר 2026',
  ru: 'ноябрь 2026',
  en: 'November 2026',
};

export const LEGAL_HASHES = {
  accessibility: '#accessibility-statement',
  privacy: '#privacy-policy',
};

export const legalUi = {
  he: {
    close: 'סגירה',
    lastUpdated: 'עודכן לאחרונה',
    phone: 'טלפון',
    email: 'דוא"ל',
    accessibilityLink: 'הצהרת נגישות',
    privacyLink: 'מדיניות פרטיות',
  },
  ru: {
    close: 'Закрыть',
    lastUpdated: 'Последнее обновление',
    phone: 'Телефон',
    email: 'E-mail',
    accessibilityLink: 'Заявление о доступности',
    privacyLink: 'Политика конфиденциальности',
  },
  en: {
    close: 'Close',
    lastUpdated: 'Last updated',
    phone: 'Phone',
    email: 'Email',
    accessibilityLink: 'Accessibility statement',
    privacyLink: 'Privacy policy',
  },
};

// Each document: { title, sections: [{ heading, paragraphs?, items? }] }
export const legalDocuments = {
  accessibility: {
    he: {
      title: 'הצהרת נגישות',
      lastUpdated: LAST_UPDATED.he,
      sections: [
        {
          heading: 'מחויבות לנגישות',
          paragraphs: [
            'הובלות אקסודוס (Exodus Moving) רואה חשיבות רבה במתן שירות שוויוני, מכבד ונגיש לכלל הלקוחות, לרבות אנשים עם מוגבלות. אנו פועלים להנגשת האתר בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998, ולתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע"ג-2013.',
          ],
        },
        {
          heading: 'רמת הנגישות באתר',
          paragraphs: [
            'האתר הותאם בהתאם להנחיות התקן הישראלי ת"י 5568, המבוסס על הנחיות WCAG 2.0 של ארגון W3C, ברמה AA. האתר נבדק בכלי בדיקה אוטומטיים ובבדיקה ידנית, ומותאם לצפייה בדפדפנים המובילים ובמחשב, בטאבלט ובטלפון נייד.',
          ],
        },
        {
          heading: 'התאמות הנגישות שבוצעו',
          items: [
            'ניגודיות צבעים בין טקסט לרקע בהתאם לדרישות רמה AA.',
            'אפשרות ניווט מלאה באמצעות המקלדת, כולל סימון מודגש של הרכיב שבפוקוס.',
            'קישור "דילוג לתוכן הראשי" בתחילת העמוד.',
            'כפתור עצירה והפעלה לתכנים מתחלפים (סליידר ותצוגת ביקורות).',
            'כיבוי תנועה ואנימציות אוטומטיות למשתמשים שהגדירו העדפה להפחתת תנועה.',
            'טקסט חלופי לתמונות בעלות משמעות ותיוג תמונות דקורטיביות.',
            'מבנה כותרות היררכי, תיוג אזורים בעמוד ותוויות לשדות הטופס.',
            'הודעות שגיאה ברורות בטופס, המוקראות גם על ידי קוראי מסך.',
            'תמיכה בשפות עברית, רוסית ואנגלית, עם הגדרת כיוון ושפה נכונים.',
          ],
        },
        {
          heading: 'מגבלות ידועות',
          paragraphs: [
            'תוכן הביקורות מוצג מתוך Google כפי שנכתב על ידי הלקוחות, ואין לנו שליטה מלאה על אופן ניסוחו. ייתכן שחלקים מסוימים באתר טרם הונגשו במלואם. אנו ממשיכים לבדוק ולשפר את נגישות האתר באופן שוטף.',
          ],
        },
        {
          heading: 'פנייה בנושא נגישות',
          paragraphs: [
            'נתקלתם בבעיית נגישות באתר או בשירות? נשמח לשמוע ולסייע. אנא פרטו את הבעיה, את העמוד שבו נתקלתם בה ואת סוג הדפדפן והמכשיר. נשתדל לטפל בפנייה בהקדם.',
            'רכז הנגישות: צוות הובלות אקסודוס.',
          ],
          contact: true,
        },
      ],
    },
    ru: {
      title: 'Заявление о доступности',
      lastUpdated: LAST_UPDATED.ru,
      sections: [
        {
          heading: 'Наши обязательства',
          paragraphs: [
            'Exodus Moving стремится обеспечить равный, уважительный и доступный сервис для всех клиентов, в том числе для людей с ограниченными возможностями. Мы адаптируем сайт в соответствии с израильским Законом о равных правах людей с ограниченными возможностями (1998) и Положениями о доступности услуг (2013).',
          ],
        },
        {
          heading: 'Уровень доступности',
          paragraphs: [
            'Сайт адаптирован согласно израильскому стандарту ת"י 5568, основанному на рекомендациях WCAG 2.0 консорциума W3C, на уровне AA. Сайт проверен автоматическими инструментами и вручную и корректно работает в основных браузерах на компьютере, планшете и телефоне.',
          ],
        },
        {
          heading: 'Что сделано',
          items: [
            'Контраст текста и фона соответствует уровню AA.',
            'Полная навигация с клавиатуры с заметной подсветкой активного элемента.',
            'Ссылка «Перейти к основному содержанию» в начале страницы.',
            'Кнопка паузы для автоматически сменяющихся блоков (слайдер и отзывы).',
            'Отключение автоматической анимации для пользователей, выбравших уменьшение движения.',
            'Альтернативный текст для значимых изображений.',
            'Иерархия заголовков, разметка областей страницы и подписи полей формы.',
            'Понятные сообщения об ошибках в форме, доступные экранным дикторам.',
            'Поддержка иврита, русского и английского с правильным направлением текста.',
          ],
        },
        {
          heading: 'Известные ограничения',
          paragraphs: [
            'Отзывы загружаются из Google в том виде, в каком их написали клиенты. Отдельные части сайта могут быть ещё не полностью адаптированы. Мы продолжаем проверять и улучшать доступность.',
          ],
        },
        {
          heading: 'Обращения по вопросам доступности',
          paragraphs: [
            'Столкнулись с проблемой доступности? Сообщите нам, на какой странице, в каком браузере и на каком устройстве она возникла, и мы постараемся решить её как можно скорее.',
            'Ответственный за доступность: команда Exodus Moving.',
          ],
          contact: true,
        },
      ],
    },
    en: {
      title: 'Accessibility Statement',
      lastUpdated: LAST_UPDATED.en,
      sections: [
        {
          heading: 'Our commitment',
          paragraphs: [
            'Exodus Moving is committed to providing equal, respectful and accessible service to all customers, including people with disabilities. We make this website accessible in accordance with the Israeli Equal Rights for Persons with Disabilities Law (1998) and the Service Accessibility Regulations (2013).',
          ],
        },
        {
          heading: 'Accessibility level',
          paragraphs: [
            'The website has been adapted according to Israeli Standard IS 5568, based on the W3C WCAG 2.0 guidelines, at level AA. It has been checked with automated tools and manually, and works in the leading browsers on desktop, tablet and mobile.',
          ],
        },
        {
          heading: 'Accessibility adjustments',
          items: [
            'Text and background colour contrast that meets level AA.',
            'Full keyboard navigation with a clearly visible focus indicator.',
            'A "Skip to main content" link at the top of the page.',
            'A pause button for automatically changing content (slider and reviews).',
            'Automatic motion is turned off for users who prefer reduced motion.',
            'Alternative text for meaningful images.',
            'Heading structure, page landmarks and labelled form fields.',
            'Clear form error messages that are announced by screen readers.',
            'Hebrew, Russian and English with the correct language and text direction.',
          ],
        },
        {
          heading: 'Known limitations',
          paragraphs: [
            'Reviews are shown from Google as written by customers. Some parts of the website may not yet be fully accessible. We keep testing and improving accessibility.',
          ],
        },
        {
          heading: 'Accessibility contact',
          paragraphs: [
            'Found an accessibility problem? Please tell us which page, browser and device you used, and we will do our best to fix it quickly.',
            'Accessibility coordinator: the Exodus Moving team.',
          ],
          contact: true,
        },
      ],
    },
  },

  privacy: {
    he: {
      title: 'מדיניות פרטיות',
      lastUpdated: LAST_UPDATED.he,
      sections: [
        {
          heading: 'כללי',
          paragraphs: [
            'הובלות אקסודוס (Exodus Moving) מכבדת את פרטיות המשתמשים באתר. מדיניות זו מסבירה אילו מידע נאסף, כיצד הוא משמש ומהן זכויותיכם, בהתאם לחוק הגנת הפרטיות, התשמ"א-1981 והתקנות מכוחו. השימוש באתר מהווה הסכמה למדיניות זו.',
          ],
        },
        {
          heading: 'איזה מידע נאסף',
          items: [
            'פרטים שאתם מוסרים בטופס יצירת הקשר: שם, מספר טלפון ותאריך ההובלה המבוקש.',
            'פרטים שאתם מוסרים בפנייה אלינו בטלפון, ב-WhatsApp או בדוא"ל.',
            'מידע טכני על השימוש באתר, הנאסף באמצעות Google Analytics ו-Google Tag Manager: סוג הדפדפן והמכשיר, עמודים שנצפו, זמן שהייה ומיקום כללי לפי כתובת IP.',
          ],
        },
        {
          heading: 'כיצד נשלחים פרטי הטופס',
          paragraphs: [
            'האתר אינו שומר את פרטי הטופס. בלחיצה על כפתור השליחה נפתחת אפליקציית WhatsApp עם הודעה מוכנה, והפרטים נשלחים אלינו רק לאחר שתאשרו את שליחת ההודעה. על השימוש ב-WhatsApp חלה גם מדיניות הפרטיות של חברת Meta.',
          ],
        },
        {
          heading: 'מטרות השימוש במידע',
          items: [
            'מתן הצעת מחיר, תיאום ההובלה וביצוע השירות.',
            'יצירת קשר עמכם בנוגע לפנייה שלכם.',
            'שיפור האתר והשירות על בסיס נתוני שימוש סטטיסטיים.',
            'עמידה בדרישות הדין.',
          ],
        },
        {
          heading: 'עוגיות (Cookies)',
          paragraphs: [
            'האתר משתמש בעוגיות של Google Analytics לצורך מדידת שימוש סטטיסטית, וכן בזיכרון הדפדפן לשמירת השפה שבחרתם. ניתן לחסום או למחוק עוגיות בהגדרות הדפדפן; חלק מהאתר עשוי לפעול באופן שונה במקרה כזה.',
          ],
        },
        {
          heading: 'מסירת מידע לצדדים שלישיים',
          paragraphs: [
            'איננו מוכרים את המידע שלכם. המידע עשוי לעבור לספקי שירות המסייעים לנו בהפעלת האתר והעסק: Google (מדידה וביקורות), Meta (WhatsApp) וספק האחסון, וזאת רק במידה הנדרשת. ייתכן שחלק מספקים אלה שומרים מידע מחוץ לישראל. מידע יימסר לרשויות רק אם הדבר נדרש על פי דין.',
          ],
        },
        {
          heading: 'אבטחת מידע ושמירתו',
          paragraphs: [
            'האתר פועל בחיבור מאובטח (HTTPS). אנו שומרים פרטי פניות רק למשך הזמן הנדרש למתן השירות ולעמידה בדרישות הדין, ונוקטים אמצעים סבירים להגנה עליהם.',
          ],
        },
        {
          heading: 'הזכויות שלכם',
          paragraphs: [
            'בהתאם לחוק הגנת הפרטיות, אתם רשאים לעיין במידע שנשמר עליכם, לבקש לתקנו או למחוק אותו, ולבקש שלא לקבל מאיתנו פניות שיווקיות. לבקשות אלה ולכל שאלה בנושא פרטיות ניתן לפנות אלינו בפרטים שלהלן.',
          ],
          contact: true,
        },
        {
          heading: 'שינויים במדיניות',
          paragraphs: [
            'אנו עשויים לעדכן מדיניות זו מעת לעת. הנוסח המעודכן יפורסם תמיד בעמוד זה.',
          ],
        },
      ],
    },
    ru: {
      title: 'Политика конфиденциальности',
      lastUpdated: LAST_UPDATED.ru,
      sections: [
        {
          heading: 'Общие положения',
          paragraphs: [
            'Exodus Moving уважает конфиденциальность посетителей сайта. Эта политика объясняет, какие данные мы собираем, как их используем и какие у вас есть права в соответствии с израильским Законом о защите частной жизни (1981). Используя сайт, вы соглашаетесь с этой политикой.',
          ],
        },
        {
          heading: 'Какие данные мы собираем',
          items: [
            'Данные из формы заявки: имя, телефон и желаемая дата перевозки.',
            'Данные, которые вы сообщаете при обращении по телефону, в WhatsApp или по e-mail.',
            'Технические данные об использовании сайта через Google Analytics и Google Tag Manager: тип браузера и устройства, просмотренные страницы, время на сайте и приблизительное местоположение по IP-адресу.',
          ],
        },
        {
          heading: 'Как отправляется форма',
          paragraphs: [
            'Сайт не хранит данные формы. При нажатии кнопки открывается WhatsApp с готовым сообщением, и данные попадают к нам только после того, как вы сами его отправите. На использование WhatsApp также распространяется политика конфиденциальности компании Meta.',
          ],
        },
        {
          heading: 'Зачем мы используем данные',
          items: [
            'Расчёт стоимости, согласование и выполнение перевозки.',
            'Связь с вами по вашей заявке.',
            'Улучшение сайта и сервиса на основе обезличенной статистики.',
            'Выполнение требований закона.',
          ],
        },
        {
          heading: 'Файлы cookie',
          paragraphs: [
            'Сайт использует cookie Google Analytics для статистики посещений, а также память браузера, чтобы запомнить выбранный язык. Вы можете заблокировать или удалить cookie в настройках браузера; при этом часть сайта может работать иначе.',
          ],
        },
        {
          heading: 'Передача данных третьим лицам',
          paragraphs: [
            'Мы не продаём ваши данные. Они могут передаваться поставщикам услуг, которые помогают нам работать: Google (статистика и отзывы), Meta (WhatsApp) и хостинг-провайдеру, и только в необходимом объёме. Некоторые из них могут хранить данные за пределами Израиля. Государственным органам данные передаются только по требованию закона.',
          ],
        },
        {
          heading: 'Защита и хранение данных',
          paragraphs: [
            'Сайт работает по защищённому соединению (HTTPS). Мы храним данные заявок только столько, сколько нужно для оказания услуги и выполнения требований закона, и принимаем разумные меры для их защиты.',
          ],
        },
        {
          heading: 'Ваши права',
          paragraphs: [
            'По Закону о защите частной жизни вы можете ознакомиться с данными о себе, попросить исправить или удалить их, а также отказаться от рекламных сообщений. По этим и любым другим вопросам о конфиденциальности свяжитесь с нами:',
          ],
          contact: true,
        },
        {
          heading: 'Изменения политики',
          paragraphs: [
            'Мы можем время от времени обновлять эту политику. Актуальная версия всегда опубликована здесь.',
          ],
        },
      ],
    },
    en: {
      title: 'Privacy Policy',
      lastUpdated: LAST_UPDATED.en,
      sections: [
        {
          heading: 'General',
          paragraphs: [
            'Exodus Moving respects the privacy of visitors to this website. This policy explains what information we collect, how we use it and what your rights are under the Israeli Protection of Privacy Law (1981). By using the website you agree to this policy.',
          ],
        },
        {
          heading: 'Information we collect',
          items: [
            'Details you enter in the contact form: name, phone number and requested moving date.',
            'Details you give us when contacting us by phone, WhatsApp or email.',
            'Technical usage data collected by Google Analytics and Google Tag Manager: browser and device type, pages viewed, time on site and approximate location based on IP address.',
          ],
        },
        {
          heading: 'How the form is sent',
          paragraphs: [
            'The website does not store form details. Pressing the send button opens WhatsApp with a prepared message, and the details reach us only after you send that message yourself. Your use of WhatsApp is also subject to the privacy policy of Meta.',
          ],
        },
        {
          heading: 'How we use information',
          items: [
            'Preparing a quote, scheduling the move and providing the service.',
            'Contacting you about your request.',
            'Improving the website and service based on statistical usage data.',
            'Complying with legal requirements.',
          ],
        },
        {
          heading: 'Cookies',
          paragraphs: [
            'The website uses Google Analytics cookies for statistical measurement, and browser storage to remember your chosen language. You can block or delete cookies in your browser settings; some parts of the website may then work differently.',
          ],
        },
        {
          heading: 'Sharing with third parties',
          paragraphs: [
            'We do not sell your information. It may be shared, only as needed, with service providers that help us run the website and business: Google (analytics and reviews), Meta (WhatsApp) and our hosting provider. Some of them may store data outside Israel. Information is disclosed to authorities only when required by law.',
          ],
        },
        {
          heading: 'Security and retention',
          paragraphs: [
            'The website uses a secure HTTPS connection. We keep request details only as long as needed to provide the service and meet legal requirements, and take reasonable measures to protect them.',
          ],
        },
        {
          heading: 'Your rights',
          paragraphs: [
            'Under the Protection of Privacy Law you may review the information held about you, ask to correct or delete it, and opt out of marketing messages. For these requests and any privacy question, contact us:',
          ],
          contact: true,
        },
        {
          heading: 'Changes to this policy',
          paragraphs: [
            'We may update this policy from time to time. The current version is always published here.',
          ],
        },
      ],
    },
  },
};
