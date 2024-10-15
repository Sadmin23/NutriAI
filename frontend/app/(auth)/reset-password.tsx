import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Link, router } from "expo-router";
import { useState } from "react";
import { View, Text, Image, ScrollView, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPassword = () => {
  const isLoaded = false;

  const [form, setForm] = useState({
    email: "",
  });
  const [verification, setVerification] = useState({
    state: "default",
    error: "",
    code: "",
  });

  const onPressVerify = async () => {
    router.push("/(auth)/reset-password-verify");
  };

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white mt-8">
        <View className="">
          <Image
            source={images.resetPassword}
            className="w-72 h-72 ml-8"
          />
          <Text className="text-3xl text-black font-JakartaSemiBold text-center">
            Get Started Now!
          </Text>
          <Text className="text-md text-slate-500 font-JakartaSemiBold text-center">
            reset your password
          </Text>
        </View>
        <View className="px-5 py-4">
          <InputField
            label="Email"
            placeholder="Enter email"
            icon={icons.email}
            textContentType="emailAddress"
            value={form.email}
            onChangeText={(value) => setForm({ ...form, email: value })}
          />

          <CustomButton
            title="Reset Password"
            onPress={onPressVerify}
            className="mt-2"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
