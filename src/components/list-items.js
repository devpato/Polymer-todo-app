import { LitElement, html } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat.js';
import './todo-item';
export class ListItems extends LitElement {
  static get properties() {
    return {
      todoList: Array
    };
  }

  constructor() {
    super();
    let storedLocalList = JSON.parse(localStorage.getItem('todo-list'));
    storedLocalList = storedLocalList === null ? [] : storedLocalList;
    this.todoList = storedLocalList;
  }

  // <ul>${this.todoList.map(element=>html`<li>${element.item}</li>`)}</ul>`
  // <todo-item todoItem=${todo.item}></todo-item>
  //<li>${todo.item}</li>
  render() {
    return html`
      <ul>
        ${this.todoList.map(
          element =>
            html`
              <li>${element.item}</li>
            `
        )}
      </ul>
    `;
  }
}
customElements.define('list-items', ListItems);
