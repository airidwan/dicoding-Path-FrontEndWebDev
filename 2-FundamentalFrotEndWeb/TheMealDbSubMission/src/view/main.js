import { LitElement, html, css } from 'lit-element';
import { bootstrapStyles } from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';
import { Router } from '@vaadin/router';
import '@vaadin/vaadin-tabs';
import 'bootstrap';
import { installMediaQueryWatcher } from 'pwa-helpers/media-query.js';

import '../styles/style.css';
import '../component/app-content-categories';
import '../component/app-content-explorer';
import '../component/app-mode-categories';
import '../component/app-mode-explore';
import '../component/app-footer';

import { sharedStyles } from "../component/app-styles";


class MainView extends LitElement {
    static get styles() {
        return [bootstrapStyles,
            sharedStyles
        ];
    }
  
    static get properties() {
        return {
            activeTab: { type: String },
            smallScreen: { type: Boolean },
            tabs: { type: Array },
        };
    }
    constructor() {
        super();
        this.activeTab = location.pathname === '/' ? 'home' : location.pathname.replace('/', '');
        this.tabs = ['home', 'categories', 'explore'];

        installMediaQueryWatcher(`(min-width: 100%)`, (matches) => {
            this.smallScreen = !matches;
        });

    }
    firstUpdated(){
        const router = new Router(this.shadowRoot.getElementById('contentfiture'));
        router.setRoutes([
            { path: '/', component: 'app-mode-explore' },
            { path: '/categories', component: 'app-mode-categories' },
            { path: '/explore', component: 'app-mode-explore' },
            { path: '(.*)', redirect: '/', action: () => {
                    this.activeTab = 'home';
                }
            }
        ]);
    }

    switchRoute(route) {
        this.activeTab = route;
        Router.go(`/${route}`);
    }


    render() {
        return html`
<div id="root">
    <div id="landing-page" >
        <div>
            <div id="header">
                <div>
                    <nav id="transparent-navbar-guestnav" class="navbar navbar-expand-lg navbar-dark fixed-top">
                        <div clas="log-area">
                            <img src="./img/logo-1.png" alt="logo" />
                        </div>
                        <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler collapsed"><span class="navbar-toggler-icon"></span></button>
                        <div class="navbar-collapse collapse" id="responsive-navbar-nav">
                            <div class="mr-auto navbar-nav">
                                <!-- <a href="/" data-rb-event-key="/" class="nav-link" style="color: white; font-weight: bold;">Home</a> -->
                            </div>
                             <vaadin-tabs class="navbar-nav" orientation="${this.smallScreen ? 'vertical' : 'horizontal'}" selected=${this.tabs.indexOf(this.activeTab)} theme="${this.smallScreen ? '' : 'centered'}">
                                <vaadin-tab class="btn-dark" @click=${() => this.switchRoute('home')}>Home</vaadin-tab>
                            </vaadin-tabs>  
                             <vaadin-tabs class="navbar-nav" orientation="${this.smallScreen ? 'vertical' : 'horizontal'}" selected=${this.tabs.indexOf(this.activeTab)} theme="${this.smallScreen ? '' : 'centered'}">
                                <vaadin-tab class="btn-dark" @click=${() => this.switchRoute('categories')}>Categories</vaadin-tab>
                            </vaadin-tabs>  
                             <vaadin-tabs class="navbar-nav" orientation="${this.smallScreen ? 'vertical' : 'horizontal'}" selected=${this.tabs.indexOf(this.activeTab)} theme="${this.smallScreen ? '' : 'centered'}">
                                <vaadin-tab class="btn-dark" @click=${() => this.switchRoute('explore')}>Explore</vaadin-tab>
                            </vaadin-tabs>  
                        </div> 

                    </nav>
                </div>
            </div>
         
             <section class="header">
                </div>
                <section class ="sekat-area section-padding"></section>
                </div>
                <div id="contentfiture"  style="min-height: 80vh;" ></div>
            </section>


        </div>
       
       
    </div>
</div>
    <app-footer></app-footer>

        `;
    }


    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}

customElements.define('main-view', MainView);
