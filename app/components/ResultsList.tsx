import type { HistoryItem } from '@/app/utils';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { green, red } from '@mui/material/colors';

type ResultsListProps = {
  history: HistoryItem[];
};

export const ResultsList = ({ history }: ResultsListProps) => {
  return (
    <TableContainer component={Box} sx={{ mt: 2 }}>
      <Table sx={{ maxWidth: 600, mx: 'auto' }} aria-label="Game results table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                '&.MuiTableCell-root': {
                  fontWeight: 'bold',
                },
              }}
            >
              Time
            </TableCell>
            <TableCell
              sx={{
                '&.MuiTableCell-root': {
                  fontWeight: 'bold',
                },
              }}
            >
              Guess
            </TableCell>
            <TableCell
              sx={{
                '&.MuiTableCell-root': {
                  fontWeight: 'bold',
                },
              }}
            >
              Result
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((row, index) => (
            <TableRow key={`${row.time}-${index}`}>
              <TableCell sx={{ py: 0.75, px: 2 }}>{row.time}</TableCell>
              <TableCell sx={{ py: 0.75, px: 2 }}>{row.guess}</TableCell>
              <TableCell
                sx={{
                  py: 0.75,
                  px: 2,
                  color: row.win ? green[900] : red[800],
                  fontWeight: 'medium',
                }}
              >
                {row.result}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
