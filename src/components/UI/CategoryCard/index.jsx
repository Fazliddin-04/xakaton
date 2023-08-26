import styles from "./style.module.scss";
import Image from "next/image";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { useState } from "react";
import classNames from "classnames";

export default function CategoryCard({ title, ads, isActive, ...props }) {
  return (
    <div
      className={classNames(styles.card, { [styles.active]: isActive })}
      {...props}
    >
      <div className={styles.image}>
        <div className={styles.image_wrapper}>
          <Image src="/images/woman.svg" alt="" layout="fill" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.content_info}>
          <h4>{title}</h4>
          <p>4 147 объявлений</p>
        </div>
        <ChevronRightRoundedIcon className={styles.icon} />
      </div>
    </div>
  );
}
