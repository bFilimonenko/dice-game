'use client';

import { useState } from 'react';
import { Box } from '@mui/material';
import { GameBoard } from '@/app/components/GameBoard';
import { ResultsList } from '@/app/components/ResultsList';
import { GameAlert } from '@/app/components/GameAlert';
import { HistoryItem, Choice, MAX_HISTORY_ITEMS } from '@/app/utils';

export default function Home() {
  const [threshold, setThreshold] = useState<number>(20);
  const [guess, setGuess] = useState<number>(20);
  const [choice, setChoice] = useState<Choice>('under');
  const [gameResult, setGameResult] = useState<boolean | null>(null);
  const [resultMessage, setResultMessage] = useState<string>('');
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const playGame = (randomNum: number) => {
    let didWin: boolean;
    let message: string;

    if (randomNum === guess) {
      // Equal numbers - user loses
      didWin = false;
      message = 'Numbers are equal!';
    } else if (choice === 'under') {
      didWin = randomNum < guess;
      message = didWin ? '' : 'Number was higher';
    } else {
      didWin = randomNum > guess;
      message = didWin ? '' : 'Number was lower';
    }

    setGameResult(didWin);
    setResultMessage(message);

    const newHistoryItem: HistoryItem = {
      time: new Date().toLocaleTimeString(),
      guess: `${choice.charAt(0).toUpperCase() + choice.slice(1)} ${guess}`,
      result: randomNum,
      win: didWin,
    };

    setHistory((prev) => [newHistoryItem, ...prev].slice(0, MAX_HISTORY_ITEMS));
  };

  const handleAlertClick = () => {
    setGameResult(null);
  };

  return (
    <Box sx={{ py: '113px' }} component="main">
      {gameResult !== null && (
        <GameAlert isWin={gameResult} message={resultMessage} onClose={handleAlertClick} />
      )}

      <GameBoard
        threshold={threshold}
        setThreshold={setThreshold}
        guess={guess}
        setGuess={setGuess}
        choice={choice}
        setChoice={setChoice}
        onPlay={playGame}
      />

      {history.length > 0 && <ResultsList history={history} />}
    </Box>
  );
}
