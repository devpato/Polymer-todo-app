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
    this.todoItems = '';
  }

  inputKeypress(e) {
    console.log(e);
    if (e.keyCode == 13) {
    } else {
      this.todoItems = e.targe.value;
    }
    console.log(this.todoItem);
  }

  render() {
    return html`
      <div>
        <input value=${this.todoItem} @keypress=${e => this.inputKeypress(e)} />
      </div>
    `;
  }
}
customElements.define('add-item', AddItem);
