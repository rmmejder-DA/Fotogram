const dialogRef = document.getElementById('myDialog');
const dialogImage = document.getElementById('dialogImage');

function openDialog() {
  const altInfoRef = document.getElementById('alt-info');
  altInfoRef.textContent = ` ${currentImage + 1} / ${sliderImages.length}`;
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
  
  // const imageInfoRef = document.getElementById('image-info');
  // imageInfoRef.textContent = dialogImage.imgAlt || 'Kein Alt-Text vorhanden';
}
function closeDialog() {
  if (dialogRef) dialogRef.close();
}

let img = [
  './cat/katzen-4604843_1280.jpg',
  './cat/f07d322e-ef42-4e1e-90d5-a0a3284276a4 (2).JPG',
  './cat/d2058bfe-21c4-4015-9a00-6fa02f13d25a (2).JPG',
  './cat/d998f545-75d8-4822-bd76-41692cf74776 (2).JPG',
  './cat/cat-8612685_1280.jpg',
  './cat/bd374f12-c955-4e1b-9368-1f532babfa2c 1.JPG',
  './cat/03192c9a-4b0f-4372-9c87-6cec90261d2c (2).JPG',
  './cat/447afcc7-44a2-4916-87af-8297d2ac1c5b (2).JPG',
  './cat/66f1dc84-6c22-41db-9c4d-9a0d9407fbc6.JPG',
  './cat/6b8b4db4-7d47-4fb9-a581-ac9946f7a03c.JPG',
  './cat/5cd269ac-a0ee-439f-98c6-83978e743318 (2).JPG',
  './cat/5b6371e7-0edd-413b-961b-37198bb9be33 (2).JPG',
  './cat/2b561ab7-4458-4082-855f-98fdc5f66ebf (2).JPG',
  './cat/0e7d8016-9d3e-45f6-a34f-48d356fe27cc.JPG'
];
let img2 = [
  './Natural/bear-8275920_1280.jpg', 
  './Natural/beetle-7997225_1280.jpg', 
  './Natural/berg.jpg', 
  './Natural/cows-7772777_1280.jpg', 
  './Natural/daisy-1406895_1280.jpg', 
  './Natural/fern-9872693_640.jpg', 
  './Natural/fly-637949_1280.jpg', 
  './Natural/mount-fuji-2297961_1280.jpg', 
  './Natural/nangchen-9918045_640.jpg', 
  './Natural/snake-9059936_1280.jpg', 
  './Natural/squirrel-8367079_1280.jpg', 
  './Natural/strawberry-7224875_1280.jpg', 
  './Natural/volcano-3779159_1280.jpg',
  './Natural/road-1072821_1280.jpg'
];
let img3 = [
  './sportauto/car-49278_1280.jpg',
  './sportauto/car-race-438467_1280.jpg',
  './sportauto/car-63930_1280.jpg',
  './sportauto/sport-4155825_1920.jpg',
  './sportauto/automobile-2406393_1280.jpg', 
  './sportauto/car-2275763_1280.jpg', 
  './sportauto/ferrari-190036_1280.jpg', 
  './sportauto/giugiaro-753852_1280.jpg', 
  './sportauto/mclaren-4535102_1280.jpg', 
  './sportauto/model-car-2091416_1280.jpg', 
  './sportauto/nissan-silvia-s15-4418190_1280.jpg', 
  './sportauto/race-car-1112032_1280.jpg', 
  './sportauto/sports-car-6282703_1280.jpg', 
  './sportauto/supercar-8589586_640.png'
];
let img4 = [
  './Advent/christmas-7668272_1280.jpg',
  './Advent/gingerbread-7666269_1280.jpg',
  './Advent/star-6803666_1280.jpg',
  './Advent/table-setting-6859274_1280.jpg',
  './Advent/advent-1104854_1280.jpg', 
  './Advent/bullet-65825_1280.jpg', 
  './Advent/characters-1690782_1280.jpg', 
  './Advent/christmas-5850470_1280.jpg', 
  './Advent/christmas-balls-6862056_1280.jpg', 
  './Advent/christmas-market-7664171_1280.jpg', 
  './Advent/nutcracker-3023998_1280.jpg', 
  './Advent/nuts-3853208_1280.jpg', 
  './Advent/sheet-music-8398449_1280.jpg', 
  './Advent/star-514848_1280.jpg'
];
let img5 = [
  './Eagle/birds-217590_1280.jpg',
  './Eagle/eagle-1450672_1280.jpg',
  './Eagle/eagle-1753002_1280.jpg',
  './Eagle/head-723540_1280.jpg',
  './Eagle/adler-4840580_1280.png', 
  './Eagle/adler-5544260_1280.jpg', 
  './Eagle/animal-3938221_1280.jpg', 
  './Eagle/attack-3630365_1280.jpg', 
  './Eagle/bald-eagles-3112610_1280.jpg', 
  './Eagle/beer-3786988_1280.jpg', 
  './Eagle/bird-6342958_1280.jpg', 
  './Eagle/eagle-5822300_1280.jpg', 
  './Eagle/eagle-5822303_1280.jpg', 
  './Eagle/eagle-6239046_1280.jpg', 
  './Eagle/eagle-8849052_1280.jpg'
];
let img6 = [
  './Fuerteventura/squirrel-barbary-3492406_1280.jpg',
  './Fuerteventura/pipit-5683656_1280.jpg',
  './Fuerteventura/monk-parakeet-2884519_1280.jpg',
  './Fuerteventura/lighthouse-8578322_1280.jpg',
  './Fuerteventura/beach-2793276_1280.jpg', 
  './Fuerteventura/birds-3476418_1280.jpg', 
  './Fuerteventura/coast-5870088_1280.jpg', 
  './Fuerteventura/costa-3910743_1280.jpg', 
  './Fuerteventura/crab-1022645_1280.jpg', 
  './Fuerteventura/fuerteventura-4859204_1280.jpg', 
  './Fuerteventura/landscape-4884972_1280.jpg', 
  './Fuerteventura/ruddy-turnstone-5800759_1280.jpg', 
  './Fuerteventura/surf-900287_1280.jpg', 
  './Fuerteventura/volcano-2352450_1280.jpg'
];
let img7 = [
  './Hunde/shepherd-dog-4357790_1280.jpg',
  './Hunde/dogs-8613175_1280.jpg',
  './Hunde/dogs-6463032_1280.jpg',
  './Hunde/dogs-4960444_1280.jpg',
  './Hunde/ai-generated-9437073_1280.png',
  './Hunde/cute-1917049_1280.jpg',
  './Hunde/dogs-1299485_1280.png',
  './Hunde/dogs-2207923_1280.jpg',
  './Hunde/dogs-7248400_1280.jpg',
  './Hunde/great-dane-3011826_1280.jpg',
  './Hunde/kennels-for-pets-3821861_1280.jpg',
  './Hunde/labradors-7855208_1280.jpg',
  './Hunde/pets-962215_1280.jpg',
  './Hunde/puppy-1040951_1280.jpg'
];
let img8 = [
  './Internet/browser-773215_1280.png',
  './Internet/earth-2254769_1280.jpg',
  './Internet/tablet-5623396_1280.jpg',
  './Internet/technology-6701504_1280.jpg',
  './Internet/apple-1867762_1280.jpg', 
  './Internet/big-895567_1280.jpg', 
  './Internet/computer-5623398_1280.jpg', 
  './Internet/eye-669157_1280.jpg', 
  './Internet/future-7130603_1280.jpg', 
  './Internet/industry-4330186_1280.jpg', 
  './Internet/internet-1020137_1280.jpg', 
  './Internet/job-7291427_1280.png', 
  './Internet/monkey-4042658_1280.jpg', 
  './Internet/web-1045994_1280.jpg'
];
let img9 = [
  './MarryChristmas/doll-figures-3015495_1280.jpg',
  './MarryChristmas/santa-claus-1614994_1280.png',
  './MarryChristmas/stollen-6848167_1280.jpg',
  './MarryChristmas/xmas-2703168_1280.jpg',
  './MarryChristmas/christmas-210289_1280.jpg', 
  './MarryChristmas/christmas-background-1869989_1280.jpg', 
  './MarryChristmas/christmas-background-4669449_1280.jpg', 
  './MarryChristmas/christmas-tree-574742_1280.jpg', 
  './MarryChristmas/christmas-tree-2928142_1280.jpg', 
  './MarryChristmas/christmas-tree-5819465_1280.jpg', 
  './MarryChristmas/merry-christmas-6691616_1280.png', 
  './MarryChristmas/moscow-3872942_1280.jpg', 
  './MarryChristmas/snowflake-1918794_1280.jpg', 
  './MarryChristmas/snowman-8413769_1280.jpg'
];
let img10 = [
  './Programmieren/code-1839406_1280.jpg',
  './Programmieren/digitization-6892337_1280.jpg',
  './Programmieren/hacker-5027679_1280.jpg',
  './Programmieren/javascript-736401_1280.png',
  './Programmieren/ai-generated-8329581_1280.jpg', 
  './Programmieren/code-geek-2680204_640.png', 
  './Programmieren/developer-8829709_1280.jpg', 
  './Programmieren/emoji-4826138_640.png', 
  './Programmieren/factory-7281686_1280.png', 
  './Programmieren/hello-world-1333103_1280.jpg', 
  './Programmieren/mockup-5290462_1280.jpg', 
  './Programmieren/programmer-7633812_1280.jpg', 
  './Programmieren/technician-3652287_1280.jpg', 
  './Programmieren/web-3157323_1280.jpg'
];
let img11 = [
  './Regenbogen/rainbow-4047523_1280.jpg',
  './Regenbogen/rainbow-5324147_1280.jpg',
  './Regenbogen/rainbow-7350780_1280.jpg',
  './Regenbogen/waterfall-4751586_1280.jpg',
  './Regenbogen/ai-generated-7819238_1280.jpg',
  './Regenbogen/ai-generated-8316188_1280.jpg', 
  './Regenbogen/bubble-3026504_1280.jpg', 
  './Regenbogen/eye-3348431_1280.jpg', 
  './Regenbogen/rainbow-26389_1280.png', 
  './Regenbogen/rainbow-1513852_1280.jpg', 
  './Regenbogen/rainbow-2362803_1280.jpg', 
  './Regenbogen/rainbow-5156768_1280.jpg', 
  './Regenbogen/rainbow-9440893_1280.jpg', 
  './Regenbogen/soap-bubble-3490954_1280.jpg'
];
let img12 = [
  './Winter/matterhorn-3019429_1280.jpg',
  './Winter/snow-7658399_1280.jpg',
  './Winter/village-9190397_1280.jpg',
  './Winter/winter-9748652_1280.jpg',
  './Winter/bird-8424336_1280.jpg', 
  './Winter/chiemsee-lake-8523044_1280.jpg', 
  './Winter/field-8419729_1280.jpg', 
  './Winter/houses-9116899_1280.png', 
  './Winter/icicle-7631570_1280.jpg', 
  './Winter/pine-cone-8454689_1280.jpg', 
  './Winter/robin-8373155_1280.jpg', 
  './Winter/soap-bubble-1986657_1280.jpg', 
  './Winter/train-6907884_1280.jpg', 
  './Winter/truck-4666300_1280.jpg'
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
  }
  dialogImage.src = sliderImages[0] || '';
}

document.getElementById("prevButton").onclick = function () {
  if (!sliderImages || sliderImages.length === 0) return;
  currentImage = (currentImage - 1 + sliderImages.length) % sliderImages.length;
  dialogImage.src = sliderImages[currentImage];
  const altInfoRef = document.getElementById('alt-info');
  altInfoRef.textContent = `${currentImage + 1} / ${sliderImages.length}`;
};

document.getElementById("nextButton").onclick = function () {
  if (!sliderImages || sliderImages.length === 0) return;
  currentImage = (currentImage + 1) % sliderImages.length;
  dialogImage.src = sliderImages[currentImage];
  const altInfoRef = document.getElementById('alt-info');
  altInfoRef.textContent = `${currentImage + 1} / ${sliderImages.length}`;
};