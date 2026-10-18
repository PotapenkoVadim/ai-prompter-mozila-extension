import {
  BACK_BTN_ID,
  CLEAR_BTN_ID,
  COPY_BTN_ID,
  FLIPPER_FLIPPED_CLASS,
  GENERATE_BTN_ID
} from "./constants";
import { copyToClipboard, generateMarkdown } from "./copy";
import { clearForm, validateForm } from "./form";

let clearConfirmTimeout: number | null = null;

export const generateButtonsActions = ({
  markdownOutput,
  flipper
}: {
  markdownOutput: HTMLTextAreaElement,
  flipper: HTMLDivElement
}): Record<string, (btn: HTMLButtonElement) => void> => {
  return {
    [GENERATE_BTN_ID]: (btn) => {
      if (!validateForm()) {
        btn.classList.add('shake-animation');
        setTimeout(() => btn.classList.remove('shake-animation'), 400);
        return;
      }
      
      markdownOutput.value = generateMarkdown();
      flipper.classList.add(FLIPPER_FLIPPED_CLASS);
    },
    
    [BACK_BTN_ID]: () => {
      flipper.classList.remove(FLIPPER_FLIPPED_CLASS);
    },
    
    [CLEAR_BTN_ID]: (btn) => {
      const isConfirmState = btn.classList.contains('btn-danger-active');
      
      if (!isConfirmState) {
        btn.classList.add('btn-danger-active');
        btn.innerText = 'Уверены?';
        
        clearConfirmTimeout = window.setTimeout(() => {
          btn.classList.remove('btn-danger-active');
          btn.innerText = 'Очистить';
        }, 3000);
      } else {
        if (clearConfirmTimeout) clearTimeout(clearConfirmTimeout);
        clearForm();
        btn.classList.remove('btn-danger-active');
        btn.innerText = 'Очистить';
      }
    },
    
    [COPY_BTN_ID]: (btn) => {
      markdownOutput.focus();
      markdownOutput.select();
      copyToClipboard(markdownOutput.value, btn);
    }
  };
}