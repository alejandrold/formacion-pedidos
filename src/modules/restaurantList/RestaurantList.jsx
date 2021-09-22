import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header';
import { RestaurantCard } from './restaurantCard/RestaurantCard';
import { getMenus } from './actions';
import './restaurantList.css';
import { connect } from 'react-redux';

const RestaurantList = (props) => {

    const {
        userInfo,
        loadMenus
    } = props;

    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        getMenus(0).then(menusResponse => {
            setMenus(menusResponse);
            setLoading(false);
        });
    }, []);

    useEffect(() => {
        if(reload){
            setMenus([]);
            getMenus(0).then(menusResponse => {
                setMenus(menusResponse);
                setLoading(false);
                setReload(false);
            });
        }
    }, [reload]);

    console.log("Render RestaurantList: ", reload)
    
    return(
        <>
            <Header />
            <div className="btn-reload">
                <button onClick={() => setReload(true)}>Reload</button>
            </div>
            
            <div className="contenido">
                {loading && 
                    <div className="loading">Cargando</div>
                }
                {!loading && menus.map(menuItem => (
                    <RestaurantCard key={menuItem.id} restaurant={menuItem} />
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
        getMenus : (start) => dispatch(getMenus(start))
    })
)(RestaurantList);