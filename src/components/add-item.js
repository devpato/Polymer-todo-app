import { LitElement, html } from 'lit-element';

export class AddItem extends LitElement {
  static get properties() {
    return {
      todoList: Array,
      todoItem: String
    };
  }
  constructor() {
    super();
    this.todoItems = '';
  }

  render(props) {
    return html``;
  }
}
customElements.define('add-item', AddItem);
