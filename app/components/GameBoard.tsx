import { MAX_VALUE, MIN_VALUE, SLIDER_MARKS } from '@/app/utils';
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
import type { ChangeEvent } from 'react';
import type { Choice } from '@/app/utils/types';

type GameBoardProps = {
  threshold: number;
  setThreshold: (value: number) => void;
  guess: number;
  setGuess: (value: number) => void;
  choice: Choice;
  setChoice: (value: Choice) => void;
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
  const handlePlay = () => {
    const randomNum = Math.floor(Math.random() * (MAX_VALUE + 1));
    setThreshold(randomNum);
    onPlay(randomNum);
  };

  const handleChoiceChange = (event: ChangeEvent<HTMLInputElement>) => {
    setChoice(event.target.value as Choice);
  };

  const handleSliderChange = (_event: Event, value: number | number[]) => {
    setGuess(value as number);
  };

  return (
    <Box sx={{ maxWidth: 320, mx: 'auto', textAlign: 'center' }}>
      <Box
        sx={{
          mb: 4,
          display: 'flex',
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'rgba(0, 0, 0, 0.04)',
        }}
      >
        <Typography variant="h1">{threshold}</Typography>
      </Box>

      <FormControl component="fieldset">
        <RadioGroup
          row
          value={choice}
          onChange={handleChoiceChange}
          sx={{ gap: 2, justifyContent: 'center' }}
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

      <Box sx={{ mt: 3 }}>
        <Slider
          aria-label="Guess value"
          value={guess}
          onChange={handleSliderChange}
          valueLabelDisplay="auto"
          step={1}
          marks={SLIDER_MARKS}
          min={MIN_VALUE}
          max={MAX_VALUE}
          color="secondary"
          sx={{
            height: 2,
            '& .MuiSlider-thumb': { width: 12, height: 12 },
          }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
          <Typography
            variant="body2"
            color="text.secondary"
            onClick={() => setGuess(MIN_VALUE)}
            sx={{ cursor: 'pointer', userSelect: 'none' }}
          >
            {MIN_VALUE}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            onClick={() => setGuess(MAX_VALUE)}
            sx={{ cursor: 'pointer', userSelect: 'none' }}
          >
            {MAX_VALUE}
          </Typography>
        </Box>
      </Box>

      <Button sx={{ mt: 3 }} variant="contained" color="secondary" fullWidth onClick={handlePlay}>
        Play
      </Button>
    </Box>
  );
};
