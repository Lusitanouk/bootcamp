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

  function getProductTagType(prod) {
    if (!prod) return 'api';
    if (prod.id === 'professional-services') return 'service';
    if (prod.id === 'custom-app' || prod.id === 'filter-partner') return 'client';
    if (prod.deploymentType === 'desktop') return 'desktop';
    return 'api';
  }

  function productPills(productIds) {
    return (productIds || []).map(function (pid) {
      var prod = AppData.getProduct(pid);
      if (!prod) return '';
      return tagPill(prod.shortName, getProductTagType(prod));
    }).join(' ');
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
          'Compare WC1, WCOD, Professional Services and Verify across workflow, integration, matching controls and delivery style.') +

        _navCard('false-positive-reduction', '&#127919;',
          'False Positive Reduction',
          'Practical levers to reduce overscreening — before, during and after screening, and in operations.') +

        _navCard('api-comparison', '&#128268;',
          'API Comparison',
          'Compare World-Check OnDemand, WC1 v2, WC1 v3 and Verify — integration model, capabilities and client fit.') +

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
    var scenarioOrder = [
      'tier1-bank-owned-stack',
      'kyc-onboarding',
      'ongoing-screening',
      'global-marketplace',
      'legal-firm-hybrid'
    ];
    var scenarios = AppData.scenarios.slice().sort(function (a, b) {
      return scenarioOrder.indexOf(a.id) - scenarioOrder.indexOf(b.id);
    });

    var cards = scenarios.map(function (s) {
      var tags = s.tags.map(function (t) {
        var type = 'phase';
        return tagPill(t, type);
      }).join(' ');

      var productTags = productPills(s.recommendedProducts);

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
            '<p class="scenario-desc" style="font-size:0.8125rem;color:#5a6180;line-height:1.5;margin-bottom:10px;">' + esc(s.description) + '</p>' +
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
    var exampleOrder = [
      'tier1-bank-wcod-kyc-payments',
      'eu-psp-instant-payments',
      'social-marketplace-kyc-ogs-transactions',
      'real-estate-screening'
    ];
    var examples = AppData.solutionExamples.slice().sort(function (a, b) {
      return exampleOrder.indexOf(a.id) - exampleOrder.indexOf(b.id);
    });
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
    var productTags = productPills(ex.lsegProducts);

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
      var prodTags = productPills(phase.products);

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
    var orderMap = {
      'wcod': 0,
      'wc1': 1,
      'verify': 2,
      'professional-services': 3,
      'custom-app': 4,
      'filter-partner': 5
    };
    var products = AppData.products.slice().sort(function (a, b) {
      var aOrder = Object.prototype.hasOwnProperty.call(orderMap, a.id) ? orderMap[a.id] : 99;
      var bOrder = Object.prototype.hasOwnProperty.call(orderMap, b.id) ? orderMap[b.id] : 99;
      return aOrder - bOrder;
    });

    /* Each product is a top-level collapsible.
       Inside: overview row + domain-by-domain collapsibles. */
    var productSections = products.map(function (p, pi) {
      var badgeType = getProductTagType(p);
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

      /* Look up video from apiComparison (wc1 → wc1v3) */
      var apiId    = p.id === 'wc1' ? 'wc1v3' : p.id;
      var apiEntry = (AppData.apiComparison || []).filter(function (a) { return a.id === apiId; })[0];
      var videoId  = apiEntry && apiEntry.videoId;
      var videoLink = videoId
        ? '<a href="https://www.youtube.com/watch?v=' + videoId + '" target="_blank" rel="noopener noreferrer" ' +
             'onclick="event.stopPropagation();" ' +
             'style="display:inline-flex;align-items:center;gap:3px;text-decoration:none;color:#ff0000;' +
                    'font-size:0.7rem;font-weight:600;padding:3px 7px;border-radius:4px;background:#fff0f0;margin-left:6px;">' +
            '<svg viewBox="0 0 24 24" width="12" height="12" style="flex-shrink:0;"><path fill="currentColor" d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.7 2.2.8C6.8 19 12 19 12 19s4.8 0 7-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.5 3-5.5 3z"/></svg>' +
            'Watch' +
          '</a>'
        : '';

      return '<details class="coll capability-product">' +
        '<summary>' +
          '<span class="cap-head-main">' +
            '<span class="coll-title">' + esc(p.name) + '</span>' +
            '<span class="cap-head-badge">' + badge + videoLink + '</span>' +
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
        var badgeType = getProductTagType(prod);
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
          'Practical levers across the screening lifecycle. Expand a stage to see how products and Professional Services help reduce review noise.' +
        '</p>' +
      '</div>' +

      '<div class="section-intro">' +
        '<p>False positive reduction is not a single setting. It comes from better inputs, better screening precision, ' +
        'better triage and a better operating model. This view shows where products and Professional Services can help, ' +
        'with automation, AI and managed-services overlays where relevant.</p>' +
      '</div>' +

      stageGroup('Before Screening',             levers.beforeScreening,  false) +
      stageGroup('During Screening',             levers.duringScreening,  false) +
      stageGroup('After Screening & Decisioning', levers.afterScreening,   false) +
      stageGroup('Operating Model & Optimisation', levers.inOperations,     false) +
    '</section>';
  }

  /* Sales Talk Track view */
  function viewSalesTalkTrack() {
    var salesTalkTrack = AppData.salesTalkTrack || {};
    var questionGroups = salesTalkTrack.questionGroups || [];
    var objectionHandling = salesTalkTrack.objectionHandling || [];

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

    var objItems = objectionHandling.map(function (group) {
      var items = group.items || [];
      var groupedItems = items.map(function (o) {
        return '<details class="obj-item">' +
          '<summary>' +
            '<span class="obj-quote">&#34;' + esc(o.objection) + '&#34;</span>' +
            '<span class="obj-toggle"></span>' +
          '</summary>' +
          '<p class="obj-response">' + esc(o.response) + '</p>' +
        '</details>';
      }).join('');

      return '<details class="coll">' +
        '<summary>' +
          '<span class="coll-title">' + esc(group.theme || 'Objections') + '</span>' +
          '<span class="coll-meta">' + items.length + ' objections</span>' +
          '<span class="coll-chevron">›</span>' +
        '</summary>' +
        '<div class="coll-body">' + groupedItems + '</div>' +
      '</details>';
    }).join('');

    return '<section class="view-section">' +
      '<div class="page-header">' +
        '<h1 class="page-title">Sales Talk Track</h1>' +
        '<p class="page-subtitle">' +
          'Discovery questions by theme and objection handling. Click any item to expand.' +
        '</p>' +
      '</div>' +

      '<div class="example-tabs">' +
        '<button class="example-tab active" data-stt-tab="discovery">Discovery Questions</button>' +
        '<button class="example-tab"        data-stt-tab="objections">Objection Handling</button>' +
      '</div>' +

      '<div id="stt-tab-discovery">' + qGroups + '</div>' +
      '<div id="stt-tab-objections" style="display:none;">' + objItems + '</div>' +

    '</section>';
  }

  /* ── API Comparison view ─────────────────────────────────── */
  function viewApiComparison() {
    var apis = AppData.apiComparison;

    /* Quick-fact chips shown in the collapsed summary */
    function factChip(label, value) {
      return '<span style="display:inline-flex;align-items:center;gap:4px;background:#f0f1f8;' +
             'border-radius:4px;padding:3px 8px;font-size:0.7rem;color:#5a6180;">' +
        '<span style="font-weight:600;color:#3a4060;">' + esc(label) + '</span>' +
        '<span>' + esc(value) + '</span>' +
      '</span>';
    }

    /* Integration flow diagram (shown in expanded body) */
    function flowDiagram(a) {
      var boxes = a.flowSteps.map(function (step, i) {
        var isFirst = i === 0;
        var isLast  = i === a.flowSteps.length - 1;
        var boxBg     = isFirst ? '#f0f1f8' : isLast ? '#e8f0ff' : '#fff';
        var boxBorder = isLast  ? '#001eff' : '#dde0ea';
        var arrow = (i < a.flowSteps.length - 1)
          ? '<div style="display:flex;flex-direction:column;align-items:center;padding:0 4px;min-width:48px;max-width:72px;">' +
              '<span style="font-size:0.6rem;color:#9aa0b8;text-align:center;word-break:break-word;line-height:1.3;">' + (a.flowArrows[i] || '') + '</span>' +
              '<span style="color:#9aa0b8;line-height:1;">&#8594;</span>' +
            '</div>'
          : '';
        return '<div style="display:flex;align-items:center;">' +
          '<div style="background:' + boxBg + ';border:1px solid ' + boxBorder + ';border-radius:4px;padding:6px 10px;min-width:72px;text-align:center;">' +
            '<span style="font-size:0.75rem;font-weight:600;color:#1a1e2e;">' + esc(step) + '</span>' +
          '</div>' + arrow +
        '</div>';
      }).join('');
      return '<div style="margin-top:4px;">' +
        '<p style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:#9aa0b8;margin-bottom:8px;">' + esc(a.diagramLabel) + '</p>' +
        '<div style="display:flex;align-items:flex-start;flex-wrap:wrap;gap:2px;">' + boxes + '</div>' +
      '</div>';
    }

    /* Build collapsible product cards */
    var productCards = apis.map(function (a) {
      var c = a.comparison || {};

      /* Summary chip: effort level only */
      var chips = factChip('Effort', c.integrationEffort || '');

      /* Capability list */
      var capList = a.capabilities.map(function (cap) {
        return '<li style="font-size:0.8125rem;color:#3a4060;padding:4px 0;border-bottom:1px solid #f0f1f8;line-height:1.5;">' + esc(cap) + '</li>';
      }).join('');

      /* Legacy warning */
      var legacyBanner = a.legacy
        ? '<div style="background:#fff8e8;border:1px solid #f0c040;border-radius:6px;padding:10px 14px;' +
               'display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;">' +
            '<span style="flex-shrink:0;">&#9888;&#65039;</span>' +
            '<p style="font-size:0.8125rem;color:#7a5000;line-height:1.5;margin:0;">' + esc(a.legacyNote) + '</p>' +
          '</div>'
        : '';

      /* Migration reasons (v3 only) */
      var migrationBlock = (a.migrationReasons && a.migrationReasons.length)
        ? '<div style="background:#f0fff8;border:1px solid #b0e8d0;border-radius:6px;padding:12px 14px;margin-bottom:12px;">' +
            '<p style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:#007a45;margin-bottom:8px;">Why migrate from v2?</p>' +
            '<ul style="padding:0;list-style:none;margin:0;">' +
            a.migrationReasons.map(function (r) {
              return '<li style="font-size:0.8125rem;color:#1a5c3a;padding:4px 0;border-bottom:1px solid #d0f0e0;line-height:1.5;display:flex;gap:8px;">' +
                '<span style="color:#00a060;flex-shrink:0;">&#8594;</span>' + esc(r) +
              '</li>';
            }).join('') +
            '</ul>' +
          '</div>'
        : '';

      return '<details class="coll capability-product">' +
        '<summary>' +
          '<span class="cap-head-main">' +
            '<span class="coll-title">' + esc(a.name) + '</span>' +
            '<span class="cap-head-badge">' +
              tagPill(a.badge, a.badgeType) +
              (a.legacy ? '&nbsp;<span class="tag" style="background:#fff0c0;color:#7a5000;">Legacy</span>' : '') +
            '</span>' +
          '</span>' +
          '<span class="coll-meta" style="display:flex;flex-wrap:wrap;align-items:center;gap:4px;margin-top:6px;">' +
            chips +
            (a.videoId
              ? ' <a href="https://www.youtube.com/watch?v=' + a.videoId + '" target="_blank" rel="noopener noreferrer" ' +
                   'onclick="event.stopPropagation();" ' +
                   'style="display:inline-flex;align-items:center;gap:3px;text-decoration:none;color:#ff0000;' +
                          'font-size:0.7rem;font-weight:600;padding:3px 7px;border-radius:4px;background:#fff0f0;">' +
                  '<svg viewBox="0 0 24 24" width="12" height="12" style="flex-shrink:0;"><path fill="currentColor" d="M21.8 8s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.9C16.8 5 12 5 12 5s-4.8 0-7 .1c-.4.1-1.2.1-2 .9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.5c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.8.8 1.8.7 2.2.8C6.8 19 12 19 12 19s4.8 0 7-.2c.4-.1 1.2-.1 2-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.5C22 9.6 21.8 8 21.8 8zM10 15V9l5.5 3-5.5 3z"/></svg>' +
                  'Watch' +
                '</a>'
              : '') +
          '</span>' +
          '<span class="coll-chevron">›</span>' +
        '</summary>' +
        '<div class="coll-body">' +
          legacyBanner +
          '<p style="font-size:0.875rem;color:#3a4060;line-height:1.6;margin-bottom:12px;">' + esc(a.valueStatement) + '</p>' +
          '<div style="background:#f8f9ff;border-radius:6px;padding:10px 14px;margin-bottom:12px;">' +
            '<p style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:#9aa0b8;margin-bottom:4px;">Best for</p>' +
            '<p style="font-size:0.8125rem;color:#3a4060;line-height:1.5;margin:0;">' + esc(a.bestFor) + '</p>' +
          '</div>' +
          migrationBlock +
          '<p style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.07em;color:#9aa0b8;margin-bottom:8px;">Key capabilities</p>' +
          '<ul style="padding:0;list-style:none;margin:0 0 14px;">' + capList + '</ul>' +
          flowDiagram(a) +
        '</div>' +
      '</details>';
    }).join('');

    /* At-a-glance comparison table */
    var yesCell = function (trueLabel) {
      return '<span style="display:inline-flex;align-items:center;gap:4px;background:#e6f9f0;color:#007a45;' +
             'border-radius:4px;padding:2px 8px;font-size:0.75rem;font-weight:600;">&#10003; ' + (trueLabel || 'Yes') + '</span>';
    };
    var noCell = function () {
      return '<span style="display:inline-flex;align-items:center;background:#f5f5f8;color:#b0b4cc;' +
             'border-radius:4px;padding:2px 8px;font-size:0.75rem;">&mdash;</span>';
    };
    var boolCell = function (val, trueLabel) {
      return val ? yesCell(trueLabel) : noCell();
    };

    var compGroups = [
      {
        heading: 'Fit',
        rows: [
          { label: 'Volume',             key: 'volume',            bool: false },
          { label: 'Customer tier',      key: 'customerTier',      bool: false }
        ]
      },
      {
        heading: 'Architecture',
        rows: [
          { label: 'Authentication',     key: 'authentication',    bool: false },
          { label: 'Screening model',    key: 'screeningModel',    bool: false },
          { label: 'Data delivery',      key: 'dataUpdates',       bool: false },
          { label: 'Data structure & provenance', key: 'dataStructureProvenance', bool: false }
        ]
      },
      {
        heading: 'Capabilities',
        rows: [
          { label: 'Case management',    key: 'caseManagement',    bool: true,  trueLabel: 'Built-in' },
          { label: 'Ongoing screening',  key: 'ongoingScreening',  bool: true },
          { label: 'Audit trail',        key: 'auditTrail',        bool: true,  trueLabel: 'Built-in' },
          { label: 'Bulk operations',    key: 'bulkOperations',    bool: true },
          { label: 'User management',    key: 'userManagement',    bool: true },
          { label: 'Webhooks',           key: 'webhooks',          bool: true,  trueLabel: 'Monitoring alerts' },
          { label: 'Admin portal',       key: 'adminPortal',       bool: true,  trueLabel: 'Available' },
          { label: 'End-user portal',    key: 'endUserPortal',     bool: true,  trueLabel: 'Available' }
        ]
      },
      {
        heading: 'Deployment',
        rows: [
          { label: 'Data residency',     key: 'dataResidency',     bool: false },
          { label: 'Integration effort', key: 'integrationEffort', bool: false }
        ]
      }
    ];

    var colCount = apis.length + 1;
    var tableRows = compGroups.map(function (group) {
      var headingRow =
        '<tr>' +
          '<td colspan="' + colCount + '" style="padding:8px 14px 4px;font-size:0.68rem;font-weight:700;' +
               'text-transform:uppercase;letter-spacing:0.09em;color:#9aa0b8;background:#f5f6fc;' +
               'border-top:2px solid #dde0ea;border-bottom:1px solid #eef0f8;">' +
            esc(group.heading) +
          '</td>' +
        '</tr>';

      var dataRows = group.rows.map(function (row, i) {
        var bg = i % 2 === 0 ? '#fff' : '#fafbff';
        var cells = apis.map(function (a, ai) {
          var val     = a.comparison ? a.comparison[row.key] : '';
          var display = row.bool ? boolCell(val, row.trueLabel) : (val ? esc(String(val)) : noCell());
          var isLast  = ai === apis.length - 1;
          return '<td style="padding:10px 14px;font-size:0.8125rem;color:#3a4060;text-align:center;' +
                 (isLast ? '' : 'border-right:1px solid #eef0f8;') + '">' + display + '</td>';
        }).join('');
        return '<tr style="background:' + bg + ';">' +
          '<td style="padding:10px 14px;font-size:0.8rem;font-weight:600;color:#3a4060;' +
               'border-right:2px solid #dde0ea;background:' + bg + ';' +
               'position:sticky;left:0;z-index:1;white-space:nowrap;">' + esc(row.label) + '</td>' +
          cells +
        '</tr>';
      }).join('');

      return headingRow + dataRows;
    }).join('');

    var compTable =
      '<div class="coll--scroll" style="border:1px solid #dde0ea;border-radius:8px;overflow:auto;max-height:70vh;-webkit-overflow-scrolling:touch;">' +
        '<table style="width:100%;min-width:580px;border-collapse:collapse;">' +
          '<thead>' +
            '<tr style="background:#eef0f8;">' +
              '<th style="padding:12px 14px;font-size:0.75rem;font-weight:700;text-transform:uppercase;' +
                  'letter-spacing:0.06em;color:#5a6180;text-align:left;border-right:1px solid #dde0ea;' +
                  'position:sticky;left:0;top:0;background:#eef0f8;z-index:4;white-space:nowrap;min-width:140px;">Feature</th>' +
              apis.map(function (a, i) {
                var isLast = i === apis.length - 1;
                return '<th style="padding:14px 14px 12px;vertical-align:top;text-align:center;' +
                       'position:sticky;top:0;background:#eef0f8;z-index:3;' +
                       (isLast ? '' : 'border-right:1px solid #dde0ea;') + '">' +
                  '<div style="display:flex;flex-direction:column;align-items:center;gap:5px;">' +
                    '<span style="font-size:0.8rem;font-weight:700;color:#1a1e2e;line-height:1.2;">' + esc(a.name) + '</span>' +
                    '<div style="display:flex;gap:4px;flex-wrap:wrap;justify-content:center;">' +
                      tagPill(a.badge, a.badgeType) +
                      (a.legacy ? '<span class="tag" style="background:#fff0c0;color:#7a5000;">Legacy</span>' : '') +
                    '</div>' +
                  '</div>' +
                '</th>';
              }).join('') +
            '</tr>' +
          '</thead>' +
          '<tbody>' + tableRows + '</tbody>' +
        '</table>' +
      '</div>';

    var tabs =
      '<div class="example-tabs">' +
        '<button class="example-tab active" data-api-tab="glance">At a Glance</button>' +
        '<button class="example-tab"        data-api-tab="detail">Product Detail</button>' +
      '</div>';

    return '<section class="view-section">' +
      '<div class="page-header">' +
        '<h1 class="page-title">API Product Comparison</h1>' +
        '<p class="page-subtitle">' +
          'How World-Check OnDemand, WC1 v2, WC1 v3 and Verify compare across operating model, workflow ownership and delivery fit.' +
        '</p>' +
      '</div>' +

      '<div class="section-intro">' +
        '<p>All four products use World-Check intelligence, but they solve different implementation problems. ' +
        'The real buyer questions are <strong>who owns matching and workflow</strong>, ' +
        '<strong>whether results should create cases or just return a response</strong>, and ' +
        '<strong>how much of the surrounding compliance stack already exists</strong>.</p>' +
      '</div>' +

      tabs +

      '<div id="api-tab-detail" style="display:none;flex-direction:column;gap:8px;">' + productCards + '</div>' +
      '<div id="api-tab-glance" style="display:block;">' + compTable + '</div>' +

    '</section>';
  }

  /* ── View map ────────────────────────────────────────────── */
  var views = {
    'home':                   viewHome,
    'use-case-explorer':      viewUseCaseExplorer,
    'solution-examples':      viewSolutionExamples,
    'capability-explorer':    viewCapabilityExplorer,
    'false-positive-reduction': viewFalsePositiveReduction,
    'sales-talk-track':       viewSalesTalkTrack,
    'api-comparison':         viewApiComparison
  };

  /* ── Public API ──────────────────────────────────────────── */
  return {
    renderView: function (viewId) {
      var container = document.getElementById('main-content');
      if (!container) return;
      var fn = views[viewId] || viewHome;
      container.innerHTML = fn();
      container.focus({ preventScroll: true });
    },
    buildExamplePanel: buildExamplePanel
  };

}());

