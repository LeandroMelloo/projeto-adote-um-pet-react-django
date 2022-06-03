import { styled } from '@mui/material';

export const TitleStyled = styled('h1')`
    font-size: 20px;
    text-align: center;
    margin-top: ${({ theme }) => theme.spacing(5)}; // 8px x theme.spacing(5) = 40px
`;

export const SubTitleStyled = styled('h2')`
    font-size: 18px;
    text-align: center;
    margin-bottom: ${({ theme }) => theme.spacing(5)}; // 8px x theme.spacing(5) = 40px
    font-weight: normal;
    color: ${({ theme }) => theme.palette.text.secondary};
`;