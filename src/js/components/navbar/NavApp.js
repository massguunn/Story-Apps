import { html } from 'lit';
import LitWithoutShadowDom from '../base/LitWithoutShadowDom';

class NavApp extends LitWithoutShadowDom {
  static properties = {
    brandName: { type: String, reflect: true },
  };

  constructor() {
    super();
    this._checkAvailabilityProperty();
  }

  _checkAvailabilityProperty() {
    if (!this.hasAttribute('brandName')) {
      throw new Error(`Atribut "brandName" harus diterapkan pada elemen ${this.localName}`);
    }
  }

  render() {
    return html`
      <nav class="navbar navbar-expand-md navbar-dark bg-primary nav-sticky">
        <div class="container">
          <span class="navbar-brand text-warning">${this.brandName}</span>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <nav-links class="ms-auto mb-2 mb-md-0">
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-app', NavApp);
