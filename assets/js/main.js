const PHONE_DISPLAY = '+7 (913) 163-10-78';
const PHONE_LINK = 'tel:+79131631078';
const mainSiteRoot = new URL('../../', document.currentScript.src);
const mainUrl = (path = '') => new URL(path, mainSiteRoot).href;

if (window.location.pathname.endsWith('/index.html')) {
  const cleanPath = window.location.pathname.slice(0, -'index.html'.length);
  window.history.replaceState(null, '', `${cleanPath}${window.location.search}${window.location.hash}`);
}

const searchIndex = [
  {
    title: 'Стоматологическая клиника «Эскулап»',
    url: mainUrl(),
    description: 'Главная страница клиники, запись и основная информация.',
    keywords: 'главная стоматология стоматологическая клиника эскулап эскулапп aesculapius зубы лечение помощь пациент записаться запись прием приём позвонить звонок телефон номер Норильск Талнах район Талнах Рудная 47 помещение 53 первый этаж адрес режим график часы работы понедельник вторник среда четверг пятница суббота воскресенье выходной 09 00 20 00 15 00'
  },
  {
    title: 'Услуги и цены',
    url: mainUrl('services/'),
    description: 'Полный прайс-лист стоматологических услуг.',
    keywords: 'услуга услуги цена цены стоимость сколько стоит прайс прайс-лист тариф рубль лечение стоматология терапия профилактика гигиена пародонтология эндодонтия хирургия ортопедия протезирование консультация'
  },
  {
    title: 'Приём и обезболивание',
    url: mainUrl('services/#consultation'),
    description: 'Консультации стоматолога и виды анестезии.',
    keywords: 'прием приём осмотр консультация первичный повторный терапевт стоматолог обезболивание обезболить анестезия укол заморозка проводниковая аппликационная инфильтрационная B01.065.001 B01.065.002 B01.003.004.002 B01.003.004.004 B01.003.004.005 700 500 1000 300'
  },
  {
    title: 'Профилактика, гигиена и пародонтология',
    url: mainUrl('services/#prevention'),
    description: 'Чистка зубов, удаление отложений и профилактические процедуры.',
    keywords: 'профилактика гигиена профессиональная чистка зубов камень зубной камень налет налёт отложения ультразвук десна десны пародонт пародонтология пародонтальный карман фтор фторирование глубокое реминерализация реминерализующий препарат фиссура герметик запечатывание лекарство слизистая полость рта A16.07.051 A16.07.020 A22.07.001 A11.07.010 A11.07.022 A25.07.001 A11.07.024 A11.07.012 A16.07.057 4000 5500 700 500 1000 400'
  },
  {
    title: 'Диагностика и лечение зубов',
    url: mainUrl('services/#therapy'),
    description: 'Диагностика, пломбы, реставрация зубов и лечение кариеса.',
    keywords: 'диагностика лечение зуб кариес пломба пломбирование реставрация восстановление световая световая пломба фотополимер цемент стеклоиономер стеклоиономерный винир класс Блэк полирование пришлифовывание электроодонтометрия эод электрофорез ионофорез диатермокоагуляция девитализирующая паста временная пломба снять пломбу A05.07.001 A17.07.001 A17.07.003 A17.07.004 A16.07.025 A16.07.025.001 A16.07.002.001 A16.07.002.005 A16.07.002.010 A16.07.002.011 A16.07.002.012 A16.07.003 A11.07.027 A16.07.002.009 A16.07.091 3500 6500 7000 8000 9000'
  },
  {
    title: 'Лечение корневых каналов',
    url: mainUrl('services/#endodontics'),
    description: 'Эндодонтическое лечение, обработка и пломбирование каналов.',
    keywords: 'эндодонтия эндодонтический канал каналы корневой канал нерв пульпа пульпит периодонтит трепанация пульпотомия ампутация экстирпация обработка проходимый непроходимый пломбирование распломбировка депофорез ультразвук перфорация штифт вкладка лекарство A16.07.092 A16.07.009 A16.07.010 A16.07.030.001 A16.07.030.002 A16.07.030.003 A16.07.008 A17.07.006 A22.07.004 A16.07.008.003 A16.07.082.001 A16.07.082.002 A16.07.093 A16.07.094 1000 1500 2000 2500 3000 4000'
  },
  {
    title: 'Хирургическая стоматология',
    url: mainUrl('services/#surgery'),
    description: 'Удаление зубов и хирургические процедуры.',
    keywords: 'хирургия хирург стоматолог удалить удаление вырвать зуб молочный временный постоянный сложное корни зуб мудрости восьмерка восьмёрка ретинированный дистопированный сверхкомплектный перикоронит капюшон шов лигатура кровь кровотечение тампонада гемостатический абсцесс гной дренирование кюретаж лунка A16.07.001.001 A16.07.001.002 A16.07.001.003 A16.07.024 A16.07.058 A16.07.097 A16.07.095.001 A16.07.095.002 A16.07.012 A16.07.013 A16.30.069 2500 5500 7000 8000 9000'
  },
  {
    title: 'Ортопедия и протезирование',
    url: mainUrl('services/#orthopedics'),
    description: 'Коронки, протезы и ортопедическое лечение.',
    keywords: 'ортопедия ортопед протез протезирование коронка коронки цирконий диоксид циркония металлокерамика металлокерамическая металл металлическая цельнолитая временная пластмассовая оттиск слепок силикон индивидуальная ложка съемный съёмный пластиночный бюгельный полный частичный конструкция цемент фиксация снять снятие культевая вкладка план лечения план протезирования B01.066.001 B01.066.002 A16.07.004 A02.07.010.001 A16.07.023 A23.07.002 A16.07.035 A16.07.036 A16.07.049 A16.07.053 A16.07.033 300 750 1000 3000 6000 6500 7000 12000 18000 25000 50000'
  },
  {
    title: 'Гречко Светлана Васильевна',
    url: mainUrl('doctors/#svetlana'),
    description: 'Врач-стоматолог: образование, квалификация и документы.',
    keywords: 'врач доктор стоматолог Гречко Светлана Васильевна Светлана Гречко С В терапевт ортопед детский стоматолог общая практика образование диплом интернатура Волгоградская медицинская академия аккредитация сертификат удостоверение квалификация повышение квалификации график прием приём документы'
  },
  {
    title: 'Гречко Сергей Алексеевич',
    url: mainUrl('doctors/#sergey'),
    description: 'Зубной врач: образование, квалификация и документы.',
    keywords: 'врач доктор зубной врач стоматолог Гречко Сергей Алексеевич Сергей Гречко С А руководитель главный врач образование диплом Ставропольский базовый медицинский колледж аккредитация сертификат удостоверение квалификация повышение квалификации стоматологическая помощь населению график прием приём документы'
  },
  {
    title: 'Информация пациентам',
    url: mainUrl('patients/'),
    description: 'Запись, подготовка к визиту, платные услуги и права пациента.',
    keywords: 'пациент пациентам посетитель запись записаться прием приём подготовка визит посещение опоздание отмена противопоказания здоровье документы договор платная услуга оплата стоимость информированное добровольное согласие диагноз лечение риск альтернатива врачебная тайна права обязанности граждан жалоба обращение ОМС ДМС страховка государственные гарантии бесплатно бесплатная помощь'
  },
  {
    title: 'Лицензия и реквизиты',
    url: mainUrl('documents/'),
    description: 'Лицензия клиники, сведения об организации и официальные документы.',
    keywords: 'документ документы официальная информация организация ООО ЭСКУЛАП юридическое лицо реквизиты лицензия медицинская деятельность реестр Росздравнадзор QR код выписка скачать pdf Л041-01019-24/00323079 Л041010192400323079 номер лицензии дата 11 июня 2021 ОГРН 1122457002304 ИНН 2457074044 руководитель Гречко Сергей Алексеевич сестринское дело эпидемиология'
  },
  {
    title: 'Контролирующие органы',
    url: mainUrl('documents/#controllers'),
    description: 'Контакты органов здравоохранения и надзора.',
    keywords: 'контролирующий надзор жалоба обращение министерство здравоохранения Красноярский край Минздрав Росздравнадзор Роспотребнадзор территориальный орган отдел Норильск официальный сайт телефон адрес электронная почта email'
  },
  {
    title: 'Контакты и режим работы',
    url: mainUrl('contacts/'),
    description: 'Телефон, адрес, часы работы и проезд до клиники.',
    keywords: 'контакты связаться позвонить звонок телефон номер +7 913 163 10 78 79131631078 email почта serg-grechko77 yandex ru адрес как найти где находится проезд маршрут карта 2гис 2gis дубльгис Норильск Талнах район микрорайон пятый 5 Рудная улица дом 47 этаж 1 помещение 53 индекс 663333 режим график часы работы пн вт ср чт пт сб вс понедельник пятница суббота воскресенье 09:00 20:00 15:00 выходной прием граждан руководитель'
  },
  {
    title: 'Отзывы о клинике',
    url: mainUrl('#reviews'),
    description: 'Отзывы пациентов о клинике в 2ГИС.',
    keywords: 'отзыв отзывы мнение оценка рейтинг комментарий впечатление пациент 2гис 2gis дубльгис написать оставить посмотреть опыт посещения'
  },
  {
    title: 'Политика обработки персональных данных',
    url: mainUrl('privacy/'),
    description: 'Порядок обработки и защиты персональных данных.',
    keywords: 'политика конфиденциальность персональные данные 152 ФЗ безопасность защита обработка хранение согласие оператор пользователь посетитель сайт cookie cookies куки обращение электронная почта email удалить изменить отозвать'
  },
  {
    title: 'Навигация по сайту',
    url: mainUrl('navigation/'),
    description: 'Список основных страниц и разделов сайта.',
    keywords: 'навигация карта сайта меню раздел разделы страница страницы найти перейти ссылка содержание'
  }
];

