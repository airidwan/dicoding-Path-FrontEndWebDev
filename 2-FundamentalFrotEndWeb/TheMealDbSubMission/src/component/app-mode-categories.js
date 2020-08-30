import { LitElement, html, css } from 'lit-element';
import { bootstrapStyles } from "@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js";
import { sharedStyles } from "./app-styles";
import './app-content-categories';

class AppModeCategories extends LitElement {
    static get styles() {
        return [bootstrapStyles,
            sharedStyles
        ];
    }
    static get properties(){
        return {
            showLifecycleDemo: { type: Boolean }

        }
    }
    constructor() {
        super();
        this.showLifecycleDemo = false;
    }

    render(){
        return html `
            <app-content-categories></app-content-categories>
        `;
    }

}
customElements.define('app-mode-categories', AppModeCategories);