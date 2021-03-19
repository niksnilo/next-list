import Footer from "./Footer";
import Navbar from "./Navbar";
import Meta from "../components/Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
