import { styled } from '@mui/material';
import { Link as LinkComponent } from 'react-router-dom';
import { grayColor } from '../../constants/color';

export const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
});

export const Link = styled(LinkComponent)`
    text-decoration: none;
    color: black;
    padding: 1rem;
    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }`;

export const InputBox = styled("input")`
    width: 100%;
  height: 100%;
  border: none;
  outline: none;
  padding: 0.75rem 1rem;
  border-radius: 1.5rem;
  background-color: ${grayColor};
  font-size: 1rem;
  color: #333;
`