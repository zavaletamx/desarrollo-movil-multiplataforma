/**
 * ReactNative indica que toda la app y cualquier método de navegación debe estar contenido
 * por un NavigationContainer, en caso de existir más de un método de navegación
 * tod_os deben pertenecer al mismo NavigationContainer
 *
 * Mientras que todas las pantalla (screens) que se naveguen mediante un Stack
 * Deben pertenecer a un StackNavigator.
 *
 * Cada pantalla a la que se pueda navegar la representaremos por medio de
 * un StackScreen
 */

//Importamos a NavigationContainer
import { NavigationContainer } from '@react-navigation/native';

//Importamos a StackNavigator
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Inicializamos el Stack (contenedor) de nuestras pantallas
const Stack = createNativeStackNavigator();

/*
Debemos importar todas las pantallas que vamos a referenciar 
al Stack
*/
import MenuScreen from './src/screens/MenuScreen';
import FlexBoxScreen from './src/screens/FlexBoxScreen';
import EstilosGlobalesScreen from './src/screens/EstilosGlobalesScreen';

export default function App() {
	return (
		/** Creamos un contenedor de navegación para 
        toda la app */
		<NavigationContainer>
			{/* Creamos un Stack (contenedor) para nuestras
			pantallas */}
			<Stack.Navigator>
				{/* Cada componente al que querramos navegar debe aparecer
                como Screen de este stack  */}
				<Stack.Screen
					name='menu'
					component={MenuScreen}
				/>

				<Stack.Screen
					name='flex'
					component={FlexBoxScreen}
				/>

				<Stack.Screen
					name='estilos'
					component={EstilosGlobalesScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
