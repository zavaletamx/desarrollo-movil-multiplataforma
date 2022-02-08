import React from 'react';
import { Text, View } from 'react-native';

const FlexBoxScreen = (props) => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
			}}>
			<Text>FlexBoxScree.js</Text>
		</View>
	);
};

export default FlexBoxScreen;
