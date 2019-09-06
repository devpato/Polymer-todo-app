import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `todo-polymer`
 * todo list polymer
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class TodoPolymer extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'todo-polymer',
      },
    };
  }
}

window.customElements.define('todo-polymer', TodoPolymer);
