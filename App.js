import 'react-native-gesture-handler';
import React from 'react';
import { LogBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colores from './src/styles/colores';
import CheckLoginSc from './src/screens/public/CheckLoginSc';
import LoginSc from './src/screens/public/LoginSc';
import RegistroSc from './src/screens/public/RegistroSc';
import HomeContainer from './src/screens/private/HomeContainer';

const Stack = createNativeStackNavigator();

export default function App() {
	LogBox.ignoreAllLogs(true);
	return (
		<NavigationContainer>
			<StatusBar
				barStyle='light-content'
				backgroundColor={colores.yinMnBlue}
			/>

			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: colores.yinMnBlue,
					},
					headerTintColor: colores.bone,
				}}>
				<Stack.Screen
					name='chek_login'
					component={CheckLoginSc}
					options={{ title: 'Iniciando...' }}
				/>

				<Stack.Screen
					name='login'
					component={LoginSc}
					options={{ title: 'Iniciar sesión' }}
				/>

				<Stack.Screen
					name='registro'
					component={RegistroSc}
					options={{ title: 'Regístrate' }}
				/>

				<Stack.Screen
					name='home_container'
					component={HomeContainer}
					options={{ title: 'HomeContainer' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
