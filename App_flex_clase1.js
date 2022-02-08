import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import colores from './src/styles/colores';

/*
El método de organización estructural de ReactNative es
FlexBox, es decir, los contenedores se ajustan dinámicamente 
en función de los elementos que lo componen

Esta propiedad se llama Flex

la propiedad de estilo height defecto de una view
es dinámica (wrap_content) en función del contenido

Flex indica un peso NO UN NUMERO DE COLUMNAS

React se encarga de balancear los pesos en funcíon de la unidad
de flex
*/

export default function App() {
	return (
		<View
			style={{
				backgroundColor: colores.yinMnBlue,
				flex: 1,
				flexDirection: 'row',
			}}>
			<View
				style={{
					backgroundColor: colores.roseDust,
					flex: 5,
				}}></View>

			<View
				style={{
					backgroundColor: colores.chineseViolet,
					flex: 5,
				}}></View>
		</View>
	);
}
