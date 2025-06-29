import Header from "./Outlet/Header";
import NavBar from "./Outlet/NavBar";
import LowerHeader from "./Outlet/LowerHeader";
import Hero from "./Hero/Hero.jsx";
import Banner from "./Hero/Banner.jsx";
import Product from "./Main/Product.jsx";
import BestSeller from "./Main/BestSeller.jsx";
import Footer from "./Outlet/Fotter.jsx";
export default function Home() {
  return (
    <>
      <Header />
      <NavBar />
      <LowerHeader/>
      <Hero/>
      <Banner/>
      <br/>
      <Product/>
      <BestSeller/>
      <Footer/>
    </>
  );
}
