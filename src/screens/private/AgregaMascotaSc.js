import React from 'react';
import {
	Button,
	ImageBackground,
	Text,
	TextInput,
	TouchableOpacity,
	ScrollView,
	View,
} from 'react-native';

import colores from '../../styles/colores';
import estilos from '../../styles/estilos';

import {
	FontAwesome5,
	MaterialIcons,
} from '@expo/vector-icons';

const AgregaMascotaSc = (props) => {
	const [mascota, setMascota] = React.useState({
		nombreMascota: null,
		raza: null,
		foto: null,
	});

	return (
		<>
			<ScrollView>
				<ImageBackground
					source={require('../../../assets/images/logo.png')}
					style={{
						width: 128,
						height: 128,
						resizeMode: 'contain',
						marginVertical: 32,
						alignSelf: 'center',
						borderRadius: 64,
						overflow: 'hidden',
						backgroundColor:
							colores.chineseViolet,
					}}
				/>

				<View
					style={estilos.textInputIconContainer1}>
					<MaterialIcons
						name='pets'
						size={22}
						color={colores.yinMnBlue}
					/>
					<TextInput
						style={{
							...estilos.textInputIcon,
							...estilos.textInputIconLine,
						}}
						placeholder='Nombre de la mascota'
						keyboardType='default'
						autoCapitalize='words'
						autoCorrect={true}
						value={mascota.nombreMascota}
						onChangeText={(e) =>
							setMascota({
								...mascota,
								['nombreMascota']: e,
							})
						}
					/>
				</View>

				<View
					style={estilos.textInputIconContainer1}>
					<FontAwesome5
						name='tag'
						size={22}
						color={colores.yinMnBlue}
					/>
					<TextInput
						style={{
							...estilos.textInputIcon,
							...estilos.textInputIconLine,
						}}
						placeholder='Raza'
						keyboardType='default'
						autoCapitalize='words'
						autoCorrect={true}
						value={mascota.nombreMascota}
						onChangeText={(e) =>
							setMascota({
								...mascota,
								['nombreMascota']: e,
							})
						}
					/>
				</View>

				<TouchableOpacity
					style={{
						width: null,
						marginVertical: 16,
						paddingVertical: 16,
						paddingHorizontal: 8,
						marginHorizontal: 8,
						backgroundColor: colores.yinMnBlue,
						borderRadius: 8,
					}}>
					<View
						style={{
							flex: 1,
							flexDirection: 'row',
							alignItems: 'center',
						}}>
						<MaterialIcons
							name='add-a-photo'
							color={colores.bone}
							size={22}
						/>
						<Text
							style={{
								color: colores.bone,
								marginStart: 8,
								fontWeight: 'bold',
							}}>
							Foto
						</Text>
					</View>
				</TouchableOpacity>

				<View
					style={{
						marginHorizontal: 8,
						marginVertical: 16,
					}}>
					<Button
						title='Agregar mascota'
						color={colores.candyPink}
					/>
				</View>
			</ScrollView>
		</>
	);
};

export default AgregaMascotaSc;
