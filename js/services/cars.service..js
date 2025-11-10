import { BRANDS } from "../data/cars.data.js";
import { getSvgIcon } from "./icons.service.js";


export function getBrandsDom() {
  let str = ``
  let currentLetter = '';

  for (let brand of BRANDS) {
    if (brand.name[0] != currentLetter) {
      currentLetter = brand.name[0];
      str += `<h2>${currentLetter}</h2>`
    }
    str += `
    <div class="lzr-drawer lzr-flat lzr-primary lzr-margin-bottom">
      <div class="tile-header">
        <span class="header-title" style="text-transform: uppercase;">${brand.name}</span>
        <div class="tile-caret">
          ${getSvgIcon('chevron-right', 'm', null)}
        </div>
        <input type="checkbox">
      </div>
      <div class="expandable-wrapper">
        <div class="expandable-inner">
          <div class="inner-body">
    `;
    for (let car of brand.cars) {
      str += `
      <div class="lzr-drawer lzr-flat">
        <div class="tile-header">
          <span class="header-title">${car.name}<br><span style="font-size: 14px; font-weight: 400;">${car.year}</span></span>
          <div class="tile-caret">
            ${getSvgIcon('chevron-right', 'm', null)}
          </div>
          <input type="checkbox">
        </div>
        <div class="expandable-wrapper">
          <div class="expandable-inner">
            <div class="inner-body">
            <div class="pictures-container">
      `;
      for (let pictureSrc of car.picturesSrc) {
        str += `<img src="./medias/images/cars-img/${pictureSrc}" onclick="onCarImageClick('${pictureSrc}')"/>`
      }
      str += `</div>`;
      str += `
      </div>
      </div>
      </div>
      </div>
      `;
      if (brand.cars.indexOf(car) != brand.cars.length - 1) {
        str += `<hr>`;
      }
    }
    str += `
          </div>
        </div>
      </div>
    </div>
    `;
  }
  return str;
}

export function onCarImageClick(imgSrc) {
  //console.log(imgSrc);
  let fullScreenContainer = document.getElementById('fullScreenContainer');

  fullScreenContainer.innerHTML = `
  <img src="./medias/images/cars-img/${imgSrc}" onclick="onCarImageClick('${imgSrc}')"/>
  `;
  fullScreenContainer.classList.remove('hidden');
}
window.onCarImageClick = onCarImageClick;

let carsCount = 0
for (let brand of BRANDS) {
  for (let car of brand.cars) {
    carsCount += 1;
  }
}
console.log(`Cars count : ${carsCount}`)