import Head from "next/head";
import { useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
// import Link from "next/link";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import baseURL from "../utilitis/baseUrl";

export default function Home({ pizzaList, admin }) {
  const [close, setClose] = useState(true);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Pizza Restuarant in Bangladesh</title>
          <meta name="description" content="Best pizza shop in town" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </>
  );
}

export const getServerSideProps = async (context) => {
  const myCookie = context.req?.cookies || "";
  let admin = false;

  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }

  const res = await baseURL.get("/products");

  return {
    props: {
      pizzaList: res.data,
      admin,
    },
  };
};

// ng
