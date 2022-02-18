import { Button, Text, View } from 'react-native';

const HomeDrawerItem = (props) => {
	return (
		<View
			style={{
				flex: 1,
				// Justifycontent permite las siguientes alineaciones verticales
				// center <---------- centrar de manera vertical
				// space-between <--- poner los elementos a los extremos verticales
				// space-around <---- genera un espacio simétrico de los extremos
				// space-evenly <---- genera un espacio simétrico de los componente
				// flex-end <-------- manda los elementos al final
				// flex-start <------ manda los elementos al inicio
				justifyContent: 'space-evenly',
				alignItems: 'center',
			}}>
			<Text>HomeDrawerItem.js</Text>
			<Button
				title='Regresar al menú'
				onPress={() => {
					props.navigation.navigate('menu');
				}}
			/>
		</View>
	);
};

export default HomeDrawerItem;
