import { ButtonContainer } from './styles';
import { IButtonProps } from "./types";

export default function Button({ title, disabled, onClick }: IButtonProps){
  return (
    <ButtonContainer onClick={onClick} disabled={disabled}>{title}</ButtonContainer>
  )
}