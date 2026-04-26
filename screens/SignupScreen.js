import { useMemo, useState } from 'react';
import { ActivityIndicator, Pressable, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AuthLayout from './AuthLayout';
import authStyles from './authStyles';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SignupScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const firstNameError = useMemo(() => {
    if (!firstName.trim()) return 'First name is required';
    if (firstName.trim().length < 2) return 'Minimum 2 characters';
    return '';
  }, [firstName]);

  const lastNameError = useMemo(() => {
    if (!lastName.trim()) return 'Last name is required';
    if (lastName.trim().length < 2) return 'Minimum 2 characters';
    return '';
  }, [lastName]);

  const phoneError = useMemo(() => {
    const onlyDigits = phone.replace(/\D/g, '');
    if (!onlyDigits) return 'Phone number is required';
    if (onlyDigits.length < 10) return 'Enter a valid phone number';
    return '';
  }, [phone]);

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

  const confirmError = useMemo(() => {
    if (!confirmPassword) return 'Please confirm your password';
    if (confirmPassword !== password) return 'Passwords do not match';
    return '';
  }, [confirmPassword, password]);

  const passwordStrength = useMemo(() => {
    let score = 0;
    if (password.length >= 8) score += 1;
    if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score += 1;
    if (/\d/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    return score;
  }, [password]);

  const passwordStrengthLabel = ['Weak', 'Weak', 'Fair', 'Good', 'Strong'][passwordStrength];

  const formIsValid =
    !firstNameError &&
    !lastNameError &&
    !phoneError &&
    !emailError &&
    !passwordError &&
    !confirmError;

  const handleSignup = async () => {
    setTouched({
      firstName: true,
      lastName: true,
      phone: true,
      email: true,
      password: true,
      confirmPassword: true,
    });
    if (!formIsValid || isSubmitting) return;

    setIsSubmitting(true);
    try {
      // TODO(auth): Replace with backend signup API request.
      await new Promise((resolve) => setTimeout(resolve, 1200));
      navigation.navigate('Login');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <View style={authStyles.card}>
        <View style={authStyles.stepDotsRow}>
          <View style={[authStyles.stepDot, authStyles.stepDotActive]} />
          <View style={authStyles.stepDot} />
          <View style={authStyles.stepDot} />
        </View>
        <Text style={authStyles.cardTitle}>Create Account</Text>

        <Text style={authStyles.inputLabel}>Full Name</Text>
        <View style={authStyles.row}>
          <View style={authStyles.half}>
            <View
              style={[
                authStyles.inputRow,
                focusedField === 'firstName' && authStyles.inputRowFocused,
                touched.firstName && !!firstNameError && authStyles.inputRowError,
              ]}
            >
              <Text style={authStyles.leftIcon}>🐶</Text>
              <TextInput
                style={authStyles.textInput}
                placeholder="First name"
                placeholderTextColor="#8F8AA9"
                selectionColor="#8B5CF6"
                cursorColor="#8B5CF6"
                value={firstName}
                onChangeText={setFirstName}
                onFocus={() => setFocusedField('firstName')}
                onBlur={() => {
                  setFocusedField('');
                  setTouched((prev) => ({ ...prev, firstName: true }));
                }}
              />
            </View>
            {touched.firstName && !!firstNameError ? <Text style={authStyles.errorText}>{firstNameError}</Text> : null}
          </View>
          <View style={authStyles.half}>
            <View
              style={[
                authStyles.inputRow,
                focusedField === 'lastName' && authStyles.inputRowFocused,
                touched.lastName && !!lastNameError && authStyles.inputRowError,
              ]}
            >
              <Text style={authStyles.leftIcon}>🐾</Text>
              <TextInput
                style={authStyles.textInput}
                placeholder="Last name"
                placeholderTextColor="#8F8AA9"
                selectionColor="#8B5CF6"
                cursorColor="#8B5CF6"
                value={lastName}
                onChangeText={setLastName}
                onFocus={() => setFocusedField('lastName')}
                onBlur={() => {
                  setFocusedField('');
                  setTouched((prev) => ({ ...prev, lastName: true }));
                }}
              />
            </View>
            {touched.lastName && !!lastNameError ? <Text style={authStyles.errorText}>{lastNameError}</Text> : null}
          </View>
        </View>

        <Text style={authStyles.inputLabel}>Phone</Text>
        <View
          style={[
            authStyles.inputRow,
            focusedField === 'phone' && authStyles.inputRowFocused,
            touched.phone && !!phoneError && authStyles.inputRowError,
          ]}
        >
          <Text style={authStyles.leftIcon}>📱</Text>
          <TextInput
            style={authStyles.textInput}
            placeholder="+91 98765 43210"
            placeholderTextColor="#8F8AA9"
            selectionColor="#8B5CF6"
            cursorColor="#8B5CF6"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            onFocus={() => setFocusedField('phone')}
            onBlur={() => {
              setFocusedField('');
              setTouched((prev) => ({ ...prev, phone: true }));
            }}
          />
        </View>
        {touched.phone && !!phoneError ? <Text style={authStyles.errorText}>{phoneError}</Text> : null}

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

        <Text style={authStyles.inputLabel}>Password</Text>
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
            placeholder="Minimum 8 characters"
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
        <View style={authStyles.strengthRow}>
          <View style={[authStyles.strengthBar, passwordStrength >= 1 && authStyles.strengthWeak]} />
          <View style={[authStyles.strengthBar, passwordStrength >= 2 && authStyles.strengthFair]} />
          <View style={[authStyles.strengthBar, passwordStrength >= 3 && authStyles.strengthGood]} />
          <View style={[authStyles.strengthBar, passwordStrength >= 4 && authStyles.strengthStrong]} />
        </View>
        <Text style={authStyles.strengthText}>Password strength: {passwordStrengthLabel}</Text>

        <Text style={authStyles.inputLabel}>Confirm Password</Text>
        <View
          style={[
            authStyles.inputRow,
            focusedField === 'confirmPassword' && authStyles.inputRowFocused,
            touched.confirmPassword && !!confirmError && authStyles.inputRowError,
          ]}
        >
          <Text style={authStyles.leftIcon}>🔒</Text>
          <TextInput
            style={authStyles.textInput}
            placeholder="Re-enter password"
            placeholderTextColor="#8F8AA9"
            selectionColor="#8B5CF6"
            cursorColor="#8B5CF6"
            secureTextEntry={!showConfirmPassword}
            autoCapitalize="none"
            autoCorrect={false}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            onFocus={() => setFocusedField('confirmPassword')}
            onBlur={() => {
              setFocusedField('');
              setTouched((prev) => ({ ...prev, confirmPassword: true }));
            }}
          />
          <Pressable onPress={() => setShowConfirmPassword((prev) => !prev)}>
            <Text style={authStyles.eyeIcon}>{showConfirmPassword ? '🙈' : '👁'}</Text>
          </Pressable>
        </View>
        {touched.confirmPassword && !!confirmError ? <Text style={authStyles.errorText}>{confirmError}</Text> : null}

        <TouchableOpacity
          style={[authStyles.primaryButton, (!formIsValid || isSubmitting) && authStyles.primaryButtonDisabled]}
          onPress={handleSignup}
          disabled={!formIsValid || isSubmitting}
          activeOpacity={0.9}
        >
          {isSubmitting ? (
            <ActivityIndicator color="#FFFFFF" size="small" />
          ) : (
            <Text style={authStyles.primaryButtonText}>Create Account</Text>
          )}
        </TouchableOpacity>
      </View>

      <View style={authStyles.footerRow}>
        <Text style={authStyles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={authStyles.footerLink}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
}
