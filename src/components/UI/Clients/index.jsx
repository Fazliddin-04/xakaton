import { Container } from "@mui/material";
import styles from "./style.module.scss";
import Image from "next/image";
import { useMemo } from "react";
import AnimatedTitle from "../AnimatedTitle";

export default function Clients() {
  const clients = useMemo(
    () => [
      {
        id: "line_one",
        clients: [
          {
            img: "/image/clients/barokatli_bozor.svg",
            id: "barokatli_bozor1",
            name: "barokatli_bozor",
          },
          {
            img: "/image/clients/bbqburger.svg",
            id: "bbqburger1",
            name: "bbqburger",
          },
          {
            img: "/image/clients/benison.svg",
            id: "benison1",
            name: "benison",
          },
          {
            img: "/image/clients/china_shashlik.svg",
            id: "china_shashlik1",
            name: "china_shashlik",
          },
          {
            img: "/image/clients/doneria.svg",
            id: "doneria1",
            name: "doneria",
          },
          { img: "/image/clients/enjoy.svg", id: "enjoy1", name: "enjoy" },
          { img: "/image/clients/ezoz.svg", id: "ezoz1", name: "ezoz" },
          { img: "/image/clients/fajr.svg", id: "fajr", name: "fajr" },
          {
            img: "/image/clients/gijduvon_milliy.svg",
            id: "gijduvon_milliy",
            name: "gijduvon_milliy",
          },
          {
            img: "/image/clients/gijduvon_premium.svg",
            id: "gijduvon_premium",
            name: "gijduvon_premium",
          },
          {
            img: "/image/clients/jonon_chicken.svg",
            id: "jonon_chicken",
            name: "jonon_chicken",
          },
          { img: "/image/clients/aksu.svg", id: "aksu", name: "aksu" },
        ],
      },
      {
        id: "line_two",
        clients: [
          { img: "/image/clients/kamolon.svg", id: "kamolon", name: "kamolon" },
          {
            img: "/image/clients/kebab_house.svg",
            id: "kebab_house",
            name: "kebab_house",
          },
          {
            img: "/image/clients/king_plov.svg",
            id: "king_plov",
            name: "king_plov",
          },
          {
            img: "/image/clients/mahmood_kabob.svg",
            id: "mahmood_kabob",
            name: "mahmood_kabob",
          },
          { img: "/image/clients/maxway.svg", id: "maxway", name: "maxway" },
          {
            img: "/image/clients/mc_burgers.svg",
            id: "mc_burgers",
            name: "mc_burgers",
          },
          {
            img: "/image/clients/moskovskaya.svg",
            id: "moskovskaya",
            name: "moskovskaya",
          },
          { img: "/image/clients/munisa.svg", id: "munisa", name: "munisa" },
          { img: "/image/clients/olimp.svg", id: "olimp", name: "olimp" },
          { img: "/image/clients/osiyo.svg", id: "osiyo", name: "osiyo" },
          { img: "/image/clients/ozbegim.svg", id: "ozbegim", name: "ozbegim" },
          { img: "/image/clients/tesko.svg", id: "tesko", name: "tesko" },
        ],
      },
      {
        id: "line_three",
        clients: [
          {
            img: "/image/clients/perfetto.svg",
            id: "perfetto1",
            name: "perfetto",
          },
          {
            img: "/image/clients/pizzaritet.svg",
            id: "pizzaritet2",
            name: "pizzaritet",
          },
          {
            img: "/image/clients/plov_city.svg",
            id: "plov_city3",
            name: "plov_city",
          },
          {
            img: "/image/clients/registon_osh.svg",
            id: "registon_osh4",
            name: "registon_osh",
          },
          {
            img: "/image/clients/romapizza.svg",
            id: "romapizza5",
            name: "romapizza",
          },
          { img: "/image/clients/samosh.svg", id: "samosh6", name: "samosh" },
          {
            img: "/image/clients/sariq_bola.svg",
            id: "sariq_bola1",
            name: "sariq_bola",
          },
          {
            img: "/image/clients/shef_burger.svg",
            id: "shef_burger",
            name: "shef_burger",
          },
          {
            img: "/image/clients/sof_kafe.svg",
            id: "sof_kafe",
            name: "sof_kafe",
          },
          {
            img: "/image/clients/stuzzico.svg",
            id: "stuzzico",
            name: "stuzzico",
          },
          { img: "/image/clients/taksim.svg", id: "taksim", name: "taksim" },
          { img: "/image/clients/takumi.svg", id: "takumi", name: "takumi" },
          { img: "/image/clients/tarnov.svg", id: "tarnov", name: "tarnov" },
        ],
      },
    ],
    []
  );

  return (
    <div className={styles.clients} id="clients">
      <Container className={styles.container}>
        <AnimatedTitle className={styles.title} text="C нами уже работают" />
        <p>
          Наши клиенты - крупнейшие компании на рынке Узбекистана и мы стремимся
          делать наш продукт еще лучше.
        </p>
        <div className={styles.clients_wrapper}>
          {clients.map((line) => (
            <div key={line.id} className={styles.marquee}>
              {line.clients.map((client) => (
                <div key={client.id}>
                  <Image
                    src={client.img}
                    alt={client.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
              {line.clients.map((client) => (
                <div key={client.id + "1233_skd"}>
                  <Image
                    src={client.img}
                    alt={client.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
