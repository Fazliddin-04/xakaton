import styles from "./style.module.scss";
import Link from "next/link";
import { Box, Container } from "@mui/material";
import Image from "next/image";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footer_nav}>
          <div className={styles.logo}>
            <Image src="/images/logo.png" alt="" width={138} height={72} />
          </div>
          <p className={styles.about_text}>
            77.uz marketplace - это виртуальная платформа в Узбекистане, которая
            облегчает покупки и продажи, связывая продавцов с потенциальными
            клиентами.{" "}
          </p>
          <ul className={styles.list}>
            <li>
              <Link href="/#about">
                <a
                  style={{
                    textDecoration: `none`,
                  }}
                  className={styles.list_item}
                >
                  <Image
                    src="/images/symbol.png"
                    alt=""
                    width={16}
                    height={16}
                  />
                  Доска объявлений
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a
                  style={{
                    textDecoration: `none`,
                  }}
                  className={styles.list_item}
                >
                  <Image
                    src="/images/symbol.png"
                    alt=""
                    width={16}
                    height={16}
                  />
                  Условия пользования
                </a>
              </Link>
            </li>
            <li>
              <Link href="/#about">
                <a
                  style={{
                    textDecoration: `none`,
                  }}
                  className={styles.list_item}
                >
                  <Image
                    src="/images/symbol.png"
                    alt=""
                    width={16}
                    height={16}
                  />
                  +998 88 500 50 00
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
      <div className={styles.bottom}>
        <Container>
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <p>&copy; 77.uz {new Date().getFullYear()}. Все права защищены</p>
            <Box display="flex" gap={1}>
              <Image src="/images/uic.svg" alt="" width={38} height={20} />
              <p>UIC Group</p>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}
