import React from 'react';
import {
	FlatList,
	Text,
	View,
	TouchableOpacity,
	RefreshControl,
	SafeAreaView,
} from 'react-native';
import colores from '../styles/colores';

import { AntDesign } from '@expo/vector-icons';
import EjemploItem from '../components/EjemploItem';
import FlatListHeader from '../components/FlatListHeader';

const EjemploFlatListScreen = (props) => {
	const [flatCargando, setFlatCargando] =
		React.useState(false);

	/*
    Flatlist permite mostrar listados de elementos
    de una forma optimizada

    FlatList utiliza lo siguiente:
    1.- Colección de datos a mostrar
    2.- Componente de renderizado
    3.- Identificdor de cada elemento del render
    */
	const arregloDatosFlat = [];
	for (let i = 0; i <= 100; i++) {
		arregloDatosFlat.push({
			id: `elem-${i}`,
			nombre: `Nombre ${i + 1} de la persona`,
			edad: `${i + 1} años`,
		});
	}
	return (
		<View
			style={{ backgroundColor: colores.candyPink }}>
			<SafeAreaView>
				<FlatList
					//Para dejar fijo (pin) un elemento de la lista
					// Indicamos en un arreglo los indices de los elementos
					// que deseamos dejar fijos tiene que concordar con el
					//número de columnas
					stickyHeaderIndices={[0, 2]}
					//Evento swipe (actualizar al arrastrar y soltar)
					refreshControl={
						<RefreshControl
							refreshing={flatCargando}
							size='large'
							// OnRefresh indica que hacer cuando vamos a
							// actualizar
							onRefresh={() => {
								//Mostraer el loader
								setFlatCargando(true);
							}}
							//ios cambia el color del refresh
							tintColor={colores.bone}
							//Android utiliza un arreglo de colores
							colors={[
								colores.candyPink,
								colores.yinMnBlue,
								colores.vividSkyBlue,
							]}
						/>
					}
					// Crear un estilo personalizado para el encabezado del FlatList
					ListHeaderComponent={() => (
						<FlatListHeader
							titulo='HEADER'
							//Pasamos la función del state como parámetro
							setFlatCargando={
								setFlatCargando
							}
						/>
					)}
					// Crear un estilo personalizado para el pie del FlatList
					ListFooterComponent={() => (
						<FlatListHeader
							titulo='FOOTER'
							setFlatCargando={
								setFlatCargando
							}
						/>
					)}
					//Indicar el número de columnas del FlatList
					numColumns={3}
					data={arregloDatosFlat}
					/*
                Item contiene un objetos item con 
                los datos de nuestra colección 
                */
					renderItem={(item) => (
						<EjemploItem
							datosUsuario={item.item}
							navigation={props.navigation}
						/>
					)}
					/*
                Indicamos quien es el elemento id de 
                cada item keyExtractor contiene un parámetro
                con todas las claves del objeto de arreglo
                */
					keyExtractor={(item) => item.id}
				/>
			</SafeAreaView>
		</View>
	);
};

export default EjemploFlatListScreen;
