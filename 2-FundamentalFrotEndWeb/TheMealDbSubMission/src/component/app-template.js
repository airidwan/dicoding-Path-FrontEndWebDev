import { html } from 'lit-html';
// import {html} from 'lit-element';
import {until} from 'lit-html/directives/until';

export const childCategoriesTemplate = (data) => html`
    
                <div class="col-lg-3 mb-3">
                  <div class="card text-center">
                      <img class="card-img-top" src="${data.strMealThumb}" alt="Card image" style="width:100%">
                      <div class="card-title">
                          <p>${data.strMeal}</p>
                      </div>
                  </div>
                </div>
              `;

export const categoriesTemplate = (data) => html`
    
                <div class="col-lg-4 mb-4">
                  <div class="card text-center">
                      <img class="card-img-top" src="${data.strCategoryThumb}" alt="Card image" style="width:100%">
                      <div class="card-body">
                          <button id="searchBtn_${data.idCategory}" type="button" class="btn btn-link btn-lg">${data.strCategory}</button>
                      </div>
                  </div>
                </div>
              `;

export const mealListByNameTemplate = (data) => html `
                <div class="col-md-3 mb-3">
                  <div class="card text-center">
                      <img class="img-thumbnail rounded mx-auto d-block" src="${data.strMealThumb}" alt="${data.idMeal}" style="width:100%">
                      <div class="card-title">
                        <a href="${data.strYoutube}" target="_blank">${data.strMeal}</a>
                      </div>
                  </div>
                </div>
`;
export const mealListByNameTemplates = (datas) => html`
<div class = "row mt-3">
${until(datas.map(mealListByNameTemplate), html`< h2 > loading..</h2 >`)} 
</div>
`;

export const appSearchBar = (inputSearchValue, inputChanged, onSubmitHanlder) => html `
<header class="masthead text-white text-center">
        <div class="text-lg-center overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-xl-9 mx-auto text-center">
                    <h1 class="mb-2">Mau Masak apa?</h1>
                </div>
                <div class="col-md-10 col-lg-8 col-xl-7 mx-auto">
                        <div class="form-row">
                            <div class="col-12 col-md-9 mb-2 mb-md-0">
                                <input  id="searchBox" value="${inputSearchValue}" @change=${inputChanged} type="search" class="form-control" placeholder="Cari resep.." style="height: 47px;" />
                            </div>
                            <div class="col-12 col-md-3">
                                <button  id="searchBtn" @click="${onSubmitHanlder}" class="btn btn-primary btn-block btn-lg">Cari</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
</header>
`;


 const childCategoriesTemplate2 = (data) => html `
    
                <div class="col-lg-3 mb-3">
                  <div class="card text-center">
                      <img class="card-img-top" src="${data.strMealThumb}" alt="Card image" style="width:100%">
                      <div class="card-title">
                          <p>${data.strMeal}</p>
                      </div>
                  </div>
                </div>
              `;