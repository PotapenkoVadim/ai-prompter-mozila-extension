import { DEFAULT_CONSTRAINTS, FORM_FIELDS } from "./constants";

export function initForm(): void {
  FORM_FIELDS.task.value = localStorage.getItem('prompt_task') || '';
  FORM_FIELDS.context.value = localStorage.getItem('prompt_context') || '';
  FORM_FIELDS.rules.value = localStorage.getItem('prompt_rules') || '';
  FORM_FIELDS.constraints.value = localStorage.getItem('prompt_constraints') || DEFAULT_CONSTRAINTS;

  (Object.keys(FORM_FIELDS) as Array<keyof typeof FORM_FIELDS>).forEach(key => {
    FORM_FIELDS[key].addEventListener('input', () => {
      localStorage.setItem(`prompt_${key}`, FORM_FIELDS[key].value);
    });
  });
}

export function clearForm(): void {
  FORM_FIELDS.task.value = '';
  FORM_FIELDS.context.value = '';
  FORM_FIELDS.rules.value = '';
  FORM_FIELDS.constraints.value = DEFAULT_CONSTRAINTS;
  
  (Object.keys(FORM_FIELDS) as Array<keyof typeof FORM_FIELDS>).forEach(key => {
    localStorage.setItem(`prompt_${key}`, FORM_FIELDS[key].value);
  });
}

export function validateForm(): boolean {
  const hasContent = Object.values(FORM_FIELDS).some(field => field.value.trim() !== '');
  
  if (!hasContent) {
    Object.values(FORM_FIELDS).forEach(field => {
      field.classList.add('error-field');
      
      const removeError = () => {
        field.classList.remove('error-field');
        field.removeEventListener('input', removeError);
      };
      field.addEventListener('input', removeError);
    });
    return false;
  }
  
  return true;
}