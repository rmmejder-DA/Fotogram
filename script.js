
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

function getNotesHtml(i, currentSiteimages) {
  return `<div class="image_grid_item">
              <p class="image_grid_item_p">${imageCategories[i]}</p>
              <button style="background-color: transparent;border-radius: 25px; border:none; padding:0;" onclick="renderFiltered(${i + 1})">
              <img loading="lazy" class="image_grid_img" src="${currentSiteimages[i]}" alt="${imageCategories[i]}"/>
              </button>
        </div>`;
}

function renderFiltered(index) {
  currentImage = 0;
  if (index >= 1 && index <= AllimageArray.length) {
    sliderImages = AllimageArray[index - 1];
  } else {
    sliderImages = AllimageArray[0];
  }
  openDialog(currentImage);
  updateImageInfo();
}
function updateImageInfo() {
  dialogImage.src = sliderImages[currentImage];
  AltTextRef.textContent = `${imageCategories[AllimageArray.indexOf(sliderImages)]}`;
  const altInfoRef = document.getElementById('alt-info');
  altInfoRef.textContent = `${currentImage + 1} / ${sliderImages.length}`;
}

function openDialog(index) {
  currentImage = index;
  dialogImage.src = sliderImages[currentImage];
  if (dialogRef) dialogRef.showModal(currentImage);
  const altInfoRef = document.getElementById('alt-info');
  altInfoRef.textContent = `${currentImage + 1} / ${sliderImages.length}`;
}

function closeDialog() {
  if (dialogRef) dialogRef.close();
}

function prev() {
  if (!sliderImages || sliderImages.length === 0) return;
  currentImage = (currentImage - 1 + sliderImages.length) % sliderImages.length;
  dialogImage.src = sliderImages[currentImage];
}

function next() {
  if (!sliderImages || sliderImages.length === 0) return;
  currentImage = (currentImage + 1) % sliderImages.length;
  dialogImage.src = sliderImages[currentImage];
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