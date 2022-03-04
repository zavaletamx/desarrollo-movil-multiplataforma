/*
Invocamos al DrawerNavigator, contenedor de 
los componentes navegables desde un Drawer
*/
import { createDrawerNavigator } from '@react-navigation/drawer';
import colores from '../styles/colores';

/*
Importamos los items del Drawer
*/
import HomeDrawerItem from './drawerItems/HomeDrawerItem';
import NotificacionesDrawerItem from './drawerItems/NotificacionesDrawerItem';
import TercerPantallaDrawerItem from './drawerItems/TercerPantallaDrawerItem';

/*
Importamos el diseño de nuestro Sidebar
*/
import Sidebar from './../components/Sidebar';

// Iconos
import { SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

/*
Inicializamos el contenedor del Drawer
*/
const Drawer = createDrawerNavigator();

/*
Retornamos la estructura de todo el 
NavigationDrawer
*/
const DrawerContainer = (props) => {
	return (
		<Drawer.Navigator
			/*
            Por medio de DrawerContent podemos personalizar 
            el contenido del SidebarNav de N. Drawer
            
            Existe un componente específico para generar elementos 
            en un NavDrawer
            <DrawerContentScrollView>
                <DrawerItem />
            </DrawerContentScrollView>
            */
			drawerContent={() => <Sidebar {...props} />}
			screenOptions={{
				headerStyle: {
					backgroundColor: colores.yinMnBlue,
				},
				headerTintColor: colores.bone,
				// Agregamos un componente a la sección derecha
				// del header de nuestro Drawer
				headerRight: () => {
					return (
						<TouchableOpacity
							style={{ paddingEnd: 16 }}
							onPress={() =>
								props.navigation.navigate(
									'menu'
								)
							}>
							<SimpleLineIcons
								name='home'
								color={colores.bone}
								size={18}
							/>
						</TouchableOpacity>
					);
				},
			}}>
			{/* Indicamos todos los menus que tendrá nuestro 
            Drawer */}
			<Drawer.Screen
				name='drawer_home'
				component={HomeDrawerItem}
			/>

			<Drawer.Screen
				name='drawer_noti'
				component={NotificacionesDrawerItem}
			/>

			<Drawer.Screen
				name='drawer_tres'
				component={TercerPantallaDrawerItem}
			/>
		</Drawer.Navigator>
	);
};

export default DrawerContainer;
