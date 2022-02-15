import {
	Image,
	ImageBackground,
	ScrollView,
	Text,
} from 'react-native';
import colores from '../styles/colores';
import estilos from './../styles/estilos';

const ImagenesScreen = (props) => {
	return (
		<ImageBackground
			source={require('./../../assets/images/plantas.jpg')}
			style={{ flex: 1 }}>
			<ScrollView>
				<Text
					style={{
						...estilos.tituloComponente,
						color: colores.lightCyan,
						fontSize: 40,
					}}>
					Imágenes
				</Text>

				{/* Por defecto las imágenes en ReactNative pueden tener
            un origen local o remoto sin necesidad de indicar 
            ninguna librería o permiso especial

            PAra visualizar una imagen es necesario indicar su ancho y alto
            
            */}

				{/* Una imagen remota desde url */}
				<Image
					source={{
						uri: 'https://zavaletazea.dev/img/edificios.jpg',
					}}
					style={{
						width: 200,
						height: 200,
						resizeMode: 'cover',
						alignSelf: 'center',
						borderRadius: 100,
						borderWidth: 2,
						borderColor: '#000',
					}}
				/>

				<Image
					source={require('./../../assets/images/serpiente.jpg')}
					style={{
						marginVertical: 60,
						width: 200,
						height: 200,
						resizeMode: 'cover',
						alignSelf: 'center',
						borderRadius: 100,
						borderWidth: 2,
						borderColor: '#000',
					}}
				/>

				{/* Una imagen con origen local (desde un archivo) */}
				<Image
					source={require('./../../assets/images/edificios.jpg')}
					style={{
						width: 200,
						height: 200,
						resizeMode: 'cover',
						alignSelf: 'center',
						borderRadius: 100,
						borderWidth: 2,
						borderColor: '#000',
					}}
				/>
			</ScrollView>
		</ImageBackground>
	);
};

export default ImagenesScreen;
