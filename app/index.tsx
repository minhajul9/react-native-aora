import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-3xl font-pblack">RootLayout</Text>
      <Link href="home">Go to profile</Link>
    </View>
  );
}
