import { LitElement, html } from 'lit-element';

export class TodoItems extends LitElement {
  static get properties() {
    return {
      todoItem: { type: Object }
    };
  }

  render() {
    return html``;
  }
}
customElements.define('todo-item', TodoItem);
