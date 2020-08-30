import { LitElement, html, css } from 'lit-element';
import { bootstrapStyles } from "@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js";
import { sharedStyles } from "./app-styles";
import './app-content-explorer';
class AppModeExplorer extends LitElement {
    static get styles() {
        return [bootstrapStyles,
            sharedStyles
        ];
    }
    static get properties() {
        return {
            showLifecycleDemo: { type: Boolean }

        }
    }
    constructor() {
        super();
        this.showLifecycleDemo = false;
    }

    render() {
        return html`
        <app-content-explorer></app-content-explorer>
        `;
    }

}
customElements.define('app-mode-explore', AppModeExplorer);