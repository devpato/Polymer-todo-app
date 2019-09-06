import { LitElement, html } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat.js';
import './todo-item';
export class ListItems extends LitElement {
  static get properties() {
    return {
      todoList: [],
      test: String
    };
  }

  constructor() {
    super();
    // let storedLocalList = JSON.parse(localStorage.getItem('todo-list'));
    // storedLocalList = storedLocalList === null ? [] : storedLocalList;
    this.todoList = [];
  }

  // <ul>${this.todoList.map(element=>html`<li>${element.item}</li>`)}</ul>`
  // <todo-item todoItem=${todo.item}></todo-item>
  //<li>${todo.item}</li>
  render() {
    this.todoList = JSON.parse(this.todoList);
    return html`
      <ul>
        ${this.todoList.map(
          todo =>
            html`
              <todo-item todoItem=${JSON.stringify(todo)}></todo-item>
            `
        )}
      </ul>
    `;
  }
}
customElements.define('list-items', ListItems);

{
}
