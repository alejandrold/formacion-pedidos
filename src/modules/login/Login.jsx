import { useState } from 'react';
import { loginUser } from './actions';
import './login.css';
import { connect } from 'react-redux';

const Login = (props) => {
    const {
        login,
        loading
    } = props;

    const [form, setForm] = useState({
        login: 'usuario@test',
        password: '123456'
    })

    const updateValue = (e, key) => {
        setForm({
            ...form,
            [key]: e.target.value
        })
    };


    return (
        <div className="login">
            <div className="login-title">
                <h1>LOGIN</h1>
            </div>
            {loading &&
                <div className="loading">Haciendo login contra el servidor</div>
            }
            <form onSubmit={(e) => {
                login(form.login, form.password);
                e.stopPropagation();
                e.preventDefault();

                return false;
            }}>
                <div className="inputs">
                    <input type="text" placeholder="Login" value={form.login} onChange={(e) => updateValue(e, 'login')} />
                    <input type="password" placeholder="Password" value={form.password} onChange={(e) => updateValue(e, 'password')} />
                </div>
                <br />
                <div className="btn">
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default connect(
    store => ({
        loading: store.login.loading,
    }),
    dispatch => ({
        login : (login, password) => dispatch(loginUser(login, password))
    })
)(Login);