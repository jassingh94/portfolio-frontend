import styled from '@emotion/styled'
import { Chip } from '@mui/material'


export const StyledChip = styled(Chip)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
        background-image: linear-gradient(
        to right,
        rgb(59, 130, 246),
        rgb(6, 182, 212)
    );
    color: #fff;
    border-radius: 9999px; /* pill shape */
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    padding: 6px 12px; /* optional for shape */
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    
    :hover {
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
        transform: translateY(-1px);
    } 
`