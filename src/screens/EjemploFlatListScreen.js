import {
	FlatList,
	Text,
	View,
	TouchableOpacity,
} from 'react-native';
import colores from '../styles/colores';

import { AntDesign } from '@expo/vector-icons';
import EjemploItem from '../components/EjemploItem';

const EjemploFlatListScreen = (props) => {
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
		<View>
			<FlatList
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
		</View>
	);
};

export default EjemploFlatListScreen;
