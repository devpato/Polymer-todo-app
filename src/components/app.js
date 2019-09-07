import { LitElement, html } from 'lit-element';
import './add-item';
import './list-items';

// Extend the LitElement base class
class TodoApp extends LitElement {
  static get properties() {
    return {
      todoList: {
        type: Array
      }
    };
  }

  constructor() {
    super();
    let list = JSON.parse(localStorage.getItem('todo-list'));
    this.todoList = list === null ? [] : list;
  }

  firstUpdated() {
    this.handleRemoveItem();
    this.handleItemUpdate();
  }

  handleAddItem() {
    this.addEventListener('addItem', e => {
      this.todoList = e.detail.todoList;
    });
  }

  handleRemoveItem() {
    this.addEventListener('removeItem', e => {
      this.todoList = this.todoList.filter(item => {
        return item.id !== e.detail.itemId;
      });
      this.todoList = _.clone(this.todoList);
      localStorage.setItem('todo-list', JSON.stringify(this.todoList));
    });
  }

  handleItemUpdate() {
    this.addEventListener('updateStatus', e => {
      const index = this.todoList.findIndex(item => {
        return item.id === e.detail.itemId;
      });
      this.todoList[index].done = !this.todoList[index].done;
      localStorage.setItem('todo-list', JSON.stringify(this.todoList));
    });
    this.requestUpdate();
  }

  render() {
    return html`
      <p>Todo App</p>
      <add-item @addItem=${this.handleAddItem}></add-item>
      <list-items todoList=${JSON.stringify(this.todoList)}></list-items>
    `;
  }
}
// Register the new element with the browser.
customElements.define('todo-app', TodoApp);
