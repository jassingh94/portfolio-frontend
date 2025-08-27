import { Stack, Paper, InputBase } from "@mui/material";
import { useState } from "react";
import SearchDialog from "../SearchDialog";

export default function Search() {
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const setSearchOnClick = () => { 
        setIsSearching(!isSearching);
    }
    if(isSearching)
        return <SearchDialog isOpen={isSearching} handleClose={setSearchOnClick}/>
    return (
        <Stack mt={2} height='45px'>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', background: '#2f3948', borderRadius: '10px', height: '100%' }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1, background: 'inherit', color: 'white' }}
                    placeholder="Search about my experience..."
                    inputProps={{ 'aria-label': 'Search about my experience' }}
                    onClick={setSearchOnClick}
                />
            </Paper>
        </Stack>
    )
}