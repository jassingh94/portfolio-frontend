import styled from '@emotion/styled'
import { Button } from '@mui/material'


export const StyledButton = styled(Button)`
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


export const StyledNorButtons = styled(Button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: none;
  border-radius: 9999px;
  padding: 6px 12px;
  cursor: pointer;
  font-weight: 600;

  /* Make button itself transparent */
  color: inherit;

  /* Style text + icon children */
  .MuiTypography-root,
  svg {
    background-image: linear-gradient(
      to right,
      rgb(59, 130, 246),
      rgb(6, 182, 212)
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    fill: #3b82f6;
  }

  transition: all 0.3s ease;

  :hover {
    transform: translateY(-1px);
    .MuiTypography-root,
    svg {
      text-shadow: 0px 1px 6px rgba(59, 130, 246, 0.4);
    }
  }
`;
