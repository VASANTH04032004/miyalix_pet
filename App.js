import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import Home from './screens/Home';
import Create from './screens/Create';
import CategoryDetail from './screens/CategoryDetail';
import { COLORS } from './constants/theme';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.appWrapper}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/category/:id" element={<CategoryDetail />} />
        </Routes>
        <StatusBar style="auto" />
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  appWrapper: {
    flex: 1,
    backgroundColor: COLORS.background,
  }
});
