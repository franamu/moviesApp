import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image } from 'react-native';

function Loading(props) {
	return (
		<View 
		style={styles.container}
		>
		<Image 
		source={require('../../../assets/logo4.jpg')}
		style= {styles.logo}
		/>
		<ActivityIndicator />	
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center'
	},
	logo: {
		marginBottom: 10,
		width: 200,
		height: 200,
		resizeMode: 'contain'
	}
})

export default Loading;