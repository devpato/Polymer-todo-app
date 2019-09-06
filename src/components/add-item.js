import { LitElement, html } from 'lit-element';

export class AddItem extends LitElement {
  static get properties() {
    return {
      todoList: { type: Array },
      todoItem: { type: String }
    };
  }
  constructor() {
    super();
    this.todoItem = '';
  }

  inputKeyup(e) {
    console.log(e);
    if (e.keyCode == 13) {
    } else {
      this.todoItem = e.target.value;
    }
    console.log(this.todoItem);
  }

  render() {
    return html`
      <div>
        <input value=${this.todoItem} @keyup=${this.inputKeyup} />
      </div>
    `;
  }
}
customElements.define('add-item', AddItem);
