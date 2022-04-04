/*
Una vez agregada la configuración tanto de Android como de iOS
en el archivo app.json, configuramos una conexión genérica para 
ambos sistemas operativos basados en  la conexión WEb (Javascript)

instalamos firebase con el comando
expo install firebase
*/
import firebase from 'firebase';

//importamos el motor de base de datos
//NoSQL
import 'firebase/firestore';

/*
Reutilizamos el objeto de conexión de la versión web
de firebase
*/
const firebaseConfig = {
	apiKey: 'AIzaSyA9d5xJzVVc8xOOXILXrrVwU3yxQnUluWo',
	authDomain: 'uteq-awi4-t196-f7624.firebaseapp.com',
	projectId: 'uteq-awi4-t196-f7624',
	storageBucket: 'uteq-awi4-t196-f7624.appspot.com',
	messagingSenderId: '217074414555',
	appId: '1:217074414555:web:2eeb2b4fc8ac57428a2dfe',
	measurementId: 'G-DP6C15CNPZ',
};

//Inicializamos el servicio de Firebase
firebase.initializeApp(firebaseConfig);

/*
Exportamos los servicios de firebase que vamos a ocupar
*/
const database = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export default {
	firebase,
	database,
	auth,
	storage,
};
