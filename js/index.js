'use strict';

import card from "./modules/card.js";

const documentReady = () => {
  generateCards();
};

document.addEventListener('DOMContentLoaded', documentReady);