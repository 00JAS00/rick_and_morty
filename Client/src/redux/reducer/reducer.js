import {ADD_FAV, FILTER, ORDER, REMOVE_FAV, RESET} from '../actions/types';
const initialState = {
  myFavorites: [],
  allCharacters: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:

      return {...state,
        myFavorites: action.payload,
        allCharacters: action.payload};
    case REMOVE_FAV:
      return {...state, myFavorites: action.payload};
    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters
            .filter( (char)=>char.gender===action.payload ),
      };
    case ORDER:
      let ordenado;
      if (action.payload==='Ascending') {
        ordenado=state.myFavorites.sort((a, b)=>a.id>b.id?1:-1);
      } else {
        ordenado=state.myFavorites.sort((a, b)=>a.id<b.id?1:-1);
      }
      return {
        ...state,
        myFavorites: [...ordenado],
      };
    case RESET:
      return {
        ...state,
        myFavorites: state.allCharacters,
      };
    default:
      return {...state};
  }
};
export default rootReducer;
