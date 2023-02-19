// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

// assets
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const Search = () => (
    <Box sx={{ width: '100%' }}>
        <FormControl sx={{ width: { xs: '100%', md: 224 } }}>
            <OutlinedInput
                size="small"
                id="header-search"
                color="primary"
                startAdornment={
                    <InputAdornment position="start" color="secondary" sx={{ mr: 0.5 }}>
                        <SearchOutlinedIcon color="iconColor" />
                    </InputAdornment>
                }
                aria-describedby="header-search-text"
                inputProps={{
                    'aria-label': 'weight'
                }}
                placeholder="Search"
            />
        </FormControl>
    </Box>
);

export default Search;
