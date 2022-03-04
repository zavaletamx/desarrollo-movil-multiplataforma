import {
	ImageBackground,
	SafeAreaView,
	Text,
	View,
} from 'react-native';
import colores from '../styles/colores';
import { FontAwesome5 } from '@expo/vector-icons';
import {
	DrawerContentScrollView,
	DrawerItem,
} from '@react-navigation/drawer';

import { AntDesign } from '@expo/vector-icons';

const Sidebar = (props) => {
	return (
		<View
			style={{
				backgroundColor: colores.bone,
				flex: 1,
			}}>
			<ImageBackground
				source={require('./../../assets/images/fondo_sidebar.jpg')}
				style={{
					width: null,
					paddingBottom: 50,
				}}>
				<SafeAreaView
					style={{
						flexDirection: 'row',
					}}>
					<View
						style={{
							flex: 1,
							alignItems: 'center',
						}}>
						<ImageBackground
							source={require('./../../assets/images/zavaleta.jpg')}
							style={{
								width: 80,
								height: 80,
								overflow: 'hidden',
								marginTop: 20,
								borderRadius: 40,
								borderColor:
									colores.tumbleweed,
								borderWidth: 2,
							}}
						/>
					</View>
					<View
						style={{
							flex: 1,
						}}>
						<View
							style={{
								flex: 1,
								justifyContent:
									'space-around',
							}}>
							<Text
								style={{
									color: colores.bone,
									backgroundColor:
										colores.yinMnBlue,
									paddingStart: 4,
									paddingVertical: 4,
									marginVertical: 4,
								}}>
								Raúl Zavaleta
							</Text>
							<Text
								style={{
									color: colores.bone,
									backgroundColor:
										colores.yinMnBlue,
									paddingStart: 4,
									paddingVertical: 4,
									marginVertical: 4,
								}}>
								0 compras
							</Text>
						</View>
					</View>
				</SafeAreaView>
			</ImageBackground>

			{/* Pasamos TODAS las propiedades del padre a este componente */}
			<DrawerContentScrollView {...props}>
				<DrawerItem
					icon={() => (
						<AntDesign
							name='home'
							size={20}
							color={colores.yinMnBlue}
						/>
					)}
					labelStyle={{
						color: colores.yinMnBlue,
					}}
					label={'Inicio'}
					onPress={() =>
						props.navigation.navigate(
							'drawer_home'
						)
					}
				/>

				<DrawerItem
					icon={() => (
						<AntDesign
							name='notification'
							sixe={20}
							color={colores.yinMnBlue}
						/>
					)}
					labelStyle={{
						color: colores.yinMnBlue,
					}}
					label={'Notificaciones'}
					onPress={() =>
						props.navigation.navigate(
							'drawer_noti'
						)
					}
				/>

				<DrawerItem
					icon={() => (
						<AntDesign
							name='checksquare'
							color={colores.yinMnBlue}
						/>
					)}
					labelStyle={{
						color: colores.yinMnBlue,
					}}
					label={'D. Item 3'}
					onPress={() =>
						props.navigation.navigate(
							'drawer_tres'
						)
					}
				/>

				<DrawerItem
					icon={() => (
						<AntDesign
							name='back'
							color={colores.yinMnBlue}
							size={20}
						/>
					)}
					labelStyle={{
						color: colores.yinMnBlue,
					}}
					label={'Al inicio'}
					onPress={() =>
						props.navigation.navigate('menu')
					}
				/>
			</DrawerContentScrollView>
		</View>
	);
};

export default Sidebar;
