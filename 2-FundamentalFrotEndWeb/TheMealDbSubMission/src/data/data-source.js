const baseMealUrl = "https://www.themealdb.com/api/json/v1/1";
const baseMealFilterUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?';

class DataSource {
  
    constructor() {
    }
    static async searhMealByName(keyword) {
        return await fetch(`${baseMealUrl}/search.php?s=${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} tidak ditemukan`)
                }
            })
    };
    static GetDetailsMealById(id) {
        return fetch(`${baseMealUrl}/lookup.php?i=${id}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals[0]);
                } else {
                    return Promise.reject(`${id} tidak ditemukan`)
                }
            })
    };
    static async GetById(id) {
        return await fetch(`${baseMealUrl}/lookup.php?i=${id}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if (responseJson.categor) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${id} tidak ditemukan`)
                }
            })
    };
    static async GetMealItemRandom() {
        return await fetch(`${baseMealUrl}/random.php`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`data tidak ditemukan`)
                }
            }).catch(error => {
                console.log(error);
            });
    };
    static async GetListCategories() {
        return await fetch(`${baseMealUrl}/categories.php`)
            .then(response => response.json())
            .then(responseJson => {
                if (responseJson.categories) {
                    return Promise.resolve(responseJson.categories);
                } else {
                    return Promise.reject(`data tidak ditemukan`)
                }
            }).catch(error => {
                console.log(error);
            });
    };
    static async filterByCategory (keyword){
        return await fetch(`${baseMealFilterUrl}c=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.meals) {
                    return Promise.resolve(responseJson.meals);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            })
    }


}

export default DataSource;