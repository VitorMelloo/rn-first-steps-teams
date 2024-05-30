import { Container, Logo, BackButton, BackIcon } from '@components/Header/styles';
import LogoImg from '@assets/Logo.png';

type Props = {
  showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      <Logo source={LogoImg} />
    </Container>
  );
}