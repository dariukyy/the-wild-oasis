import styled from "styled-components";
import Logo from "../ui/Logo";
import LoginForm from "../features/authentication/LoginForm";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your Account</Heading>
      <Heading as="message">
        If you need a login credentials, please contact me -{" "}
        <a href="mailto:dpdarius1@gmail.com">dpdarius1@gmail.com</a>
      </Heading>

      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