const normalizeSearchText = (value = '') => value
  .toLocaleLowerCase('ru-RU')
  .replace(/ё/g, 'е')
  .replace(/[^a-zа-я0-9]+/gi, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const getEditDistance = (first, second) => {
  if (Math.abs(first.length - second.length) > 1) return 2;
  const previous = Array.from({ length: second.length + 1 }, (_, index) => index);
  for (let firstIndex = 1; firstIndex <= first.length; firstIndex += 1) {
    const current = [firstIndex];
    for (let secondIndex = 1; secondIndex <= second.length; secondIndex += 1) {
      current[secondIndex] = Math.min(
        current[secondIndex - 1] + 1,
        previous[secondIndex] + 1,
        previous[secondIndex - 1] + (first[firstIndex - 1] === second[secondIndex - 1] ? 0 : 1)
      );
    }
    previous.splice(0, previous.length, ...current);
  }
  return previous[second.length];
};

const prepareSearchItem = (item) => {
  const title = normalizeSearchText(item.title);
  const description = normalizeSearchText(item.description);
  const serviceKeywords = item.url.includes('/services/')
    ? 'услуга услуги цена цены стоимость сколько стоит прайс прайс-лист рубль рублей лечение зуб зубы стоматология'
    : '';
  const keywords = normalizeSearchText(`${item.keywords} ${serviceKeywords}`);
  const searchable = `${title} ${description} ${keywords}`;
  return { ...item, titleSearch: title, searchable, words: [...new Set(searchable.split(' '))] };
};

const preparedSearchIndex = searchIndex.map(prepareSearchItem);

const searchTokenMatches = (token, item) => {
  if (item.searchable.includes(token)) return true;
  if (token.length < 5 || !/[a-zа-я]/i.test(token)) return false;
  return item.words.some((word) => word.length >= 5 && getEditDistance(token, word) <= 1);
};

const ignoredSearchTokens = new Set(['а', 'без', 'бы', 'в', 'во', 'для', 'до', 'и', 'из', 'или', 'к', 'как', 'ли', 'мне', 'на', 'надо', 'нужно', 'о', 'об', 'от', 'по', 'под', 'при', 'про', 'с', 'со', 'у', 'хочу']);

const normalizePagePath = (value) => value.replace(/index\.html$/, '').replace(/\/+$/, '') || '/';

document.querySelectorAll('[data-phone]').forEach((item) => {
  item.setAttribute('href', PHONE_LINK);
  if (!item.textContent.trim()) item.textContent = PHONE_DISPLAY;
});

const menuButton = document.querySelector('[data-menu-button]');
const menu = document.querySelector('[data-menu]');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menu.classList.toggle('is-open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
    document.body.classList.remove('menu-open');
  }));
}

