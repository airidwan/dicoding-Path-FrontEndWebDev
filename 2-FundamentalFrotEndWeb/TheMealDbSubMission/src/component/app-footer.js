import { LitElement, html } from "lit-element";
import { bootstrapStyles } from "@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js";

class AppFooter extends LitElement {
    static get styles() {
        return [bootstrapStyles];
    }

  render() {
    return html`
      <!-- <footer class="card-footer bg-dark text-white">
            <strong>Ridwanudin - Fundamental Web @submission-dicoding.com</strong>
        </footer> -->
    <footer class="footer font-small special-color-dark bg-dark pt-4 text-white">
    

        <!-- Copyright -->
        <div class="footer-copyright text-center py-3">© 2020 Ridwanudin-Submission:
            <a href="https://dicoding.com/"> dicoding.com</a>
        </div>
        <!-- Copyright -->
    
    </footer>
        
    `;
  }
}
customElements.define("app-footer", AppFooter);
