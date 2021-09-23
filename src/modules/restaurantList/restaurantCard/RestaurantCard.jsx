import './restaurantCard.css';
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

export const RestaurantCard = (props) => {
    const {
        name, 
        telefono,
        onlineEnabled,
        menu,
        id
    } = props.restaurant;

    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
        newChecked.push(value);
        } else {
        newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <>
            <div className="tarjeta">
                <div className="carrusel">
                    <span>Carrusel con fotos de platos</span>
                </div>
    
                <div className="pedido-container">
                    <div className="info-pedido">
                        <div className="listado">
                            <span>{menu[0].key}</span>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                {[0, 1, 2].map((value) => {
                                    const labelId = `checkbox-list-label-${value}`;

                                    return (
                                    <ListItem key={value} disablePadding>
                                        <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
                                        <ListItemIcon>
                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            /> 
                                        </ListItemIcon>
                                        <ListItemText id={labelId} primary={menu[0].items[value]} />
                                        </ListItemButton>
                                    </ListItem>
                                    );
                                })}
                            </List>
                        </div>
                        <div className="restaurante">
                            <span>{name}</span>
                            <br />
                            <span>{telefono}</span>
                        </div>
                    </div>
                    <div className="btn">
                        {onlineEnabled && 
                            <button>Pedir</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}