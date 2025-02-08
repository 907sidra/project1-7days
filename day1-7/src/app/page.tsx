import Casuals from "./casuals/page";
import CustomerCarousel from "./components/carousel";
import Dress from "./components/dress";
import Fonts from "./components/fonts";
import {Hero} from "./components/hero"
import Products  from "./product/page";
import Sell from "./product/sell";

export default function Home() {
  return (
    <div>
    <Hero/>
    <Fonts/>
    <Products/>
    <Sell/>
    <Dress/>
    <CustomerCarousel/>
    <Casuals/>
    </div>
  );
}
