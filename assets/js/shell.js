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
          <button class="icon-button" type="button" data-search-open aria-label="Поиск по сайту" title="Поиск"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg></button>
          <button class="icon-button" type="button" data-accessibility-button aria-expanded="false" aria-controls="accessibility-panel" aria-label="Версия для слабовидящих" title="Версия для слабовидящих">А</button>
          <button class="icon-button menu-button" type="button" data-menu-button aria-expanded="false" aria-label="Открыть меню"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>
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
        <button class="icon-button" type="button" data-search-close aria-label="Закрыть поиск"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"></path></svg></button>
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
    <a class="mobile-call" data-phone href="tel:+79131631078" aria-label="Записаться на приём по телефону"><svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"></path></svg><span>Записаться на приём</span></a>`;
}

