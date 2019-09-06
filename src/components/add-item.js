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
    if (this.todoItem.length > 0) {
      let storedLocalList = JSON.parse(localStorage.getItem('todo-list'));
      storedLocalList = storedLocalList === null ? [] : storedLocalList;
      const todoList = [
        ...storedLocalList,
        {
          id: this.uuidGenerator(),
          item: this.todoItem,
          done: false
        }
      ];
      this.todoItem = '';
      localStorage.setItem('todo-list', JSON.stringify(todoList));
    }
  }

  render() {
    return html`
      <div>
        <input .value=${this.todoItem} @keyup=${this.inputKeyup} />
        <button @click="${this.AddItem}">Add Item</button>
      </div>
    `;
  }
}
customElements.define('add-item', AddItem);
