import React from 'react';
import {
	FlatList,
	RefreshControl,
	Text,
	View,
} from 'react-native';

import firebase from './../../backend/firebase';

import { Entypo } from '@expo/vector-icons';

const ListaUbicacionesScreen = (props) => {
	/*
    Creamos un state de tipo arreglo 
    Para guardar la colección de ubicaciones 
    desde firestore
    */
	const [ubicaciones, setUbicaciones] = React.useState(
		[]
	);

	const [flatCargando, setFlatCargando] =
		React.useState(false);

	/*
    Función flecha que nos permita realizar la consulta de 
    ubicaciones y almacenarlas en el state -ubicaciones-

    La consulta puede tardar N cantidad de tiempo
    */
	const cargarUbicaciones = async () => {
		setFlatCargando(true);
		//Generamos la consulta a la colección -ubicaciones-
		const query = await firebase.database
			.collection('ubicaciones')
			.get();

		//Los datos de cada documento se almacenan en un
		//arreglo llamado -docs-

		//Creamos un arreglo para guardar todos
		//los datos de cada documento
		const arrUbic = [];

		//Recorremos con un forEach todos los elementos del arreglo
		query.docs.forEach((ub) => {
			/*
            Los valores están divididos:
            El id no es parte de los elementos de la colección

            Para ver los datos:
            _elem_.data()

            Para ver el id:
            _elem_.id
            */
			// console.log('ID del documento', ub.id);
			// console.log('Datos del documento:', ub.data());

			/*
            Agregamos al arreglo un objeto 
            con el id y los datos de cada documento
            */
			arrUbic.push({
				id: ub.id,
				...ub.data(),
			});
		});
		//console.log(arrUbic);

		/*
        Pasamos el arreglo de ubicaciones al state
        */
		setUbicaciones(arrUbic);

		setFlatCargando(false);
	};

	/*
    Cuando deseamos realizar alguna acción justo antes de que 
    se muestre el render (el return), es decir, antes de mostrar 
    la parte gráfica, o al actualizarse algún componente o al cerrar
    un Screen podemos utilizar los efectos (hooks) que nos permiten 
    manipular el ciclo de vida de los componentes

    Controlamos el evento de ejecución (al iniciar, al actualizar o al cerrar)
    por medio de corchetes y el retorno del hook
    */

	/*
    Efecto que se ejecuta justo al cargar el screen

    Para indicar que el efecto se ejecutará al inicio 
    agregamoa al final corchetes vacíos
    */
	React.useEffect(() => {
		cargarUbicaciones();
	}, []);

	return (
		<View style={{ flex: 1 }}>
			<FlatList
				refreshControl={
					<RefreshControl
						refreshing={flatCargando}
						onRefresh={() =>
							cargarUbicaciones()
						}
					/>
				}
				data={ubicaciones}
				renderItem={(item) => (
					<View
						style={{
							margin: 8,
							padding: 16,
							backgroundColor: '#000',
							borderRadius: 8,
						}}>
						<Text
							style={{
								fontSize: 18,
								color: '#fff',
								lineHeight: 30,
							}}>
							<Entypo
								name='location'
								size={24}
							/>
							{'  '}
							{item.item.nombre}
							{'\n\n'}
							<Entypo
								name='location-pin'
								size={24}
							/>{' '}
							{item.item.punto.latitude}
							{'\n'}
							<Entypo
								name='location-pin'
								size={24}
							/>{' '}
							{item.item.punto.longitude}
						</Text>
					</View>
				)}
				keyExtractor={(item) => item.id}
			/>
		</View>
	);
};

export default ListaUbicacionesScreen;
