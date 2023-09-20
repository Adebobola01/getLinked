
type propType = {
    link: string
}

const styles = {
    textDecoration: "none",
    color: "#fff"
}

const NavItem = (props: propType)=>{

    return(
        <a style={styles} >{props.link}</a>
    )
}

export default NavItem;