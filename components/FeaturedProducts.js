import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';
import ProductCard from './ProductCard';

const FEATURED_PRODUCTS = [
  {
    id: 'p1',
    brand: "Sara's Wholesome Food",
    title: 'Fresh Turkey & Veggies Dog Food',
    price: '899',
    image: 'https://images.unsplash.com/photo-1585848529964-18491c3be095?w=400&q=80',
  },
  {
    id: 'p2',
    brand: "Purrfect Play",
    title: 'Interactive Laser Cat Toy',
    price: '499',
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&q=80',
  },
  {
    id: 'p3',
    brand: "GroomWell",
    title: 'Oatmeal Soothing Shampoo',
    price: '650',
    image: 'https://images.unsplash.com/photo-1520188049635-c3c6f140de0a?w=400&q=80',
  },
  {
    id: 'p4',
    brand: "CozyPaws",
    title: 'Orthopedic Dog Bed - Large',
    price: '2499',
    image: 'https://images.unsplash.com/photo-1596700720455-225eb578a164?w=400&q=80',
  }
];

const FeaturedProducts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Bestsellers</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {FEATURED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    marginBottom: SIZES.padding,
  },
  sectionTitle: {
    fontSize: SIZES.extraLarge,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.large,
  },
  scrollContent: {
    gap: SIZES.large,
  }
});

export default FeaturedProducts;
