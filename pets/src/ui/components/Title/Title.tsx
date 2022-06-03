import { TitleStyled, SubTitleStyled } from './Title.style';

interface TitleProps {
    title: string;
    subtitle?: string | JSX.Element; // ? => propriedade não é obrigatoria é opcional
}

export default function Title(props: TitleProps) {
    return (
        // <> => isso se chama fragment e é do React
        <>
            <TitleStyled>{props.title}</TitleStyled>
            <SubTitleStyled>{props.subtitle}</SubTitleStyled>
        </>
    )
};