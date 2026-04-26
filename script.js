const bgMusic = document.getElementById("bg-music");
const savedTime = localStorage.getItem("bgMusicTime");

if (savedTime) {
  bgMusic.currentTime = parseFloat(savedTime);
}

window.addEventListener(
  "click",
  () => {
    if (bgMusic.paused) {
      bgMusic.play().catch(() => {});
    }
  },
  { once: true },
);

setInterval(() => {
  if (!bgMusic.paused) {
    localStorage.setItem("bgMusicTime", bgMusic.currentTime);
  }
}, 1000);

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  document.getElementById("taskbar-clock").textContent =
    hours + ":" + minutes + " " + ampm;
}
updateClock();
setInterval(updateClock, 1000);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("revealed");
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
);

document
  .querySelectorAll(
    ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale",
  )
  .forEach((el) => {
    observer.observe(el);
  });

const soundInfo = new Audio("sounds/info-button.wav");
const soundClose = new Audio("sounds/closewindow-click.wav");
const soundAccess = new Audio("sounds/access-button.wav");
const soundTroll1 = new Audio("sounds/troll1-click.wav");
const soundTroll2 = new Audio("sounds/troll2-click.wav");
const soundTrash = new Audio("sounds/trash-click.wav");

const soundCatClick = new Audio("sounds/cat-boo-win-taskbar-click.mp3");
const soundTaskbarIcon = new Audio("sounds/info-button.wav");

document.getElementById("skills-btn").addEventListener("click", () => {
  soundInfo.currentTime = 0;
  soundInfo.play().catch(() => {});
  document.getElementById("skills-overlay").classList.add("active");
});

document.getElementById("skills-close").addEventListener("click", () => {
  soundClose.currentTime = 0;
  soundClose.play().catch(() => {});
  document.getElementById("skills-overlay").classList.remove("active");
});

document
  .getElementById("skills-overlay")
  .addEventListener("click", (e) => {
    if (e.target === document.getElementById("skills-overlay")) {
      soundClose.currentTime = 0;
      soundClose.play().catch(() => {});
      document
        .getElementById("skills-overlay")
        .classList.remove("active");
    }
  });

document.querySelectorAll(".project-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    soundAccess.currentTime = 0;
    soundAccess.play().catch(() => {});
  });
});

const troll1 = document.querySelector(".deco-troll1");
if (troll1) {
  troll1.addEventListener("click", () => {
    soundTroll1.currentTime = 0;
    soundTroll1.play().catch(() => {});
  });
}

const troll2 = document.querySelector(".deco-troll2");
if (troll2) {
  troll2.addEventListener("click", () => {
    soundTroll2.currentTime = 0;
    soundTroll2.play().catch(() => {});
  });
}

const trash = document.querySelector(".deco-trash");
if (trash) {
  trash.addEventListener("click", () => {
    soundTrash.currentTime = 0;
    soundTrash.play().catch(() => {});
  });
}

const winButton = document.querySelector(".taskbar-start");
const catGif = document.getElementById("cat-gif");

winButton.addEventListener("click", () => {
  soundCatClick.currentTime = 0;
  soundCatClick.play().catch(() => {});

  catGif.style.display = "block";

  setTimeout(() => {
    catGif.style.display = "none";
  }, 1500);
});

document.querySelectorAll(".taskbar-pin-item").forEach((icon) => {
  icon.addEventListener("click", () => {
    soundTaskbarIcon.currentTime = 0;
    soundTaskbarIcon.play().catch(() => {});
  });
});

const skillSounds = {
  "si-git": new Audio("sounds/skills/git.wav"),
  "si-figma": new Audio("sounds/skills/figma.wav"),
  "si-github": new Audio("sounds/skills/github.wav"),
  "si-photoshop": new Audio("sounds/skills/photoshop.wav"),
  "si-angular": new Audio("sounds/skills/angular.wav"),
  "si-intellij": new Audio("sounds/skills/intellij.wav"),
  "si-javascript": new Audio("sounds/skills/javascript.wav"),
  "si-tailwind": new Audio("sounds/skills/tailwind.wav"),
  "si-claude": new Audio("sounds/skills/claude.wav"),
  "si-mysql": new Audio("sounds/skills/mysql.wav"),
  "si-docker": new Audio("sounds/skills/docker.wav"),
  "si-vscode": new Audio("sounds/skills/vscode.wav"),
  "si-react": new Audio("sounds/skills/react.wav"),
  "si-tor": new Audio("sounds/skills/tor.wav"),
  "si-python": new Audio("sounds/skills/python.wav"),
};

document.querySelectorAll(".si-wrap").forEach((wrap) => {
  wrap.style.cursor = "pointer";
  wrap.style.pointerEvents = "auto";
  const img = wrap.querySelector(".si");
  if (img) img.style.pointerEvents = "none";
  wrap.addEventListener("click", () => {
    for (const [cls, sound] of Object.entries(skillSounds)) {
      if (wrap.classList.contains(cls)) {
        sound.currentTime = 0;
        sound.play().catch(() => {});
        break;
      }
    }
  });
});

const soundTitle = new Audio("sounds/kaxxaraboy-title-click.wav");
const titleEl = document.querySelector(".text-titulo");
if (titleEl) {
  titleEl.style.cursor = "pointer";
  titleEl.addEventListener("click", () => {
    soundTitle.currentTime = 0;
    soundTitle.play().catch(() => {});
  });
}

const soundPfp = new Audio("sounds/hello-pfp-click.wav");
const pfpEl = document.querySelector(".info-pfp-img");
if (pfpEl) {
  pfpEl.style.cursor = "pointer";
  pfpEl.style.pointerEvents = "auto";
  pfpEl.addEventListener("click", () => {
    soundPfp.currentTime = 0;
    soundPfp.play().catch(() => {});
  });
}

setInterval(() => {
  console.log("%cBy kaxxara", "color: #ff00ff; font-size: 24px; font-weight: bold;");
  console.log("%chttps://github.com/romanticmuffy", "color: #00ffff; font-size: 16px;");
}, 5000);

document.addEventListener("contextmenu", (e) => e.preventDefault());

document.addEventListener("selectstart", (e) => e.preventDefault());

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey && ["c", "a", "s", "u", "p", "x"].includes(e.key.toLowerCase())) || e.key === "F12") {
    e.preventDefault();
  }
});

Object.defineProperty(document, "hidden", { get: () => false });
Object.defineProperty(Object.prototype, "hidden", { get: () => false });
