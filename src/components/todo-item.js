import { LitElement, html } from 'lit-element';

export class TodoItem extends LitElement {
  static get properties() {
    return {
      todoItem: { type: Object }
    };
  }

  constructor() {
    super();
    this.todoItem = {};
  }

  render() {
    return html`
      <li>asdfa</li>
    `;
  }
}
customElements.define('todo-item', TodoItem);
