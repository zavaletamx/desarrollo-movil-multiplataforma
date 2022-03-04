import {
	ImageBackground,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import colores from '../styles/colores';

import { AntDesign } from '@expo/vector-icons';

const EjemploItem = (props) => {
	return (
		<TouchableOpacity
			onPress={() =>
				props.navigation.navigate('menu')
			}
			style={{
				margin: 8,
				padding: 8,
				borderWidth: 2,
				borderColor: colores.yinMnBlue,
				borderRadius: 10,
				backgroundColor: colores.bone,
				flex: 1,
			}}>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
				}}>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<ImageBackground
						source={{
							uri: 'https://images.pexels.com/photos/7846313/pexels-photo-7846313.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
						}}
						style={{
							width: 64,
							height: 64,
							overflow: 'hidden',
							borderRadius: 32,
							borderWidth: 2,
							borderColor: colores.yinMnBlue,
						}}
					/>
				</View>
				<View style={{ flex: 2 }}>
					<Text>ID: {props.datosUsuario.id}</Text>
					<Text>{props.datosUsuario.nombre}</Text>
					<Text>{props.datosUsuario.edad}</Text>
				</View>

				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'flex-end',
						alignItems: 'center',
					}}>
					<AntDesign
						name='edit'
						color={colores.yinMnBlue}
						size={20}
					/>
					<AntDesign
						name='delete'
						color={colores.candyPink}
						size={20}
					/>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default EjemploItem;
