import { LitElement, html } from "lit-element";
import { until } from 'lit-html/directives/until';
import { repeat } from 'lit-html/directives/repeat';
import { type } from 'jquery';
import { bootstrapStyles } from "@granite-elements/granite-lit-bootstrap/granite-lit-bootstrap.js";
import DataSource from "../data/data-source.js";
import { appSearchBar, mealListByNameTemplate, mealListByNameTemplates } from "./app-template";
import { isUndefined } from "lodash";

class AppContentExplorer extends LitElement {
  static get styles() {
    return [bootstrapStyles];
  }
  static get properties() {
    return {
      searchValue: { type: String },
      mealFilterCategories: { type: Array, attribute: false },
    };
  }
  constructor() {
    super();
    this.searchValue = "";
    this.mealFilterCategories = [];
    this._btnSearch_ClickHandler = this._btnSearch_ClickHandler.bind(this);
    this._inputChanged = this._inputChanged.bind(this);
  }
  createRenderRoot() {
    return this;
  }

  render() {
    const { mealFilterCategories } = this;
    return html` 
    ${appSearchBar(this.searchValue, this._inputChanged, this._btnSearch_ClickHandler)}
    ${mealListByNameTemplates(this.mealFilterCategories)}
    `;
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
    await new Promise((r) => setTimeout(r, 0));
    let RamdommealFilterCategories = [];
    for (let i = 0; i < 4; i++) {
      let getRandom = await DataSource.GetMealItemRandom();
      if (!isUndefined(getRandom)){
        RamdommealFilterCategories.push(getRandom[0]);
      }
    }
    this.mealFilterCategories = RamdommealFilterCategories;
    console.log(this.mealFilterCategories);
  }
  updated(changedProperties) {
    super.updated(changedProperties);
  }
  async _inputChanged(e) {
    this.searchValue = e.target.value;
    console.log(e);
  }

  async _btnSearch_ClickHandler(e) {
    console.log(this.searchValue);
    if (this.searchValue == null) return;
    const resultna = await DataSource.searhMealByName(this.searchValue);
    this.mealFilterCategories = resultna;
  }
}
customElements.define('app-content-explorer', AppContentExplorer);

