export const DEFAULT_CONSTRAINTS = "no small talk, no follow-up suggestions (do not offer next steps, questions, or alternative topics; focus strictly on the task)";

export const FORM_FIELDS = {
  task: document.getElementById('task') as HTMLInputElement,
  context: document.getElementById('context') as HTMLTextAreaElement,
  constraints: document.getElementById('constraints') as HTMLInputElement,
  rules: document.getElementById('rules') as HTMLTextAreaElement
};

export const SUCCESS_COLOR = '#059669';
export const SUCCESS_TEXT = 'Скопировано!';


export const EMPTY_ERROR_TEXT = 'Заполните хотя бы одно поле перед генерацией!';
export const CLEAR_FORM_TEXT = 'Очистить все поля формы?';