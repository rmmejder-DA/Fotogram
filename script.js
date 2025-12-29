
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

let currentImage = 0;

let sliderImages = AllimageArray[0] || [];

let siteimages = SitePictureArray;

let dialogRef = document.getElementById('myDialog');

let dialogImage = document.getElementById('dialogImage');

let AltTextRef = document.getElementById('imageInfo');

function render(currentSiteimages = siteimages) {
  let SiteimgRef = document.getElementById('contentimg');
  SiteimgRef.innerHTML = '';
  for (let i = 0; i < currentSiteimages.length; i++) {
    SiteimgRef.innerHTML += getNotesHtml(i, currentSiteimages);
  }
}

function renderFiltered(index) {
  currentImage = 0;
  if (index >= 1 && index <= AllimageArray.length) {
    sliderImages = AllimageArray[index - 1];
  } 
    updateImageInfo(0);
  openDialog(0);
}

function getNotesHtml(i, siteimages) {
  return `<div class="image_grid_item">
              <p class="image_grid_item_p">${imageCategories[i]}</p>
              <button style="background-color: transparent;border-radius: 25px; border:none; padding:0;" onclick="renderFiltered(${i + 1}); openDialog(0);">
              <img class="image_grid_img" src="${siteimages[i]}" alt="${imageCategories[currentImage]}"/>
              </button>
        </div>`;
};

function openDialog(i) {
  currentImage = i || 0;
  dialogImage.src = sliderImages[currentImage];
  if (dialogRef) dialogRef.showModal();
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
  if (dialogRef.open) {
    if (event.key === 'ArrowLeft') {
      prev();
    } else if (event.key === 'ArrowRight') {
      next();
    }
  }
});
function closeDialog() {
  if (dialogRef) dialogRef.close();
};

function updateImageInfo() {
  AltTextRef.textContent = `${imageCategories[AllimageArray.indexOf(sliderImages)]}`;
  dialogImage.src = sliderImages[currentImage];
  const altInfoRef = document.getElementById('alt-info');
  altInfoRef.textContent = `${currentImage + 1} / ${sliderImages.length}`;
};
render();