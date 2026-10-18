import {
  BACK_BTN_ID,
  CLEAR_BTN_ID,
  CLEAR_FORM_TEXT,
  COPY_BTN_ID,
  EMPTY_ERROR_TEXT,
  FLIPPER_FLIPPED_CLASS,
  GENERATE_BTN_ID
} from "./constants";
import { copyToClipboard, generateMarkdown } from "./copy";
import { clearForm } from "./form";

export const generateButtonsActions = ({
  markdownOutput,
  flipper
}: {
  markdownOutput: HTMLTextAreaElement,
  flipper: HTMLDivElement
}): Record<string, (btn: HTMLButtonElement) => void> => {
  return {
    [GENERATE_BTN_ID]: () => {
      const md = generateMarkdown();
      if (!md) return alert(EMPTY_ERROR_TEXT);
      
      markdownOutput.value = md;
      flipper.classList.add(FLIPPER_FLIPPED_CLASS);
    },
    
    [BACK_BTN_ID]: () => {
      flipper.classList.remove(FLIPPER_FLIPPED_CLASS);
    },
    
    [CLEAR_BTN_ID]: () => {
      if (confirm(CLEAR_FORM_TEXT)) {
        clearForm();
      }
    },
    
    [COPY_BTN_ID]: (btn) => {
      markdownOutput.focus();
      markdownOutput.select();
      copyToClipboard(markdownOutput.value, btn);
    }
  };
}