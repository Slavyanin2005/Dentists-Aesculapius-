const headerTarget = document.querySelector("[data-site-header]");
const footerTarget = document.querySelector("[data-site-footer]");
const shellSiteRoot = new URL("../../", document.currentScript.src);
const shellUrl = (path = "") => new URL(path, shellSiteRoot).href;

if (headerTarget) {
  headerTarget.innerHTML = `
    <a class="skip-link" href="#main">Перейти к содержанию</a>
    <div class="topbar">
      <div class="container topbar__inner">
        <div class="topbar__meta">
          <span>Норильск, район Талнах, ул. Рудная, 47</span>
          <span class="topbar__schedule"><span>Пн–пт 09:00–20:00</span><span>Сб 09:00–15:00</span></span>
        </div>
        <a data-phone href="tel:+79131631078">+7 (913) 163-10-78</a>
      </div>
    </div>
    <header class="site-header">
      <div class="container header-inner">
        <a class="brand" href="${shellUrl()}" aria-label="Эскулап – на главную">
          <img src="${shellUrl("media/eskulap-logo-horizontal.svg")}" width="780" height="197" alt="Эскулап, стоматология">
        </a>
        <nav class="main-nav" data-menu aria-label="Основная навигация">
          <ul>
            <li><a data-nav-link href="${shellUrl()}">Главная</a></li>
            <li><a data-nav-link href="${shellUrl("services/")}">Услуги и цены</a></li>
            <li><a data-nav-link href="${shellUrl("doctors/")}">Врачи</a></li>
            <li><a data-nav-link href="${shellUrl("patients/")}">Пациентам</a></li>
            <li><a data-nav-link href="${shellUrl("documents/")}">Документы</a></li>
            <li><a data-nav-link href="${shellUrl("contacts/")}">Контакты</a></li>
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
        <div><h2>Запись на приём – по телефону</h2><p>Позвоните, чтобы уточнить удобное время и подготовку к визиту.</p></div>
        <a class="button button--primary" data-phone href="tel:+79131631078">Позвонить +7 (913) 163-10-78</a>
      </div>
    </section>
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="${shellUrl("media/eskulap-logo-horizontal.svg")}" width="780" height="197" alt="Эскулап, стоматология">
            <p>ООО «ЭСКУЛАП». Стоматологическая помощь пациентам. Приём ведётся по предварительной записи.</p>
          </div>
          <div>
            <h3>Разделы</h3>
            <ul class="footer-links">
              <li><a href="${shellUrl("services/")}">Услуги и цены</a></li>
              <li><a href="${shellUrl("doctors/")}">Врачи</a></li>
              <li><a href="${shellUrl("patients/")}">Пациентам</a></li>
              <li><a href="${shellUrl("patients/#paid-services")}">Правила платных услуг</a></li>
              <li><a href="${shellUrl("documents/")}">Документы</a></li>
              <li><a href="${shellUrl("navigation/")}">Навигация</a></li>
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
          <span><a href="${shellUrl("privacy/")}">Политика обработки персональных данных</a></span>
        </div>
      </div>
    </footer>`;
}
