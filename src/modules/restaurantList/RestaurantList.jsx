import React, { useEffect, useRef } from 'react';
import Header from '../../components/header/Header';
import { RestaurantCard } from './restaurantCard/RestaurantCard';
import { getMenus } from './actions';
import './restaurantList.css';
import { connect } from 'react-redux';

const ITEMS_PER_PAGE = 5;

const RestaurantList = (props) => {

    const {
        loadMenus,
        menus,
        loading
    } = props;

    const restaurantsRef = useRef();

    useEffect(() => {
        loadMenus(0, ITEMS_PER_PAGE);
    }, []);

    if (restaurantsRef.current) {
        restaurantsRef.current.onscroll = () => {
          const heightToScroll = restaurantsRef.current.scrollHeight - (restaurantsRef.current.offsetHeight + restaurantsRef.current.scrollTop);
    
          if (heightToScroll < restaurantsRef.current.offsetHeight) {
            loadMenus((menus.currentPage + 1) * ITEMS_PER_PAGE, ITEMS_PER_PAGE);
          }
        }
      }
    
    return(
        <>
            <Header />
            <div className="contenido">
                {loading && menus.items.length > 0 &&
                    <div className="loading">Cargando</div>
                }
                {!loading && menus.items.map(menuItem => (
                    <RestaurantCard restaurant={menuItem} key={menuItem.id} />
                ))}
            </div>
        </>
    )
};

export default connect(
    store => ({
        loading: store.restaurantList.loading,
        menus: store.restaurantList.menus
    }),
    dispatch => ({
        loadMenus : (start, count) => dispatch(getMenus(start, count))
    })
)(RestaurantList);