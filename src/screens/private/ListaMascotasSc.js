import React from 'react';
import {
	FlatList,
	RefreshControl,
	View,
} from 'react-native';

import firebase from '../../backend/firebase';
import MascotaItem from '../../components/MascotaItem';
import colores from '../../styles/colores';

const ListaMascotasSc = (props) => {
	// State para guardar el arreglo de mascotas
	const [mascotas, setMascotas] = React.useState([]);

	// Controlamos la visibilidad del loader
	const [refresh, setRefresh] = React.useState(false);

	// Efecto para consultar la colección mascotas en cuanto se inicialice
	// este Screen
	React.useEffect(() => {
		cargaMascotas();
	}, []);

	// Función que realiza la consulta de mascotas y el resultado lo almacena
	// en el state mascotas
	const cargaMascotas = async () => {
		// Mostramos el ActivityIndicator
		setRefresh(true);
		//Limpiamos el arreglo de mascotas
		const arrMascotas = [];

		/*
        Consultamos por todos los documentos de la colección mascotas que 
        coincidan con el id de usuario de firebase que inició sesión, es decir, 
        solo mostramos  sus mascotas
        */
		const query = await firebase.database
			.collection('mascotas')
			.where(
				'fauid',
				'==',
				firebase.auth.currentUser.uid
			)
			.get();

		// Por cada documento en la consulta, creamos un objetos y
		// lo agregamos al arreglo
		query.docs.forEach((mascota) => {
			arrMascotas.push({
				id: mascota.id,
				...mascota.data(),
			});
		});

		// Actualizamos el state
		setMascotas(arrMascotas);

		setRefresh(false);
		console.log(mascotas);
	};

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				// Indicamos los eventos y estilo para el evento swipe
				refreshControl={
					<RefreshControl
						//Colores del loader en Android
						colors={[
							colores.candyPink,
							colores.yinMnBlue,
						]}
						//Color del loader en iOS
						tintColor={colores.candyPink}
						size='large'
						style={{ marginTop: 32 }}
						refreshing={refresh}
						onRefresh={cargaMascotas}
					/>
				}
				// Inidicamos que el contenido del flatlist vendrá
				// del arreglo de mascotas
				data={mascotas}
				// Indicamos el estilo por cada elemento
				renderItem={(item) => (
					<MascotaItem mascota={item.item} />
				)}
			/>
		</View>
	);
};

export default ListaMascotasSc;
