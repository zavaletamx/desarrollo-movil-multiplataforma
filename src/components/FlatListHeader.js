import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colores from '../styles/colores';

const FlatListHeader = (props) => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colores.candyPink,
				padding: 16,
				flexDirection: 'row',
				justifyContent: 'space-around',
				alignItems: 'center',
			}}>
			<Text
				style={{
					color: colores.lightCyan,
					fontSize: 18,
					fontWeight: 'bold',
				}}>
				{props.titulo}
			</Text>

			<TouchableOpacity
				onPress={() => {
					//Mostramos el flatloader
					//accediendo al state del padre
					//desde la prospiedad que nos compartieron
					props.setFlatCargando(true);
				}}>
				<AntDesign
					name='reload1'
					color={colores.lightCyan}
					size={22}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() =>
					props.setFlatCargando(false)
				}>
				<AntDesign
					name='close'
					color={colores.lightCyan}
					size={22}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default FlatListHeader;
