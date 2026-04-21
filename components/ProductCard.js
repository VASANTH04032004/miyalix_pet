import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View 
      style={[styles.container, isHovered && styles.containerHovered]}
      {...(Platform.OS === 'web' && {
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false),
      })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.brand}>{product.brand}</Text>
        <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
        <Text style={styles.price}>₹{product.price}</Text>
        
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 280,
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radius,
    overflow: 'hidden',
    marginBottom: SIZES.large,
    ...SHADOWS.light,
    ...(Platform.OS === 'web' && {
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      cursor: 'pointer',
    }),
  },
  containerHovered: {
    ...(Platform.OS === 'web' && {
      transform: 'translateY(-5px)',
      boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    }),
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: COLORS.background,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    padding: SIZES.medium,
  },
  brand: {
    fontSize: SIZES.small,
    color: COLORS.textLight,
    textTransform: 'uppercase',
    marginBottom: 4,
    fontWeight: '600',
  },
  title: {
    fontSize: SIZES.medium,
    color: COLORS.text,
    fontWeight: '500',
    marginBottom: SIZES.small,
    height: 40, // fixed height for 2 lines
  },
  price: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: SIZES.medium,
  },
  addButton: {
    backgroundColor: COLORS.secondary,
    paddingVertical: SIZES.small,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addText: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: SIZES.font,
  }
});

export default ProductCard;
