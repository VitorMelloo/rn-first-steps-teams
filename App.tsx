import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { Groups } from '@screens/groups';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from '@theme/index'
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        translucent
      />
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}

