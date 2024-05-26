import { ThemeProvider } from 'styled-components';
import { Groups } from '@screens/groups';
import THEME from '@theme/index'

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <Groups/>
    </ThemeProvider>
  );
}

