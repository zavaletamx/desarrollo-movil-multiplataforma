import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import colores from './src/styles/colores';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Tarjeta from './src/Tarjeta';

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
	const arreglo = [];
	for (let i = 0; i < 20; i++) {
		arreglo.push(`Texto No ${i + 1}`);
	}

	return (
		/*
        Podemos controlar la posición y orientación de 
        los elementos de FlexBox utilizando 
        flexDirection:
        column (defecto) ===== apila los elementos de 
                                forma vertical en el 
                                orden declarado

        column-reverse ======  apila los elementos de 
                                forma vertical en el 
                                orden contrario al declarado

        row            ======  apila los elementos de 
                                forma horizontal en el 
                                orden declarado

        row            ======  apila los elementos de 
                                forma horizontal en el 
                                orden contrario al declarado
        */

		/*Contenedor principal para elementos verticales*/
		<View
			style={{
				flex: 1,
				flexDirection: 'column',
				backgroundColor: colores.tumbleweed,
			}}>
			{/** Contenedor del slider horizontal */}
			<View
				style={{
					flex: 1,
					backgroundColor: colores.chineseViolet,
				}}></View>

			{/** Contenedor de la cuadrícula */}
			<View
				style={{
					flex: 2,
					flexDirection: 'row',
				}}>
				{/** Contenedor del lado izquierdo */}
				<View
					style={{
						flex: 1,
						flexDirection: 'column',
					}}>
					{/** Cuadro superior derecho */}
					<View
						style={{
							flex: 1,
							backgroundColor:
								colores.middleBlueGreen,
						}}></View>

					{/** Cuadro inferior derecho */}
					<View
						style={{
							flex: 1,
							backgroundColor:
								colores.tumbleweed,
						}}></View>
				</View>

				{/** Contenedor del lado derecho */}
				<View
					style={{
						flex: 1,
						flexDirection: 'column-reverse',
					}}>
					{/** Cuadro superior derecho */}
					<ScrollView
						style={{
							flex: 1,
							backgroundColor:
								colores.middleBlueGreen,
						}}>
						<Tarjeta texto='Tarjeta X' />
						<Tarjeta texto='Tarjeta X' />
						<Tarjeta texto='Tarjeta X' />
						<Tarjeta texto='Tarjeta X' />
						<Tarjeta texto='Tarjeta X' />
						<Tarjeta texto='Tarjeta X' />
						<Tarjeta texto='Tarjeta X' />
						<Tarjeta texto='Tarjeta X' />
						<Tarjeta texto='Tarjeta X' />
						<Tarjeta texto='Tarjeta X' />
					</ScrollView>

					{/** Cuadro inferior derecho */}
					<View
						style={{
							flex: 1,
							backgroundColor:
								colores.tumbleweed,
						}}></View>
				</View>
			</View>
		</View>
	);
}
