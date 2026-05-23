import { FaAndroid, FaApple } from "react-icons/fa";
import Button from "../ui/button/page";
import { useNavigate } from "react-router-dom";

import logo from "../../imgs/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/coming-soon");
  };
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between rounded-full border border-white/30 bg-white/85 px-4 py-3 shadow-[0_25px_60px_rgba(27,94,59,0.15)] backdrop-blur-xl transition-all duration-300 md:px-8">
        <div className="flex items-center gap-3">
          <a className="inline-flex items-center">
            <img
              src={logo}
              alt="Halal Nation"
              className="h-10 w-auto md:h-12 rounded-md"
            />
          </a>
        </div>
        <div className="flex items-center gap-3 md:gap-4">
          <Button
            text="Android"
            className="compact"
            icon={<FaAndroid />}
            onClick={handleClick}
          />
          <Button
            text="iOS"
            className="compact hidden md:inline-flex"
            icon={<FaApple />}
            onClick={handleClick}
          />
        </div>
      </div>
    </header>
  );
}
