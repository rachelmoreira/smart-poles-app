import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppRoutes from './src/routes/AppRoutes';
import LoginRoute from './src/routes/LoginRoute';

export default function App() {
  return (
  <StrictMode>
    <SafeAreaView style= {{ flex: 1, backgroundColor:'#4d6979'}}>
      <StatusBar/>
      {/* <Text>Teste</Text> */}
      {/* <AppRoutes/> */}
      <LoginRoute/>
    </SafeAreaView>
  </StrictMode>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
