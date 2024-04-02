/* eslint-disable react/prop-types */
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { useStateContext } from "../contexts/ContextProvider";
import { AiOutlineMenu } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { RiNotification3Line } from "react-icons/ri";
import avatar from "../data/avatar.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
import Notification from "./Notification";
import UserProfile from "./UserProfile";
import Chat from "./Chat";
import Cart from "./Cart";
import { useEffect } from "react";

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ backgroundColor: dotColor }}
        className=" absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    activeMenu,
    screenSize,
    setScreenSize,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    currentColor,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [setScreenSize]);

  useEffect(() => {
    screenSize <= 900 ? setActiveMenu(false) : setActiveMenu(true);
  }, [screenSize, setActiveMenu]);
  return (
    <div className="flex justify-between p-2 md:mx-6 relative items-center">
      <NavButton
        title={"Menu"}
        customFunc={() => setActiveMenu((prev) => !prev)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className="flex items-center">
        <NavButton
          title={"Cart"}
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />

        <NavButton
          title={"Chat"}
          dotColor={"#03c9d7"}
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />

        <NavButton
          title={"Notifications"}
          dotColor={"#03c9d7"}
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />

        <TooltipComponent content={"Profile"} position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avatar} alt="avatar" className="rounded-full w-8 h-8" />
            <p>
              <span className="text-gray-400 text-14">Hi, </span>{" "}
              <span className="text-gray-400 text-14 font-bold ml-1">
                Ahmed
              </span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
