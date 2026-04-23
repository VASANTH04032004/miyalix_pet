import { useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AuthLayout from './AuthLayout';
import authStyles from './authStyles';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const [focusedField, setFocusedField] = useState('');

  const emailError = useMemo(() => {
    if (!email.trim()) return 'Email is required';
    if (!emailRegex.test(email.trim())) return 'Please enter a valid email address';
    return '';
  }, [email]);

  const passwordError = useMemo(() => {
    if (!password) return 'Password is required';
    if (password.length < 8) return 'Password must be at least 8 characters';
    return '';
  }, [password]);

  const formIsValid = !emailError && !passwordError;

  const handleSignIn = async () => {
    setTouched({ email: true, password: true });
    if (!formIsValid || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // TODO(auth): Replace with backend sign-in request.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      // TODO(auth): Guard this route change using real auth success response.
      navigation.replace('Home');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogle = () => {
    // TODO(auth): Integrate Google OAuth sign-in.
    console.log('Google login tapped');
  };

  return (
    <AuthLayout>
      <View style={authStyles.card}>
        <Text style={authStyles.cardTitle}>Login</Text>

        <Text style={authStyles.inputLabel}>Email</Text>
        <View
          style={[
            authStyles.inputRow,
            focusedField === 'email' && authStyles.inputRowFocused,
            touched.email && !!emailError && authStyles.inputRowError,
          ]}
        >
          <Text style={authStyles.leftIcon}>✉</Text>
          <TextInput
            style={authStyles.textInput}
            placeholder="you@example.com"
            placeholderTextColor="#8F8AA9"
            selectionColor="#8B5CF6"
            cursorColor="#8B5CF6"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            onFocus={() => setFocusedField('email')}
            onBlur={() => {
              setFocusedField('');
              setTouched((prev) => ({ ...prev, email: true }));
            }}
          />
        </View>
        {touched.email && !!emailError ? <Text style={authStyles.errorText}>{emailError}</Text> : null}

        <View style={authStyles.passwordHeaderRow}>
          <Text style={authStyles.inputLabel}>Password</Text>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={authStyles.linkOrange}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            authStyles.inputRow,
            focusedField === 'password' && authStyles.inputRowFocused,
            touched.password && !!passwordError && authStyles.inputRowError,
          ]}
        >
          <Text style={authStyles.leftIcon}>🔒</Text>
          <TextInput
            style={authStyles.textInput}
            placeholder="Enter your password"
            placeholderTextColor="#8F8AA9"
            selectionColor="#8B5CF6"
            cursorColor="#8B5CF6"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
            onFocus={() => setFocusedField('password')}
            onBlur={() => {
              setFocusedField('');
              setTouched((prev) => ({ ...prev, password: true }));
            }}
          />
          <Pressable onPress={() => setShowPassword((prev) => !prev)}>
            <Text style={authStyles.eyeIcon}>{showPassword ? '🙈' : '👁'}</Text>
          </Pressable>
        </View>
        {touched.password && !!passwordError ? <Text style={authStyles.errorText}>{passwordError}</Text> : null}

        <TouchableOpacity
          style={[authStyles.primaryButton, (!formIsValid || isSubmitting) && authStyles.primaryButtonDisabled]}
          onPress={handleSignIn}
          disabled={!formIsValid || isSubmitting}
          activeOpacity={0.9}
        >
          {isSubmitting ? (
            <ActivityIndicator color="#FFFFFF" size="small" />
          ) : (
            <Text style={authStyles.primaryButtonText}>Login</Text>
          )}
        </TouchableOpacity>

        <View style={authStyles.dividerRow}>
          <View style={authStyles.divider} />
          <Text style={authStyles.dividerText}>or continue with</Text>
          <View style={authStyles.divider} />
        </View>

        <TouchableOpacity style={authStyles.googleButton} onPress={handleGoogle} activeOpacity={0.9}>
          <Text style={authStyles.googleG}>G</Text>
          <Text style={authStyles.googleLabel}>Google</Text>
        </TouchableOpacity>
        {/* TODO(auth): Add Apple and Facebook buttons beside Google. */}
      </View>

      <View style={authStyles.footerRow}>
        <Text style={authStyles.footerText}>Don&apos;t have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={authStyles.footerLink}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
}
