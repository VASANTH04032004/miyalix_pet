import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { Animated, Easing } from 'react-native';
import { KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import authStyles from './authStyles';

function BrandHeader() {
  return (
    <View style={authStyles.brandHeader}>
      <View style={authStyles.logoCircle}>
        <Text style={authStyles.logoPaw}>🐾</Text>
      </View>
      <Text style={authStyles.brandTitle}>Miyalix Pet</Text>
      <Text style={authStyles.brandTagline}>Welcome back, pet lover!</Text>
    </View>
  );
}

export default function AuthLayout({ children }) {
  const floatAnim = useRef(new Animated.Value(0)).current;
  const pulseAnim = useRef(new Animated.Value(0)).current;
  const sparkleAnim = useRef(new Animated.Value(0)).current;
  const particleAnims = useRef(
    [0, 1, 2, 3, 4, 5, 6].map(() => ({
      rise: new Animated.Value(0),
      sway: new Animated.Value(0),
      opacity: new Animated.Value(0.2),
    }))
  ).current;

  useEffect(() => {
    const floatLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(floatAnim, {
          toValue: 1,
          duration: 3200,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
        Animated.timing(floatAnim, {
          toValue: 0,
          duration: 3200,
          easing: Easing.inOut(Easing.sin),
          useNativeDriver: true,
        }),
      ])
    );

    const pulseLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 2400,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 0,
          duration: 2400,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    );
    const sparkleLoop = Animated.loop(
      Animated.sequence([
        Animated.timing(sparkleAnim, {
          toValue: 1,
          duration: 1600,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
        Animated.timing(sparkleAnim, {
          toValue: 0,
          duration: 1600,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        }),
      ])
    );

    const particleLoops = particleAnims.map((item, index) =>
      Animated.loop(
        Animated.parallel([
          Animated.sequence([
            Animated.timing(item.rise, {
              toValue: 1,
              duration: 6500 + index * 500,
              easing: Easing.linear,
              useNativeDriver: true,
            }),
            Animated.timing(item.rise, {
              toValue: 0,
              duration: 0,
              useNativeDriver: true,
            }),
          ]),
          Animated.sequence([
            Animated.timing(item.sway, {
              toValue: 1,
              duration: 2200 + index * 150,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
            Animated.timing(item.sway, {
              toValue: 0,
              duration: 2200 + index * 150,
              easing: Easing.inOut(Easing.sin),
              useNativeDriver: true,
            }),
          ]),
          Animated.sequence([
            Animated.timing(item.opacity, {
              toValue: 0.95,
              duration: 2000 + index * 120,
              useNativeDriver: true,
            }),
            Animated.timing(item.opacity, {
              toValue: 0.2,
              duration: 2000 + index * 120,
              useNativeDriver: true,
            }),
          ]),
        ])
      )
    );

    floatLoop.start();
    pulseLoop.start();
    sparkleLoop.start();
    particleLoops.forEach((loop) => loop.start());

    return () => {
      floatLoop.stop();
      pulseLoop.stop();
      sparkleLoop.stop();
      particleLoops.forEach((loop) => loop.stop());
    };
  }, [floatAnim, pulseAnim, sparkleAnim, particleAnims]);

  const topBlobStyle = {
    transform: [
      { translateY: floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -14] }) },
      { translateX: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 6] }) },
      { scale: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.05] }) },
    ],
    opacity: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [0.82, 0.97] }),
  };

  const middleBlobStyle = {
    transform: [
      { translateY: floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 12] }) },
      { translateX: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -5] }) },
      { scale: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.04] }) },
    ],
    opacity: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [0.72, 0.9] }),
  };

  const bottomBlobStyle = {
    transform: [
      { translateY: floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 10] }) },
      { translateX: floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 8] }) },
      { scale: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.06] }) },
    ],
    opacity: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [0.8, 0.95] }),
  };

  const softBlobStyle = {
    transform: [
      { translateY: floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -10] }) },
      { translateX: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -6] }) },
      { scale: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.05] }) },
    ],
    opacity: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [0.72, 0.9] }),
  };

  const bandTopStyle = {
    transform: [
      { rotate: '-9deg' },
      { translateX: floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0, 12] }) },
    ],
    opacity: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [0.45, 0.7] }),
  };

  const bandBottomStyle = {
    transform: [
      { rotate: '7deg' },
      { translateX: floatAnim.interpolate({ inputRange: [0, 1], outputRange: [0, -12] }) },
    ],
    opacity: pulseAnim.interpolate({ inputRange: [0, 1], outputRange: [0.38, 0.62] }),
  };

  const particleBases = [
    { left: '8%', emoji: '🐾', size: 18 },
    { left: '22%', emoji: '🐱', size: 16 },
    { left: '34%', emoji: '🐶', size: 20 },
    { left: '48%', emoji: '🐰', size: 17 },
    { left: '62%', emoji: '🐾', size: 15 },
    { left: '74%', emoji: '🐱', size: 18 },
    { left: '88%', emoji: '🐶', size: 16 },
  ];

  return (
    <SafeAreaView style={authStyles.safeArea}>
      <StatusBar style="light" />
      <LinearGradient
        colors={['#0f0c29', '#1a1a2e', '#16213e', '#0f3460']}
        locations={[0, 0.35, 0.7, 1]}
        style={authStyles.gradientFill}
      />
      <Animated.View style={[authStyles.bgBlobTop, topBlobStyle]} />
      <Animated.View style={[authStyles.bgBlobMiddle, middleBlobStyle]} />
      <Animated.View style={[authStyles.bgBlobRightSoft, softBlobStyle]} />
      <Animated.View style={[authStyles.bgBlobBlue, softBlobStyle]} />
      <Animated.View style={[authStyles.bgBlobBottom, bottomBlobStyle]} />
      <Animated.View style={[authStyles.meshBandTop, bandTopStyle]} />
      <Animated.View style={[authStyles.meshBandBottom, bandBottomStyle]} />
      <Animated.View
        style={[
          authStyles.dot,
          authStyles.dotTopRight,
          {
            opacity: sparkleAnim.interpolate({ inputRange: [0, 1], outputRange: [0.4, 1] }),
            transform: [{ scale: sparkleAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.45] }) }],
          },
        ]}
      />
      <Animated.View
        style={[
          authStyles.dot,
          authStyles.dotMiddleLeft,
          {
            opacity: sparkleAnim.interpolate({ inputRange: [0, 1], outputRange: [0.9, 0.35] }),
            transform: [{ scale: sparkleAnim.interpolate({ inputRange: [0, 1], outputRange: [1.35, 1] }) }],
          },
        ]}
      />
      <Animated.View
        style={[
          authStyles.dot,
          authStyles.dotBottomRight,
          {
            opacity: sparkleAnim.interpolate({ inputRange: [0, 1], outputRange: [0.5, 0.95] }),
            transform: [{ scale: sparkleAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 1.3] }) }],
          },
        ]}
      />
      {particleAnims.map((item, idx) => (
        <Animated.Text
          key={`particle-${idx}`}
          style={{
            position: 'absolute',
            bottom: -30,
            left: particleBases[idx].left,
            fontSize: particleBases[idx].size,
            opacity: item.opacity,
            transform: [
              { translateY: item.rise.interpolate({ inputRange: [0, 1], outputRange: [0, -780] }) },
              { translateX: item.sway.interpolate({ inputRange: [0, 1], outputRange: [-10, 10] }) },
            ],
          }}
        >
          {particleBases[idx].emoji}
        </Animated.Text>
      ))}
      <KeyboardAvoidingView
        style={authStyles.flex}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 12 : 0}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={authStyles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <BrandHeader />
          <View style={authStyles.authBody}>{children}</View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
