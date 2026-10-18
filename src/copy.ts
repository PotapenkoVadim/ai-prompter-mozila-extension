import { FORM_FIELDS, SUCCESS_COLOR, SUCCESS_TEXT } from "./constants";

export function generateMarkdown(): string {
  const task = FORM_FIELDS.task.value.trim();
  const context = FORM_FIELDS.context.value.trim();
  const constraints = FORM_FIELDS.constraints.value.trim();
  const rules = FORM_FIELDS.rules.value.trim();
  const outputFormat = FORM_FIELDS.outputFormat.value.trim();
  const examples = FORM_FIELDS.examples.value.trim();

  let markdownText = '';
  if (task) markdownText += `# TASK\n${task}\n\n`;
  if (context) markdownText += `# CONTEXT\n${context}\n\n`;
  if (outputFormat) markdownText += `# OUTPUT FORMAT\n${outputFormat}\n\n`;
  if (examples) markdownText += `# EXAMPLES / FEW-SHOT\n${examples}\n\n`;
  if (constraints) markdownText += `# CONSTRAINTS\n${constraints}\n\n`;
  if (rules) markdownText += `# RULES\n${rules}\n`;

  return markdownText;
}

export async function copyToClipboard(text: string, button: HTMLButtonElement): Promise<void> {
  try {
    await navigator.clipboard.writeText(text);
    const originalText = button.innerText;
    button.innerText = SUCCESS_TEXT;
    button.style.background = SUCCESS_COLOR;
    
    setTimeout(() => {
      button.innerText = originalText;
      button.style.background = '';
    }, 2000);
  } catch (err) {
    alert('Ошибка при копировании: ' + err);
  }
}