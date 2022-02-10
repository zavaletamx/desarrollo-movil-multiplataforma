//Importamos a NavigationContainer
import { NavigationContainer } from '@react-navigation/native';

//Importamos a StackNavigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Inicializamos el Stack (contenedor) de nuestras pantallas
const Stack = createNativeStackNavigator();

import Dificultad from './src/screens/Dificultad';
import Juego from './src/screens/Juego';
import JuegoDificil from './src/screens/JuegoDificil';

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName='Dificultad'>
				<Stack.Screen
					name='Dificultad'
					component={Dificultad}
				/>

				<Stack.Screen
					name='Juego'
					component={Juego}
				/>

				<Stack.Screen
					name='JuegoDificil'
					component={JuegoDificil}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
