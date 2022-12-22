'use strict';

import foods from "./modules/card.js";

const documentReady = () => {
  foods();
};

document.addEventListener('DOMContentLoaded', documentReady);