import { LitElement, html } from 'lit-element';
import './add-item';
import './list-items';

// Extend the LitElement base class
class TodoApp extends LitElement {
  static get properties() {
    return {
      todoList: [],
      test1: String
    };
  }

  constructor() {
    super();
    let list = JSON.parse(localStorage.getItem('todo-list'));
    this.todoList = list === null ? [] : list;
    this.test1 = 'zzzzz';
  }

  firstUpdated() {
    console.log('yay');
    this.addEventListener('add-item', e => {
      this.todoList = e.detail.todoList;
    });
  }
  render() {
    // console.log(JSON.stringify(this.todoList));
    // this.todoList.map(e => console.log(e));
    return html`
      <!-- template content -->
      <p>Todo App</p>
      <add-item></add-item>
      <list-items todoList=${JSON.stringify(this.todoList)}></list-items>
    `;
  }
}
// Register the new element with the browser.
customElements.define('todo-app', TodoApp);
