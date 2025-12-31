
let AllimageArray = [
  CatImageArray,
  NatureImageArray,
  SportCarImageArray,
  AdventImageArray,
  EagleImageArray,
  FuerteventuraImageArray,
  DogImageArray,
  CodeImageArray,
  ChristmasImageArray,
  InternetImageArray,
  RainbowImageArray,
  WinterImageArray
];

let imageCategories = [
  "KATZEN",
  "NATUR",
  "SPORTWAGEN",
  "ADVENT",
  "ADLER",
  "FUERTEVENTURA",
  "HUNDE",
  "PROGRAMMIEREN",
  "WEIHNACHTEN",
  "INTERNET",
  "REGENBOGEN",
  "WINTER"
];

let siteimages = SitePictureArray;

let currentImage = 0;

let sliderImages = AllimageArray[0] || [];

let SiteimgRef = document.getElementById('contentimg');

let dialogRef = document.getElementById('myDialog');

let dialogImage = document.getElementById('dialogImage');

let AltTextRef = document.getElementById('imageInfo');

function render(currentSiteimages = siteimages) {
  SiteimgRef.innerHTML = '';
  for (let i = 0; i < currentSiteimages.length; i++) {
    SiteimgRef.innerHTML += getNotesHtml(i, currentSiteimages);
  }
}

function openDialog(i) {
  currentImage = i;
  dialogImage.src = sliderImages[currentImage];
  if (dialogRef) dialogRef.showModal();
  const altInfoRef = document.getElementById('alt-info');
  altInfoRef.textContent = `${currentImage + 1} / ${sliderImages.length}`;
}

function renderFiltered(index) {
  currentImage = 0;
  if (index >= 1 && index <= AllimageArray.length) {
    sliderImages = AllimageArray[index - 1];
  } else {
    sliderImages = [];
  }
  updateImageInfo();
  openDialog(0);
}

function closeDialog() {
  if (dialogRef) dialogRef.close();
}

function getNotesHtml(i, siteimages) {
  return `<div class="image_grid_item">
              <p class="image_grid_item_p">${imageCategories[i]}</p>
              <button style="background-color: transparent;border-radius: 25px; border:none; padding:0;" onclick="renderFiltered(${i + 1})">
              <img class="image_grid_img" src="${siteimages[i]}" alt="${imageCategories[i]}"/>
              </button>
        </div>`;
}

function updateImageInfo() {
  dialogImage.src = sliderImages[currentImage];
  if (!sliderImages || sliderImages.length === 0) return;
  AltTextRef.textContent = `${imageCategories[AllimageArray.indexOf(sliderImages)]}`;
  const altInfoRef = document.getElementById('alt-info');
  altInfoRef.textContent = `${currentImage + 1} / ${sliderImages.length}`;
}

function prev() {
  if (!sliderImages || sliderImages.length === 0) return;
  currentImage = (currentImage - 1 + sliderImages.length) % sliderImages.length;
  updateImageInfo();
}

function next() {
  if (!sliderImages || sliderImages.length === 0) return;
  currentImage = (currentImage + 1) % sliderImages.length;
  updateImageInfo();
}

document.addEventListener('keydown', function (event) {
  if (dialogRef && dialogRef.open) {
    if (event.key === 'ArrowLeft') {
      prev();
    } else if (event.key === 'ArrowRight') {
      next();
    }
  }
});