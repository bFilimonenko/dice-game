'use client';

import { GameBoard } from '@/app/components/GameBoard';
import { BasicTable } from '@/app/components/ResultsList';
import { Alert, AlertTitle } from '@mui/material';
import { useState } from 'react';

export type HistoryItem = {
  time: string;
  guess: string;
  result: number;
  win: boolean;
};

export default function Home() {
  const [threshold, setThreshold] = useState<number>(20);
  const [guess, setGuess] = useState<number>(20);
  const [choice, setChoice] = useState<'under' | 'over'>('under');
  const [result, setResult] = useState<number | null>(null);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const playGame = (randomNum: number) => {
    setResult(randomNum);
    console.log('res', result);
    const didWin = choice === 'under' ? randomNum < guess : randomNum > guess;

    // if(randomNum)
    console.log('didWin', didWin);
    const newHistoryItem: HistoryItem = {
      time: new Date().toLocaleTimeString(),
      guess: choice + ' ' + guess,
      result: randomNum,
      win: didWin,
    };

    console.log(newHistoryItem);

    setHistory((prev) => [newHistoryItem, ...prev].slice(0, 10));
    console.log('history', history);
  };

  return (
    <main>
      <Alert
        variant="filled"
        severity="success"
        sx={{ maxWidth: 600, marginInline: 'auto', marginBottom: 4 }}
      >
        <AlertTitle>You win</AlertTitle>
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        sx={{ maxWidth: 600, marginInline: 'auto', marginBottom: 4 }}
      >
        <AlertTitle>You lost</AlertTitle>
        Number was {choice === 'under' ? 'higher' : 'lower'}
      </Alert>

      <GameBoard
        threshold={threshold}
        setThreshold={setThreshold}
        guess={guess}
        setGuess={setGuess}
        choice={choice}
        setChoice={setChoice}
        onPlay={playGame}
      />
      <BasicTable history={history} />
    </main>
  );
}
