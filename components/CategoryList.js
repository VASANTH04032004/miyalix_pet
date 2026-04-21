import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const CATEGORIES = [
  { id: '1', title: 'Dog Food', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80' },
  { id: '2', title: 'Cat Toys', image: 'https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?w=400&q=80' },
  { id: '3', title: 'Grooming', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&q=80' },
  { id: '4', title: 'Bedding', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&q=80' },
  { id: '5', title: 'Apparel', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80' },
];

const CategoryList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Shop by Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {CATEGORIES.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.categoryCard}
            activeOpacity={0.8}
          >
            <View style={styles.imageContainer}>
              <Image source={{ uri: item.image }} style={styles.image} />
            </View>
            <Text style={styles.categoryTitle}>{item.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  sectionTitle: {
    fontSize: SIZES.extraLarge,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.large,
  },
  scrollContent: {
    gap: SIZES.large,
  },
  categoryCard: {
    alignItems: 'center',
    width: 120,
    ...(Platform.OS === 'web' && { cursor: 'pointer' }),
  },
  imageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SIZES.small,
    overflow: 'hidden',
    ...SHADOWS.light,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  categoryTitle: {
    fontSize: SIZES.font,
    color: COLORS.text,
    fontWeight: '600',
    textAlign: 'center',
  }
});

export default CategoryList;
