import React from 'react';
import { Button, Text, View } from 'react-native';
import firebase from './../../backend/firebase';

const HomeContainer = (props) => {
	const salirFirebase = async () => {
		try {
			/*
            Invocamos al método logout de firebase 
            */
			await firebase.auth.signOut();

			/*
            O_______O

            Si pruebas este ejemplo verás que por defecto después de 
            iniciar sesión en automático nos reidrecciona al Home

            Eso es lo que programamos en CheckLoginSc.js
            */
		} catch (exception) {
			console.log(exception);
		}
	};

	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text>HomeContainer.js</Text>
			<View style={{ margin: 8 }}>
				<Button
					title='Salir'
					onPress={() => salirFirebase()}
				/>
			</View>
		</View>
	);
};

export default HomeContainer;
