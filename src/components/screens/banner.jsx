import googlePlay from "../../../public/google play.png";
import appStore from "../../../public/app store.png";
import deliveryGuy from "../../../public/delivery.png";
import { Link } from "react-router-dom";

const GreenCartBanner = () => {
  return (
    <div className="bg-gray-100 p-6 md:pt-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
      {/* Left Text Section */}
      <div className="flex-1 space-y-4">
        <h2 className="text-2xl md:text-3xl text-black font-semibold leading-snug">
          Fresh Meat delivered at Your Doorstep –{" "}
          <br className="hidden md:block" />
          Only from <span className="font-bold text-[#d50b23]">PUJJ KAAK</span>
        </h2>
        <p className="text-sm text-black">
          Download the app from app store or google play
        </p>
        <div className="flex gap-5 mt-2">
          <Link to="/coming-soon">
            <img src={googlePlay} alt="Google Play" className=" h-auto w-24" />
          </Link>
          <Link to="/coming-soon">
            <img src={appStore} alt="App Store" className="h-auto w-24" />
          </Link>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          src={deliveryGuy}
          alt="Delivery Guy with Box"
          className="w-full h-auto max-w-xs md:max-w-sm"
        />
      </div>
    </div>
  );
};

export default GreenCartBanner;
