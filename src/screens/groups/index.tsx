import { Header } from '@components/Header';
import { HighLight } from '@components/HighLight';
import { Container } from './styles';

export function Groups() {
    return (
        <Container>
            <Header />
            <HighLight
                title='Turmas'
                subtitle='Jogue com sua turma'
            />
        </Container>
    );
}