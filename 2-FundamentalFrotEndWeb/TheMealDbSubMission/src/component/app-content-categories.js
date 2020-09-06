import { LitElement, html } from 'lit-element';
import { bootstrapStyles } from '@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js';
import { until } from 'lit-html/directives/until';
import { repeat } from 'lit-html/directives/repeat';
import DataSource from '../data/data-source.js';
import { type } from 'jquery';
import { categoriesTemplate,childCategoriesTemplate } from "./app-template";



class AppListCategories extends LitElement {
  static get styles() {
    return [bootstrapStyles];
  }
 
  static get properties() {
    return {
      mealCategories: { type: Array, attribute: false },
      mealFilterCategories: { type: Array, attribute: false },

      showCategories: { type: Boolean, attribute: false },
      selectedCategories: {type: String},
    };
  }
  constructor() {
    super();
    this.mealCategories = [];
    this.showCategories = true;
    this.mealFilterCategories = [];
    this.selectedCategories = '';
    this.clickHandler = this.clickHandler.bind(this);
    this.BackHandler = this.BackHandler.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    console.log('connected!');
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    console.log('disconneted!');
    window.removeEventListener('click', this.clickHandler);
  }

  async firstUpdated() {
    await this._home();

  }

  updated(changedProperties) {
    super.updated(changedProperties);
    if (this.showCategories) {
      this.mealCategories.map(data => {
        let button = this.shadowRoot.getElementById(`searchBtn_${data.idCategory}`);
        button.removeEventListener('click', this.clickHandler);
        button.addEventListener('click', this.clickHandler);
      });
    }


  }

  render() {
    const { mealCategories } = this;
    const { mealFilterCategories } = this;
    // if (!this.showCategories) {
    //   return html`nothing`;
    // }
    return html`

    <section class="features-icons bg-light text-center">
          <div class="container" id="meal-list">
            ${this.showCategories
            ? html`<h3 style="color: rgb(64,75,174);">Kategori Makanan</h3>`
            : html`<h3 style="color: rgb(64,75,174);">${this.selectedCategories}</h3>`
            } 
            <div class="row" id="categor-list">
            ${this.showCategories
            ? until(this.mealCategories.map(categoriesTemplate), html`<h2>loading..</h2>`)
            : until(this.mealFilterCategories.map(childCategoriesTemplate), html`<h2>loading..</h2>`)
            }
            </div>
        </div>
     </section>
    `;
  }
  
  async _home() {
    await new Promise((r) => setTimeout(r, 5));
    const resultGEt = await DataSource.GetListCategories();
    this.showCategories = true;
    this.mealCategories = resultGEt;
  }
 
  async BackHandler(e) {
    await this._home();
  }
  async clickHandler(e) {
    this.selectedCategories = e.target.innerText ;
    console.log(`selected: '${this.selectedCategories} | innerText='${e.target.innerText}'`)
    const resultna = await DataSource.filterByCategory(e.target.innerText);
    this.showCategories = false;
    this.mealFilterCategories = resultna;
  }

}
customElements.define('app-content-categories', AppListCategories);