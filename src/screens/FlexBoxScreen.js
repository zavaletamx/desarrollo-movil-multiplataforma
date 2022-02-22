import React from 'react';
import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import colores from '../styles/colores';

const FlexBoxScreen = (props) => {
	return (
		<View
			style={{
				...estilo.contenedor,
				backgroundColor: '#dddddd',
			}}>
			<SafeAreaView style={estilo.contenedor}>
				{/* Sección del display */}
				<Text style={estilo.display}>0.01</Text>

				{/* Panel de botones */}
				<View style={estilo.panelBotones}>
					<View style={estilo.fila}>
						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								7
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								8
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								9
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								+
							</Text>
						</TouchableOpacity>
					</View>

					<View style={estilo.fila}>
						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								7
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								8
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								9
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								+
							</Text>
						</TouchableOpacity>
					</View>

					<View style={estilo.fila}>
						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								7
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								8
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								9
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								+
							</Text>
						</TouchableOpacity>
					</View>

					<View style={estilo.fila}>
						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								7
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								8
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								9
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								+
							</Text>
						</TouchableOpacity>
					</View>

					<View style={estilo.fila}>
						{/* Como en este fila solo hay 3 botones 
                    y estamos diseñando con un flex de 4
                    nos falta indicar un punto adicional de flex en
                    algún componente */}
						<TouchableOpacity
							style={{
								...estilo.boton,
								flex: 2,
							}}>
							<Text style={estilo.textoBoton}>
								0
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								.
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								=
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
};

const estilo = StyleSheet.create({
	contenedor: {
		flex: 1,
	},
	display: {
		flex: 3,
		backgroundColor: '#F9F3F3',
		fontSize: 30,
		textAlign: 'right',
		textAlignVertical: 'center',
	},
	panelBotones: {
		flex: 9,
		backgroundColor: '#dddddd',
	},
	fila: {
		flex: 1,
		flexDirection: 'row',
	},
	boton: {
		flex: 1,
		backgroundColor: colores.candyPink,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 4,
		borderRadius: 4,
	},
	textoBoton: {
		color: '#fff',
		fontWeight: 'bold',
	},
});

export default FlexBoxScreen;
