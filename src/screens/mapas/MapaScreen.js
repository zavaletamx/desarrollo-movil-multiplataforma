import React from 'react';
import { View } from 'react-native';
/*
Importamos la librería de mapas, previamente
instalando
expo install react-native-maps
*/
import MapView, {
	PROVIDER_GOOGLE,
} from 'react-native-maps';

import firebase from '../../backend/firebase';

const MapaScreen = (props) => {
	/*
    Justo antes de mostrar el contenido de la ventana 
    al momento de iniciar, creamos una consulta de nuestra colección
    de ubicaciones para mostrarlos en el mapa

    Cuando necesitamos una función asíncrona desde un efecto, es recomendable
    crear una función adicional e invocarla en el efecto 
    */
	React.useEffect(() => {
		cargarUbicaciones();
	}, []);

	/*
    Estado para guardar el arreglo de ubicaciones
    */
	const [marcadores, setMarcadores] = React.useState([]);

	const cargarUbicaciones = async () => {
		const query = await firebase.database
			.collection('ubicaciones')
			.get();

		const arrMarcadores = [];

		//Recorremos los doscumentos de la coleccíon
		query.docs.forEach((doc) => {
			/*
            Por cada documento de la colección
            creamos un marcador 
            */
			arrMarcadores.push(
				<MapView.Marker
					key={doc.id}
					coordinate={{
						latitude: doc.data().punto.latitude,
						longitude:
							doc.data().punto.longitude,
					}}
					description={doc.data().nombre}
					title={'Marcador'}
				/>
			);
		});

		//pasamos el arreglo de marcadores al state
		setMarcadores(arrMarcadores);
	};

	return (
		<View style={{ flex: 1 }}>
			<MapView
				style={{ flex: 1 }}
				//Forzar a Google Maps
				provider={PROVIDER_GOOGLE}
				//Agregamos como punto de inicio del mapa
				//a la Peña de Bernal
				//20.7482135,-99.9573658
				/*
                initialRegion indica 4 valores:
                1.- latitude
                2.- longitude
                3.- latitudeDelta --Zoom--
                4.- longitudeDelta --Zoom--
                */
				initialRegion={{
					latitude: 20.7482135,
					longitude: -99.9573658,
					latitudeDelta: 0.5,
					longitudeDelta: 0.5,
				}}>
				{/* 
                Agregamos un marcador 
                Los marcadores necesitan:
                latitud
                longitud
                descripción
                título
                */}
				<MapView.Marker
					key={'m-0'}
					coordinate={{
						latitude: 20.7482135,
						longitude: -99.9573658,
					}}
					title='Peña de Bernal'
					description='La maravillosa y encantadora Peña de Bernal, con sus deliciosas licuachelas y su variedad de pan de queso, nieve artesanal, gorditas de nata y sus tradicionales tipos de esquites'
				/>
				{/* Mostramos el arreglo de marcadores */}
				{marcadores}
			</MapView>
		</View>
	);
};

export default MapaScreen;
