/* =============================================================
   render.js — view rendering functions
   Each view returns an HTML string; renderView swaps <main>.
   ============================================================= */

var Render = (function () {

  /* ── Helper: escape HTML ─────────────────────────────────── */
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── Helper: tag pill ────────────────────────────────────── */
  function tagPill(text, type) {
    return '<span class="tag tag-' + esc(type) + '">' + esc(text) + '</span>';
  }

  /* ── Home view ───────────────────────────────────────────── */
  function viewHome() {
    return '<section class="view-section">' +
      '<div class="home-hero">' +
        '<p class="home-hero-eyebrow">LSEG Risk Intelligence</p>' +
        '<h1 class="home-hero-title">Sales Solution Explorer</h1>' +
        '<p class="home-hero-body">' +
          'An interactive presenter tool to explain LSEG Risk Intelligence product fit, ' +
          'solution flows, capability differences and false positive reduction in customer conversations.' +
        '</p>' +
      '</div>' +

      '<div class="page-header">' +
        '<h2 class="page-title">What would you like to explore?</h2>' +
        '<p class="page-subtitle">Select a section below or use the navigation above.</p>' +
      '</div>' +

      '<div class="card-grid">' +

        _navCard('use-case-explorer', '&#128269;',
          'Use Case Explorer',
          'Match a customer scenario to the right LSEG product. Define industry, volume, integration preference and review model.') +

        _navCard('solution-examples', '&#128200;',
          'Solution Examples',
          'End-to-end flow diagrams: KYC onboarding, ongoing screening with webhooks, hybrid legal firm workflow.') +

        _navCard('capability-explorer', '&#128295;',
          'Capability Explorer',
          'Compare WC1, WCOD and Verify across workflow, integration, matching controls and deployment style.') +

        _navCard('false-positive-reduction', '&#127919;',
          'False Positive Reduction',
          'Practical levers to reduce overscreening — before, during and after screening, and in operations.') +

        _navCard('sales-talk-track', '&#127908;',
          'Sales Talk Track',
          'Discovery questions, positioning points, objection handling and cross-sell signals per scenario.') +
          '</div></section>';
  }

  function _navCard(viewId, icon, title, body) {
    return '<div class="card" data-nav-target="' + esc(viewId) + '" role="button" tabindex="0" ' +
           'aria-label="Go to ' + esc(title) + '">' +
      '<div class="card-icon">' + icon + '</div>' +
      '<p class="card-title">' + esc(title) + '</p>' +
      '<p class="card-body">' + esc(body) + '</p>' +
    '</div>';
  }

  /* ── Use Case Explorer view ──────────────────────────────── */
  function viewUseCaseExplorer() {
    var scenarios = AppData.scenarios;

    var cards = scenarios.map(function (s) {
      var tags = s.tags.map(function (t) {
        var type = t === 'api' ? 'api' : t === 'desktop' ? 'desktop' : t === 'hybrid' ? 'hybrid' : t === 'identity' ? 'identity' : 'phase';
        return tagPill(t, type);
      }).join(' ');

      var productTags = s.recommendedProducts.map(function (pid) {
        var p = AppData.getProduct(pid);
        if (!p) return '';
        var dt = p.deploymentType;
        var type = dt === 'desktop' ? 'desktop' : dt === 'client' ? 'client' : 'api';
        return tagPill(p.shortName, type);
      }).join(' ');

      /* Collapsible detail: rationale + key questions */
      var questions = (s.keyQuestions || []).map(function (q) {
        return '<li>' + esc(q) + '</li>';
      }).join('');

      var talkPoints = (s.talkPoints || []).map(function (t) {
        return '<li>' + esc(t) + '</li>';
      }).join('');

      var detail =
        '<div class="scenario-detail">' +
          (s.rationale
            ? '<div class="scenario-detail-section">' +
                '<p class="scenario-detail-label">Why this fits</p>' +
                '<p style="font-size:0.8125rem;color:#3a4060;line-height:1.55;">' + esc(s.rationale) + '</p>' +
              '</div>'
            : '') +
          (questions
            ? '<div class="scenario-detail-section">' +
                '<p class="scenario-detail-label">Discovery questions</p>' +
                '<ul class="scenario-detail-list">' + questions + '</ul>' +
              '</div>'
            : '') +
          (talkPoints
            ? '<div class="scenario-detail-section">' +
                '<p class="scenario-detail-label">Talk points</p>' +
                '<ul class="scenario-detail-list">' + talkPoints + '</ul>' +
              '</div>'
            : '') +
        '</div>';

      return '<details class="scenario-card">' +
        '<summary>' +
          '<div class="scenario-card-header">' +
            '<p class="card-title">' + esc(s.title) + '</p>' +
            '<p class="text-muted" style="margin:4px 0 8px;">' + esc(s.industry) + ' &mdash; ' + esc(s.subtitle || '') + '</p>' +
            '<p style="font-size:0.8125rem;color:#5a6180;line-height:1.5;margin-bottom:10px;">' + esc(s.description) + '</p>' +
            '<div class="scenario-toggle-row">' +
              productTags + ' ' + tags +
              '<span class="scenario-toggle-btn">Details ›</span>' +
            '</div>' +
          '</div>' +
        '</summary>' +
        detail +
      '</details>';
    }).join('');

    return '<section class="view-section">' +
      '<div class="page-header">' +
        '<h1 class="page-title">Use Case Explorer</h1>' +
        '<p class="page-subtitle">' +
          'Select a scenario to see product fit, rationale and discovery questions. ' +
          'Click any card to expand details.' +
        '</p>' +
      '</div>' +
      '<div style="display:flex;flex-direction:column;gap:10px;">' + cards + '</div>' +
    '</section>';
  }

  /* ── Solution Examples view ──────────────────────────────── */
  function viewSolutionExamples() {
    var examples = AppData.solutionExamples;
    var first    = examples[0];

    var tabs = examples.map(function (ex, i) {
      return '<button class="example-tab' + (i === 0 ? ' active' : '') + '" ' +
             'data-example-tab="' + esc(ex.id) + '">' +
        esc(ex.title) +
      '</button>';
    }).join('');

    return '<section class="view-section">' +
      '<div class="page-header">' +
        '<h1 class="page-title">Solution Examples</h1>' +
        '<p class="page-subtitle">' +
          'Lane-based flow diagrams showing actors, customer systems, LSEG products, ' +
          'API calls, webhook events and downstream workflow. Use Step Through to walk ' +
          'through each flow one step at a time.' +
        '</p>' +
      '</div>' +

      '<div class="example-tabs">' + tabs + '</div>' +

      '<div id="fl-diagram-container">' +
        buildExamplePanel(first) +
      '</div>' +
    '</section>';
  }

  /* ── Build full example panel (header + simple flow) ───────── */
  function buildExamplePanel(ex) {
    var productTags = ex.lsegProducts.map(function (pid) {
      var prod = AppData.getProduct(pid);
      var label = prod ? prod.shortName : pid;
      var dt    = prod ? prod.deploymentType : '';
      var type  = dt === 'desktop' ? 'desktop' : dt === 'client' ? 'client' : 'api';
      return tagPill(label, type);
    }).join(' ');

    var header =
      '<div class="example-header">' +
        '<div class="example-header-text">' +
          '<p class="example-header-title">' + esc(ex.title) + '</p>' +
          '<p class="example-header-subtitle">' + esc(ex.subtitle || '') + '</p>' +
          '<p class="example-header-desc">' + esc(ex.description) + '</p>' +
        '</div>' +
        '<div class="example-header-tags">' + productTags + '</div>' +
      '</div>';

    return header + renderSimpleFlow(ex);
  }

  /* ── Simple phase-flow renderer ─────────────────────────────── */
  function renderSimpleFlow(ex) {
    var phases = ex.phases || [];

    var phaseItems = phases.map(function (phase, i) {
      var prodTags = (phase.products || []).map(function (pid) {
        var prod = AppData.getProduct(pid);
        var label = prod ? prod.shortName : pid;
        var dt    = prod ? prod.deploymentType : '';
        var type  = dt === 'desktop' ? 'desktop' : dt === 'client' ? 'client' : 'api';
        return tagPill(label, type);
      }).join(' ');

      var arrow = (i < phases.length - 1)
        ? '<div class="sf-arrow" aria-hidden="true">&#8594;</div>'
        : '';

      return '<div class="sf-phase" data-step="' + phase.id + '">' +
        '<div class="sf-num">' + phase.id + '</div>' +
        '<p class="sf-title">' + esc(phase.title) + '</p>' +
        '<p class="sf-desc">' + esc(phase.desc) + '</p>' +
        '<div class="sf-products">' + prodTags + '</div>' +
      '</div>' + arrow;
    }).join('');

    var controls =
      '<div class="fl-controls">' +
        '<button class="fl-btn" id="fl-prev" disabled>&#8592; Prev</button>' +
        '<span class="fl-step-counter" id="fl-counter">Overview &mdash; ' + phases.length + ' phases</span>' +
        '<button class="fl-btn" id="fl-next">Step Through &#8594;</button>' +
        '<button class="fl-btn fl-btn-ghost" id="fl-all" disabled>Show All</button>' +
      '</div>' +
      '<div class="fl-step-detail" id="fl-step-detail"></div>';

    return '<div class="sf-flow">' + phaseItems + '</div>' + controls;
  }

  /* expose helpers ────────────────────────────────────────── */

  /* ── Capability Explorer view ────────────────────────────── */
  function viewCapabilityExplorer() {
    var domains  = AppData.capabilityDomains;
    var orderMap = { 'wcod': 0, 'wc1': 1, 'verify': 2 };
    var products = AppData.products.slice().sort(function (a, b) {
      return (orderMap[a.id] || 99) - (orderMap[b.id] || 99);
    });

    /* Each product is a top-level collapsible.
       Inside: overview row + domain-by-domain collapsibles. */
    var productSections = products.map(function (p, pi) {
      var badgeType = p.deploymentType;
      var badge = tagPill(p.badge, badgeType);

      /* Overview row: integration + review workflow */
      var overview =
        '<div style="padding:12px 0 8px;border-bottom:1px solid #f0f0f8;margin-bottom:10px;">' +
          '<p style="font-size:0.8125rem;color:#5a6180;line-height:1.55;margin-bottom:8px;">' + esc(p.description) + '</p>' +
          '<p style="font-size:0.8125rem;color:#3a4060;margin-bottom:4px;">' +
            '<strong>Integration:</strong> ' + esc(p.integrationPattern) + '</p>' +
          '<p style="font-size:0.8125rem;color:#3a4060;margin-bottom:4px;">' +
            '<strong>Data residency:</strong> ' + esc(p.dataResidency) + '</p>' +
          '<p style="font-size:0.8125rem;color:#3a4060;">' +
            '<strong>Review workflow:</strong> ' + esc(p.reviewWorkflow) + '</p>' +
        '</div>';

      /* Differentiators quick list */
      var diffs = (p.differentiators || []).map(function (d) {
        return '<li style="font-size:0.8rem;color:#3a4060;padding:2px 0;">' + esc(d) + '</li>';
      }).join('');

      /* Domain capability collapsibles */
      var domainColls = domains.map(function (d) {
        var cap = AppData.getCapability(p.id, d.id);
        if (!cap) return '';
        var points = (cap.keyPoints || []).map(function (kp) {
          return '<li style="font-size:0.8rem;color:#3a4060;padding:2px 0;line-height:1.45;">' + esc(kp) + '</li>';
        }).join('');
        return '<details class="lever" style="margin-bottom:6px;">' +
          '<summary style="padding:8px 12px;font-size:0.8125rem;font-weight:600;color:#1a1e2e;' +
                   'display:flex;align-items:center;justify-content:space-between;cursor:pointer;' +
                   'list-style:none;user-select:none;">' +
            '<span>' + esc(d.label) + '</span>' +
            '<span class="lever-toggle"></span>' +
          '</summary>' +
          '<div style="padding:10px 12px 12px;border-top:1px solid #eef0f8;">' +
            '<p style="font-size:0.8rem;color:#5a6180;margin-bottom:8px;line-height:1.5;">' + esc(cap.summary) + '</p>' +
            '<ul style="padding-left:14px;list-style:disc;">' + points + '</ul>' +
          '</div>' +
        '</details>';
      }).join('');

      return '<details class="coll capability-product">' +
        '<summary>' +
          '<span class="cap-head-main">' +
            '<span class="coll-title">' + esc(p.name) + '</span>' +
            '<span class="cap-head-badge">' + badge + '</span>' +
          '</span>' +
          '<span class="coll-meta">' + esc(p.tagline) + '</span>' +
          '<span class="coll-chevron">›</span>' +
        '</summary>' +
        '<div class="coll-body">' +
          overview +
          '<ul style="padding-left:16px;list-style:disc;margin-bottom:12px;">' + diffs + '</ul>' +
          '<p style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;' +
             'color:#9aa0b8;margin-bottom:8px;">Capability by domain</p>' +
          domainColls +
        '</div>' +
      '</details>';
    }).join('');

    return '<section class="view-section">' +
      '<div class="page-header">' +
        '<h1 class="page-title">Capability Explorer</h1>' +
        '<p class="page-subtitle">' +
          'Expand each product to explore capabilities by domain.' +
        '</p>' +
      '</div>' +
      productSections +
    '</section>';
  }

  /* ── False Positive Reduction view ──────────────────────── */
  function viewFalsePositiveReduction() {
    var levers = AppData.fpReductionLevers;

    /* Build a single lever <details> with product mapping inline */
    function leverItem(item) {
      var mapRows = (item.productMapping || []).map(function (m) {
        var prod = AppData.getProduct(m.productId);
        var dt = prod ? prod.deploymentType : '';
        var badgeType = dt === 'desktop' ? 'desktop' : dt === 'client' ? 'client' : 'api';
        return '<div class="lever-map-row">' +
          '<div class="lever-map-pill">' + tagPill(prod ? prod.shortName : m.productId, badgeType) + '</div>' +
          '<div class="lever-map-note">' + esc(m.note) + '</div>' +
        '</div>';
      }).join('');

      return '<details class="lever">' +
        '<summary>' +
          '<span>' + esc(item.label) + '</span>' +
          '<span class="lever-toggle"></span>' +
        '</summary>' +
        '<div class="lever-detail">' +
          '<p class="lever-desc">' + esc(item.description) + '</p>' +
          (mapRows ? '<div class="lever-map">' + mapRows + '</div>' : '') +
        '</div>' +
      '</details>';
    }

    /* Build a stage group as a top-level <details> */
    function stageGroup(title, items, isOpen) {
      var leverItems = items.map(leverItem).join('');
      return '<details class="coll"' + (isOpen ? ' open' : '') + '>' +
        '<summary>' +
          '<span class="coll-title">' + esc(title) + '</span>' +
          '<span class="coll-meta">' + items.length + ' levers</span>' +
          '<span class="coll-chevron">›</span>' +
        '</summary>' +
        '<div class="coll-body">' + leverItems + '</div>' +
      '</details>';
    }

    return '<section class="view-section">' +
      '<div class="page-header">' +
        '<h1 class="page-title">False Positive Reduction</h1>' +
        '<p class="page-subtitle">' +
          'Practical levers across the full screening lifecycle. Expand a stage to see each lever and which product addresses it.' +
        '</p>' +
      '</div>' +

      '<div class="section-intro">' +
        '<p>False positive reduction is not a single setting. It spans data preparation, screening ' +
        'configuration, post-processing and operational workflow. Expand each lever to see ' +
        'the product mapping and configuration detail.</p>' +
      '</div>' +

      stageGroup('Before Screening',  levers.beforeScreening,  true)  +
      stageGroup('During Screening',  levers.duringScreening,  false) +
      stageGroup('After Screening',   levers.afterScreening,   false) +
      stageGroup('In Operations',     levers.inOperations,     false) +
    '</section>';
  }

  /* ── Sales Talk Track view ───────────────────────────────── */
  function viewSalesTalkTrack() {
    /* Discovery questions grouped by theme */
    var questionGroups = [
      {
        theme: 'Current state',
        questions: [
          'How are you currently screening customers and counterparties today?',
          'What systems do your compliance analysts use for review and case management?',
          'Do you poll for list changes, or do you rely on periodic batch runs?'
        ]
      },
      {
        theme: 'Scope & volume',
        questions: [
          'Are you screening at onboarding only, or on an ongoing basis?',
          'Are you screening individuals, entities or both — and across which watchlists?',
          'What is your current false positive rate, and how much analyst time does that consume?'
        ]
      },
      {
        theme: 'Integration & workflow',
        questions: [
          'How important is straight-through processing for low-risk entities?',
          'Do you have data residency or sovereignty requirements?',
          'How do you handle exceptions — is there a defined escalation and approval workflow?'
        ]
      }
    ];

    var objectionHandling = [
      {
        objection: 'We already have a screening tool.',
        response: 'The conversation is about fit and performance — not just coverage. ' +
                  'Key questions: what attributes are returned per result, what is the false positive rate, ' +
                  'and how much analyst time is spent per case?'
      },
      {
        objection: 'We only need the data, not the workflow.',
        response: 'WC1 API delivers exactly that — structured screening results via REST with rich match ' +
                  'attributes. Workflow and decisioning stay entirely within your own systems.'
      },
      {
        objection: 'We are not ready to change our integration.',
        response: 'WC1 API is a well-documented REST service. Many customers start with a pilot on a single ' +
                  'entity type or onboarding workflow before wider rollout.'
      },
      {
        objection: 'We do not need identity verification.',
        response: 'Verify is optional — but if applicants submit mis-keyed names, every screening result ' +
                  'is less reliable. Even a light Verify integration upstream reduces downstream false positive volume.'
      },
      {
        objection: 'We need an on-premises deployment.',
        response: 'WCOD and WC1 offer cloud region selection. Data residency requirements are addressed ' +
                  'through region configuration and the data processing agreement, not on-premises deployment.'
      }
    ];

    var salesTalkTrack = AppData.salesTalkTrack || {};
    questionGroups = salesTalkTrack.questionGroups || questionGroups;
    objectionHandling = salesTalkTrack.objectionHandling || objectionHandling;

    /* Question groups as collapsibles */
    var qGroups = questionGroups.map(function (g, i) {
      var qs = g.questions.map(function (q) {
        return '<li style="padding:6px 0;border-bottom:1px solid #f0f1f8;font-size:0.875rem;' +
               'color:#3a4060;line-height:1.5;">' + esc(q) + '</li>';
      }).join('');
      return '<details class="coll"' + (i === 0 ? ' open' : '') + '>' +
        '<summary>' +
          '<span class="coll-title">' + esc(g.theme) + '</span>' +
          '<span class="coll-meta">' + g.questions.length + ' questions</span>' +
          '<span class="coll-chevron">›</span>' +
        '</summary>' +
        '<div class="coll-body" style="padding-bottom:8px;">' +
          '<ul style="padding-left:0;">' + qs + '</ul>' +
        '</div>' +
      '</details>';
    }).join('');

    /* Objections as individual collapsibles */
    var objItems = objectionHandling.map(function (o) {
      return '<details class="obj-item">' +
        '<summary>' +
          '<span class="obj-quote">&#34;' + esc(o.objection) + '&#34;</span>' +
          '<span class="obj-toggle"></span>' +
        '</summary>' +
        '<p class="obj-response">' + esc(o.response) + '</p>' +
      '</details>';
    }).join('');

    return '<section class="view-section">' +
      '<div class="page-header">' +
        '<h1 class="page-title">Sales Talk Track</h1>' +
        '<p class="page-subtitle">' +
          'Discovery questions by theme and objection handling. Click any item to expand.' +
        '</p>' +
      '</div>' +

      '<div class="two-col">' +
        '<div>' +
          '<p style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;' +
             'color:#9aa0b8;margin-bottom:10px;">Discovery Questions</p>' +
          qGroups +
        '</div>' +
        '<div>' +
          '<p style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;' +
             'color:#9aa0b8;margin-bottom:10px;">Objection Handling</p>' +
          objItems +
        '</div>' +
      '</div>' +
    '</section>';
  }

  /* ── View map ────────────────────────────────────────────── */
  var views = {
    'home':                   viewHome,
    'use-case-explorer':      viewUseCaseExplorer,
    'solution-examples':      viewSolutionExamples,
    'capability-explorer':    viewCapabilityExplorer,
    'false-positive-reduction': viewFalsePositiveReduction,
    'sales-talk-track':       viewSalesTalkTrack
  };

  /* ── Public API ──────────────────────────────────────────── */
  return {
    renderView: function (viewId) {
      var container = document.getElementById('main-content');
      if (!container) return;
      var fn = views[viewId] || viewHome;
      container.innerHTML = fn();
      container.focus();
    },
    buildExamplePanel: buildExamplePanel
  };

}());
