import {
	Button,
	Image,
	ScrollView,
	Switch,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';

// Una vez instalada la librería
// npm i radio-buttons-react-native-expo
import RadioButtonRN from 'radio-buttons-react-native-expo';

// Una vez instalada la librería expo-checkbox
// expo install expo-checkbox
import CheckBox from 'expo-checkbox';

import estilos from '../styles/estilos';
import {
	AntDesign,
	FontAwesome5,
} from '@expo/vector-icons';
import colores from '../styles/colores';

const ControlesScreen = (props) => {
	// Constante para simular el estado de un Switch
	const valorSwitch = true;

	// Constante para simular el estado de un CheckBox
	const valorCheckBox = true;

	// Los RadioButtons están hechos para que solo
	// pueda seleccionarse uno del grupo
	// La librería de RadioButton funciona por medio
	// de un arreglo

	// Creamos un arreglo con las opciones del RadioButton
	const opcionesRadioButton = [
		{
			label: 'Opción 1',
		},
		{
			label: 'Opción 2',
		},
		{
			label: 'Opción 3',
		},
	];

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

			<Text
				style={{
					...estilos.tituloComponente,
					marginTop: 40,
				}}>
				Controles de Selección
			</Text>

			{/* Botón preestablecido por React, look and feel 
            de los botones nativos del S.O */}
			<View
				style={{
					flex: 1,
					margin: 8,
					padding: 8,
				}}>
				<Button title='Botón' color={'tomato'} />
			</View>

			{/* ReactNative nos permite generar nuestros 
            propios componentes seleccionables por medio 
            del elemento genérico llamado 
            TouchableOpacity */}
			<TouchableOpacity>
				<Image
					source={require('./../../assets/images/plantas.jpg')}
					style={{
						width: 150,
						height: 150,
						alignSelf: 'center',
						borderRadius: 10,
					}}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				style={{
					backgroundColor: colores.bone,
					margin: 8,
					padding: 16,
					borderRadius: 8,
					flex: 1,
					flexDirection: 'row',
					alignItems: 'center',
					borderWidth: 2,
					borderColor: colores.yinMnBlue,
				}}>
				<FontAwesome5
					name='upload'
					color={colores.yinMnBlue}
					size={24}
				/>
				<Text
					style={{
						color: colores.yinMnBlue,
						textAlign: 'center',
						marginStart: 16,
						fontSize: 16,
						fontWeight: 'bold',
					}}>
					Botón personalizado
				</Text>
			</TouchableOpacity>

			{/* Componente switch */}
			<Switch
				value={valorSwitch}
				trackColor={{
					false: colores.candyPink, //Color de la barra apagada (Android)
					true: colores.yinMnBlue, //Color de la barra encendida (Android)
				}}
				ios_backgroundColor={colores.candyPink}
				// Dependiendo del estado del Swith podemos
				// cambiar el color del Thumb
				thumbColor={
					valorSwitch
						? colores.vividSkyBlue
						: colores.bone
				}
			/>

			<Switch
				value={!valorSwitch}
				trackColor={{
					false: colores.candyPink,
					true: colores.yinMnBlue,
				}}
				//Color de la barra apagada (iOS)
				ios_backgroundColor={colores.candyPink}
				thumbColor={
					!valorSwitch
						? colores.vividSkyBlue
						: colores.bone
				}
			/>

			<Text style={estilos.tituloComponente}>
				Switch con etiqueta
			</Text>

			<View style={estilos.switchContainer}>
				<Text style={estilos.switchText}>
					Acepto los términos y condiciones
				</Text>
				<Switch
					value={valorSwitch}
					trackColor={{
						false: colores.candyPink, //Color de la barra apagada (Android)
						true: colores.yinMnBlue, //Color de la barra encendida (Android)
					}}
					ios_backgroundColor={colores.candyPink}
					// Dependiendo del estado del Swith podemos
					// cambiar el color del Thumb
					thumbColor={
						valorSwitch
							? colores.vividSkyBlue
							: colores.bone
					}
				/>
			</View>

			<View style={estilos.switchContainer}>
				<Text style={estilos.switchText}>
					Vender mi alma
				</Text>
				<Switch
					value={!valorSwitch}
					trackColor={{
						false: colores.candyPink, //Color de la barra apagada (Android)
						true: colores.yinMnBlue, //Color de la barra encendida (Android)
					}}
					ios_backgroundColor={colores.candyPink}
					// Dependiendo del estado del Swith podemos
					// cambiar el color del Thumb
					thumbColor={
						!valorSwitch
							? colores.vividSkyBlue
							: colores.bone
					}
				/>
			</View>

			<Text style={estilos.tituloComponente}>
				RadioButtons
			</Text>

			{/* Indicamos un componente de tipo RadioButtonRN
            donde mostramos las opciones previamente generadas 
            en el arreglo  */}
			<View style={{ paddingHorizontal: 8 }}>
				<RadioButtonRN
					data={opcionesRadioButton}
					icon={
						<FontAwesome5
							name='check'
							size={22}
							color={'green'}
						/>
					}
				/>
			</View>

			<Text style={estilos.tituloComponente}>
				CheckBox
			</Text>

			{/* Los CheckBox son componentes diseñados
            para seleccionarse uno, ninguno o varios  */}
			<CheckBox
				value={valorCheckBox}
				color={colores.middleBlueGreen}
			/>
			<CheckBox
				value={!valorCheckBox}
				color={colores.candyPink}
			/>

			<Text style={estilos.tituloComponente}>
				CheckBox con etiqueta
			</Text>

			<View style={estilos.checkBoxContainer}>
				<CheckBox
					value={valorCheckBox}
					color={colores.roseDust}
				/>
				<Text style={estilos.checkBoxText}>
					Deseo recibir ofertas
				</Text>
			</View>

			<View style={estilos.checkBoxContainer}>
				<CheckBox
					value={!valorCheckBox}
					color={colores.yinMnBlue}
				/>
				<Text style={estilos.checkBoxText}>
					Deseo suscribirme
				</Text>
			</View>

			{/* Creamos un espacio para que los elementos no queden sobre el fondo */}
			<View style={{ marginBottom: 100 }} />
		</ScrollView>
	);
};

export default ControlesScreen;
