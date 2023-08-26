import { useState } from "react";
import { Box, Container } from "@mui/material";
import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./style.module.scss";
import { CloseRounded as CloseIcon } from "@mui/icons-material";
import { Button } from "../Button";
import classNames from "classnames";
import Image from "next/image";
import Dropdown from "../Dropdown";
const { motion } = require("framer-motion");
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";

export default function Header() {
  const [isDrawer, setDrawer] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("common");
  const langs = [
    {
      key: "ru",
      label: t("ru"),
    },
    {
      key: "uz",
      label: t("uz"),
    },
    {
      key: "en",
      label: t("en"),
    },
  ];

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.3,
      },
    },
    hidden: {
      y: "-20vh",
      opacity: 0,
    },
  };

  return (
    <>
      <motion.header
        variants={variants}
        initial="hidden"
        animate="visible"
        className={styles.container}
      >
        <Container>
          <div className={styles.navbar}>
            <Box display="flex" alignItems="center" gap={3}>
              <Dropdown list={langs} type={"lang"} />
              <Box
                display={{ xs: "none", md: "flex" }}
                alignItems="center"
                gap={0.5}
                fontSize="14px"
              >
                <LocalPhoneOutlinedIcon fontSize="small" />
                <a href="tel:+998712007007">+998 71 200 70 07</a>
              </Box>
            </Box>
            <Link href="/">
              <a className={styles.brand_logo}>
                <Image src="/images/logo.png" alt="" width={138} height={72} />
              </a>
            </Link>
            <Button sx={{ display: "flex", gap: 1 }}>
              {t("sign_in")} <LoginRoundedIcon />
            </Button>
          </div>
        </Container>
      </motion.header>
      <div className={classNames(styles.drawer, { [styles.active]: isDrawer })}>
        <ul className={styles.list}>
          <CloseIcon
            onClick={() => setDrawer(false)}
            className={styles.close}
          />
          <li className={styles.list_item} onClick={() => setDrawer(false)}>
            <Link href="/#about">O нас</Link>
          </li>
          <li className={styles.list_item} onClick={() => setDrawer(false)}>
            <Link href="/#for_clients">Приложения</Link>
          </li>
          <li className={styles.list_item} onClick={() => setDrawer(false)}>
            <Link href="/#clients">Клиенты</Link>
          </li>
          <li className={styles.list_item} onClick={() => setDrawer(false)}>
            <Link href="/#integrated">Интеграции</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
