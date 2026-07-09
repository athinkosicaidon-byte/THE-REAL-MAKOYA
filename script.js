const imageFiles = [
  { path: "../ACYZ9251.JPG", caption: "A bright and joyful camp morning." },
  { path: "../ARWOE7389.JPG", caption: "Friends gathered in warm fellowship." },
  { path: "../BGQB7189.JPG", caption: "Smiles that captured the spirit of camp." },
  { path: "../DVJC4590.JPG", caption: "Moments of laughter and togetherness." },
  { path: "../EEGWE0383.JPG", caption: "A peaceful scene from the camp grounds." },
  { path: "../ESPDE1100.JPG", caption: "Cherished memories shared under the sky." },
  { path: "../FFBME6679.JPG", caption: "A happy gathering of camp friends." },
  { path: "../FMFI9908.JPG", caption: "The joy of being together again." },
  { path: "../FXOC0170.JPG", caption: "A beautiful reminder of camp days." },
  { path: "../HSLQ9995.JPG", caption: "Memories made with heart and laughter." },
  { path: "../HWYME7277.JPG", caption: "A calm moment in the middle of the fun." },
  { path: "../IKUY6317.JPG", caption: "Friendship shining through every picture." },
  { path: "../IMG_6419.JPG", caption: "A treasured snapshot from camp life." },
  { path: "../IMG_6450.JPG", caption: "The warmth of community and joy." },
  { path: "../IMG_6468.JPG", caption: "A special moment worth remembering." },
  { path: "../IMG_6475.JPG", caption: "The happiness of shared experiences." },
  { path: "../IMG_6502.JPG", caption: "A classic camp memory in full color." },
  { path: "../IMG_6515.JPG", caption: "A smile that says it all." },
  { path: "../IMG_6520.JPG", caption: "Moments that made camp unforgettable." },
  { path: "../IMG_6536.JPG", caption: "The energy and excitement of the event." },
  { path: "../IMG_6572.JPG", caption: "A beautiful glimpse of the camp spirit." },
  { path: "../IMG_6577.JPG", caption: "The kind of memory that stays forever." },
  { path: "../IMG_6592.JPG", caption: "Celebrating life, friendship, and joy." },
  { path: "../IMG_6601.JPG", caption: "A precious scene from the camp experience." },
  { path: "../IMG_6731.JPG", caption: "Simple moments with lasting meaning." },
  { path: "../IMG_7702.JPG", caption: "The beauty of togetherness at camp." },
  { path: "../IMG_7703.JPG", caption: "Another memory to treasure forever." },
  { path: "../IMG_E6419.JPG", caption: "A heartfelt picture from a special day." },
  { path: "../MQGE3768.JPG", caption: "The laughter and love of camp life." },
  { path: "../QMJD4300.JPG", caption: "A joyful reminder of great times shared." },
  { path: "../SQNP3274.JPG", caption: "A peaceful memory captured in time." },
  { path: "../SYEVE7187.JPG", caption: "Camp moments filled with sunshine and smiles." },
  { path: "../UVHZ8454.JPG", caption: "A little piece of the camp story." },
  { path: "../WDWOE9606.JPG", caption: "Friends and memories in one frame." },
  { path: "../WHZAE8037.JPG", caption: "A lasting picture of happiness and fellowship." }
];

const videoFiles = [
  { path: "../BVNP1865.MOV", caption: "A lively video of camp energy and fun." },
  { path: "../IMG_6468.MOV", caption: "A moving memory from the heart of camp." },
  { path: "../IMG_E6419.MOV", caption: "A special video capturing joyful moments." },
  { path: "../MEPJ2026.MOV", caption: "A lively clip filled with camp excitement." },
  { path: "../OGGY2755.MOV", caption: "A memorable video of friendship and celebration." },
  { path: "../VYLL7212.MOV", caption: "A treasured camp memory in motion." }
];

const gallery = document.getElementById("media-gallery");

function createMediaCard(mediaItem, type) {
  const card = document.createElement("article");
  card.className = "media-card";

  const media = document.createElement(type === "image" ? "img" : "video");
  media.src = mediaItem.path;
  media.alt = mediaItem.caption;
  media.loading = "lazy";

  if (type === "video") {
    media.controls = true;
    media.preload = "metadata";
  }

  const label = document.createElement("p");
  label.className = "media-label";
  label.textContent = mediaItem.caption;

  card.appendChild(media);
  card.appendChild(label);
  gallery.appendChild(card);
}

imageFiles.forEach((mediaItem) => createMediaCard(mediaItem, "image"));
videoFiles.forEach((mediaItem) => createMediaCard(mediaItem, "video"));
