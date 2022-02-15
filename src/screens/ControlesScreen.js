import {
	ScrollView,
	Text,
	TextInput,
	View,
} from 'react-native';
import estilos from '../styles/estilos';
import { AntDesign } from '@expo/vector-icons';
import colores from '../styles/colores';

const ControlesScreen = (props) => {
	return (
		<ScrollView>
			<Text style={estilos.tituloComponente}>
				Controles de Entrada
			</Text>

			{/* TextInput es el componente encargado 
            de renderizar un campo de texto, por defecto
            carece de cualquier tipo de diseño */}
			<TextInput
				style={estilos.textInputBase}
				placeholder='Ingresa un texto'
				keyboardType='default'
			/>

			<TextInput
				style={estilos.textInputPerso1}
				placeholder='Nombre'
				keyboardType='default'
			/>

			<TextInput
				style={estilos.textInputPerso2}
				placeholder='Teléfono'
				keyboardType='phone-pad'
			/>

			{/* Creamos nuestro propio TextInput con 
            icono */}
			<View style={estilos.textInputIconContainer1}>
				<AntDesign
					name='user'
					size={22}
					color={colores.yinMnBlue}
				/>
				<TextInput
					style={estilos.textInputIcon}
					placeholder='Username'
					keyboardType='default'
				/>
			</View>

			<View style={estilos.textInputIconContainer1}>
				<AntDesign
					name='mail'
					size={22}
					color={colores.yinMnBlue}
				/>
				<TextInput
					style={estilos.textInputIcon}
					placeholder='Username'
					keyboardType='email-address'
					//Evitamos la primera letra  mayúscula
					autoCapitalize='none'
					//Evitamos la corrección de palabras
					autoCorrect={false}
				/>
			</View>

			<View style={estilos.textInputIconContainer2}>
				<AntDesign
					name='user'
					size={22}
					color={colores.yinMnBlue}
				/>
				<TextInput
					// Forma uno de sobreescribir estilos
					style={{
						...estilos.textInputIcon,
						...estilos.textInputIconLine,
					}}
					placeholder='Username'
					keyboardType='default'
					//Evitamos la primera letra  mayúscula
					autoCapitalize='none'
					//Evitamos la corrección de palabras
					autoCorrect={false}
				/>
			</View>

			<View style={estilos.textInputIconContainer2}>
				<AntDesign
					name='mail'
					size={22}
					color={colores.yinMnBlue}
				/>
				<TextInput
					// Forma dos de sobreescribir estilos
					style={{
						...estilos.textInputIcon,
						color: '#000',
						fontWeight: 'normal',
					}}
					placeholder='Username'
					keyboardType='email-address'
					//Evitamos la primera letra  mayúscula
					autoCapitalize='none'
					//Evitamos la corrección de palabras
					autoCorrect={false}
				/>
			</View>

			<TextInput
				placeholder='Campo de texto'
				keyboardType='number-pad'
			/>
		</ScrollView>
	);
};

export default ControlesScreen;
