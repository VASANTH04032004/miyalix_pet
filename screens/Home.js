import React from 'react';
import { StyleSheet, View, ScrollView, Platform } from 'react-native';
import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import CategoryList from '../components/CategoryList';
import FeaturedProducts from '../components/FeaturedProducts';
import { COLORS } from '../constants/theme';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        <HeroBanner />
        <CategoryList />
        <FeaturedProducts />
        {/* Additional padding for bottom spacing */}
        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    ...(Platform.OS === 'web' && {
      marginHorizontal: 'auto',
      width: '100%',
      maxWidth: 1440,
    }),
  },
  scrollContainer: {
    flexGrow: 1,
  }
});
