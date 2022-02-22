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
	/*
    Creamos un state para poder 
    actualizar en tiempo real el valor del 
    display 
    */
	const [display, setDisplay] = React.useState('');
	const [num1, setNum1] = React.useState(0);
	const [num2, setNum2] = React.useState(0);
	const [resultado, setResultado] = React.useState(0);

	/*
    Click genérico para pintar el display
    */
	const clickBoton = (texto) => {
		setDisplay(`${display}${texto}`);
	};

	return (
		<View
			style={{
				...estilo.contenedor,
				backgroundColor: '#dddddd',
			}}>
			<SafeAreaView style={estilo.contenedor}>
				{/* Sección del display */}
				<Text style={estilo.display}>
					{display}
				</Text>

				{/* Panel de botones */}
				<View style={estilo.panelBotones}>
					<View style={estilo.fila}>
						<TouchableOpacity
							style={estilo.botonOperacion}
							onPress={() => setDisplay('')}>
							<Text style={estilo.textoBoton}>
								AC
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.botonOperacion}
							onPress={() => {
								//Convertimos display a un valor double
								const numeroDisplay =
									parseFloat(display);

								//Multiplicamos el valor por -1
								setDisplay(
									numeroDisplay * -1
								);
							}}>
							<Text style={estilo.textoBoton}>
								+/-
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								%
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								/
							</Text>
						</TouchableOpacity>
					</View>

					<View style={estilo.fila}>
						<TouchableOpacity
							style={estilo.boton}
							onPress={() => clickBoton('7')}>
							<Text style={estilo.textoBoton}>
								7
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}
							onPress={() => clickBoton('8')}>
							<Text style={estilo.textoBoton}>
								8
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}
							onPress={() => clickBoton('9')}>
							<Text style={estilo.textoBoton}>
								9
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.botonOperacion}
							onPress={() => {
								console.log(display);
								numeroDisplay =
									parseFloat(display);

								/*
                                Evaluar si hay numeros 
                                */
							}}>
							<Text style={estilo.textoBoton}>
								+
							</Text>
						</TouchableOpacity>
					</View>

					<View style={estilo.fila}>
						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								4
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								5
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								6
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
							style={estilo.boton}
							onPress={() => clickBoton('1')}>
							<Text style={estilo.textoBoton}>
								1
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								2
							</Text>
						</TouchableOpacity>

						<TouchableOpacity
							style={estilo.boton}>
							<Text style={estilo.textoBoton}>
								3
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
	botonOperacion: {
		flex: 1,
		backgroundColor: colores.yinMnBlue,
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
