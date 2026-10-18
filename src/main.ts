import './styles.css';
import { initForm, clearForm } from './form';
import { generateMarkdown, copyToClipboard } from './copy';
import { CLEAR_FORM_TEXT, EMPTY_ERROR_TEXT } from './constants';

function main() {
  const flipper = document.getElementById('flipper') as HTMLDivElement;
  const flipContainer = document.querySelector('.flip-container') as HTMLDivElement;
  const markdownOutput = document.getElementById('markdown-output') as HTMLTextAreaElement;

  document.addEventListener('DOMContentLoaded', () => {
    initForm();
    
    document.fonts.ready.then(() => {
      if (flipContainer) {
        flipContainer.classList.add('fonts-loaded');
      }
    }).catch((err) => {
      setTimeout(() => {
        if (flipContainer) flipContainer.classList.add('fonts-loaded');
      }, 300);
    });
  });

  document.getElementById('generate-btn')?.addEventListener('click', () => {
    const md = generateMarkdown();
    if (!md) return alert(EMPTY_ERROR_TEXT);
    
    markdownOutput.value = md;
    flipper.classList.add('flipped');
  });

  document.getElementById('back-btn')?.addEventListener('click', () => {
    flipper.classList.remove('flipped');
  });

  document.getElementById('clear-btn')?.addEventListener('click', () => {
    if (confirm(CLEAR_FORM_TEXT)) {
      clearForm();
    }
  });

  document.getElementById('copy-btn')?.addEventListener('click', function(this: HTMLButtonElement) {
    copyToClipboard(markdownOutput.value, this);
  });
}

main();