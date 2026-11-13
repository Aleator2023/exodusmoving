// Data for the separate service pages (/services/<slug>/).
// Plain data only (no image imports): it is also read by vite.config.js
// at build time to create a static HTML file with its own title,
// description and canonical URL for every page.

export const SITE_URL = 'https://exodusmoving.co.il';

export const servicePages = [
  {
    slug: 'apartment-moving',
    serviceId: 1,
    he: {
      title: 'הובלת דירות',
      metaTitle: 'הובלת דירות | הובלות אקסודוס',
      metaDescription:
        'הובלת דירות מקצועית ובטוחה באזור המרכז ובכל הארץ: אריזה, פירוק והרכבת רהיטים והובלה עם צוות מנוסה. קבלו הצעת מחיר ב-WhatsApp.',
      description:
        'מעבר דירה הוא אחד הרגעים המרגשים, ואנחנו דואגים שהוא יהיה גם רגוע. הצוות שלנו אורז, מפרק, מעמיס ומוביל את כל תכולת הבית בזהירות, ומרכיב הכול מחדש בבית החדש. אנחנו מבצעים הובלות של דירות סטודיו ועד דירות של 5 חדרים ויותר.',
    },
    ru: {
      title: 'Квартирные переезды',
      metaTitle: 'Квартирные переезды | Exodus Moving',
      metaDescription:
        'Квартирные переезды в центре Израиля и по всей стране: упаковка, разборка и сборка мебели, аккуратная перевозка. Узнайте цену в WhatsApp.',
      description:
        'Переезд должен быть спокойным. Наша команда упакует, разберёт, погрузит и аккуратно перевезёт всё содержимое квартиры, а на новом месте всё соберёт. Перевозим квартиры от студии до пяти комнат и больше.',
    },
    en: {
      title: 'Apartment Moving',
      metaTitle: 'Apartment Moving | Exodus Moving',
      metaDescription:
        'Apartment moving in central Israel and nationwide: packing, furniture dismantling and assembly, careful transport. Get a quote on WhatsApp.',
      description:
        'Moving home should feel calm. Our team packs, dismantles, loads and carefully transports everything in your apartment, then reassembles it in your new home. We move everything from studios to five-room apartments and more.',
    },
  },
  {
    slug: 'office-moving',
    serviceId: 2,
    he: {
      title: 'הובלת משרדים ועסקים',
      metaTitle: 'הובלת משרדים ועסקים | הובלות אקסודוס',
      metaDescription:
        'הובלת משרדים ועסקים בתכנון מדויק ובמינימום השבתה: ריהוט, מחשבים, ארכיון וציוד. הובלות אקסודוס, קבלו הצעת מחיר.',
      description:
        'אנחנו מעבירים משרדים, חנויות ועסקים בתכנון מדויק כדי שתחזרו לעבוד מהר ככל האפשר. אנו מטפלים בריהוט משרדי, מחשבים וציוד רגיש, ארכיון ומסמכים, כולל פירוק והרכבה ועבודה גם מחוץ לשעות הפעילות.',
    },
    ru: {
      title: 'Перевозка офисов и бизнеса',
      metaTitle: 'Перевозка офисов и бизнеса | Exodus Moving',
      metaDescription:
        'Перевозка офисов, магазинов и бизнеса с точным планированием: мебель, компьютеры, архив и оборудование. Узнайте цену в WhatsApp.',
      description:
        'Перевозим офисы, магазины и бизнес с точным планированием, чтобы вы как можно быстрее вернулись к работе. Мебель, компьютеры и чувствительное оборудование, архив и документы. Разбираем, собираем и работой во внерабочее время.',
    },
    en: {
      title: 'Office & Business Moving',
      metaTitle: 'Office & Business Moving | Exodus Moving',
      metaDescription:
        'Office, shop and business moving with careful planning: furniture, computers, archives and equipment. Get a quote on WhatsApp.',
      description:
        'We move offices, shops and businesses with careful planning so you can get back to work quickly. Office furniture, computers and sensitive equipment, archives and documents, including dismantling, reassembly and work outside business hours.',
    },
  },
  {
    slug: 'furniture-assembly',
    serviceId: 3,
    he: {
      title: 'פירוק והרכבת רהיטים',
      metaTitle: 'פירוק והרכבת רהיטים | הובלות אקסודוס',
      metaDescription:
        'פירוק והרכבת רהיטים מקצועית: ארונות, מיטות, שולחנות ורהיטי IKEA, עם כלי עבודה מתאימים ושמירה על הרהיטים. החל מ-150 ₪.',
      description:
        'הרכבה ופירוק נכונים שומרים על הרהיטים שלכם לאורך שנים. הצוות שלנו מפרק ומרכיב ארונות, מיטות, שולחנות, מזנונים ורהיטי IKEA, עם כלי העבודה המתאימים ובזהירות מרבית, כחלק מהובלה או כשירות נפרד.',
    },
    ru: {
      title: 'Разборка и сборка мебели',
      metaTitle: 'Разборка и сборка мебели | Exodus Moving',
      metaDescription:
        'Разборка и сборка шкафов, кроватей, столов и мебели IKEA с правильными инструментами. От 150 ₪. Exodus Moving.',
      description:
        'Правильная сборка и разборка сохраняют мебель на долгие годы. Мы разбираем и собираем шкафы, кровати, столы, комоды и мебель IKEA с нужными инструментами и максимальной аккуратностью: при переезде или как отдельную услугу.',
    },
    en: {
      title: 'Furniture Dismantling & Assembly',
      metaTitle: 'Furniture Dismantling & Assembly | Exodus Moving',
      metaDescription:
        'Dismantling and assembly of wardrobes, beds, tables and IKEA furniture with the right tools. From 150 ₪. Exodus Moving.',
      description:
        'Proper dismantling and assembly keep your furniture in good shape for years. We take apart and put together wardrobes, beds, tables, sideboards and IKEA furniture with the right tools and great care, as part of a move or as a separate service.',
    },
  },
  {
    slug: 'nationwide-moving',
    serviceId: 4,
    he: {
      title: 'הובלות בכל הארץ',
      metaTitle: 'הובלות בכל הארץ | הובלות אקסודוס',
      metaDescription:
        'הובלות מהמרכז לכל רחבי ישראל, מהצפון ועד הדרום, במשאיות מאובזרות ובתיאום מדויק. הובלות אקסודוס, קבלו הצעת מחיר.',
      description:
        'עוברים לעיר אחרת? אנחנו מבצעים הובלות מהמרכז לכל חלקי הארץ, מהצפון ועד הדרום. משאיות מאובזרות, אריזה ומיגון נכונים לנסיעה ארוכה ותיאום מדויק של מועדי האיסוף והפריקה.',
    },
    ru: {
      title: 'Перевозки по всей стране',
      metaTitle: 'Перевозки по всей стране | Exodus Moving',
      metaDescription:
        'Перевозки из центра в любую точку Израиля, от севера до юга: оснащённые грузовики и точное согласование времени. Узнайте цену.',
      description:
        'Переезжаете в другой город? Мы перевозим из центра в любую точку Израиля, от севера до юга. Оснащённые грузовики, правильная упаковка и защита для дальней дороги и точное согласование времени погрузки и разгрузки.',
    },
    en: {
      title: 'Nationwide Moving',
      metaTitle: 'Nationwide Moving | Exodus Moving',
      metaDescription:
        'Moving from central Israel to anywhere in the country, north to south: equipped trucks and precise scheduling. Get a quote.',
      description:
        'Moving to another city? We move you from central Israel to anywhere in the country, from north to south. Equipped trucks, proper packing and protection for long distances, and precise scheduling of pickup and delivery.',
    },
  },
  {
    slug: 'content-insurance',
    serviceId: 5,
    he: {
      title: 'ביטוח תכולה מלא',
      metaTitle: 'ביטוח תכולה בהובלה | הובלות אקסודוס',
      metaDescription:
        'הובלה עם ביטוח תכולה מלא: שקט נפשי לכל אורך הדרך. פרטים על הכיסוי ניתנים בעת הצעת המחיר. הובלות אקסודוס.',
      description:
        'החפצים שלכם יקרים לכם, ולכן כל הובלה שלנו מבוצעת עם ביטוח תכולה מלא. כך אתם מקבלים שקט נפשי מרגע האריזה ועד הפריקה בבית החדש. פרטי הכיסוי ותנאיו יוצגו לכם בעת קבלת הצעת המחיר.',
    },
    ru: {
      title: 'Полное страхование имущества',
      metaTitle: 'Страхование имущества при перевозке | Exodus Moving',
      metaDescription:
        'Перевозка с полным страхованием имущества: спокойствие от упаковки до разгрузки. Условия сообщаем вместе с расчётом стоимости.',
      description:
        'Ваши вещи важны для вас, поэтому каждая наша перевозка выполняется с полным страхованием имущества. Вы спокойны с момента упаковки и до разгрузки на новом месте. Условия и объём страховки мы сообщаем вместе с расчётом стоимости.',
    },
    en: {
      title: 'Full Contents Insurance',
      metaTitle: 'Moving Contents Insurance | Exodus Moving',
      metaDescription:
        'Moving with full contents insurance: peace of mind from packing to unloading. Coverage terms come with your quote.',
      description:
        'Your belongings matter, so every move we do comes with full contents insurance, giving you peace of mind from packing to unloading in your new home. Coverage details and terms are provided together with your quote.',
    },
  },
  {
    slug: 'crane-services',
    serviceId: 6,
    he: {
      title: 'שירותי מנוף',
      metaTitle: 'הובלות עם מנוף | הובלות אקסודוס',
      metaDescription:
        'הובלה עם מנוף להעלאה והורדה בטוחה של רהיטים גדולים לקומות גבוהות, דרך מרפסת או חלון. הובלות אקסודוס, קבלו הצעת מחיר.',
      description:
        'רהיט לא עובר במדרגות או במעלית? מנוף ההרמה שלנו מעלה ומוריד ספות, ארונות, מקררים ופריטים גדולים בבטחה דרך המרפסת או החלון, גם לקומות גבוהות. הפריטים מאובטחים ברצועות ובמיגון לאורך כל ההרמה.',
    },
    ru: {
      title: 'Услуги подъёмного крана',
      metaTitle: 'Перевозка с подъёмным краном | Exodus Moving',
      metaDescription:
        'Подъём и спуск крупной мебели краном через балкон или окно, в том числе на высокие этажи. Exodus Moving, узнайте цену.',
      description:
        'Мебель не проходит по лестнице или в лифт? Наш подъёмный кран безопасно поднимет и опустит диваны, шкафы, холодильники и крупные вещи через балкон или окно, даже на высокие этажи. Всё закрепляется ремнями и защитой на протяжении подъёма.',
    },
    en: {
      title: 'Crane Services',
      metaTitle: 'Moving with a Crane | Exodus Moving',
      metaDescription:
        'Lifting large furniture by crane through a balcony or window, including high floors. Exodus Moving, get a quote.',
      description:
        'Furniture won’t fit the stairs or elevator? Our lifting crane safely raises and lowers sofas, wardrobes, fridges and other large items through the balcony or window, even to high floors. Items are strapped and protected throughout the lift.',
    },
  },
  {
    slug: 'piano-moving',
    serviceId: 7,
    he: {
      title: 'הובלת פסנתרים',
      metaTitle: 'הובלת פסנתרים | הובלות אקסודוס',
      metaDescription:
        'הובלת פסנתרים ופסנתרי כנף בזהירות מרבית, עם ציוד ייעודי ומיגון מלא. החל מ-600 ₪. הובלות אקסודוס, קבלו הצעת מחיר.',
      description:
        'פסנתר הוא כלי כבד ורגיש שדורש ניסיון וציוד מתאים. אנחנו מובילים פסנתרים עומדים ופסנתרי כנף עם עגלות, רצועות ומיגון ייעודיים, ובמידת הצורך גם בעזרת מנוף.',
    },
    ru: {
      title: 'Перевозка пианино',
      metaTitle: 'Перевозка пианино и роялей | Exodus Moving',
      metaDescription:
        'Перевозка пианино и роялей со специальным оборудованием и полной защитой. От 600 ₪. Exodus Moving, узнайте цену.',
      description:
        'Пианино: тяжёлый и чувствительный инструмент, которому нужны опыт и правильное оборудование. Мы перевозим пианино и рояли со специальными тележками, ремнями и защитой, а при необходимости и с помощью крана.',
    },
    en: {
      title: 'Piano Moving',
      metaTitle: 'Piano Moving | Exodus Moving',
      metaDescription:
        'Upright and grand piano moving with dedicated equipment and full protection. From 600 ₪. Exodus Moving, get a quote.',
      description:
        'A piano is heavy and delicate, and needs experience and the right equipment. We move upright and grand pianos using dedicated dollies, straps and protection, and with a crane when needed.',
    },
  },
  {
    slug: 'truck-rental-with-driver',
    serviceId: 8,
    he: {
      title: 'השכרת משאית עם נהג',
      metaTitle: 'השכרת משאית עם נהג | הובלות אקסודוס',
      metaDescription:
        'השכרת משאית הובלה עם נהג מקצועי לפי שעה, להובלות קטנות, משלוחים ופריטים בודדים. החל מ-300 ₪ לשעה.',
      description:
        'צריכים משאית רק לכמה שעות? אנחנו מעמידים לרשותכם משאית הובלה עם נהג מקצועי, לפריטים בודדים, הובלות קטנות או משלוחים לעסק. התשלום לפי שעה, ואפשר להוסיף סבלים לפי הצורך.',
    },
    ru: {
      title: 'Аренда грузовика с водителем',
      metaTitle: 'Аренда грузовика с водителем | Exodus Moving',
      metaDescription:
        'Аренда грузовика с профессиональным водителем на несколько часов: отдельные вещи, небольшие перевозки, доставки. От 300 ₪ в час.',
      description:
        'Нужен грузовик всего на несколько часов? Предоставим грузовик с профессиональным водителем для отдельных вещей, небольших перевозок или доставок для бизнеса. Оплата почасовая, грузчиков можно добавить по необходимости.',
    },
    en: {
      title: 'Truck Rental with Driver',
      metaTitle: 'Truck Rental with Driver | Exodus Moving',
      metaDescription:
        'Moving truck with a professional driver by the hour: single items, small moves and deliveries. From 300 ₪ per hour.',
      description:
        'Need a truck for just a few hours? We provide a moving truck with a professional driver for single items, small moves or business deliveries. Paid by the hour, with movers added as needed.',
    },
  },
];

export const servicePath = (slug) => `/services/${slug}/`;

export const findServicePage = (slug) =>
  servicePages.find((page) => page.slug === slug);

export const findServicePageById = (serviceId) =>
  servicePages.find((page) => page.serviceId === serviceId);
