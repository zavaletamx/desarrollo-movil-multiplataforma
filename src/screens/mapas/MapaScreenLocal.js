import { View } from 'react-native';
/*
Importamos la librería de mapas, previamente
instalando
expo install react-native-maps
*/
import MapView, {
	PROVIDER_GOOGLE,
} from 'react-native-maps';

const MapaScreenLocal = (props) => {
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
					latitudeDelta: 0.3,
					longitudeDelta: 0.3,
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
				<MapView.Marker
					key={'m-1'}
					coordinate={{
						latitude: 19.7482135,
						longitude: -98.9573658,
					}}
					title='Peña de Bernal'
					description='La maravillosa y encantadora Peña de Bernal, con sus deliciosas licuachelas y su variedad de pan de queso, nieve artesanal, gorditas de nata y sus tradicionales tipos de esquites'
				/>
				<MapView.Marker
					key={'m-2'}
					coordinate={{
						latitude: 21.7482135,
						longitude: -100.9573658,
					}}
					title='Peña de Bernal'
					description='La maravillosa y encantadora Peña de Bernal, con sus deliciosas licuachelas y su variedad de pan de queso, nieve artesanal, gorditas de nata y sus tradicionales tipos de esquites'
				/>
				<MapView.Marker
					key={'m-3'}
					coordinate={{
						latitude: 17.7482135,
						longitude: -97.9573658,
					}}
					title='Peña de Bernal'
					description='La maravillosa y encantadora Peña de Bernal, con sus deliciosas licuachelas y su variedad de pan de queso, nieve artesanal, gorditas de nata y sus tradicionales tipos de esquites'
				/>
			</MapView>
		</View>
	);
};

export default MapaScreen;
