import React from 'react';
import {
	Alert,
	ImageBackground,
	FlatList,
	RefreshControl,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colores from '../styles/colores';

const PromesaScreen = (props) => {
	//const url = 'https://reqres.in/api/users?per_page=12';
	const url = 'https://zavaletazea.dev/ejemplo_json.php';

	const [flatCargando, setFlatCargando] =
		React.useState(false);
	const [usuarios, setUsuarios] = React.useState([]);
	const [colorFondo, setColorFondo] = React.useState(
		colores.vividSkyBlue
	);

	/*
    Creamos una función flecha para almacenar una promesa con el
    arreglo json que debemos llenar desde el servicio
    */
	const cargaUsuarios = () => {
		//Mostrar loader
		setFlatCargando(true);
		setColorFondo(colores.vividSkyBlue);
		setUsuarios([]);
		//A partir de la url del servicio invocamos al método
		//fetch para invocar una petición

		/*
        LA función fetch se encarga de resolver promesas

        Una promesa es una función asíncrona que debe esperar N 
        tiempo para devolver una respuesta en función de los argumentos
        */

		//indicar que esperamos a que se resuelva el fetch
		//la función then se eejcuta cuando la petición ha finalizado
		//tomamos la respuesta e intentamos convertirla a un objetos json
		//una vez pasado a json, intentamos obtener los datos
		//de lo contrario mostramos un errro
		fetch(url)
			.then((respuesta) => respuesta.json())
			.then((json) => {
				/*
                Cuando responsa el servicoo 
                vamos a pasar el arreglo json 
                a nuestro state
                */
				setUsuarios(json.data);
				setFlatCargando(false);
				//Cambiamos el color de fondo
				setColorFondo(colores.bone);
			})
			.catch((e) => {
				Alert.alert(
					'¡Error!',
					'Ocurrió un error\nPor favor vuelve a intentar',
					[
						{
							text: 'Continuar',
							onPress: () => {
								setFlatCargando(false);
								setUsuarios([]);
							},
						},
					]
				);
			}); // /fetch
	};
	/*    
    Las promesas en JS, hacen referencia a rutinas o procedimientos que pueden tardar, 
    pero necesitamos esperar a que finalicen para continuar con la ejecución 
    del código
    */
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: colorFondo,
			}}>
			<FlatList
				data={usuarios}
				keyExtractor={(item) => `id-${item.id}`}
				ListHeaderComponent={() => (
					<Header
						setUsuarios={setUsuarios}
						cargaUsuarios={cargaUsuarios}
						setColorFondo={setColorFondo}
					/>
				)}
				ListEmptyComponent={() => (
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
						}}>
						<Text
							style={{
								marginTop: 64,
								marginHorizontal: 8,
								padding: 8,
								fontSize: 32,
								textAlign: 'center',
							}}>
							<AntDesign
								name='frown'
								size={32}
								color={colores.candyPink}
							/>
							{'\n'}
							{'\n'}
							Lista vacía
						</Text>
					</View>
				)}
				refreshControl={
					<RefreshControl
						refreshing={flatCargando}
						onRefresh={() => cargaUsuarios()}
					/>
				}
				renderItem={(item) => (
					<UsuarioItem usuario={item.item} />
				)}
			/>
		</SafeAreaView>
	);
};

/**
 * Componente para la visualización de un item
 * @param {*} props
 * @returns
 */
const UsuarioItem = (props) => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colores.candyPink,
				margin: 8,
				padding: 16,
				borderRadius: 8,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<ImageBackground
				source={{ uri: props.usuario.avatar }}
				style={{
					width: 48,
					height: 48,
					overflow: 'hidden',
					borderRadius: 24,
				}}
			/>

			<Text
				style={{
					fontSize: 16,
					margin: 4,
					color: 'white',
				}}>
				{props.usuario.first_name}
			</Text>

			<Text
				style={{
					fontSize: 16,
					margin: 4,
					color: 'white',
				}}>
				{props.usuario.last_name}
			</Text>
		</View>
	);
};

const Header = (props) => {
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
					textAlign: 'center',
					fontSize: 18,
					fontWeight: 'bold',
					color: colores.lightCyan,
				}}>
				Lista de usuarios (vía JSON)
			</Text>

			<TouchableOpacity
				onPress={() => props.cargaUsuarios()}>
				<AntDesign
					name='reload1'
					color={colores.lightCyan}
					size={22}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => {
					props.setColorFondo(
						colores.vividSkyBlue
					);
					props.setUsuarios([]);
				}}>
				<AntDesign
					name='close'
					color={colores.lightCyan}
					size={22}
				/>
			</TouchableOpacity>
		</View>
	);
};

export default PromesaScreen;
