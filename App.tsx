import { ThemeProvider } from 'styled-components';
import { ActivityIndicator } from 'react-native';
import { Groups } from '@screens/groups';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import theme from '@theme/index'

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? <Groups /> : <ActivityIndicator />}
    </ThemeProvider>
  );
}

