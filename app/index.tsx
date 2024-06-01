import { Image, ScrollView, Text, View, StatusBar } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../constants'
import CustomButton from "@/components/CustomButton";

import { Redirect, router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full justify-center items-center px-4">

          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[300px]"
            resizeMode="contain"
          />

          <View className="mt-5 relative">
            <Text className="text-3xl text-white text-center font-bold">
              Discover Endless Possibilities with {" "}

              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -right-7 -bottom-1"
              resizeMode="contain"
            />
          </View>

          <Text className="text-center text-[13px] text-gray-100 mt-7 font-pregular">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
          </Text>

          <CustomButton
            title="Continue with Email"
            handlePress={() => router.push('sign-in')}
            containerStyle="w-full mt-7"
          />

        </View>
      </ScrollView>

      <StatusBar
        backgroundColor="#161622"
        barStyle="light-content"
      />
      
    </SafeAreaView>
  );
}
