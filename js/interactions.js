/* =============================================================
   interactions.js — event bindings and UI state management
   ============================================================= */

var Interactions = (function () {

  /* ── Activate a nav link ─────────────────────────────────── */
  function setActiveNav(viewId) {
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function (link) {
      if (link.dataset.view === viewId) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }

  /* ── Navigate to a view ──────────────────────────────────── */
  function navigateTo(viewId) {
    if (!viewId) return;
    AppState.currentView = viewId;
    setActiveNav(viewId);
    Render.renderView(viewId);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    bindNavCards();
    if (viewId === 'solution-examples') {
      bindExampleTabs();
      bindFlowStepControls();
    }
    if (viewId === 'api-comparison') {
      bindApiComparisonTabs();
    }
  }

  /* ── Bind home nav cards (data-nav-target) ───────────────── */
  function bindNavCards() {
    var cards = document.querySelectorAll('[data-nav-target]');
    cards.forEach(function (card) {
      card.addEventListener('click', function () {
        navigateTo(card.dataset.navTarget);
      });
      card.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          navigateTo(card.dataset.navTarget);
        }
      });
    });
  }

  /* ── Presentation mode toggle ───────────────────────────── */
  function bindPresentationToggle() {
    var btn = document.getElementById('present-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isOn = document.body.classList.toggle('presentation-mode');
      btn.setAttribute('aria-pressed', isOn ? 'true' : 'false');
    });
  }

  /* ── Hamburger toggle (≤900px) ───────────────────────────── */
  function bindNavToggle() {
    var btn = document.getElementById('nav-toggle');
    var nav = document.querySelector('.top-nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('nav-open');
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    /* Close nav when any link is clicked */
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Bind top navigation links ───────────────────────────── */
  function bindNavLinks() {
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        navigateTo(link.dataset.view);
      });
    });
  }

  /* ── API Comparison tab switching ───────────────────────── */
  function bindApiComparisonTabs() {
    var tabs   = document.querySelectorAll('[data-api-tab]');
    var detail = document.getElementById('api-tab-detail');
    var glance = document.getElementById('api-tab-glance');
    if (!tabs.length || !detail || !glance) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var target = tab.dataset.apiTab;
        detail.style.display = target === 'detail' ? 'flex'  : 'none';
        glance.style.display = target === 'glance' ? 'block' : 'none';
      });
    });
  }

  /* ── Flow diagram: example tab switching ─────────────────── */
  function bindExampleTabs() {
    var tabs = document.querySelectorAll('[data-example-tab]');
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var exId = tab.dataset.exampleTab;
        var ex   = AppData.getSolutionExample(exId);
        if (!ex) return;

        tabs.forEach(function (t) { t.classList.toggle('active', t === tab); });

        var container = document.getElementById('fl-diagram-container');
        if (container) {
          container.innerHTML = Render.buildExamplePanel(ex);
          bindFlowStepControls();
        }
      });
    });
  }

  /* ── Simple flow: phase step-through controls ───────────────── */
  function bindFlowStepControls() {
    var stepIndex = -1;   /* -1 = overview (all visible) */

    function phases() { return document.querySelectorAll('.sf-phase'); }
    function el(id)   { return document.getElementById(id); }

    function update() {
      var allPhases = phases();
      var total     = allPhases.length;
      var prevBtn   = el('fl-prev');
      var nextBtn   = el('fl-next');
      var allBtn    = el('fl-all');
      var counter   = el('fl-counter');
      var detail    = el('fl-step-detail');

      if (stepIndex < 0) {
        /* Overview mode */
        allPhases.forEach(function (p) { p.classList.remove('sf-dimmed', 'sf-active'); });
        if (counter) counter.textContent = 'Overview \u2014 ' + total + ' phases';
        if (prevBtn) prevBtn.disabled = true;
        if (nextBtn) { nextBtn.disabled = false; nextBtn.textContent = 'Step Through \u2192'; }
        if (allBtn)  allBtn.disabled = true;
        if (detail)  { detail.textContent = ''; detail.classList.remove('visible'); }
      } else {
        /* Step mode */
        allPhases.forEach(function (p, i) {
          p.classList.toggle('sf-dimmed', i !== stepIndex);
          p.classList.toggle('sf-active', i === stepIndex);
        });

        var activePhase = allPhases[stepIndex];
        var stepNum     = activePhase ? activePhase.dataset.step : stepIndex + 1;
        var stepLabel   = activePhase ? (activePhase.querySelector('.sf-title') || {}).textContent : '';

        if (counter) counter.textContent = 'Phase ' + stepNum + ' of ' + total;
        if (prevBtn) prevBtn.disabled = (stepIndex === 0);
        if (nextBtn) { nextBtn.disabled = (stepIndex === total - 1); nextBtn.textContent = 'Next \u2192'; }
        if (allBtn)  allBtn.disabled = false;

        if (detail && stepLabel) {
          detail.textContent = '\u25B6  Phase ' + stepNum + ' \u2014 ' + stepLabel;
          detail.classList.add('visible');
        }

        if (activePhase) {
          activePhase.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    }

    var prevBtn = el('fl-prev');
    var nextBtn = el('fl-next');
    var allBtn  = el('fl-all');

    if (prevBtn) {
      prevBtn.addEventListener('click', function () {
        if (stepIndex > 0) { stepIndex--; update(); }
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', function () {
        stepIndex = (stepIndex < 0) ? 0 : stepIndex + 1;
        var maxIdx = phases().length - 1;
        if (stepIndex > maxIdx) stepIndex = maxIdx;
        update();
      });
    }
    if (allBtn) {
      allBtn.addEventListener('click', function () {
        stepIndex = -1;
        update();
      });
    }

    update();
  }

  /* ── Fullscreen toggle ───────────────────────────────────── */
  function bindFullscreenToggle() {
    var btn   = document.getElementById('fullscreen-toggle');
    var enter = btn && btn.querySelector('.fs-enter');
    var exit  = btn && btn.querySelector('.fs-exit');
    if (!btn) return;

    function updateIcon() {
      var isFs = !!(document.fullscreenElement || document.webkitFullscreenElement);
      if (enter) enter.style.display = isFs ? 'none'  : '';
      if (exit)  exit.style.display  = isFs ? ''      : 'none';
    }

    btn.addEventListener('click', function () {
      if (document.fullscreenElement || document.webkitFullscreenElement) {
        (document.exitFullscreen || document.webkitExitFullscreen).call(document);
      } else {
        var el = document.documentElement;
        (el.requestFullscreen || el.webkitRequestFullscreen).call(el);
      }
    });

    document.addEventListener('fullscreenchange',       updateIcon);
    document.addEventListener('webkitfullscreenchange', updateIcon);
  }

  /* ── QR code modal ───────────────────────────────────────── */
  function bindQrToggle() {
    var btn   = document.getElementById('qr-toggle');
    var modal = document.getElementById('qr-modal');
    var close = document.getElementById('qr-close');
    if (!btn || !modal) return;

    btn.addEventListener('click', function () {
      modal.hidden = false;
      if (close) close.focus();
    });

    if (close) {
      close.addEventListener('click', function () {
        modal.hidden = true;
        btn.focus();
      });
    }

    modal.addEventListener('click', function (e) {
      if (e.target === modal) { modal.hidden = true; }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !modal.hidden) { modal.hidden = true; btn.focus(); }
    });
  }

  /* ── Public API ──────────────────────────────────────────── */
  return {
    init: function () {
      bindNavToggle();
      bindNavLinks();
      bindNavCards();
      bindPresentationToggle();
      bindFullscreenToggle();
      bindQrToggle();
    },
    navigateTo: navigateTo,
    bindNavCards: bindNavCards,

    /* Called by app.js after any render that may include flow diagrams */
    bindFlowControls: function () {
      bindExampleTabs();
      bindFlowStepControls();
    }
  };

}());
