import { Text, TouchableOpacity, View } from 'react-native';
import AuthLayout from './AuthLayout';
import authStyles from './authStyles';

export default function ForgotPasswordScreen({ navigation }) {
  return (
    <AuthLayout>
      <View style={authStyles.card}>
        <Text style={authStyles.cardTitle}>Forgot Password</Text>
        <Text style={authStyles.simpleText}>
          Enter reset flow here when backend is ready.
        </Text>
        <Text style={authStyles.todoNote}>
          TODO(auth): Add email input and reset password API.
        </Text>
        <TouchableOpacity style={authStyles.primaryButton} onPress={() => navigation.goBack()}>
          <Text style={authStyles.primaryButtonText}>Back to Sign In</Text>
        </TouchableOpacity>
      </View>
    </AuthLayout>
  );
}
