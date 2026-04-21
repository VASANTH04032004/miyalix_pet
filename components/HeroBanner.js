import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing, ImageBackground, TouchableOpacity, Platform } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const HeroBanner = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: Platform.OS !== 'web',
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        easing: Easing.out(Easing.ease),
        useNativeDriver: Platform.OS !== 'web',
      })
    ]).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
      <ImageBackground 
        source={{ uri: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' }} 
        style={styles.backgroundImage}
        imageStyle={{ borderRadius: SIZES.radius }}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Premium Care for Your Best Friend</Text>
          <Text style={styles.subtitle}>Discover the best food, toys, and grooming essentials curated for your pet's happiness.</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: SIZES.padding,
    height: 400,
    borderRadius: SIZES.radius,
    ...SHADOWS.medium,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    borderRadius: SIZES.radius,
    padding: SIZES.xxl,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: COLORS.surface,
    marginBottom: SIZES.small,
    maxWidth: '60%',
  },
  subtitle: {
    fontSize: SIZES.large,
    color: COLORS.surface,
    marginBottom: SIZES.xxl,
    maxWidth: '50%',
    lineHeight: 24,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.xxl,
    paddingVertical: SIZES.small,
    borderRadius: 25,
  },
  buttonText: {
    color: COLORS.surface,
    fontSize: SIZES.medium,
    fontWeight: 'bold',
  }
});

export default HeroBanner;
