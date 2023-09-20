import NavItem from "./navItem/navItem";
import styles from "./nav.module.scss";

const Navigation = ()=>{

    return (
        <nav className={styles.nav} > 
            <NavItem link="Timeline" />
            <NavItem link="Overview" />
            <NavItem link="FAQs" />
            <NavItem link="Contact" />
        </nav>
    )
}

export default Navigation;