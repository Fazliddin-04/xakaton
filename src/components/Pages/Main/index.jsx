import CategoryCard from "@/components/UI/CategoryCard";
import { Box, Container } from "@mui/material";
import styles from "./style.module.scss";
import Subcategory from "@/components/UI/Subcategory";
import { useState } from "react";

export function Main() {
  const [openSubs, setOpenSub] = useState(null);
  console.log(openSubs);
  return (
    <Box mt="156px" bgcolor="#fff" pt="54px" pb="36px">
      <Container>
        <h2 className={styles.title}>Категории</h2>
        <p className={styles.subtitle}>
          Вы можете найти все категории, которые вам нужны от покупателя
        </p>
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", lg: "1fr 1fr 1fr" }}
          gap="20px"
          mt={5}
        >
          {[1, 2, 3].map((item) => (
            <CategoryCard
              key={item}
              isActive={item === openSubs}
              onClick={() =>
                setOpenSub((prevState) => (prevState !== item ? item : null))
              }
            />
          ))}
        </Box>
        <Subcategory open={openSubs > 0 && openSubs < 4} />
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", lg: "1fr 1fr 1fr" }}
          gap="20px"
          mt="20px"
        >
          {[4, 5, 6].map((item) => (
            <CategoryCard
              key={item}
              isActive={item === openSubs}
              onClick={() =>
                setOpenSub((prevState) => (prevState !== item ? item : null))
              }
            />
          ))}
        </Box>
        <Subcategory open={openSubs > 3 && openSubs < 7} />
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", lg: "1fr 1fr 1fr" }}
          gap="20px"
          mt="20px"
        >
          {[7, 8, 9].map((item) => (
            <CategoryCard
              key={item}
              isActive={item === openSubs}
              onClick={() =>
                setOpenSub((prevState) => (prevState !== item ? item : null))
              }
            />
          ))}
        </Box>
        <Subcategory open={openSubs > 6 && openSubs < 10} />
        <Box
          display="grid"
          gridTemplateColumns={{ xs: "1fr", lg: "1fr 1fr 1fr" }}
          gap="20px"
          mt="20px"
        >
          {[10, 11, 12].map((item) => (
            <CategoryCard
              key={item}
              isActive={item === openSubs}
              onClick={() =>
                setOpenSub((prevState) => (prevState !== item ? item : null))
              }
            />
          ))}
        </Box>
        <Subcategory open={openSubs > 9 && openSubs < 13} />
      </Container>
    </Box>
  );
}
