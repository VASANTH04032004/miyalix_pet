import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Platform } from 'react-native';
import { useNavigate } from 'react-router-native';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const CATEGORIES = [
  { id: '1', title: 'Food', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' },
  { id: '2', title: 'Travel', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80' },
  { id: '3', title: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80' },
  { id: '4', title: 'Tech', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80' },
  { id: '5', title: 'Home', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80' },
];

const CategoryList = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Shop by Category</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {CATEGORIES.map((item) => (
          <TouchableOpacity 
            key={item.id} 
            style={styles.categoryCard}
            activeOpacity={0.8}
            onPress={() => navigate(`/category/${item.id}`)}
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
