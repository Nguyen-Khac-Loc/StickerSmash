import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Button from './components/Button';
import ImageViewer from './components/ImageViewer';
import images from './constants/images';

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer placeholderImageSource={images.placehoder} />
			</View>
			<View style={styles.footerContainer}>
				<Button theme="primary" label="Choose a photo" />
				<Button label="Use this photo" />
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
