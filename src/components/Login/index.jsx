import {
  AntInput,
  Container,
  ErrorLabel,
  Form,
  Icons,
  Label,
  Title,
  Wrapper,
} from './style';

import BlueText from '../Generic/BlueText';
import Button from '../Generic/Button';

export const Login = () => {
  return (
    <Container>
      <Wrapper flex='3'>
        <Title>
          <BlueText>WebBrain</BlueText> akademiyasi rasmiy web sahifasiga{' '}
          <BlueText>xush kelibsiz!</BlueText>
        </Title>
      </Wrapper>
      <Wrapper flex='2'>
        <Form>
          {/* email */}
          {/* <Form.Title>Kirish</Form.Title>
          <Label>Email manzilingiz</Label>
          <AntInput
            value={email}
            ref={emailRef}
            prefix={<Icons.Email />}
            onChange={(e) => {
              setHasError(false);
              setEmail(e.target.value);
            }}
          />
          {hasError && <ErrorLabel>Emailingiz hato</ErrorLabel>} */}

          {/* parol */}
          {/* <Label>Parolingiz</Label>
          <AntInput
            value={password}
            type={'password'}
            ref={pwRef}
            prefix={<Icons.Pw />}
            onChange={(e) => {
              setHasError(false);
              setPw(e.target.value);
            }}
          />
          {hasError && <ErrorLabel>Parolingiz hato</ErrorLabel>}
          <Button mt={25} width='100%' border onClick={onSave}>
            Tasdiqlash
          </Button> */}
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
