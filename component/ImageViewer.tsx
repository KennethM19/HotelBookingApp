import { StyleSheet, Dimensions } from 'react-native';
import { Image, type ImageSource } from 'expo-image';

const { width, height } = Dimensions.get('window');

type Props = {
  imgSource: ImageSource;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width,
    height,
    top: 0,
    left: 0,
  },
});

