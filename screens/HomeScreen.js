import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import CategoryList from '../components/CategoryList';
import FeaturedProducts from '../components/FeaturedProducts';
import { COLORS } from '../constants/theme';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <HeroBanner />
        <CategoryList />
        <FeaturedProducts />
        <View style={styles.bottomSpace} />
      </ScrollView>
      {/* TODO(auth): Show authenticated user details and logout action. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  bottomSpace: {
    height: 100,
  },
});
