import styles from "./Button.module.scss";

type Props = {
    title:string;
    className?:string;
    disabled?: boolean;
    mode?:"fill" | "outline";
}

export default (props:Props) => {
    return(
        <div className={styles.container}>
            {props.title}
        </div>
    )
}