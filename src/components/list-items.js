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
      <style>
        .lists {
          padding-left: 350px;
          margin: 0 auto;
          max-width: 500px;
        }
        .list {
          transform-origin: center bottom;
          transition: 200ms all linear;
        }
        .list .title {
          color: #b8d4ff;
          font-size: 1.5rem;
          letter-spacing: 5px;
          text-transform: uppercase;
          text-align: center;
          margin: 3.5rem 0 3.5rem 0;
          line-height: 1;
        }
        .list .list-wrapper {
          list-style: none;
          margin: 0 0.5rem;
          padding: 0;
        }
        @media (max-width: 576px) and (orientation: portrait) {
          .lists {
            padding: 0 1rem;
            margin-bottom: 5rem;
          }
          .list .title {
            margin: 1.5rem 1rem;
            font-size: 1.5rem;
          }
        }
      </style>
      <div class="lists">
        <div class="list>
        <h2 class="title">Today's To Do List</h2>
        <div class="list-wrapper">
          ${this.todoList.map(
            todo =>
              html`
                <todo-item todoItem=${JSON.stringify(todo)}></todo-item>
              `
          )}
        </div>
      </div>
      <div></div>
    `;
  }
}
customElements.define('list-items', ListItems);

{
}
