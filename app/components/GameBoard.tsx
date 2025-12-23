'use client';
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
} from '@mui/material';
import { purple } from '@mui/material/colors';

type GameBoardProps = {
  threshold: number;
  setThreshold: (val: number) => void;
  guess: number;
  setGuess: (val: number) => void;
  choice: 'over' | 'under';
  setChoice: (val: 'over' | 'under') => void;
  onPlay: (randomNum: number) => void;
};

export const GameBoard = ({
  threshold,
  setThreshold,
  guess,
  setGuess,
  choice,
  setChoice,
  onPlay,
}: GameBoardProps) => {
  const handelPlay = () => {
    const randomNum = Math.floor(Math.random() * 101);
    setThreshold(randomNum);
    onPlay(randomNum);
    console.log('new num: ', randomNum);
  };

  console.log(choice);
  console.log(guess);

  return (
    <Box className="mx-auto max-w-80 text-center">
      <Box className="mb-4 flex h-50 items-center justify-center bg-black/4">
        <Typography variant="h1">{threshold}</Typography>
      </Box>

      <FormControl>
        <RadioGroup
          row
          sx={{ gap: 2 }}
          defaultValue={choice}
          value={choice}
          onChange={(e) => setChoice(e.target.value as 'over' | 'under')}
        >
          <FormControlLabel
            labelPlacement="start"
            value="under"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: purple[500],
                  },
                }}
              />
            }
            label="Under"
          />

          <FormControlLabel
            labelPlacement="start"
            value="over"
            control={
              <Radio
                sx={{
                  '&.Mui-checked': {
                    color: purple[500],
                  },
                }}
              />
            }
            label="Over"
          />
        </RadioGroup>
      </FormControl>

      <Slider
        aria-label="Temperature"
        defaultValue={20}
        valueLabelDisplay="auto"
        onChange={(e, value: number) => setGuess(value)}
        value={guess}
        shiftStep={1}
        step={1}
        marks={[{ value: 0 }, { value: 25 }, { value: 50 }, { value: 75 }, { value: 100 }]}
        min={0}
        max={100}
        color="secondary"
      />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="body2"
          color="textSecondary"
          onClick={() => setGuess(0)}
          sx={{ cursor: 'pointer' }}
        >
          0
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          onClick={() => setGuess(100)}
          sx={{ cursor: 'pointer' }}
        >
          100
        </Typography>
      </Box>

      <Button
        sx={{ marginTop: 2 }}
        variant="contained"
        color="secondary"
        fullWidth
        onClick={handelPlay}
      >
        play
      </Button>
    </Box>
  );
};
