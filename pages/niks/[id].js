import Meta from "../../components/Meta";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((nik) => {
    return {
      params: { id: nik.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: {
      nik: data,
    },
  };
};

const Details = ({ nik }) => {
  return (
    <>
      <Meta title={nik.name} />
      <h1>{nik.name}</h1>
      <p>{nik.email}</p>
      <p>{nik.address.city}</p>
    </>
  );
};

export default Details;
