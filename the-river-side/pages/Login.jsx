import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  /* Media query for mobile devices */
  @media (max-width: 768px) {
    grid-template-columns: 0.9fr;
    padding: 1rem;
    gap: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    gap: 1.6rem;
  }
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading>Login to your account</Heading>
      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
