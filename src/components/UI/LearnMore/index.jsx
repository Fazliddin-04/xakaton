import styles from "./style.module.scss";
import KeyboardDoubleArrowDownRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowDownRounded";

export function Button({ ...props }) {
  return (
    <div className={styles.button} {...props}>
      Загрузить больше <KeyboardDoubleArrowDownRoundedIcon />
    </div>
  );
}
