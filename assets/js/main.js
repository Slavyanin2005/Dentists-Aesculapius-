const PHONE_DISPLAY = '+7 (913) 163-10-78';
const PHONE_LINK = 'tel:+79131631078';

const searchIndex = [
  { title: 'Главная', url: 'index.html', text: 'стоматологическая клиника Эскулап Норильск Талнах Рудная 47 запись телефон режим работы' },
  { title: 'Услуги и цены', url: 'services.html', text: 'прайс консультация лечение терапия удаление протезирование коронки гигиена анестезия стоимость' },
  { title: 'Наши врачи', url: 'doctors.html', text: 'Гречко Светлана Васильевна врач стоматолог Гречко Сергей Алексеевич зубной врач руководитель' },
  { title: 'Пациентам', url: 'patients.html', text: 'правила записи подготовка права обязанности ОМС ДМС государственные гарантии' },
  { title: 'Документы', url: 'documents.html', text: 'лицензия Л041-01019-24/00323079 ИНН ОГРН контролирующие органы Росздравнадзор Роспотребнадзор' },
  { title: 'Контакты', url: 'contacts.html', text: 'адрес Рудная 47 Талнах Норильск телефон email карта проезд режим работы' },
  { title: 'Политика обработки персональных данных', url: 'privacy.html', text: 'конфиденциальность персональные данные политика cookies обращения email' },
  { title: 'Навигация', url: 'sitemap.html', text: 'разделы навигация страницы сайта' }
];

const getFileName = () => {
  const value = window.location.pathname.split('/').pop();
  return value || 'index.html';
};

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
  if (link.getAttribute('href') === getFileName()) link.setAttribute('aria-current', 'page');
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
  const normalized = query.trim().toLocaleLowerCase('ru');
  const results = normalized
    ? searchIndex.filter((item) => `${item.title} ${item.text}`.toLocaleLowerCase('ru').includes(normalized))
    : searchIndex;
  searchResults.innerHTML = results.length
    ? results.map((item) => `<li><a href="${item.url}"><strong>${item.title}</strong><span>${item.text.slice(0, 100)}…</span></a></li>`).join('')
    : '<li class="search-empty">Ничего не найдено. Попробуйте изменить запрос.</li>';
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

document.querySelectorAll('[data-year]').forEach((item) => { item.textContent = new Date().getFullYear(); });

