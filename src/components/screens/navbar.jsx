import { FaAndroid } from "react-icons/fa";
import Button from "../ui/button/page";
import { useNavigate } from "react-router-dom";

import logo from "../../imgs/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/coming-soon");
  };
  return (
    <div className="navbar bg-[#d50b23] shadow-md">
      <div className="navbar-start">
        <a className=" ">
          <img
            src={logo}
            alt="logo"
            className="w-20 h-10 md:w-40 md:h-18 object-cover"
          />
        </a>
      </div>

      <div className="navbar-end">
        <Button
          text="Download for Android"
          className="text-[10px] md:text-sm"
          icon={<FaAndroid />}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
