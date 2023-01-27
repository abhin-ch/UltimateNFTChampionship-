import BgGlassmorphism from 'components/BgGlassmorphism/BgGlassmorphism';
import React, { useState } from 'react';
import ButtonPrimary from 'shared/Button/ButtonPrimary';
import Input from 'shared/Input/Input';
import styles from './UserPage.module.css';
import { useNavigate } from 'react-router-dom';

const UserPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const handleClick = (text?: string) => {
    window.localStorage.setItem('UNF_Name', name);
    navigate('/game', { state: { difficulty: text } });
  };

  return (
    <div className='w-full h-screen'>
      {/* <BgGlassmorphism /> */}
      <div className='h-full flex flex-col justify-start py-24 z-100'>
        <div className='flex flex-col gap-8 w-full items-center'>
          <div className='flex flex-col gap-2 text-center'>
            <h2
              className='text-3xl !leading-tight font-bold md:text-4xl xl:text-5xl drop-shadow-xl'
              style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
            >
              Enter Name
            </h2>
            <h6 className='text-xl !leading-tight font-normal drop-shadow-xl'>
              The ULTIMATE Showdown. Choose your difficulty.
            </h6>
          </div>

          <Input
            style={{
              width: '20%',
              height: '50px',
              zIndex: 1,
              backgroundColor: 'rgb(0 0 0 / 3%)'
            }}
            type='text'
            disabled={false}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className='flex flex-row gap-8 w-3/6 items-center'>
            <ButtonPrimary onClick={() => handleClick('easy')}>
              Easy
            </ButtonPrimary>
            <ButtonPrimary onClick={() => handleClick('medium')}>
              Medium
            </ButtonPrimary>
            <ButtonPrimary onClick={() => handleClick('hard')}>
              Hard
            </ButtonPrimary>
          </div>
          <h2
            className='text-3xl !leading-tight font-bold md:text-4xl xl:text-5xl drop-shadow-xl'
            style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
          >
            How to Play
          </h2>
          <h6 className='text-xl !leading-tight font-normal drop-shadow-xl w-2/3'>
            In this game, the player has a face-off against the computer. The
            aim of the game is to accumulate more points than your opponent.
            <br></br>
            <br></br>Both you and the computer gets drawn the same selection of
            9 NFTS. There are 3 rounds in each game. Each round you are given a
            limited amount of time to select one NFT, of which the computer will
            also select one.
            <br></br>
            <br></br>
            The one who selects the NFT contract that has higher value wins the
            round. Value is determined by the lowest executed price for an NFT
            contract for the last x days in ETH. Try to beat the computer and
            showcase your knowledge in the world of NFTs by having the better
            selection of 3 NFTS.
          </h6>
        </div>
      </div>
    </div>
  );
};

export default UserPage;
