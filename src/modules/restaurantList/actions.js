import { Config } from "../../config/Config";

export const GET_MENUS_REQ = 'GET_MENUS_REQ';
export const GET_MENUS_RESP = 'GET_MENUS_RESP';

export const getMenus = (start) => {
    return dispatch => {
        dispatch({
          type: GET_MENUS_REQ
        });

        return fetch(Config.backendBaseUrl + '/menus')
        .then(response  => response.json()).then(menus => {
            dispatch({
                type: GET_MENUS_RESP,
                menus
            });
        });
    }
}