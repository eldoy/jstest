"use strict";

async function init() {
  await new Promise(r => setTimeout(r, 2000));
  console.log('DONE');
}

init();