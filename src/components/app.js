import { LitElement, html } from 'lit-element';
import './add-item';
import './list-items';

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
      <add-item></add-item>
      <list-items></list-items>
    `;
  }
}
// Register the new element with the browser.
customElements.define('todo-app', TodoApp);
