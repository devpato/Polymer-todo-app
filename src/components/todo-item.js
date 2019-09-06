import { LitElement, html } from 'lit-element';

export class TodoItem extends LitElement {
  static get properties() {
    return {
      todoItem: {
        id: Number,
        item: String,
        done: Boolean
      }
    };
  }

  constructor() {
    super();
  }

  render() {
    this.todoItem = JSON.parse(this.todoItem);
    return html`
      <li>${this.todoItem.item}</li>
    `;
  }
}
customElements.define('todo-item', TodoItem);
