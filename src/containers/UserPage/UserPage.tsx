import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import React, { useState } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import Input from "shared/Input/Input";
import styles from "./UserPage.module.css";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const handleClick = () => {
    window.localStorage.setItem("UNF_Name", name);
    navigate("/game");
  };

  return (
    <div className="w-full h-screen">
      {/* <BgGlassmorphism /> */}
      <div className="h-full flex flex-col justify-start py-48 z-100">
        <div className="flex flex-col gap-8 w-full items-center">
          <div className="flex flex-col gap-2 text-center">
            <h2
              className="text-3xl !leading-tight font-bold md:text-4xl xl:text-5xl drop-shadow-xl"
              style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
            >
              Enter Name
            </h2>
            <h6 className="text-xl !leading-tight font-normal drop-shadow-xl">
              The ULTIMATE Showdown
            </h6>
          </div>

          <Input
            style={{
              width: "20%",
              height: "50px",
              zIndex: 1,
              backgroundColor: "rgb(0 0 0 / 3%)",
            }}
            type="text"
            disabled={false}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <ButtonPrimary onClick={handleClick}>Play</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
