import { StyleSheet } from 'react-native';

/*
Declaramos un objetos de estilos globales y lo exportamos
para poder añadirlo en otros componentes
*/
const estilos = StyleSheet.create({
	contenedor: {
		backgroundColor: '#355070',
		paddingTop: 60,
		flex: 1,
	},
	titulo: {
		fontSize: 30,
		color: '#ECE2D0',
		paddingVertical: 10,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	subtitulo: {
		fontSize: 30,
		color: '#E1FAF9',
		paddingVertical: 10,
		fontWeight: 'normal',
		alignSelf: 'center',
	},
	contenedorTarjeta: {
		backgroundColor: '#E1FAF9',
		marginVertical: 40,
		padding: 20,
		marginHorizontal: 10,
		borderRadius: 10,
	},
	textoTarjeta: {
		fontSize: 30,
		paddingVertical: 10,
		fontWeight: 'normal',
		alignSelf: 'center',
		color: '#E56B6F',
	},
});

export default estilos;
