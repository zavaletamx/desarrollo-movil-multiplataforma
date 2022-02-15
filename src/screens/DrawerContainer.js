/*
Invocamos al DrawerNavigator, contenedor de 
los componentes navegables desde un Drawer
*/
import { createDrawerNavigator } from '@react-navigation/drawer';

/*
Importamos los items del Drawer
*/
import HomeDrawerItem from './drawerItems/HomeDrawerItem';
import NotificacionesDrawerItem from './drawerItems/NotificacionesDrawerItem';

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
		<Drawer.Navigator>
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
		</Drawer.Navigator>
	);
};

export default DrawerContainer;
