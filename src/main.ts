import './styles.css';
import { initForm } from './form';
import {
  FLIPPER_CONTAINER,
  FLIPPER_ID,
  FONTS_LOADED_CLASS,
  MARKDOWN_OUTPUT_ID
} from './constants';
import { generateButtonsActions } from './buttons-actions';

function main() {
  const flipper = document.getElementById(FLIPPER_ID) as HTMLDivElement;
  const flipContainer = document.querySelector(FLIPPER_CONTAINER) as HTMLDivElement;
  const markdownOutput = document.getElementById(MARKDOWN_OUTPUT_ID) as HTMLTextAreaElement;

  initForm();

  document.fonts.ready.then(() => {
    if (flipContainer) {
      flipContainer.classList.add(FONTS_LOADED_CLASS);
    }
  }).catch((err) => {
    console.error(err);
    setTimeout(() => {
      if (flipContainer) flipContainer.classList.add(FONTS_LOADED_CLASS);
    }, 300);
  });

  const buttonListeners = generateButtonsActions({flipper, markdownOutput});

  Object.entries(buttonListeners).forEach(([id, listener]) => {
    const button = document.getElementById(id) as HTMLButtonElement | null;

    button?.addEventListener('click', function(this: HTMLButtonElement) {
      listener(this);
    });
  });
}

document.addEventListener('DOMContentLoaded', main);
