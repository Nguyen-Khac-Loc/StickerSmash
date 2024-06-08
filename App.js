import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import images from './constants/images';

import * as ImagePicker from 'expo-image-picker';
export default function App() {
	const [selectedImage, setSelectedImage] = useState(null);
	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			setSelectedImage(result.assets[0].uri);
		} else {
			alert('You did not select any image.');
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer placeholderImageSource={images.placehoder}
					selectedImage={selectedImage} />
			</View>
			<View style={styles.footerContainer}>
				<Button label="Use this photo" />
				<Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#25292e',
		alignItems: 'center',
		justifyContent: 'center',
	},
	imageContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	footerContainer: {
		flex: 1 / 3,
		alignItems: 'center',
	},
});
