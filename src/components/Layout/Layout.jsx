import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollTop";

export default function Layout() {
  return (
    <div className="page">
      <Header />
      <main className="page__content">
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}