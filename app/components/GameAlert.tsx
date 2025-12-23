import { Alert, AlertTitle } from '@mui/material';

type GameAlertProps = {
  isWin: boolean;
  message: string;
  onClose: () => void;
};

export const GameAlert = ({ isWin, message, onClose }: GameAlertProps) => {
  return (
    <Alert
      variant="filled"
      severity={isWin ? 'success' : 'error'}
      onClick={onClose}
      sx={{
        maxWidth: '600px',
        minWidth: '320px',
        width: '80%',
        position: 'absolute',
        top: '16px',
        justifySelf: 'center',
        cursor: 'pointer',
      }}
    >
      <AlertTitle marginBottom={isWin ? 0 : 0.5}>{isWin ? 'You Win!' : 'You Lost!'}</AlertTitle>
      {!isWin && message}
    </Alert>
  );
};
