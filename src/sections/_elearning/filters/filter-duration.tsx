import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox, { checkboxClasses } from '@mui/material/Checkbox';

// ----------------------------------------------------------------------

const DURATIONS = ['0 - 1 Horas', '1 - 3 Horas', '3 - 6 Horas', '6 - 18 Horas', '18+ Horas'];

// ----------------------------------------------------------------------

type Props = {
  filterDuration: string[];
  onChangeDuration: (event: SelectChangeEvent<string[]>) => void;
};

export default function FilterDuration({ filterDuration, onChangeDuration }: Props) {
  return (
    <FormControl fullWidth hiddenLabel>
      <Select
        multiple
        displayEmpty
        value={filterDuration}
        onChange={onChangeDuration}
        renderValue={(selected) => {
          if (!selected.length) {
            return (
              <Typography variant="body2" sx={{ color: 'text.disabled' }}>
                Todas las duraciones
              </Typography>
            );
          }
          return (
            <Typography variant="subtitle2" component="span">
              {selected.join(', ')}
            </Typography>
          );
        }}
      >
        {DURATIONS.map((duration) => (
          <MenuItem key={duration} value={duration}>
            <Checkbox
              size="small"
              checked={filterDuration.includes(duration)}
              sx={{
                [`&.${checkboxClasses.root}`]: {
                  p: 0,
                  mr: 1,
                },
              }}
            />
            {duration}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
