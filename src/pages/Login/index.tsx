import { useForm } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Column, Container, LoginContainer,Title, Spacing } from "./styles";
import { IFormLogin, defaultValues } from "./types";


const schema = yup
.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatório"),
  password: yup.string().min(6, "No mínimo 6 caracteres").required("Campo obrigatório"),
})
.required();

export default function Login() {

  const { control, formState: { errors, isValid }} = useForm<IFormLogin>({
    resolver: yupResolver(schema),
    mode: "onBlur",
    defaultValues,
    reValidateMode: "onChange",
  });

  return (
    <Container>
      <LoginContainer>
        <Column>
          <Title>Login</Title>
          <Spacing />
          <Input 
            name="email"
            placeholder="Usuário"
            control={control}
            errorMessage={errors?.email?.message}
          />
          <Spacing />
          <Input 
            name="password"
            placeholder="Senha"
            control={control}
            errorMessage={errors?.password?.message}
          />
          <Spacing />
          { isValid ?  <Button title="Entrar" disabled/> : null}
          
        </Column>
      </LoginContainer>
    </Container>
  );
}