/* Agent avatar cards for Claude chat widgets (show_widget).
   Usage in widget_code (one agent):
     <script src="https://cdn.jsdelivr.net/gh/<user>/<repo>@<tag>/cards.js"></script>
     <div class="av" data-a="mr-tester">Sprawdzam formularz logowania</div>
   Hand-off: two cards in a row; the second one slides in under an arrow:
     <div class="av" data-a="mr-builder" data-l="przekazuje">Zbudowałem formularz</div>
     <div class="av" data-a="mr-tester" data-l="dostaje zadanie">Przetestuj logowanie</div>
   The div text stays readable even if this script can't load. GIFs: <id>-mini.gif next to this file.
   Unknown id: name from data-n, or the id itself. */
(function () {
  var NAMES = {
    "mr-builder": "Mr. Builder", "mr-tester": "Mr. Tester", "miss-optimizer": "Miss Optimizer",
    "mrs-thinker": "Mrs. Thinker", "mr-talker": "Mr. Talker"
  };
  var me = document.currentScript, base = me.src.replace(/[^\/]*$/, "");
  var css = document.createElement("style");
  css.textContent = ".avc{display:flex;align-items:center;gap:12px;padding:.25rem 0}" +
    ".avc img{width:64px;height:64px;image-rendering:pixelated;border-radius:8px;flex:none}" +
    ".avc p{margin:0}.avc .n{font-weight:500}.avc .l{font-weight:400;font-size:13px;color:var(--text-secondary)}" +
    ".avc .t{font-size:14px;color:var(--text-secondary)}" +
    ".avarr{padding:2px 0 2px 26px;font-size:13px;color:var(--text-secondary)}" +
    ".avin{opacity:0;animation:avIn .4s ease-out forwards}@keyframes avIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}";
  document.head.appendChild(css);
  function render() {
    var els = document.querySelectorAll(".av:not(.avc)"), prev = null;
    els.forEach(function (el, i) {
      var id = el.getAttribute("data-a"), name = el.getAttribute("data-n") || NAMES[id] || id;
      var label = el.getAttribute("data-l"), text = el.textContent.trim();
      el.textContent = "";
      el.className = "av avc";
      var img = document.createElement("img"); img.alt = name; img.src = base + id + "-mini.gif";
      var box = document.createElement("div"); box.style.minWidth = "0";
      var p1 = document.createElement("p"), n = document.createElement("span"); n.className = "n"; n.textContent = name; p1.appendChild(n);
      if (label) { var l = document.createElement("span"); l.className = "l"; l.textContent = " " + label; p1.appendChild(l); }
      var p2 = document.createElement("p"); p2.className = "t"; p2.textContent = text;
      box.appendChild(p1); box.appendChild(p2); el.appendChild(img); el.appendChild(box);
      if (i > 0 && prev) { // hand-off: arrow, then the receiver slides in
        var arr = document.createElement("div"); arr.className = "avarr avin"; arr.style.animationDelay = ".5s";
        arr.textContent = "↓ dla " + name; el.parentNode.insertBefore(arr, el);
        el.classList.add("avin"); el.style.animationDelay = ".9s";
      }
      prev = el;
    });
    if (els.length) {
      var h = document.createElement("h2"); h.className = "sr-only";
      h.textContent = els.length > 1 ? "Przekazanie zadania między agentami" : "Agent rozpoczyna pracę";
      els[0].parentNode.insertBefore(h, els[0]);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", render); else render();
  setTimeout(render, 0);
})();
