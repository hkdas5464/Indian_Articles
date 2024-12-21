import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { PaperProvider } from 'react-native-paper';
import AccordingList from '@/components/AccordingList';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <PaperProvider>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/india.png')}
            style={styles.reactLogo}
          />
        }>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Indian Articles</ThemedText>
          <HelloWave />
        </ThemedView>
        <ThemedView style={styles.stepContainer}>
          <AccordingList />
        </ThemedView>
      </ParallaxScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  stepContainer: {
    gap: 2,
    marginBottom: 8,
  },
  reactLogo: {
    height:400,
    width: 400,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
