// Import para activar los gestos y animaciones
// que necesita NavigationDrawer
import 'react-native-gesture-handler';
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
import IconosScreen from './src/screens/IconosScreen';
import TabContainerScreen from './src/screens/TabContainerScreen';
import colores from './src/styles/colores';
import DrawerContainer from './src/screens/DrawerContainer';
import ControlesScreen from './src/screens/ControlesScreen';

/*
Agregamos nuestro Drawer como un elemento mas 
del Stack
*/

export default function App() {
	return (
		/** Creamos un contenedor de navegación para 
        toda la app */
		<NavigationContainer>
			{/* Creamos un Stack (contenedor) para nuestras
			pantallas */}
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: colores.yinMnBlue,
					},
					headerTintColor: colores.bone,
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}>
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
					options={{
						title: 'Estilos Globales',
						headerStyle: {
							backgroundColor: colores.bone,
						},
						headerTintColor: colores.yinMnBlue,
						headerTitleStyle: {
							fontWeight: 'bold',
						},
					}}
				/>

				<Stack.Screen
					name='iconos'
					component={IconosScreen}
					options={{ title: 'Ìconos en Expo' }}
				/>

				{/* Agregamos al contenedor de Tabs como pantalla navegable 
                del Stack */}
				<Stack.Screen
					name='menu_tab'
					component={TabContainerScreen}
					options={{
						title: 'Mi cuenta',
					}}
				/>

				<Stack.Screen
					name='menu_drawer'
					component={DrawerContainer}
				/>

				<Stack.Screen
					name='controles'
					component={ControlesScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
