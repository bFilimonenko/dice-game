import { HistoryItem } from '@/app/page';
import { Box } from '@mui/material';
import { green, red } from '@mui/material/colors';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export const BasicTable = ({ history }: { history: HistoryItem[] }) => {
  return (
    <TableContainer component={Box}>
      <Table sx={{ width: 600, marginInline: 'auto' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>Guess</TableCell>
            <TableCell>Result</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {history.map((row, index) => (
            <TableRow key={index}>
              <TableCell sx={{ padding: '6px 16px' }} scope="row">
                {row.time}
              </TableCell>
              <TableCell sx={{ padding: '6px 16px' }}>{row.guess}</TableCell>
              <TableCell sx={{ color: row.win ? green[900] : red[800], padding: '6px 16px' }}>
                {row.result}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
