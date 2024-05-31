import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from '../../constants'
import FormField from "@/components/FormField";

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]" />

          <Text className="text-white text-2xl font-psemibold mt-3">Sign In</Text>

          <FormField
            title="Email"
            value={form.email}
            handleTextChange={(e:string) => setForm({ ...form, email: e })}
            otherStyle="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleTextChange={(e:string) => setForm({ ...form, password: e })}
            otherStyle="mt-7"
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
