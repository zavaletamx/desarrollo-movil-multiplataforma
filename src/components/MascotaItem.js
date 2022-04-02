import React from 'react';
import { Text, View, ImageBackground } from 'react-native';

/*
Componente para documento de la colección moascotas
*/
const MascotaItem = (props) => (
	<View style={{ flex: 1, flexDirection: 'row' }}>
		<ImageBackground
			source={require('./../../assets/images/logo.png')}
			style={{
				width: 128,
				height: 128,
				resizeMode: 'contain',
				marginVertical: 32,
				alignSelf: 'center',
				borderRadius: 64,
				overflow: 'hidden',
				backgroundColor: colores.chineseViolet,
			}}
		/>

		<View style={{ flex: 1 }}>
			<Text>Nombre mascota</Text>
			<Text>Raza mascota</Text>
		</View>
	</View>
);

export default MascotaItem;
