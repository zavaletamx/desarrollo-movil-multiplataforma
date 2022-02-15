import React from 'react';
import { Button, Text, View } from 'react-native';

const MenuScreen = (props) => {
	// Creamos una función flecha para invocar en el
	// click del botón
	const clickBoton = () => {
		props.navigation.navigate('estilos');
	};

	const clickPantalla = (nombreScreen) => {
		props.navigation.navigate(nombreScreen);
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			{/* Los botones pueden programar su evento onPress
            de manera local o bien invocando a una constante 
            OnPress recibe una función anónima como 
            parámetro de ejecución
            
            De manera global, dentro del parámetro props de 
            cada componente ahora existe un objeto llamado 
            navigation que contiene el método
            navigate, necesario para ir a otra pantalla

            props.navigation.navigate('_NAME_SCREEN_');

             */}
			<Button
				title='Ejemplo FlexBox'
				onPress={() => {
					props.navigation.navigate('flex');
				}}
			/>

			{/* Si la función onpress no contiene parámetros, 
            se puede indicar directamente como valor
            de la propiedad */}
			<Button
				title='Estilos Globales'
				onPress={clickBoton}
			/>

			{/* Si la función onpress cotiene parámetros, debe indicarse
            dentro de una función flecha */}
			<Button
				title='Estilos Globales'
				onPress={() => clickPantalla('estilos')}
			/>

			<Button
				title='Iconos'
				onPress={() => {
					props.navigation.navigate('iconos');
				}}
			/>

			<Button
				title='Menu Tab'
				onPress={() => clickPantalla('menu_tab')}
			/>

			<Button
				title='Menu Drawer'
				onPress={() => clickPantalla('menu_drawer')}
			/>
		</View>
	);
};

export default MenuScreen;
