import { LitElement, html } from 'lit-element';
import { repeat } from 'lit-html/directives/repeat.js';
export class ListItems extends LitElement {
  static get properties() {
    return {
      todoList: { type: Array }
    };
  }

  constructor() {
    super();
    let storedLocalList = JSON.parse(localStorage.getItem('todo-list'));
    storedLocalList = storedLocalList === null ? [] : storedLocalList;
    this.todoList = storedLocalList;
  }

  // <ul>${this.todoList.map(element=>html`<li>${element.item}</li>`)}</ul>`
  render() {
    return html`
      <ul>
        ${repeat(
          this.todoList,
          todo =>
            html`
              <li>${todo.item}</li>
            `
        )}
      </ul>
    `;
  }
}
customElements.define('list-items', ListItems);
