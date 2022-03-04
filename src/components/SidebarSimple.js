import { SafeAreaView, Text, View } from 'react-native';
import colores from '../styles/colores';
import { FontAwesome5 } from '@expo/vector-icons';
import {
	DrawerContentScrollView,
	DrawerItem,
} from '@react-navigation/drawer';

const Sidebar = (props) => {
	return (
		<View
			style={{
				backgroundColor: colores.roseDust,
				flex: 1,
			}}>
			<SafeAreaView style={{ flex: 1 }}>
				<Text
					style={{
						marginStart: 16,
						marginTop: 8,
					}}>
					Hola desde sidebar
				</Text>
				<Text
					style={{
						marginStart: 16,
						marginTop: 8,
					}}>
					Mi propio estilo
				</Text>

				<DrawerContentScrollView>
					<DrawerItem
						icon={() => (
							<FontAwesome5
								name='check'
								color={colores.tumbleweed}
								size={22}
							/>
						)}
						label={'Menu 1'}
						labelStyle={{
							color: colores.lightCyan,
						}}
						onPress={() => {
							props.navigation.navigate(
								'menu'
							);
						}}
					/>

					<DrawerItem
						icon={() => (
							<FontAwesome5
								name='check'
								color={colores.tumbleweed}
								size={22}
							/>
						)}
						label={'Menu 2'}
						labelStyle={{
							color: colores.lightCyan,
						}}
					/>

					<DrawerItem
						icon={() => (
							<FontAwesome5
								name='check'
								color={colores.tumbleweed}
								size={22}
							/>
						)}
						label={'Menu 3'}
						labelStyle={{
							color: colores.lightCyan,
						}}
					/>
				</DrawerContentScrollView>
			</SafeAreaView>
		</View>
	);
};

export default Sidebar;
