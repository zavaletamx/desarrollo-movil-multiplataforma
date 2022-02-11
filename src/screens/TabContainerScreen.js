/*
BottomNavigator es el componente 
principal de navegación por tabs, para indicar 
una nueva pestaña dentro del contenedor, es necesario
agregar lña referencia a su componente
*/
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ConfigTab from './tabs/ConfigTab';
import PagosTab from './tabs/PagosTab';
import PerfilTab from './tabs/PerfilTab';

import colores from './../styles/colores';

/*
Agregamos la librería de íconos
*/
import { SimpleLineIcons } from '@expo/vector-icons';

/*
Inicializamos el contenedor de menu de Tabs
*/
const Tab = createBottomTabNavigator();

const TabContainerScreen = (props) => {
	// El componente contenedor de tabs debe retornar
	// un navigator de tipo tab con cada item de pestaña
	// como un screen

	const colorTab = colores.bone;
	const colorFondoTab = colores.yinMnBlue;
	const sizeTab = 24;

	return (
		// Para realizar un cambio solo en un componente
		// debes realizar los cambios en options dentro
		// de cada Tab.Screen

		// También es posible realizar cambios sobre
		// toda la estructura de TanNavigator, tambien
		// en su propiedad screenOptions

		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ color, size }) => {
					// Verificamos cual es la pestaña
					// seleccionada y la guardamos
					// en una variable(route contiene
					// el name de cada Screen.Tab)
					// Creamos una variable para
					// guardar el icono dependiento
					// del Tab seleccionado

					let icono;

					// Evaluamos cual es el tab seleccionado

					// Si el tab es perfíl
					if (route.name === 'tab_perfil') {
						icono = (
							<SimpleLineIcons
								name='user'
								size={size}
								color={color}
							/>
						);
					}

					// Si la pestaña seleccionada es
					// pagos
					if (route.name === 'tab_pagos') {
						icono = (
							<SimpleLineIcons
								name='credit-card'
								size={size}
								color={color}
							/>
						);
					}

					// Si la pestaña seleccionada es configuración
					if (route.name === 'tab_config') {
						icono = (
							<SimpleLineIcons
								name='settings'
								size={size}
								color={color}
							/>
						);
					}

					// Retornamos el icono para cada
					// Tab
					return icono;
				},
				// Fondo del tabBar
				tabBarStyle: {
					backgroundColor: colorFondoTab,
				},
				// ocultar los textos
				tabBarShowLabel: false,
				//Color de los iconos inactivos
				tabBarInactiveTintColor:
					colores.inactiveTab,
				//Color del tab activo
				tabBarActiveTintColor: colores.bone,
				// Cambiamos el color del header
				// de Tab
				headerStyle: {
					backgroundColor: colorFondoTab,
				},
				// Cambiamos el color del
				// titulo del header del
				// Tab container
				headerTitleStyle: {
					color: colores.bone,
				},
			})}>
			{/* React Native recomienda 
            no usar mas de 5 Tabs */}
			<Tab.Screen
				name='tab_perfil'
				component={PerfilTab}
				options={{
					title: 'Perfíl',
				}}
			/>
			<Tab.Screen
				name='tab_pagos'
				component={PagosTab}
				options={{
					title: 'Pagos',
				}}
			/>

			<Tab.Screen
				name='tab_config'
				component={ConfigTab}
				options={{
					title: 'Configuración',
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabContainerScreen;
