import { Text, TouchableOpacity, View } from 'react-native';

/*
Importamos la librería de expo icons 
que por defecto aparece en nuestras librerias instaladas

Podemos utilizar diferentes familias de iconos, 
solo debemos indicarla en el import
*/
import {
	FontAwesome5,
	SimpleLineIcons,
	Octicons,
} from '@expo/vector-icons';

const IconosScreen = (props) => {
	return (
		<View style={{ flex: 1, alignItems: 'center' }}>
			{/* Para utilizar un icono debes generar 
            un componente de la familia especificada
            y agregar el nombre del icono, su tamaño y color
            como props
            (name, size, color)
            Un icono puede aparecer directo como componente individiual
            como parte de un texto o dentro de un Touchable 
            (un botón tipo Button no soporta iconos de manera nativa)
             */}
			<View style={{ marginTop: 20 }}>
				<FontAwesome5
					name='angellist'
					size={24}
					color='tomato'
				/>
			</View>

			<Text
				style={{
					marginVertical: 10,
					textAlign: 'center',
					fontSize: 20,
				}}>
				Agregar usuario{' '}
				<SimpleLineIcons
					name='user-follow'
					size={24}
					color='tomato'
				/>
			</Text>

			<Octicons
				name='alert'
				size={24}
				color='tomato'
			/>

			{/* Existe un componente genérico para definir 
            el evento click (touch) que es 100% personalizable

            <TouchableOpacity> es solo un contenedor, como si fuera 
            un canvas o un lienzo que por defecto reacciona cuando se 
            selecciona, pero no cuenta con ninguna especificación de
            diseño (Tu tienes que hacer tu estilo de botón)
            */}
			<TouchableOpacity
				style={{
					backgroundColor: 'tomato',
					width: '90%',
					marginVertical: 20,
					textAlign: 'center',
					padding: 20,
					borderRadius: 10,
					alignItems: 'center',
				}}
				onPress={() => {
					props.navigation.navigate('menu');
				}}>
				<Octicons
					name='gear'
					color={'white'}
					size={28}
				/>
				<Text
					style={{
						color: 'white',
						marginTop: 5,
						fontSize: 18,
					}}>
					Configuración
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default IconosScreen;
