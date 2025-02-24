import {useInput} from "../../hooks/useInput.ts";
import classes from "./login.module.css";
import btnClasses from '../../UI/Button/button.module.css'

const LoginPage = () => {
    const email = useInput('');
    const password = useInput('');

    return (
        <section className={classes.authorization}>
            <div className={classes.container}>
                <h3 className={classes.header}>Авторизация</h3>
                <form className={classes.authorization__form}>
                    <input {...email} className={classes.emailField} placeholder="email" type="text"/>
                    <input {...password} className={classes.passwordField} placeholder="password" type="password"/>
                </form>
                <div className={classes.buttons}>
                    <button className={btnClasses.login}>Войти</button>
                    <button className={btnClasses.registration}>Зарегистрироваться</button>
                </div>
            </div>
        </section>


    );
};

export default LoginPage;