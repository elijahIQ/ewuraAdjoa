/* =========================================================
   EDIT ME — everything personal lives in this one object.
   ========================================================= */
const CONFIG = {
  // The password shown on the first page and required to log in.
  password: "1020",

  // Her name — used on the message page.
  name: "My friend Adjoa",

  // Photos AND videos for the slideshow, in order. Put the files inside
  // the "images" folder and list their filenames here. Type is detected
  // automatically from the file extension — mix them freely, e.g.:
  // "images/1.jpg", "images/2.mp4", "images/3.png"
  media: [
    "image2.jpg",
    "image5.jpg",
    "image3.jpg",
    "video7.mp4",
    "video2.mp4",
    "video1.mp4",
    "video3.mp4"
    
  ],

  // The birthday message. {{NAME}} is replaced with the name above.
  // Leave blank lines where you want paragraph breaks.
  message:

`

My Dearest Ewura Adjoa,

Happy Birthday, beautiful soul!

I just want you to know how truly happy I am to have you as my friend. You have one of the most beautiful hearts I have ever known — so loving, so caring, so genuinely shy and yet so full of happiness. Your presence alone brings a soft light to any moment.

It is true, we have not really spent so much time together, but please believe me, the small moments we have shared are always a memory I hold close to my heart. They mean so much more than time could ever measure.

On your special day, this is my prayer for you:

"They will be like a tree planted by the water that sends out its roots by the stream. It does not fear when heat comes; its leaves are always green. It has no worries in a year of drought and never fails to bear fruit." - Jeremiah 17:8_

May your life be just like that tree — always rooted, always green, always fruitful, always strong even in hard seasons. May your loving heart never grow tired, and may your happiness never fade.

Enjoy your day to the fullest, my dear friend. You deserve all the love and joy in the world.

Happy Birthday, Ewura Adjoa!


`


};

/* ========= Ambient floating light particles ========= */
function initParticles(count = 22) {
  const container = document.querySelector(".ambient-lights");
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const e = document.createElement("span");
    e.className = "ember";
    const size = 3 + Math.random() * 4;
    e.style.left = Math.random() * 100 + "%";
    e.style.width = size + "px";
    e.style.height = size + "px";
    e.style.setProperty("--drift", (Math.random() * 80 - 40) + "px");
    e.style.animationDuration = (6 + Math.random() * 8) + "s";
    e.style.animationDelay = (Math.random() * 8) + "s";
    container.appendChild(e);
  }
}

/* One-time confetti burst, used on the message page */
function burstConfetti(count = 40) {
  const container = document.querySelector(".ambient-lights");
  if (!container) return;
  const colors = ["#d9a566", "#e8a9c3", "#f6ecdd"];
  for (let i = 0; i < count; i++) {
    const p = document.createElement("span");
    p.className = "confetti-piece";
    p.style.left = Math.random() * 100 + "%";
    p.style.background = colors[i % colors.length];
    p.style.animationDuration = (2.5 + Math.random() * 2) + "s";
    p.style.animationDelay = (Math.random() * 0.6) + "s";
    p.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(p);
    setTimeout(() => p.remove(), 5200);
  }
}

/* Redirect back to login.html unless already unlocked this session */
function guardPage() {
  if (sessionStorage.getItem("bday_unlocked") !== "true") {
    window.location.href = "login.html";
  }
}

// True if a filename looks like a video based on its extension.
function isVideoSrc(src) {
  return /\.(mp4|webm|mov|m4v|ogg)$/i.test(src);
}

// A soft heart placeholder shown if a listed file is missing,
// so the gallery never looks broken while you're adding real media.
const MEDIA_PLACEHOLDER =
  "data:image/svg+xml;utf8," + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="280" height="340">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#e8a9c3"/>
        <stop offset="1" stop-color="#d9a566"/>
      </linearGradient>
    </defs>
    <rect width="280" height="340" fill="url(#g)"/>
    <text x="50%" y="52%" font-size="64" text-anchor="middle" fill="#ffffff" opacity="0.85" dy=".3em">&#10084;</text>
  </svg>`);

document.addEventListener("DOMContentLoaded", initParticles);








