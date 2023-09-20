import Logo from "../Logo/Logo";
import Navigation from "../Navigation/nav";
import Button from "../Buttons/buttons";
import styles from "./header.module.scss";
const Header = ()=>{
    return (
        <header className={styles.header} >
            <Logo/>
            <Navigation/>
            <Button btnText="Register" />
        </header>
    )
}

export default Header;