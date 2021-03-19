import Head from "next/head";
import stylesHome from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1 className={stylesHome.title}>Hello World</h1>
        <p className={stylesHome.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <p className={stylesHome.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <Link href="/niks">
          <a className={stylesHome.btn}>See Niks Listing</a>
        </Link>
      </div>
    </>
  );
}
