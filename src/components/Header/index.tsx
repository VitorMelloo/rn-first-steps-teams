import { Container, Logo } from '@components/Header/styles';

import LogoImg from '@assets/Logo.png';

export function Header() {
  return (
    <Container>
      <Logo source={LogoImg} />
    </Container>
  );
}