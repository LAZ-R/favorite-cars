// VARIABLES //////////////////////////////////////////////////////////////////////////////////////

import { getBrandsDom } from "../../services/cars.service..js";
import { getSvgIcon } from "../../services/icons.service.js";

const MAIN = document.getElementById('main');

// FUNCTIONS //////////////////////////////////////////////////////////////////////////////////////

export function render() {
  MAIN.innerHTML = `
    <h1>Marques</h1>
    ${getBrandsDom()}
  `;
}

export function onFullScreenContainerClick() {
  let fullScreenContainer = document.getElementById('fullScreenContainer');
  fullScreenContainer.classList.add('hidden');
}
window.onFullScreenContainerClick = onFullScreenContainerClick;