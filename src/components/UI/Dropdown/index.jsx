import { memo, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
// MUI
import { Box, Menu, MenuItem } from "@mui/material";
import { KeyboardArrowDownRounded, CheckRounded } from "@mui/icons-material";
// Style
import classNames from "classnames";
import styles from "./style.module.scss";

function Dropdown({ list, type, onSelect, fullWidth, border, className }) {
  const router = useRouter();
  const { t } = useTranslation("common");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className={classNames(styles.dropdown, {
        [styles.fullwidth]: fullWidth,
        [styles.border]: border,
      })}
    >
      <div
        className={classNames(styles.handle, {
          [styles.active]: open,
          [className]: className,
        })}
        onClick={handleClick}
      >
        {/* Create Your Handle Below */}
        {type === "lang" && (
          <div className={styles.flag_down}>
            <div className={styles.icon}>
              <Image
                src={`/images/${router.locale}.png`}
                objectFit="cover"
                priority={true}
                alt={router.locale}
                width={18}
                height={18}
              />
              <p>{t(router.locale)}</p>
            </div>
            <KeyboardArrowDownRounded
              style={{
                transform: open ? "rotate(180deg)" : "rotate(0deg)",
                transition: "150ms",
              }}
            />
            {fullWidth &&
              list.map(
                (item) =>
                  item.key === router.locale && (
                    <p key={item.key + item.label}>{item.label}</p>
                  )
              )}
          </div>
        )}
      </div>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        className={styles.menu}
        PaperProps={{
          elevation: 0,
          sx: {
            width: fullWidth ? "222px" : "232px",
            overflow: "visible",
            filter: fullWidth
              ? null
              : "drop-shadow(0px 0px 16px rgba(0, 0, 0, 0.1))",
            boxShadow: fullWidth ? "0px 8px 20px 0px #4444441F" : null,
            mt: fullWidth ? 0 : 1.5,
            outline: "none",
            p: 1,
            borderRadius: "12px",
            "&:before": {
              content: '""',
              display: fullWidth ? "none" : "block",
              position: "absolute",
              top: 0,
              right: 20,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {list.map((item) =>
          type === "lang" ? (
            <Link
              href={router.asPath}
              locale={item.key}
              key={item.key}
              passHref
            >
              <MenuItem className={styles.menuItem}>
                <div>
                  <Image
                    src={`/images/${item.key}.png`}
                    objectFit="cover"
                    priority={true}
                    alt={item.key}
                    width={24}
                    height={24}
                  />
                  {item.label}
                </div>
                {router.locale === item.key && (
                  <CheckRounded htmlColor="var(--primary-color)" />
                )}
              </MenuItem>
            </Link>
          ) : type === "address" ? (
            <MenuItem
              key={item.address}
              className={styles.menuItem}
              onClick={() => onSelect(item?.location, item?.id)}
            >
              <p>{item?.address}</p>
            </MenuItem>
          ) : (
            <div key={item.key}>
              <Link href={"/" + item.key} replace key={item.key} passHref>
                <MenuItem className={styles.menuItem}>
                  {t(item.label)}
                  {router.pathname === `/${item.key}` && (
                    <CheckRounded htmlColor="var(--primary-color)" />
                  )}
                </MenuItem>
              </Link>
            </div>
          )
        )}
      </Menu>
    </div>
  );
}

export default memo(Dropdown);
