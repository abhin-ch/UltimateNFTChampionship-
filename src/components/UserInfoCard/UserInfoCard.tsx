import React, { useEffect, useState } from "react";
import styles from "./UserInfoCard.module.css";
import TimeCountDown from "components/CardLarge1/TimeCountDown";
interface UserInfoCardProps {
  computerScore: number;
  playerScore: number;
  round: number;
  timeLeft: any;
}

const UserInfoCard = (props: UserInfoCardProps) => {
  const { computerScore, playerScore, round, timeLeft } = props;
  const [name, setName] = useState("");
  useEffect(() => {
    const temp = window.localStorage.getItem("UNF_Name");
    setName(temp ?? "New Player");
  }, []);

  return (
    <div className={styles.card + " p-5 bg-white"}>
      <div className="flex flex-col gap-10">
        <h2 className="text-4xl !leading-tight font-bold">Welcome {name}</h2>
        <div className="flex flex-row gap-32 items-center">
          <div className={styles.roundInfo + " flex flex-col gap-3 px-8 py-5"}>
            <h3 className="text-2xl !leading-tight font-bold">Round #1</h3>
            <h3 className="text-lg !leading-tight font-light">{round} of 3</h3>
          </div>
          <TimeCountDown timeLeft={timeLeft} />
          <div className="flex flex-row items-center gap-24">
            <div className="flex flex-col items-center">
              <h3 className="text-2xl !leading-tight font-bold">Joe</h3>

              <div className="flex flex-col sm:flex-row items-center p-6 mt-5 border-2 border-green-500 rounded-xl relative max-h-16">
                <span className="block absolute bottom-full translate-y-1.5 py-1 px-1.5 bg-white dark:bg-neutral-900 text-sm text-neutral-500 dark:text-neutral-400 ring ring-offset-0 ring-white dark:ring-neutral-900">
                  Score
                </span>
                <span className="text-xl font-semibold text-green-500">
                  {playerScore.toFixed(3)}
                  {" ETH"}
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl !leading-tight font-bold">Computer</h3>

              <div className="flex flex-col sm:flex-row items-center p-6 mt-5 border-2 border-green-500 rounded-xl relative max-h-16">
                <span className="block absolute bottom-full translate-y-1.5 py-1 px-1.5 bg-white dark:bg-neutral-900 text-sm text-neutral-500 dark:text-neutral-400 ring ring-offset-0 ring-white dark:ring-neutral-900">
                  Score
                </span>
                <span className="text-xl font-semibold text-green-500">
                  {computerScore.toFixed(3)}
                  {" ETH"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
