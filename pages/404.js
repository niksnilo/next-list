import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Meta from "../components/Meta";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      //   route.go(1);
      router.push("/");
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <Meta title="Page not found" />
      <h1>Ooooops...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
