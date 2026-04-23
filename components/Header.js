import React from 'react';
import { View, Text, StyleSheet, Platform, TouchableOpacity, TextInput } from 'react-native';
import { COLORS, SIZES, SHADOWS } from '../constants/theme';

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>Miyalix<Text style={styles.logoPet}>Pets</Text></Text>
      </View>
      
      {Platform.OS === 'web' && (
        <View style={styles.searchContainer}>
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search for dog food, toys..." 
            placeholderTextColor={COLORS.textLight}
          />
        </View>
      )}

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>♥</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={styles.iconText}>🛒</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => navigation?.navigate('Login')}>
          <Text style={styles.iconText}>👤</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.small,
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: 100,
    ...(Platform.OS === 'web' && {
      position: 'sticky',
      top: 0,
      backdropFilter: 'blur(10px)',
    }),
    ...SHADOWS.light,
  },
  logoContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: SIZES.extraLarge,
    fontWeight: '800',
    color: COLORS.text,
  },
  logoPet: {
    color: COLORS.primary,
  },
  searchContainer: {
    flex: 2,
    marginHorizontal: SIZES.xxl,
  },
  searchInput: {
    backgroundColor: COLORS.background,
    paddingHorizontal: SIZES.medium,
    paddingVertical: SIZES.small,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.border,
    fontSize: SIZES.font,
    color: COLORS.text,
    outlineStyle: 'none',
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: SIZES.small,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: SIZES.large,
    color: COLORS.text,
  }
});

export default Header;
