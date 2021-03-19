import Link from "next/link";
import Meta from "../../components/Meta";
import stylesNiks from "../../styles/Niks.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { niks: data },
  };
};

const Niks = ({ niks }) => {
  return (
    <>
      <Meta title="Listing" />
      <div>
        <h1>All Niks</h1>
        {niks.map((nik) => (
          <Link key={nik.id} href={"/niks/" + nik.id}>
            <a className={stylesNiks.single}>
              <h3>{nik.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Niks;
