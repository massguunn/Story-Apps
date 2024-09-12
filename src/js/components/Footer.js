import { html } from 'lit';
import LitWithoutShadowDom from './base/LitWithoutShadowDom';

class FooterApp extends LitWithoutShadowDom {
  render() {
    return html`
      <p class="text-center text-warning mb-0">Gunawan Rohadi || For Dicoding Submission</p>
    `;
  }
}

customElements.define('footer-app', FooterApp);
