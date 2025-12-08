const dialogRef = document.getElementById('myDialog');
const dialogImage = document.getElementById('dialogImage');

function openDialog() {
  const altInfoRef = document.getElementById('alt-info');
  altInfoRef.textContent = `Bild ${currentImage + 1} von ${sliderImages.length}`;
  if (dialogRef) dialogRef.showModal();
  addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeDialog();
    }
    if (event.key === 'ArrowRight') {
      document.getElementById("nextButton").click();
    }
    if (event.key === 'ArrowLeft') {
      document.getElementById("prevButton").click();
    }
  });
}
function closeDialog() {
  if (dialogRef) dialogRef.close();
}

let img = [
  './cat/0e7d8016-9d3e-45f6-a34f-48d356fe27cc.JPG',
  './cat/2b561ab7-4458-4082-855f-98fdc5f66ebf (2).JPG',
  './cat/5b6371e7-0edd-413b-961b-37198bb9be33 (2).JPG',
  './cat/5cd269ac-a0ee-439f-98c6-83978e743318 (2).JPG',
  './cat/f07d322e-ef42-4e1e-90d5-a0a3284276a4 (2).JPG'
];
let img2 = [
  './fotos/animal-7790230_640.jpg',
  './fotos/cows-7772777_1280.jpg',
  './fotos/fern-9872693_640.jpg',
  './fotos/nangchen-9918045_640.jpg'
];
let img3 = [
  'sportauto/car-49278_1280.jpg',
  './sportauto/car-race-438467_1280.jpg',
  './sportauto/car-63930_1280.jpg',
  './sportauto/sport-4155825_1920.jpg'
];
let img4 = [
  'Advent/christmas-7668272_1280.jpg',
  'Advent/gingerbread-7666269_1280.jpg',
  'Advent/star-6803666_1280.jpg',
  'Advent/table-setting-6859274_1280.jpg'
];
let img5 = [
  'Eagle/birds-217590_1280.jpg',
  'Eagle/eagle-1450672_1280.jpg',
  'Eagle/eagle-1753002_1280.jpg',
  'Eagle/head-723540_1280.jpg'
];
let img6 = [
  'Fuerteventura/squirrel-barbary-3492406_1280.jpg',
  'Fuerteventura/pipit-5683656_1280.jpg',
  'Fuerteventura/monk-parakeet-2884519_1280.jpg',
  'Fuerteventura/lighthouse-8578322_1280.jpg'
];
let img7 = [
  'Hunde/shepherd-dog-4357790_1280.jpg',
  'Hunde/dogs-8613175_1280.jpg',
  'Hunde/dogs-6463032_1280.jpg',
  'Hunde/dogs-4960444_1280.jpg'
];
let img8 = [
  'Internet/browser-773215_1280.png',
  'Internet/earth-2254769_1280.jpg',
  'Internet/tablet-5623396_1280.jpg',
  'Internet/technology-6701504_1280.jpg'
];
let img9 = [
  'MarryChristmas/doll-figures-3015495_1280.jpg',
  'MarryChristmas/santa-claus-1614994_1280.png',
  'MarryChristmas/stollen-6848167_1280.jpg',
  'MarryChristmas/xmas-2703168_1280.jpg'
];
let img10 = [
  'Programmieren/code-1839406_1280.jpg',
  'Programmieren/digitization-6892337_1280.jpg',
  'Programmieren/hacker-5027679_1280.jpg',
  'Programmieren/javascript-736401_1280.png'
];
let img11 = [
  'Regenbogen/rainbow-4047523_1280.jpg',
  'Regenbogen/rainbow-5324147_1280.jpg',
  'Regenbogen/rainbow-7350780_1280.jpg',
  'Regenbogen/waterfall-4751586_1280.jpg'
];
let img12 = [
  'Winter/matterhorn-3019429_1280.jpg',
  'Winter/snow-7658399_1280.jpg',
  'Winter/village-9190397_1280.jpg',
  'Winter/winter-9748652_1280.jpg'
];

// document.images
let currentImage = 0;
let sliderImages = img;

function renderFiltered(index) {
  if (index === 1) {
    render(img);
  }
  else if (index === 2) {
    render(img2);
  }
  else if (index === 3) {
    render(img3);
  }
  else if (index === 4) {
    render(img4);
  }
  else if (index === 5) {
    render(img5);
  }
  else if (index === 6) {
    render(img6);
  }
  else if (index === 7) {
    render(img7);
  }
  else if (index === 8) {
    render(img8);
  }
  else if (index === 9) {
    render(img9);
  }
  else if (index === 10) {
    render(img10);
  }
  else if (index === 11) {
    render(img11);
  }
  else if (index === 12) {
    render(img12);
  }
}

function render(arrimg) {
  if (!Array.isArray(arrimg)) return;
  sliderImages = arrimg;
  currentImage = 0;

  let contentRef = document.getElementById('content');
  contentRef.innerHTML = '';

  for (let i = 0; i < arrimg.length; i++) {
    const thumb = document.createElement('img');
    thumb.src = arrimg[i];
    thumb.alt = '';
    thumb.onclick = (function (index) {
      return function () {
        currentImage = index;
        dialogImage.src = sliderImages[currentImage];
        openDialog();
      };
    })(i);
    // contentRef.appendChild(thumb); Duplikat//
  }

  // Stelle sicher, dass das Dialogbild beim Öffnen das erste Element zeigt
  dialogImage.src = sliderImages[0] || '';
}

document.getElementById("prevButton").onclick = function () {
  if (!sliderImages || sliderImages.length === 0) return;
  currentImage = (currentImage - 1 + sliderImages.length) % sliderImages.length;
  dialogImage.src = sliderImages[currentImage];
  const altInfoRef = document.getElementById('alt-info');
  altInfoRef.textContent = `Bild ${currentImage + 1} von ${sliderImages.length}`;
};

document.getElementById("nextButton").onclick = function () {
  if (!sliderImages || sliderImages.length === 0) return;
  currentImage = (currentImage + 1) % sliderImages.length;
  dialogImage.src = sliderImages[currentImage];
  const altInfoRef = document.getElementById('alt-info');
  altInfoRef.textContent = `Bild ${currentImage + 1} von ${sliderImages.length}`;
};
