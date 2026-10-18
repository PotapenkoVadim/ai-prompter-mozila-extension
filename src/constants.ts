export const DEFAULT_CONSTRAINTS = "no small talk, no follow-up suggestions (do not offer next steps, questions, or alternative topics; focus strictly on the task)";

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

export const TASK_ID = 'task';
export const CONTEXT_ID = 'context';
export const CONSTRAINTS_ID = 'constraints';
export const RULES_ID = 'rules';
export const OUTPUT_FORMAT_ID = 'output-format';
export const EXAMPLES_ID = 'examples';

export const FORM_FIELDS = {
  task: document.getElementById(TASK_ID) as HTMLInputElement,
  context: document.getElementById(CONTEXT_ID) as HTMLTextAreaElement,
  outputFormat: document.getElementById(OUTPUT_FORMAT_ID) as HTMLInputElement,
  examples: document.getElementById(EXAMPLES_ID) as HTMLTextAreaElement,
  constraints: document.getElementById(CONSTRAINTS_ID) as HTMLInputElement,
  rules: document.getElementById(RULES_ID) as HTMLTextAreaElement
};
