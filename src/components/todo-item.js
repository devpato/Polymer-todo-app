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

  onRemove() {
    this.dispatchEvent(
      new CustomEvent('removeItem', {
        bubbles: true,
        composed: true,
        detail: { itemId: this.todoItem.id }
      })
    );
  }

  render() {
    this.todoItem = JSON.parse(this.todoItem);
    return html`
      <li>${this.todoItem.item}</li>
      <button @click="${this.onRemove}">Remove</button>
    `;
  }
}
customElements.define('todo-item', TodoItem);
