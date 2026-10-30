const headerTarget = document.querySelector('[data-site-header]');
const footerTarget = document.querySelector('[data-site-footer]');

if (headerTarget) {
  headerTarget.innerHTML = `
    <a class="skip-link" href="#main">Перейти к содержанию</a>
    <div class="topbar">
      <div class="container topbar__inner">
        <div class="topbar__meta">
          <span>Норильск, район Талнах, ул. Рудная, 47</span>
          <span>Пн–пт 09:00–20:00 · Сб 09:00–15:00</span>
        </div>
        <a data-phone href="tel:+79131631078">+7 (913) 163-10-78</a>
      </div>
    </div>
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="index.html" aria-label="Эскулап — на главную">
          <img src="media/eskulap-logo-horizontal.svg" width="780" height="197" alt="Эскулап, стоматология">
        </a>
        <nav class="main-nav" data-menu aria-label="Основная навигация">
          <ul>
            <li><a data-nav-link href="index.html">Главная</a></li>
            <li><a data-nav-link href="services.html">Услуги и цены</a></li>
            <li><a data-nav-link href="doctors.html">Врачи</a></li>
            <li><a data-nav-link href="patients.html">Пациентам</a></li>
            <li><a data-nav-link href="documents.html">Документы</a></li>
            <li><a data-nav-link href="contacts.html">Контакты</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <button class="icon-button" type="button" data-search-open aria-label="Поиск по сайту" title="Поиск">⌕</button>
          <button class="icon-button" type="button" data-accessibility-button aria-expanded="false" aria-controls="accessibility-panel" aria-label="Версия для слабовидящих" title="Версия для слабовидящих">А</button>
          <button class="icon-button menu-button" type="button" data-menu-button aria-expanded="false" aria-label="Открыть меню">☰</button>
        </div>
      </div>
      <div class="accessibility-panel" id="accessibility-panel" data-accessibility-panel hidden>
        <div class="container accessibility-panel__inner">
          <strong>Размер текста:</strong>
          <button type="button" data-font="normal">Обычный</button>
          <button type="button" data-font="large">Крупный</button>
          <button type="button" data-font="xlarge">Очень крупный</button>
          <strong>Контраст:</strong>
          <button type="button" data-contrast="normal">Обычный</button>
          <button type="button" data-contrast="high">Высокий</button>
        </div>
      </div>
    </header>
    <dialog class="search-dialog" data-search-dialog>
      <div class="search-dialog__header">
        <h2>Поиск по сайту</h2>
        <button class="icon-button" type="button" data-search-close aria-label="Закрыть поиск">×</button>
      </div>
      <div class="search-dialog__body">
        <label class="eyebrow" for="site-search">Что вы хотите найти?</label>
        <input class="search-input" id="site-search" type="search" data-search-input placeholder="Например, лицензия или удаление зуба">
        <ul class="search-results" data-search-results></ul>
      </div>
    </dialog>`;
}

if (footerTarget) {
  footerTarget.innerHTML = `
    <section class="cta-band" aria-label="Запись по телефону">
      <div class="container cta-band__inner">
        <div><h2>Запись на приём — по телефону</h2><p>Позвоните, чтобы уточнить удобное время и подготовку к визиту.</p></div>
        <a class="button button--primary" data-phone href="tel:+79131631078">Позвонить +7 (913) 163-10-78</a>
      </div>
    </section>
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="media/eskulap-logo-horizontal.svg" width="780" height="197" alt="Эскулап, стоматология">
            <p>ООО «ЭСКУЛАП». Стоматологическая помощь детям и взрослым. Приём ведётся по предварительной записи.</p>
          </div>
          <div>
            <h3>Разделы</h3>
            <ul class="footer-links">
              <li><a href="services.html">Услуги и цены</a></li>
              <li><a href="doctors.html">Врачи</a></li>
              <li><a href="patients.html">Пациентам</a></li>
              <li><a href="documents.html">Документы</a></li>
              <li><a href="sitemap.html">Навигация</a></li>
            </ul>
          </div>
          <div>
            <h3>Контакты</h3>
            <p>663333, Красноярский край, г. Норильск, район Талнах, ул. Рудная, 47, 1 этаж, помещение 53</p>
            <p><a data-phone href="tel:+79131631078">+7 (913) 163-10-78</a><br><a href="mailto:serg-grechko77@yandex.ru">serg-grechko77@yandex.ru</a></p>
          </div>
        </div>
        <div class="legal-warning">Имеются противопоказания. Необходима консультация специалиста.</div>
        <div class="footer-bottom">
          <span>© <span data-year></span> ООО «ЭСКУЛАП»</span>
          <span><a href="privacy.html">Политика обработки персональных данных</a></span>
        </div>
      </div>
    </footer>
    <a class="mobile-call" data-phone href="tel:+79131631078" aria-label="Записаться на приём по телефону">☎ Записаться на приём</a>`;
}

