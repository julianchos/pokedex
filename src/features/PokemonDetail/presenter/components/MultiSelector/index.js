import { useState } from "react";
//import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';

const MultiSelector = ({ nameList, selectedNames }) => {
    const [pokemonName, setPokemonName] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPokemonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
        selectedNames(typeof value === 'string' ? value.split(',') : value)
    };
    return (
        <>
            <FormControl sx={{ p: 1, width: '90%' }}>
                <InputLabel id="demo-multiple-chip-label">Compare with</InputLabel>
                <Select
                    labelId="demo-multiple-chip-label"
                    id="demo-multiple-chip"
                    multiple
                    value={pokemonName}
                    onChange={handleChange}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}

                >
                    {nameList && nameList.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    )
}

export default MultiSelector;
