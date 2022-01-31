import React from 'react';
import { Text, View } from 'react-native';
/*
Componente por medio de una clase 
En caso de los componentes creado a partir de una clase, 
es necesario heredar de React.Componente y debemos invocar
al constructor de dicha clase
 */
export default class ComponenteTres extends React.Component {
	/*
    Inicializamos el acceso a las propiedades
    de este componente
    */
	constructor(props) {
		super(props);
	}

	/*
    El método que permite visualizar 
    (renderizar los componentes)
    gráficos se llamada render
    */
	render() {
		/*
        Cuando agregamos el parámetro props al constructor 
        de la clase, podemos acceder a todos los valores 
        del atributo por medio del modificador de contexto this
        */
		console.log('Las props de la clase', this.props);
		return (
			<View
				style={{
					padding: 20,
					margin: 20,
					backgroundColor: this.props.color,
				}}>
				<Text>
					Componente creado desde una clase
				</Text>
			</View>
		);
	}
}
