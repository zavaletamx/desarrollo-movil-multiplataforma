import React from 'react';
import {
	View,
	Text,
	TextInput,
	Button,
	ScrollView,
} from 'react-native';

import MapView, {
	Marker,
	PROVIDER_GOOGLE,
} from 'react-native-maps';

import { AntDesign, Entypo } from '@expo/vector-icons';

import estilos from '../../styles/estilos';
import firebase from './../../backend/firebase';
import colores from '../../styles/colores';
import ProgressDialog from './../../components/ProgressDialog';
//Servicios de ubicación
import * as Location from 'expo-location';

const AgregaUbicacion = (props) => {
	/*
    Configuramos el apiKey de Google Maps 
    para nuestros servicios de ubicación
    en cuanto se ejecute nuestra Screen
    */
	React.useEffect(() => {
		Location.setGoogleApiKey(
			'AIzaSyBhmLLZAYkuEe-HhfWxpw5wgv2qtbRVy5w'
		);
	}, []);

	/*
    State que controle la visibilidad de nuestro 
    ProgressDialog
    */
	const [showProgress, setShowProgress] =
		React.useState(false);

	/*
    Creamos un estado con los valores de la ubicación
    */
	const [ubicacion, setUbicacion] = React.useState({
		direccion:
			'Jardín Zenea, Calle 16 de Septiembre, Centro, Santiago de Querétaro, Querétaro',
		latitud: 20.5930365,
		longitud: -100.3942969,
	});

	// Creamos una referencia a nuestro mapa para poder actualizarlo
	// y controlarlo desde fuera del MapView
	const [mapa, setMapa] = React.useState(null);

	/*
    Función para obtener una dirección desde 
    una ubicación
    */
	const getDireccionFromUbicacion = async (
		latitud,
		longitud
	) => {
		setShowProgress(true);
		try {
			/*
            GoogleMaps intenta buscar el punto con la dirección mas exacta que 
            pueda, sin embargo, algunos lugares tienen mas de una dirección            
            */
			const direcciones =
				await Location.reverseGeocodeAsync(
					{
						latitude: latitud,
						longitude: longitud,
					},
					{
						useGoogleMaps: true,
					}
				);

			const direccion = `${direcciones[0].name}, ${direcciones[0].district}, ${direcciones[0].city}, ${direcciones[0].region}. C.P. ${direcciones[0].postalCode}`;

			//Actualizamos el objeto de ubicación
			setUbicacion({
				latitud: latitud,
				longitud: longitud,
				direccion: direccion,
			});

			//Mover el marcador a la nueva dirección
			mapa.animateToRegion({
				latitude: latitud,
				longitude: longitud,
				latitudeDelta: 0.03,
				longitudeDelta: 0.03,
			});

			setShowProgress(false);
			console.log(direcciones);
		} catch (exception) {
			setShowProgress(false);
			console.log('Error', exception);
		}
	};

	/*
    Función para obtener una ubicación desde 
    una dirección
    */
	const getUbicacionFromDireccion = async (direccion) => {
		setShowProgress(true);

		try {
			/*
            Tomamos las posibles ubicaciones
            */
			const ubicaciones = await Location.geocodeAsync(
				direccion,
				{
					useGoogleMaps: true,
				}
			);

			/*
            Actualizamos el marcador actual y movemos el mapa
            */
			setUbicacion({
				latitud: ubicaciones[0].latitude,
				longitud: ubicaciones[0].longitude,
				direccion: direccion,
			});

			mapa.animateToRegion({
				latitude: ubicaciones[0].latitude,
				longitude: ubicaciones[0].longitude,
				latitudeDelta: 0.03,
				longitudeDelta: 0.03,
			});

			setShowProgress(false);
		} catch (exception) {
			console.log('Error', exception);
			setShowProgress(false);
		}
	};

	return (
		<View style={{ flex: 1 }}>
			{/* Si el state para el progress es verdadero
            entonces mostramos esta sección de código, de 
            lo contrario no mostramos nada */}

			{showProgress && <ProgressDialog />}

			{/* Formulario para seleccionar una nueva dirección             */}
			<ScrollView style={{ flex: 1 }}>
				<View
					style={estilos.textInputIconContainer2}>
					<Entypo
						name='address'
						size={22}
						color={colores.yinMnBlue}
					/>
					<TextInput
						// Forma uno de sobreescribir estilos
						style={{
							...estilos.textInputIcon,
							...estilos.textInputIconLine,
						}}
						placeholder='Direccción'
						keyboardType='default'
						//Evitamos la primera letra  mayúscula
						autoCapitalize='sentences'
						//Evitamos la corrección de palabras
						autoCorrect={true}
						value={ubicacion.direccion}
						onChangeText={(e) =>
							setUbicacion({
								...ubicacion,
								['direccion']: e,
							})
						}
						multiline
					/>
				</View>

				<View
					style={estilos.textInputIconContainer2}>
					<Entypo
						name='location-pin'
						size={22}
						color={colores.yinMnBlue}
					/>
					<Text
						// Forma uno de sobreescribir estilos
						style={{
							...estilos.textInputIcon,
							...estilos.textInputIconLine,
						}}>
						Lat: {ubicacion.latitud}
					</Text>
				</View>

				<View
					style={estilos.textInputIconContainer2}>
					<Entypo
						name='location-pin'
						size={22}
						color={colores.yinMnBlue}
					/>
					<Text
						// Forma uno de sobreescribir estilos
						style={{
							...estilos.textInputIcon,
							...estilos.textInputIconLine,
						}}>
						Lng: {ubicacion.longitud}
					</Text>
				</View>

				<View style={{ margin: 8, padding: 8 }}>
					<Button
						title='Buscar dirección'
						color={colores.yinMnBlue}
						onPress={() =>
							getUbicacionFromDireccion(
								ubicacion.direccion
							)
						}
					/>
				</View>

				<View style={{ margin: 8, padding: 8 }}>
					<Button
						title='Usar mi ubicación actual'
						color={colores.yinMnBlue}
					/>
				</View>
			</ScrollView>

			{/* Mapa para visualizar las direcciones */}
			<MapView
				//Inicializamos el state del mapa
				ref={(map) => setMapa(map)}
				zoomControlEnabled
				zoomEnabled
				zoomTapEnabed
				provider={PROVIDER_GOOGLE}
				style={{ flex: 1 }}
				initialRegion={{
					latitude: ubicacion.latitud,
					longitude: ubicacion.longitud,
					latitudeDelta: 0.05,
					longitudeDelta: 0.05,
				}}>
				<Marker
					// Indicamos que este marcador
					// Se puede arastrar
					draggable
					// Propiedad para el evento cuando
					// soltamos el marcador
					onDragEnd={(e) => {
						//e.nativeEvent.coordinate
						//Actualizamos el state de la ubicación
						const lat =
							e.nativeEvent.coordinate
								.latitude;

						const lng =
							e.nativeEvent.coordinate
								.longitude;

						//Tomar la dirección de este punto
						getDireccionFromUbicacion(lat, lng);
					}}
					coordinate={{
						latitude: ubicacion.latitud,
						longitude: ubicacion.longitud,
					}}
					title={'Jardín Zenea'}
					description={ubicacion.direccion}
				/>
			</MapView>
		</View>
	);
};

export default AgregaUbicacion;
