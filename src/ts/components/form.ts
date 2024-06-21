import { ButtonData, FormData, InputData } from '../../types/type';

export default function form(data: FormData): string {
  const renderInput = (el: InputData): string => `
    <div class="form-group">
      <input id="${el.id}" name="${el.name}" type="${el.type}" placeholder="${
        el.placeholder || ''
      }" class="input"/>
    </div>
  `;

  const renderButton = (el: ButtonData): string => `
    <button id="${el.id || ''}" name="${el.name}" type="${el.type}" class="button">${
      el.textContent
    }</button>
  `;

  const inputs = data.inputs ? data.inputs.map(renderInput).join('') : '';
  const buttons = data.buttons ? data.buttons.map(renderButton).join('') : '';

  return `
  <div>
    <form id="${data.id || 'body-form'}" class="form">
      <section id="input-section">
        ${inputs}
      </section>
      <section id="button-section">
        ${buttons}
      </section>
    </form>
    <div/>
  `;
}
