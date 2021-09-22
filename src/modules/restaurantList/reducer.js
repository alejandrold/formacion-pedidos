import {
    GET_MENUS_REQ,
    GET_MENUS_RESP
  } from './actions';
  
  const initialState = {
    menus: [],
    loading: false
  };
  
  const login = (state = initialState, action) => {
    switch (action.type) {
      case GET_MENUS_REQ:
        return {
          ...state,
          loading : true
        };
      case GET_MENUS_RESP:
        return {
            ...state,
            loading : false,
            menus : action.menus
          };
      default:
        return state;
    }
  };
  
  export default login;