/** jsb-dom/main.js */
// DO NOT EDIT THE CODE IN THIS FILE
import { wrapPreventDefault } from './src/util/setup.js';

import './styles.css';
import {
  prompt1,
  prompt2,
  prompt3,
  prompt4,
  prompt5,
  prompt6,
} from './src/problems';

function setup() {
  document.querySelector('#prompt-1 button').addEventListener('click', prompt1);
  document
    .querySelector('#prompt-2 form')
    .addEventListener('submit', wrapPreventDefault(prompt2));
  document.addEventListener('DOMContentLoaded', prompt3);
  document.addEventListener('DOMContentLoaded', prompt4);
  document
    .querySelector('#prompt-5 form')
    .addEventListener('submit', wrapPreventDefault(prompt5));
  document.addEventListener('DOMContentLoaded', prompt6);
}

setup();
