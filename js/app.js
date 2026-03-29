/* =============================================================
   app.js — application initialisation and state
   ============================================================= */

/* ── App state ───────────────────────────────────────────────── */
var AppState = {
  currentView: 'home'
};

/* ── Boot ────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  // Render the default view
  Render.renderView(AppState.currentView);

  // Wire up all interactions (nav links + any in-view cards)
  Interactions.init();
});
