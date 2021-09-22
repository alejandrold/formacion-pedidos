import './restaurantCard.css';

export const RestaurantCard = (props) => {
    const {
        name, 
        telefono,
        onlineEnabled,
        menu,
        id
    } = props.restaurant;

    return (
        <>
            <div className="tarjeta" key={id}>
                <div className="carrusel">
                    <span>Carrusel con fotos de platos</span>
                </div>
    
                <div className="pedido-container">
                    <div className="info-pedido">
                        <div className="listado">
                            <span>{menu[0].key}</span>
                            <ul>
                                <li>
                                    <input type="checkbox" />  
                                    <span>{menu[0].items[0]}</span>    
                                </li>
                                <li>
                                    <input type="checkbox" />  
                                    <span>{menu[0].items[1]}</span>      
                                </li>
                                <li>
                                    <input type="checkbox" />  
                                    <span>{menu[0].items[2]}</span>      
                                </li>
                            </ul>
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