document.querySelectorAll('[data-nav-link]').forEach((link) => {
  if (normalizePagePath(new URL(link.href).pathname) === normalizePagePath(window.location.pathname)) link.setAttribute('aria-current', 'page');
});

const accessibilityPanel = document.querySelector('[data-accessibility-panel]');
const accessibilityButton = document.querySelector('[data-accessibility-button]');
const savedFont = localStorage.getItem('eskulap-font') || 'normal';
const savedContrast = localStorage.getItem('eskulap-contrast') || 'normal';
document.documentElement.dataset.font = savedFont;
document.documentElement.dataset.contrast = savedContrast;

if (accessibilityButton && accessibilityPanel) {
  accessibilityButton.addEventListener('click', () => {
    const hidden = accessibilityPanel.hidden;
    accessibilityPanel.hidden = !hidden;
    accessibilityButton.setAttribute('aria-expanded', String(hidden));
  });
}

document.querySelectorAll('[data-font]').forEach((button) => button.addEventListener('click', () => {
  document.documentElement.dataset.font = button.dataset.font;
  localStorage.setItem('eskulap-font', button.dataset.font);
}));

document.querySelectorAll('[data-contrast]').forEach((button) => button.addEventListener('click', () => {
  document.documentElement.dataset.contrast = button.dataset.contrast;
  localStorage.setItem('eskulap-contrast', button.dataset.contrast);
}));

