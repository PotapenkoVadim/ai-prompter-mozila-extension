import './styles.css';
import { initForm, clearForm } from './form';
import { generateMarkdown, copyToClipboard } from './copy';
import {
  BACK_BTN_ID,
  CLEAR_BTN_ID,
  CLEAR_FORM_TEXT,
  COPY_BTN_ID,
  EMPTY_ERROR_TEXT,
  FLIPPER_CONTAINER,
  FLIPPER_FLIPPED_CLASS,
  FLIPPER_ID,
  FONTS_LOADED_CLASS,
  GENERATE_BTN_ID,
  MARKDOWN_OUTPUT_ID
} from './constants';

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

  document.getElementById(GENERATE_BTN_ID)?.addEventListener('click', () => {
    const md = generateMarkdown();
    if (!md) return alert(EMPTY_ERROR_TEXT);
    
    markdownOutput.value = md;
    flipper.classList.add(FLIPPER_FLIPPED_CLASS); 
  });

  document.getElementById(BACK_BTN_ID)?.addEventListener('click', () => {
    flipper.classList.remove(FLIPPER_FLIPPED_CLASS);
  });

  document.getElementById(CLEAR_BTN_ID)?.addEventListener('click', () => {
    if (confirm(CLEAR_FORM_TEXT)) {
      clearForm();
    }
  });

  document.getElementById(COPY_BTN_ID)?.addEventListener('click', function(this: HTMLButtonElement) {
    markdownOutput.focus();
    markdownOutput.select();
    copyToClipboard(markdownOutput.value, this);
  });
}

document.addEventListener('DOMContentLoaded', main);
