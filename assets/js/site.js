document.querySelector(".theme-toggle")?.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);
});

document.querySelectorAll(".copy").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const target = btn.dataset.copyTarget && document.getElementById(btn.dataset.copyTarget);
    const text = btn.dataset.copy || (target && target.textContent.trim());
    if (!text) return;
    await navigator.clipboard.writeText(text);
    const label = btn.textContent;
    btn.textContent = "Copied";
    btn.classList.add("is-done");
    setTimeout(() => {
      btn.textContent = label;
      btn.classList.remove("is-done");
    }, 1600);
  });
});

// Talk player: YouTube talks open in a dialog with a synced transcript.
(() => {
  const dlg = document.querySelector(".player");
  if (!dlg || typeof dlg.showModal !== "function") return; // links fall back to YouTube
  const titleEl = dlg.querySelector(".player-title");
  const ytLink = dlg.querySelector(".player-yt");
  const panel = dlg.querySelector(".player-transcript");
  const list = dlg.querySelector(".transcript-lines");
  const cache = new Map();
  let player, timer, lines = [], current = -1, userScrolledAt = 0;

  const fmt = (s) => {
    s = Math.floor(s);
    const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = String(s % 60).padStart(2, "0");
    return h ? `${h}:${String(m).padStart(2, "0")}:${sec}` : `${m}:${sec}`;
  };

  let apiReady;
  const loadApi = () => apiReady ??= new Promise((resolve) => {
    window.onYouTubeIframeAPIReady = resolve;
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    document.head.append(s);
  });

  const renderTranscript = (data) => {
    lines = data || [];
    current = -1;
    list.replaceChildren(...lines.map((l, i) => {
      const li = document.createElement("li");
      const b = document.createElement("button");
      b.type = "button";
      b.dataset.i = i;
      const t = document.createElement("span");
      t.className = "transcript-time";
      t.textContent = fmt(l.start);
      b.append(t, document.createTextNode(l.text));
      li.append(b);
      return li;
    }));
    panel.hidden = !lines.length;
    dlg.classList.toggle("no-transcript", !lines.length);
    panel.scrollTop = 0;
  };

  const sync = () => {
    if (!player?.getCurrentTime || !lines.length) return;
    const now = player.getCurrentTime();
    let i = current;
    if (i < 0 || lines[i].start > now) i = -1;
    while (i + 1 < lines.length && lines[i + 1].start <= now + 0.25) i++;
    if (i === current) return;
    list.children[current]?.classList.remove("is-current");
    current = i;
    const li = list.children[i];
    if (!li) return;
    li.classList.add("is-current");
    if (Date.now() - userScrolledAt > 4000) {
      panel.scrollTo({ top: li.offsetTop - panel.clientHeight / 3, behavior: "smooth" });
    }
  };

  const open = async (a) => {
    const id = a.dataset.video;
    titleEl.textContent = a.dataset.title || "";
    ytLink.href = a.href;
    renderTranscript([]);
    dlg.showModal();
    const src = a.dataset.transcript;
    if (src) {
      if (!cache.has(src)) cache.set(src, fetch(src).then((r) => r.json()).catch(() => []));
      cache.get(src).then((data) => dlg.open && renderTranscript(data));
    }
    await loadApi();
    if (!dlg.open) return;
    const opts = { videoId: id, host: "https://www.youtube-nocookie.com",
      playerVars: { autoplay: 1, rel: 0, modestbranding: 1, playsinline: 1 } };
    if (player) player.loadVideoById(id);
    else player = new YT.Player("player-frame", opts);
    clearInterval(timer);
    timer = setInterval(sync, 300);
  };

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-video]");
    if (!a || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return;
    e.preventDefault();
    open(a);
  });

  list.addEventListener("click", (e) => {
    const b = e.target.closest("button[data-i]");
    if (!b || !player?.seekTo) return;
    userScrolledAt = 0;
    player.seekTo(lines[b.dataset.i].start, true);
    player.playVideo();
  });
  ["wheel", "touchmove"].forEach((ev) => panel.addEventListener(ev, () => (userScrolledAt = Date.now()), { passive: true }));

  dlg.querySelector(".player-close").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", () => {
    clearInterval(timer);
    player?.pauseVideo?.();
  });
})();
