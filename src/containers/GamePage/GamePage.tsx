import BgGlassmorphism from 'components/BgGlassmorphism/BgGlassmorphism';
import CardNFT2 from 'components/CardNFT2';
import UserInfoCard from 'components/UserInfoCard/UserInfoCard';
import React, { useEffect, useState } from 'react';
import { getNftsInfo } from 'utils/collections';
import { Button, CircularProgress, Modal } from '@mui/material';
import { StyledModalBox } from 'components/styled-modal-box/StyledModalBox';
import { useLocation } from 'react-router-dom';

enum GameResult {
  Default = -1,
  Draw = 0,
  PlayerWin = 1,
  CpuWin = 2
}

const TIMER_COUNTDOWN = {
  0: -1,
  1: 12,
  2: 8,
  3: 5
};

const DEFAULT_SCORE = 0.0;

const GamePage = () => {
  const { state } = useLocation();
  const difficulty = state?.difficulty;
  // use-states

  // Score tracker states
  const [computerSelectedNftsArr, setComputerSelectedNftsArr] = useState<any>(
    []
  );
  const [playerSelectedNftsArr, setPlayerSelectedNftsArr] = useState<any>([]);
  const [playerScore, setPlayerScore] = useState<number>(DEFAULT_SCORE);
  const [computerScore, setComputerScore] = useState<number>(DEFAULT_SCORE);
  const [computerNftPrice, setComputerNftPrice] = useState<number>(0);

  // Nft card selection states
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [selectedNFT, setSelectedNFT] = useState<any>({
    name: '',
    image: '',
    price: '',
    usdPrice: '',
    round: 1,
    selected: -1
  });

  // NFT fetching states
  const [fetching, setFetching] = useState(true);
  const [nfts, setNfts] = useState<any>(undefined);

  // Round information states
  const [isPlayerWin, setIsPlayerWin] = useState<GameResult>(
    GameResult.Default
  );
  const [round, setRound] = useState<number>(1);

  // Modal states
  const [roundModalOpen, setRoundModalOpen] = useState(false);
  const [gameModalOpen, setGameModalOpen] = useState(false);

  // Timer state
  const [counter, setCounter] = React.useState(-1);

  // Helper functions
  const getRoundResultText = () => {
    let res = '';
    if (isPlayerWin === GameResult.PlayerWin) {
      res =
        'You win: ' +
        selectedNFT.usdPrice +
        ' USD' +
        ' vs ' +
        computerNftPrice +
        ' USD';
    } else if (isPlayerWin === GameResult.CpuWin) {
      res =
        'CPU wins: ' +
        selectedNFT.usdPrice +
        ' USD' +
        ' vs ' +
        computerNftPrice +
        ' USD';
    } else {
      res = 'Draw';
    }
    return res;
  };

  const getCounter = (currRound: number) => {
    if (currRound === 1) {
      return TIMER_COUNTDOWN[1];
    } else if (currRound === 2) {
      return TIMER_COUNTDOWN[2];
    } else if (currRound === 3) {
      return TIMER_COUNTDOWN[3];
    } else {
      return TIMER_COUNTDOWN[0];
    }
  };

  const roundReset = () => {
    let currRound = round;
    setRound(currRound + 1);
    setCounter(getCounter(currRound + 1));
    setRoundModalOpen(false);
  };

  const gameReset = () => {
    let currRound = round;
    setComputerScore(DEFAULT_SCORE);
    setPlayerScore(DEFAULT_SCORE);
    setComputerSelectedNftsArr([]);
    setPlayerSelectedNftsArr([]);
    setGameModalOpen(false);
    setRound(1);
    setCounter(getCounter(currRound + 1));
    setFetching(true);
  };

  const handleRoundModalClose = () => {
    roundReset();
  };

  const handleGameModalClose = () => {
    setGameModalOpen(false);
  };

  const updateScore = (playerNft: any, cpuNft: any) => {
    setPlayerScore(playerScore + (Number(playerNft.price) ?? DEFAULT_SCORE));
    setComputerScore(computerScore + (Number(cpuNft.price) ?? DEFAULT_SCORE));
  };

  const handleLikedAction = (nft: any) => {
    setHasLiked(true);
    setSelectedNFT(nft);
  };

  const pickRandomNft = () => {
    const arr = [];
    for (let i = 0; i < nfts.length; i++) {
      arr.push(nfts[i].usdPrice);
    }
    //sort by descending order
    arr.sort((a: any, b: any) => b - a);
    let rand: number;
    if (difficulty === 'hard') {
      rand = Math.floor(Math.random() * 3);
    } else if (difficulty === 'medium') {
      rand = Math.floor(Math.random() * 5);
    } else {
      rand = Math.floor(Math.random() * 8);
    }
    let cpuNft;
    for (let i = 0; i < nfts.length; i++) {
      if (arr[rand] === nfts[i].usdPrice) cpuNft = nfts[i];
    }
    // console.log(difficulty, arr, rand, cpuNft);
    setComputerNftPrice(Number(cpuNft.usdPrice));
    return cpuNft;
  };

  const updatePlayerSelectedNfts = () => {
    if (!selectedNFT) {
      return;
    }
    const element = {
      address: selectedNFT.address,
      price: selectedNFT.price
    };
    let tempArr = [...playerSelectedNftsArr];
    setPlayerSelectedNftsArr(undefined);
    tempArr.push(element);
    setPlayerSelectedNftsArr(tempArr);
  };

  const updateComputerSelectedNfts = (nft: any) => {
    if (!nft) {
      return;
    }
    const element = { address: nft.address, price: nft.price };
    let tempArr = [...playerSelectedNftsArr];
    setComputerSelectedNftsArr(undefined);
    tempArr.push(element);
    setComputerSelectedNftsArr(tempArr);
  };

  const goToNextRound = () => {
    let cpuNft = pickRandomNft();
    while (
      computerSelectedNftsArr.some(
        (item: any) => item.address === cpuNft.address
      )
    ) {
      cpuNft = pickRandomNft();
    }

    updatePlayerSelectedNfts();
    updateComputerSelectedNfts(cpuNft);
    updateScore(selectedNFT, cpuNft);

    if (selectedNFT.price > cpuNft.price) {
      setIsPlayerWin(GameResult.PlayerWin);
    } else if (selectedNFT.price < cpuNft.price) {
      setIsPlayerWin(GameResult.CpuWin);
    } else {
      setIsPlayerWin(GameResult.Draw);
    }

    if (round < 3) {
      setRoundModalOpen(true);
    } else {
      setGameModalOpen(true);
    }
  };

  // use-effects
  useEffect(() => {
    if (counter === 0) {
      goToNextRound();
    }
  }, [counter]);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer ? timer : '');
  }, [counter]);

  useEffect(() => {
    if (fetching) {
      const getData = async () => {
        const tempNfts = await getNftsInfo();
        let tempArray = [];
        let tempPlayerSelectedNftsMap: { [key: string]: boolean } = {};
        let tempComputerSelectedNftsMap: { [key: string]: boolean } = {};

        for (let key in tempNfts) {
          let value = { ...tempNfts[key], address: key };
          tempArray.push(value);
          tempPlayerSelectedNftsMap[key] = false;
          tempComputerSelectedNftsMap[key] = false;
        }
        setNfts(tempArray);
        setRound(1);
        setCounter(getCounter(1));
        setFetching(false);
      };
      void getData();
    }
  }, [fetching]);

  if (fetching) {
    return (
      <div className='w-full h-screen flex flex-col justify-center items-center'>
        <div className='w-full flex justify-center items-center'>
          <CircularProgress
            sx={{ width: '60px !important', height: '60px !important' }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className='w-full h-screen'>
      <BgGlassmorphism />
      <div className='h-full flex flex-col z-100'>
        <div
          className='w-full border relative rounded-2xl border-0 px-20 mt-32'
          style={{ backgroundColor: 'rgba(243, 244, 246, 0.8)' }}
        >
          {' '}
          <div className='absolute -top-20 w-full'>
            <UserInfoCard
              computerScore={computerScore}
              playerScore={playerScore}
              round={round}
              timeLeft={counter}
            />
          </div>
          <div className='  grid grid-cols-4 gap-8 w-full mt-48'>
            {nfts &&
              nfts.map((nft: any) => (
                <CardNFT2
                  key={nft.address}
                  nft={nft}
                  disabled={
                    (hasLiked && nft.address === selectedNFT?.address) ||
                    playerSelectedNftsArr.includes(nft.address)
                  }
                  isLiked={nft.address === selectedNFT?.address}
                  likedInPastRound={
                    playerSelectedNftsArr.length > 0 &&
                    playerSelectedNftsArr.some(
                      (item: any) => item?.address === nft.address
                    )
                  }
                  handleLikedAction={handleLikedAction}
                />
              ))}
          </div>
        </div>
      </div>
      {/* Modal prompts user to move to next round */}
      <Modal
        open={roundModalOpen}
        onClose={handleRoundModalClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <StyledModalBox
          sx={{
            gap: '0px',
            padding: '5rem',
            minHeight: '400px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {isPlayerWin !== GameResult.Default && (
            <h3 className='text-2xl !leading-tight font-bold '>
              {getRoundResultText()}
            </h3>
          )}
          <Button onClick={roundReset}>Continue to next round</Button>
        </StyledModalBox>
      </Modal>

      {/* Modal shows who won */}
      <Modal
        open={gameModalOpen}
        onClose={handleGameModalClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <StyledModalBox
          sx={{
            gap: '0px',
            padding: '5rem',
            minHeight: '400px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start'
          }}
        >
          <div className='flex flex-col items-center gap-5'>
            <h3 className='text-2xl !leading-tight font-bold'>
              Round:{' '}
              {selectedNFT.usdPrice +
                ' USD' +
                ' vs ' +
                computerNftPrice +
                ' USD'}
            </h3>
            <h3 className='text-2xl !leading-tight font-bold'>
              Final Scores on {difficulty}
            </h3>

            <div className='flex flex-col items-center gap-5'>
              <h3 className='text-2xl !leading-tight font-bold'>Joe</h3>

              <div className='flex flex-col sm:flex-row items-center p-6 mt-5 border-2 border-green-500 rounded-xl relative max-h-16'>
                <span className='block absolute bottom-full translate-y-1.5 py-1 px-1.5 bg-white dark:bg-neutral-900 text-sm text-neutral-500 dark:text-neutral-400 ring ring-offset-0 ring-white dark:ring-neutral-900'>
                  Score
                </span>
                <span className='text-xl font-semibold text-green-500'>
                  {playerScore.toFixed(3)}
                  {' ETH'}
                </span>
              </div>
              <h3 className='text-2xl !leading-tight font-bold'>Computer</h3>

              <div className='flex flex-col sm:flex-row items-center p-6 mt-5 border-2 border-green-500 rounded-xl relative max-h-16'>
                <span className='block absolute bottom-full translate-y-1.5 py-1 px-1.5 bg-white dark:bg-neutral-900 text-sm text-neutral-500 dark:text-neutral-400 ring ring-offset-0 ring-white dark:ring-neutral-900'>
                  Score
                </span>
                <span className='text-xl font-semibold text-green-500'>
                  {computerScore.toFixed(3)}
                  {' ETH'}
                </span>
              </div>
            </div>
            <h3 className='text-2xl !leading-tight font-bold '>
              {playerScore > computerScore
                ? 'You win!'
                : playerScore < computerScore
                ? 'Computer wins.'
                : 'Draw!'}
            </h3>
            <Button onClick={gameReset}>Restart</Button>
          </div>
        </StyledModalBox>
      </Modal>
    </div>
  );
};

export default GamePage;
