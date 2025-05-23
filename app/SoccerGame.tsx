import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Modal,
  PanResponder,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View
} from 'react-native';
import PauseMenu from './components/PauseMenu';

const { width, height } = Dimensions.get('window');

export default function SoccerGame() {
  const [paused, setPaused] = useState(false);
  // position of the ball
  const router = useRouter();
  
  const ballPos = useRef(
    new Animated.ValueXY({
      x: width / 2 - 25,
      y: height * 0.7,
    })
  ).current;

  // detect flick/swipe release
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderRelease: (_, { dx, dy }) => {
        const currentX = (ballPos.x as any).__getValue();
        const currentY = (ballPos.y as any).__getValue();

        Animated.spring(ballPos, {
          toValue: {
            x: currentX + dx,
            y: currentY + dy,
          },
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.ballContainer, ballPos.getLayout()]}
      >
        <FontAwesome name="soccer-ball-o" size={BALL_SIZE} color={'black'} />
      </Animated.View>
      
      
      <Image source={require("../assets/images/soccer-goal.png")} style={styles.goal} resizeMode="contain"/>
      
      


      {paused && <Modal
				visible={paused}
				transparent={true}
				animationType="fade"
				onRequestClose={() => setPaused(false)}
			>
				<SafeAreaView style={styles.modalOverlay}>
					<PauseMenu
            onExit={() => {
              setPaused(false);
            }}
            onResume={() => {
              setPaused(false);
            }}
          />
				</SafeAreaView>
			</Modal>}

      

      <Pressable 
        onPress={() => {
          setPaused(true);
        }} 
        style={styles.pauseButton}
      >
        <Ionicons name="pause" size={24} color="#fff" />
      </Pressable>
    </View>
  );
}
const BALL_SIZE = 50;
const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#4CAF50', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  ballContainer: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 25,
    width: BALL_SIZE,
    height: BALL_SIZE,
    zIndex: 100
  },
  pauseButton: {
    position: 'absolute',
    top: 50,         
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    borderRadius: 20,
    padding: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  goal: {
    position: 'absolute',
    bottom: height * 0.2,
    width: width * 0.9,      // e.g. 80% of screen width
    height: height * 0.8,    // e.g. 20% of screen height
          
  }
});
