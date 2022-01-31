/*
La estructura mínima de un componente:
1.- import React 
2.- retornar como mínimo un componente 
    gráfico
3.- importar las librerías/componentes
    que se utilizan en el render
4.- Exportar el componte para poder 
    importarlo en otros ficheros

Los componentes disponen de un parámetro global llamado 
props donde residen todos los elementos de tipo prop
que se asignen a un componente
*/

import React from 'react';
import { Button, Text, View } from 'react-native';

/*
export default significa que este componente 
al ser importado por defecto ejecutará  a la 
función ComponenteUno
*/
export default function ComponenteUno(props) {
	console.log(props);

	return (
		<View
			style={{
				margin: 20,
				padding: 20,
				backgroundColor: '#0FF000',
			}}>
			<Text>
				Hola {props.nombreUsuario} desde mi
				componente creado con una función
				tradicional
			</Text>

			<Button title={props.textoBotones[0]} />
			<Button title={props.textoBotones[1]} />
			<Button title={props.textoBotones[2]} />
			<Button title={props.textoBotones[3]} />
			<Button title={props.textoBotones[4]} />
		</View>
	);
}
