const memeStatic = document.querySelector(".memeStatic");
const memeDynamic = document.querySelector(".memeDynamic");
const memeContent = document.querySelector(".meme-content");
const startScreen = document.querySelector(".startScreen");

function showMemeStatic() {
  memeStatic.src =
    staticMemesRandom[Math.floor(Math.random() * staticMemesRandom.length)];
}

function showMemeDynamic() {
  memeDynamic.src =
    dynamicMemesRandom[Math.floor(Math.random() * dynamicMemesRandom.length)];
}

function showMemes() {
  memeContent.classList.add("meme-content-Show");
  startScreen.classList.add("startScreen-NoShow");
}

const staticMemesRandom = [
  "https://img-9gag-fun.9cache.com/photo/a81bWR1_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/avA1yoW_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/arnnXDp_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/angRWyB_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/a81EzjQ_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/ajggPAG_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/ajg5v7Q_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/aBn04LN_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/azM3M7x_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/aWgm0Vd_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/aV7APAw_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/aE8Yz7O_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/axBV2nM_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/aYrVpz7_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/aNp6gQ4_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/a91yg6j_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/aDDovnG_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/aOQd6KN_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/aDdpxZO_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/a21Z1vO_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/ay9xyD8_700bwp.webp",
  "https://img-9gag-fun.9cache.com/photo/aGzBxL0_700bwp.webp",
];

const dynamicMemesRandom = [
  "https://img-9gag-fun.9cache.com/photo/ajmwNN0_460svav1.mp4",
  "https://img-9gag-fun.9cache.com/photo/aze1gEq_460svav1.mp4",
  "https://img-9gag-fun.9cache.com/photo/abVw22O_460svav1.mp4",
  "https://img-9gag-fun.9cache.com/photo/aO3Wy5E_460svvp9.webm",
  "https://img-9gag-fun.9cache.com/photo/aBnLy2D_460svav1.mp4",
  "https://img-9gag-fun.9cache.com/photo/avA89wW_460svav1.mp4",
  "https://img-9gag-fun.9cache.com/photo/ajmo6gR_460svav1.mp4",
  "https://img-9gag-fun.9cache.com/photo/aDDWKy9_460svav1.mp4",
  "https://img-9gag-fun.9cache.com/photo/aLpq0bA_460svav1.mp4",
  "https://img-9gag-fun.9cache.com/photo/aGz0g3n_460svav1.mp4",
];
