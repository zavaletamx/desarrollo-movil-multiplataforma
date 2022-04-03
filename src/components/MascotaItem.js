import React from 'react';
import {
	Text,
	TouchableOpacity,
	View,
	ImageBackground,
} from 'react-native';
import colores from '../styles/colores';
import { AntDesign } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';

/*
Componente para documento de la colección mascotas
*/
const MascotaItem = (props) => {
	const navigation = useNavigation();

	return (
		<View
			style={{
				flex: 1,
				flexDirection: 'row',
				alignItems: 'center',
				width: null,
				backgroundColor: colores.tumbleweed,
				margin: 8,
				padding: 8,
				borderRadius: 16,
			}}>
			<ImageBackground
				source={{ uri: props.mascota.foto }}
				style={{
					width: 64,
					height: 64,
					marginVertical: 8,
					alignSelf: 'center',
					resizeMode: 'center',
					borderRadius: 32,
					overflow: 'hidden',
					backgroundColor: colores.chineseViolet,
				}}
			/>

			<View style={{ flex: 1 }}>
				<Text
					style={{
						color: colores.inactiveTab,
						fontSize: 20,
						marginStart: 8,
						marginBottom: 4,
						fontWeight: 'bold',
					}}>
					{props.mascota.nombre}
				</Text>
				<Text style={{ marginStart: 8 }}>
					{props.mascota.raza}
				</Text>
			</View>

			<View style={{ flexDirection: 'row' }}>
				{/* Boton para editar */}
				<TouchableOpacity
					onPress={() =>
						navigation.navigate('edita_mascota')
					}
					style={{
						padding: 8,
						backgroundColor: colores.yinMnBlue,
						borderRadius: 8,
						marginEnd: 8,
					}}>
					<AntDesign
						name='edit'
						size={22}
						color={'#fff'}
					/>
				</TouchableOpacity>

				{/* Boton para eliminar */}
				<TouchableOpacity
					style={{
						padding: 8,
						backgroundColor: colores.candyPink,
						borderRadius: 8,
					}}>
					<AntDesign
						name='delete'
						size={22}
						color={'#FFF'}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default MascotaItem;
