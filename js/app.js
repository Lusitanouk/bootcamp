/* =============================================================
   app.js — application initialisation and state
   ============================================================= */

/* ── App state ───────────────────────────────────────────────── */
var AppState = {
  currentView: 'home',
  selectedScenario: null,
  selectedProducts: [],
  filters: {
    industry: null,
    volume: null,
    integrationPreference: null,
    reviewModel: null
  }
};

/* ── Boot ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  // Render the default view
  Render.renderView(AppState.currentView);

  // Wire up all interactions (nav links + any in-view cards)
  Interactions.init();
});
