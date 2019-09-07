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

  changeStatus() {
    this.dispatchEvent(
      new CustomEvent('updateStatus', {
        bubbles: true,
        composed: true,
        detail: { itemId: this.todoItem.id }
      })
    );
  }

  render() {
    this.todoItem = JSON.parse(this.todoItem);
    return html`
      <li>
        ${this.todoItem.item} <button @click="${this.onRemove}">Remove</button>
        <input type="checkbox" ?checked="${this.todoItem.done}" @click="${this.changeStatus}" />
      </li>
    `;
  }
}
customElements.define('todo-item', TodoItem);
