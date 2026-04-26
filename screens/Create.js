import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

export default function Create({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Page</Text>
      <Text style={styles.subtitle}>This is a placeholder UI for the /create route.</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: SIZES.padding,
  },
  title: {
    fontSize: SIZES.extraLarge,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.small,
  },
  subtitle: {
    fontSize: SIZES.font,
    color: COLORS.gray,
    marginBottom: SIZES.extraLarge,
    textAlign: 'center',
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: SIZES.font,
    paddingHorizontal: SIZES.large,
    borderRadius: SIZES.small,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: SIZES.font,
  }
});
