import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Button from './components/Button';
import CircleButton from './components/CircleButton';
import EmojiList from './components/EmojiList';
import EmojiPicker from "./components/EmojiPicker";
import IconButton from './components/IconButton';
import ImageViewer from './components/ImageViewer';
import images from './constants/images';
import EmojiSticker from './components/EmojiSticker';
export default function App() {
	const [selectedImage, setSelectedImage] = useState(null);
	const [showwAppOptions, setShowAppOptions] = useState(false);
	const [isModalVisible, setIsModalVisible] = useState(false);
	const [pickedEmoji, setPickedEmoji] = useState(null);
	const onReset = () => {
		setShowAppOptions(false);
	};

	const onAddSticker = () => {
		setIsModalVisible(true);
	};

	const onModalClose = () => {
		setIsModalVisible(false);
	};

	const onSaveImageAsync = async () => {
	};
	const pickImageAsync = async () => {
		let result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			setSelectedImage(result.assets[0].uri);
			setShowAppOptions(true);
		} else {
			alert('You did not select any image.');
		}
	};
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<ImageViewer placeholderImageSource={images.placehoder}
					selectedImage={selectedImage} />
				{pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
			</View>
			{showwAppOptions ? (
				<View style={styles.optionsContainer}>
					<View style={styles.optionsRow}>
						<IconButton icon="refresh" label="Reset" onPress={onReset} />
						<CircleButton onPress={onAddSticker} />
						<IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
					</View>
				</View>
			) : (
				<View style={styles.footerContainer}>
					<Button theme="primary" label="Choose a photo" onPress={pickImageAsync} />
					<Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
				</View>
			)}
			<EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
				<EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
			</EmojiPicker>
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
	optionsContainer: {
		position: 'absolute',
		bottom: 80,
	},
	optionsRow: {
		alignItems: 'center',
		flexDirection: 'row',
	},
});
