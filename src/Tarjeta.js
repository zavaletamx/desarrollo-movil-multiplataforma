/*
Representación de una tarjeta
*/
import React from 'react';
import { Text, View } from 'react-native';
import estilos from './styles/estilos';

export default function Tarjeta(props) {
	return (
		<View style={estilos.contenedorTarjeta}>
			<Text style={estilos.textoTarjeta}>
				{props.texto}
			</Text>
		</View>
	);
}
