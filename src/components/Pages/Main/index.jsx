import CategoryCard from "@/components/UI/CategoryCard";
import { Box, Container } from "@mui/material";
import styles from "./style.module.scss";
import Subcategory from "@/components/UI/Subcategory";
import { useState } from "react";
import { SearchInput } from "@/components/UI/SearchInput";
import Card from "@/components/UI/Card";
import { Button } from "@/components/UI/LearnMore";

export function Main() {
  const [openSubs, setOpenSub] = useState(null);

  return (
    <>
      <Box mt="156px" bgcolor="#fff" pt="54px" pb="36px" position="relative">
        <SearchInput />
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
            {[
              { label: "Для женщин", id: 1 },
              { label: "Красота", id: 2 },
              { label: "Бытовая техника", id: 3 },
            ].map((item) => (
              <CategoryCard
                key={item}
                title={item.label}
                isActive={item.id === openSubs}
                onClick={() =>
                  setOpenSub((prevState) =>
                    prevState !== item.id ? item.id : null
                  )
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
            {[
              { label: "Для мужчин", id: 4 },
              { label: "Здоровье", id: 5 },
              { label: "Электроника", id: 6 },
            ].map((item) => (
              <CategoryCard
                key={item}
                title={item.label}
                isActive={item.id === openSubs}
                onClick={() =>
                  setOpenSub((prevState) =>
                    prevState !== item.id ? item.id : null
                  )
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
            {[
              { label: "Детские товары", id: 7 },
              { label: "Украшения и бижутерия", id: 8 },
              { label: "Домашняя утварь", id: 9 },
            ].map((item) => (
              <CategoryCard
                key={item}
                title={item.label}
                isActive={item.id === openSubs}
                onClick={() =>
                  setOpenSub((prevState) =>
                    prevState !== item.id ? item.id : null
                  )
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
            {[
              { label: "Обувь", id: 10 },
              { label: "Канцелярия", id: 11 },
              { label: "Спорт и отдых", id: 12 },
            ].map((item) => (
              <CategoryCard
                key={item}
                title={item.label}
                isActive={item.id === openSubs}
                onClick={() =>
                  setOpenSub((prevState) =>
                    prevState !== item.id ? item.id : null
                  )
                }
              />
            ))}
          </Box>
          <Subcategory open={openSubs > 9 && openSubs < 13} />
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", lg: "1fr 1fr 1fr" }}
            gap="20px"
            mt="20px"
          >
            {[
              { label: "Автотовары", id: 13 },
              { label: "Новые легковые автомобили", id: 14 },
              { label: "Мототранспорт", id: 15 },
            ].map((item) => (
              <CategoryCard
                key={item}
                title={item.label}
                isActive={item.id === openSubs}
                onClick={() =>
                  setOpenSub((prevState) =>
                    prevState !== item.id ? item.id : null
                  )
                }
              />
            ))}
          </Box>
          <Subcategory open={openSubs > 12} />
        </Container>
      </Box>
      <Box mt="64px" pt="54px" pb="36px" position="relative">
        <Container>
          <h2 className={styles.title}>Объявления</h2>
          <p className={styles.subtitle}>
            Вы можете найти все категории, которые вам нужны от покупателя
          </p>

          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", lg: "1fr 1fr 1fr 1fr" }}
            gap="20px"
            mt={5}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <Card key={item} />
            ))}
          </Box>
          <Button />
        </Container>
      </Box>
    </>
  );
}
