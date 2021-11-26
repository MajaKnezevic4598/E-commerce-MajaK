import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FILTER_PRODUCTS_REQUEST,
  FILTER_PRODUCTS_SUCCESS,
  FILTER_PRODUCTS_FAILURE,
  SORT
} from "./productsListTypes";


//initialState

const initialState = {
    loading:false,
    products:[],
    error:""
}

  const productsReducer = (state=initialState,action) =>{
    switch(action.type){
        case FETCH_PRODUCTS_REQUEST:
        case FILTER_PRODUCTS_REQUEST:{
             return {
            ...state,
            loading:true
        }
        break;}
        case FETCH_PRODUCTS_SUCCESS:
        case FILTER_PRODUCTS_SUCCESS: {
             return {
            loading:false,
            products:action.payload,
            error:""
        }
        break;}
        case FETCH_PRODUCTS_FAILURE:
        case FILTER_PRODUCTS_FAILURE:{
            return {
            loading:false,
            products:[],
            error:action.payload
        };
        break;}
        case SORT : {
          if (action.payload === "name-a-z") {
            /***** */
            const nameAZ = state.products.sort(function (a, b) {
              const nameA = a.title.toUpperCase();
              const nameB = b.title.toUpperCase();
              if (nameA < nameB) return -1;
              if (nameA > nameB) return 1;
              return 0;
            });
            return {
              ...state,
              products: nameAZ,
            };

            /***** */
          } /****kraj ifa */
          if (action.payload === "name-z-a") {
            /***** */
            const nameZA = state.products.sort(function (a, b) {
              const nameA = a.title.toUpperCase();
              const nameB = b.title.toUpperCase();
              if (nameB < nameA) return -1;
              if (nameB > nameA) return 1;
              return 0;
            });
            return {
              ...state,
              products: nameZA,
            };

            /***** */
          } /****kraj ifa */
          if(action.payload === "price-asc"){
             const sortedPriceAsc = state.products.sort(function(a,b){
                return parseFloat(a.price) - parseFloat(b.price)
                })
                return {
                    ...state,
                    product:sortedPriceAsc
                }

          }/**krajifa */
          if(action.payload === "price-desc"){
              const sortedPriceDesc = state.products.sort(function (a, b) {
                return parseFloat(b.price) - parseFloat(a.price);
              });
              return {
                  ...state,
                  products:sortedPriceDesc
              }

          } /**kraj ifa */

           if (action.payload === "rating-asc") {
             const highRate = state.products.sort(function (a, b) {
               return parseFloat(a.rating.rate) - parseFloat(b.rating.rate);
             });
             return {
               ...state,
               products: highRate,
             };
           } /**kraj ifa */
           if(action.payload === "rating-desc"){
               const lowRate = state.products.sort(function (a, b) {
                 return parseFloat(b.rating.rate) - parseFloat(a.rating.rate);
               });
               return {
                   ...state,
                   products:lowRate
               }
           }
           break;
        }
        

        
     
        default: return state
    }

}

export default productsReducer

