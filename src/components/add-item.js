import { LitElement, html } from 'lit-element';

export class AddItem extends LitElement {
  static get properties() {
    return {
      todoList: { type: Array },
      todoItem: { type: String }
    };
  }
  constructor() {
    super();
    this.todoItem = '';
  }

  inputKeyup(e) {
    if (e.keyCode === 13) {
      this.AddItem();
    } else {
      this.todoItem = e.target.value;
    }
  }

  uuidGenerator() {
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array;
  }

  AddItem() {
    const todoList = [
      {
        id: this.uuidGenerator(),
        item: this.todoItem,
        done: false
      }
    ];
    localStorage.setItem('todo-list', JSON.stringify(todoList));
    this.todoItem = '';
  }

  render() {
    return html`
      <div>
        <input value=${this.todoItem} @keyup=${this.inputKeyup} />
        <button @click="${this.AddItem}">Add Item</button>
      </div>
    `;
  }
}
customElements.define('add-item', AddItem);
