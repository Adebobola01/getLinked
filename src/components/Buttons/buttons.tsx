import styles from "./button.module.scss";

type propsType = {
    btnText: string
}

const Button = (props: propsType)=>{

    return (
        <button className={styles.btn}>{props.btnText}</button>
    )
}

export default Button;