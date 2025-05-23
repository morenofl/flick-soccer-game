import { BebasNeue_400Regular, useFonts } from '@expo-google-fonts/bebas-neue';
import { Ionicons } from '@expo/vector-icons';
import AppLoading from 'expo-app-loading';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
	const router = useRouter();
	 const [fontsLoaded] = useFonts({ BebasNeue_400Regular });
  	if (!fontsLoaded) return <AppLoading />;

	return (
		<View style={styles.container}>
				<Text style={styles.title}>FLICK SOCCER</Text>

				<TouchableOpacity
					style={styles.startButtonContainer}
					onPress={() => {
						router.push("/SoccerGame")
					}}
					
				>
					<Ionicons name="play" size={50} color="#000" />
				</TouchableOpacity>
			

		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#4CAF50',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 40,
		margin: 15,
		fontFamily: 'BebasNeue_400Regular'
	},
	startButtonContainer: {
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		width: 75,
		height: 75,
		borderRadius: 40
	}
})