import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useParams, useNavigate } from 'react-router-native';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const DUMMY_PRODUCTS = {
  '1': [
    { id: '101', name: 'Premium Dog Food', price: '$45.00', image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&q=80' },
    { id: '102', name: 'Organic Cat Food', price: '$35.00', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&q=80' },
  ],
  '2': [
    { id: '201', name: 'Travel Carrier', price: '$85.00', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=400&q=80' },
    { id: '202', name: 'Portable Water Bowl', price: '$15.00', image: 'https://images.unsplash.com/photo-1615266895738-11f1371cd7e5?w=400&q=80' },
  ],
  '3': [
    { id: '301', name: 'Stylish Dog Collar', price: '$20.00', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&q=80' },
    { id: '302', name: 'Cat Bow Tie', price: '$12.00', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80' },
  ],
  '4': [
    { id: '401', name: 'GPS Tracker', price: '$120.00', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&q=80' },
    { id: '402', name: 'Automatic Feeder', price: '$90.00', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&q=80' },
  ],
  '5': [
    { id: '501', name: 'Cozy Pet Bed', price: '$60.00', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80' },
    { id: '502', name: 'Scratching Post', price: '$40.00', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&q=80' },
  ],
};

const CATEGORY_NAMES = {
  '1': 'Food',
  '2': 'Travel',
  '3': 'Fashion',
  '4': 'Tech',
  '5': 'Home',
};

export default function CategoryDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const products = DUMMY_PRODUCTS[id] || [];
  const categoryName = CATEGORY_NAMES[id] || 'Category';

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate('/')} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>{categoryName} Products</Text>
        <View style={{ width: 60 }} />
      </View>

      <ScrollView contentContainerStyle={styles.productList}>
        {products.length > 0 ? (
          products.map((item) => (
            <View key={item.id} style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
              </View>
            </View>
          ))
        ) : (
          <Text style={styles.noProductsText}>No products found for this category.</Text>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.large,
    backgroundColor: COLORS.white,
    ...SHADOWS.light,
  },
  backButton: {
    paddingVertical: SIZES.small,
  },
  backButtonText: {
    fontSize: SIZES.font,
    color: COLORS.primary,
    fontWeight: 'bold',
  },
  title: {
    fontSize: SIZES.extraLarge,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  productList: {
    padding: SIZES.padding,
    gap: SIZES.large,
  },
  productCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: SIZES.medium,
    padding: SIZES.small,
    alignItems: 'center',
    ...SHADOWS.medium,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: SIZES.small,
    marginRight: SIZES.medium,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: SIZES.large,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SIZES.base,
  },
  productPrice: {
    fontSize: SIZES.font,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  noProductsText: {
    textAlign: 'center',
    marginTop: SIZES.extraLarge,
    fontSize: SIZES.font,
    color: COLORS.gray,
  }
});
