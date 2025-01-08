import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home';
import LoginScreen from './screens/Login';
import InternaScreen from './screens/Interna';
import CadastroScreen from './screens/Cadastro';
import CriarTarefa from './screens/CriarTarefa';
import AuthProvider from '.util/Contexto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
          <Stack.Screen name='Interna' component={InternaScreen} />
          <Stack.Screen name='Cadastro' component={CadastroScreen} />
          <Stack.Screen name='CriarTarefa' component={CriarTarefa} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}