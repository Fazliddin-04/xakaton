import styles from "./style.module.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export function SearchInput() {
  return (
    <div className={styles.control}>
      <SearchRoundedIcon className={styles.icon} />
      <input type="text" placeholder="Что вы ищите?" />
      <div className={styles.button}>Поиск</div>
    </div>
  );
}
