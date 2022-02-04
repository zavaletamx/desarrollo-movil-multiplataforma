import { StyleSheet } from 'react-native';
import colores from './colores';

/*
Declaramos un objetos de estilos globales y lo exportamos
para poder añadirlo en otros componentes
*/
const estilos = StyleSheet.create({
	contenedor: {
		backgroundColor: colores.yinMnBlue,
		paddingTop: 60,
		flex: 1,
	},
	titulo: {
		fontSize: 30,
		color: colores.bone,
		paddingVertical: 10,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
	subtitulo: {
		fontSize: 30,
		color: colores.lightCyan,
		paddingVertical: 10,
		fontWeight: 'normal',
		alignSelf: 'center',
	},
	contenedorTarjeta: {
		backgroundColor: colores.lightCyan,
		marginVertical: 10,
		padding: 20,
		marginHorizontal: 10,
		borderRadius: 10,
	},
	textoTarjeta: {
		fontSize: 30,
		paddingVertical: 10,
		fontWeight: 'normal',
		alignSelf: 'center',
		color: colores.candyPink,
	},
	contenedorTarjeta2: {
		backgroundColor: colores.chineseViolet,
	},
	textoTarjeta2: {
		color: colores.vividSkyBlue,
	},
});

export default estilos;
