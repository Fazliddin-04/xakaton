import styles from "./style.module.scss";
import Image from "next/image";

export default function Card({ title, ads, isActive, ...props }) {
  return (
    <div className={styles.card} {...props}>
      <div className={styles.image}>
        <Image src="/images/new_product.png" alt="" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.content}>
        <div>
          <div className={styles.chip}>г. Ташкент</div>
          <h3>Chevrolet Onix 1.2 Turbo в наличии</h3>
          <p>Вчера, 19:20</p>
        </div>
        <p className={styles.price}>
          2 599 000 <span>UZS</span>
        </p>
      </div>
    </div>
  );
}
