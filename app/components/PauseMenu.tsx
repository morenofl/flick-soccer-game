import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import {
	Pressable,
	StyleSheet,
	View
} from 'react-native';

interface PauseMenuProps {
	onResume: () => void;
	onExit: () => void;
}
export default function PauseMenu({onResume, onExit} : PauseMenuProps) {
	const router = useRouter();
	return (
		<View style={styles.pauseContainer}>
			<Pressable
				onPress={() => {
					onResume();
				}}
				style={styles.button}
			>
				<Ionicons name="play" size={50} color="#000" />
			</Pressable>

			<Pressable
				onPress={() => {
					onExit();
					router.push('./HomeScreen');
				}}
				style={styles.button}
			>
				<Ionicons name="home" size={50} color="#000" />
			</Pressable>


			
		</View>
	)
}

const styles = StyleSheet.create({
	pauseContainer: {
		zIndex: 1000,
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1,
		flexDirection: 'row'

	},
	button: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		backgroundColor: 'white',
		width: 75,
		height: 75,
		borderRadius: 40
	}
})