const searchDialog = document.querySelector('[data-search-dialog]');
const searchInput = document.querySelector('[data-search-input]');
const searchResults = document.querySelector('[data-search-results]');
const renderSearchResults = (query = '') => {
  if (!searchResults) return;
  const normalized = normalizeSearchText(query);
  const queryTokens = normalized.split(' ').filter((token) => token && !ignoredSearchTokens.has(token));
  const results = queryTokens.length
    ? preparedSearchIndex
      .filter((item) => queryTokens.every((token) => searchTokenMatches(token, item)))
      .sort((first, second) => {
        const firstScore = first.titleSearch.includes(normalized) ? 2 : queryTokens.filter((token) => first.titleSearch.includes(token)).length;
        const secondScore = second.titleSearch.includes(normalized) ? 2 : queryTokens.filter((token) => second.titleSearch.includes(token)).length;
        return secondScore - firstScore;
      })
    : preparedSearchIndex;
  searchResults.innerHTML = results.length
    ? results.map((item) => `<li><a href="${item.url}"><strong>${item.title}</strong><span>${item.description}</span></a></li>`).join('')
    : '<li class="search-empty">Ничего не найдено. Попробуйте другое слово или более короткий запрос.</li>';
};

document.querySelectorAll('[data-search-open]').forEach((button) => button.addEventListener('click', () => {
  if (!searchDialog) return;
  renderSearchResults();
  searchDialog.showModal();
  window.setTimeout(() => searchInput?.focus(), 50);
}));
document.querySelectorAll('[data-search-close]').forEach((button) => button.addEventListener('click', () => searchDialog?.close()));
searchInput?.addEventListener('input', (event) => renderSearchResults(event.target.value));
searchDialog?.addEventListener('click', (event) => {
  if (event.target === searchDialog) searchDialog.close();
});

document.querySelectorAll('[data-filter]').forEach((button) => button.addEventListener('click', () => {
  const filter = button.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelectorAll('[data-service-category]').forEach((section) => {
    section.hidden = filter !== 'all' && section.dataset.serviceCategory !== filter;
  });
}));

const documentDialog = document.querySelector('[data-document-dialog]');
const documentDialogImage = document.querySelector('[data-document-dialog-image]');
const documentDialogTitle = document.querySelector('[data-document-dialog-title]');
const documentPreviousButton = document.querySelector('[data-document-previous]');
const documentNextButton = document.querySelector('[data-document-next]');
let documentItems = [];
let currentDocumentIndex = -1;

const showDocument = (index) => {
  if (!documentDialogImage || !documentDialogTitle || !documentItems.length) return;
  currentDocumentIndex = index;
  const button = documentItems[currentDocumentIndex];
  const source = button.dataset.document;
  const title = button.dataset.documentTitle || 'Документ';
  documentDialogImage.src = source;
  documentDialogImage.alt = title;
  documentDialogTitle.textContent = title;
  if (documentPreviousButton) documentPreviousButton.disabled = currentDocumentIndex === 0;
  if (documentNextButton) documentNextButton.disabled = currentDocumentIndex === documentItems.length - 1;
};

document.querySelectorAll('[data-document]').forEach((button) => button.addEventListener('click', () => {
  if (!documentDialog || !documentDialogImage || !documentDialogTitle) return;
  documentItems = [...button.closest('.document-gallery').querySelectorAll('[data-document]')];
  showDocument(documentItems.indexOf(button));
  documentDialog.showModal();
}));

documentPreviousButton?.addEventListener('click', () => {
  if (currentDocumentIndex > 0) showDocument(currentDocumentIndex - 1);
});
documentNextButton?.addEventListener('click', () => {
  if (currentDocumentIndex < documentItems.length - 1) showDocument(currentDocumentIndex + 1);
});
documentDialog?.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' && currentDocumentIndex > 0) showDocument(currentDocumentIndex - 1);
  if (event.key === 'ArrowRight' && currentDocumentIndex < documentItems.length - 1) showDocument(currentDocumentIndex + 1);
});

document.querySelector('[data-document-dialog-close]')?.addEventListener('click', () => documentDialog?.close());
documentDialog?.addEventListener('click', (event) => {
  if (event.target === documentDialog) documentDialog.close();
});
documentDialog?.addEventListener('close', () => {
  if (documentDialogImage) documentDialogImage.src = '';
  documentItems = [];
  currentDocumentIndex = -1;
});

document.querySelectorAll('[data-year]').forEach((item) => { item.textContent = new Date().getFullYear(); });

