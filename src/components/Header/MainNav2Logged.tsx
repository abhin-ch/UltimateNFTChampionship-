import React, { FC } from "react";

import AvatarDropdown from "./AvatarDropdown";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Input from "shared/Input/Input";
import Logo from "shared/Logo/Logo";
import MenuBar from "shared/MenuBar/MenuBar";
import Navigation from "shared/Navigation/Navigation";
import NotifyDropdown from "./NotifyDropdown";
import SwitchDarkMode from "shared/SwitchDarkMode/SwitchDarkMode";

export interface MainNav2LoggedProps {}

const MainNav2Logged: FC<MainNav2LoggedProps> = () => {
  return (
    <div className={`nc-MainNav2Logged relative z-10 ${"onTop "}`}>
      <div className="container py-5 relative flex justify-between items-center space-x-4 xl:space-x-8">
        <div className="flex justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
          {/* <Logo /> */}
          <h4
            style={{
              fontFamily: "PressStart2P",
              color: "#ff4e7d",
              textShadow: "5px 3px 4px #1fb146",
            }}
            className="font-bold text-white text-xl max-w-md text-center sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl !leading-[120%] "
          >
            Ultimate NFT Champtionship
          </h4>{" "}
          <div className="hidden sm:block flex-grow max-w-xs"></div>
        </div>
        <div className="flex-shrink-0 flex items-center justify-end text-neutral-700 dark:text-neutral-100 space-x-1">
          <div className="hidden items-center xl:flex space-x-2">
            {/* <Navigation /> */}
            <div className="hidden sm:block h-6 border-l border-neutral-300 dark:border-neutral-6000"></div>
            <div className="flex">
              <SwitchDarkMode />
            </div>
            <div></div>
            <ButtonPrimary
              href="/page-upload-item"
              sizeClass="px-4 py-2 sm:px-5"
            >
              Play Now
            </ButtonPrimary>
            <div></div>
          </div>
          <div className="flex items-center space-x-3 xl:hidden">
            <NotifyDropdown />
            <AvatarDropdown />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2Logged;
