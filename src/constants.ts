export const DEFAULT_CONSTRAINTS = "no small talk, no follow-up suggestions (do not offer next steps, questions, or alternative topics; focus strictly on the task)";

export const FORM_FIELDS = {
  task: document.getElementById('task') as HTMLInputElement,
  context: document.getElementById('context') as HTMLTextAreaElement,
  constraints: document.getElementById('constraints') as HTMLInputElement,
  rules: document.getElementById('rules') as HTMLTextAreaElement
};

export const SUCCESS_COLOR = '#059669';
export const SUCCESS_TEXT = 'Скопировано!';

export const FLIPPER_ID = 'flipper';
export const FLIPPER_CONTAINER = '.flip-container';
export const MARKDOWN_OUTPUT_ID = 'markdown-output';
export const FONTS_LOADED_CLASS = 'fonts-loaded';
export const GENERATE_BTN_ID = 'generate-btn';
export const BACK_BTN_ID = 'back-btn';
export const CLEAR_BTN_ID = 'clear-btn';
export const COPY_BTN_ID = 'copy-btn';
export const FLIPPER_FLIPPED_CLASS = 'flipped';