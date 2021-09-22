import './home.css';

const ElementoLista = (props) => {
    const numero = props.numero;

    return(
        <li>{`Componente #${numero}`}</li>
    )
}

const Home = () => {
    const nombre = "alex";
    const value = false;
    const numeros = [1, 2, 3, 4, 5];

    return (
        <div className="home">
        {`Hola ${nombre}`}
        {value && 
            <div>Estas logeado</div>
        }
        {!value && 
            <div>NO estas logeado</div>
        }
        <ul>
            {numeros.map((numero, i) => 
                <ElementoLista numero={numero} key={i} />
            )}
        </ul>
        </div>
    );
}

export default Home;
