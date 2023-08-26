import styles from "./style.module.scss";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import classNames from "classnames";

export default function Subcategory({ open }) {
  console.log({ open });
  return (
    <div className={classNames(styles.card, { [styles.active]: open })}>
      {[
        "Смартфоны",
        "Фитнес браслеты",
        "Аксессуары для смартфонов и телефонов",
        "Ремешки для часов и смарт-часов",
        "Смарт-часы",
        "Запчасти для смартфонов",
      ].map((item) => (
        <div className={styles.list_item} key={item}>
          <p>{item}</p>
          <ChevronRightRoundedIcon sx={{ color: "#B8BBBD" }} />
        </div>
      ))}
    </div>
  );
}
