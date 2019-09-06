import { LitElement, html } from 'lit-element';

// Extend the LitElement base class
class TodoApp extends LitElement {
  static get properties() {
    return {
      todolist: Array
    };
  }

  constructor() {
    super();
    this.todolist = [];
  }
  render() {
    return html`
      <!-- template content -->
      <p>A paragraph</p>
    `;
  }
}
// Register the new element with the browser.
customElements.define('todo-app', TodoApp);
