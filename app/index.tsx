import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Welcome() {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <StatusBar backgroundColor="#161622" style="light" />

      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="size-full items-center justify-center gap-5 px-4">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="h-20 w-32"
          />

          <Image
            source={images.cards}
            resizeMode="contain"
            className="h-80 w-full max-w-96"
          />

          <View className="relative">
            <Text className="text-center text-3xl font-bold text-white">
              Bagikan momen terbaikmu dan ciptakan kenangan indah bersama{" "}
              <Text className="text-secondary-200">Aora</Text>
            </Text>

            <Image
              source={images.path}
              resizeMode="contain"
              className="absolute -bottom-4 right-16 h-4 w-[136px]"
            />
          </View>

          <Text className="font-pregular text-center text-base text-gray-100">
            Ketika kreativitas bertemu inovasi, mulailah perjalanan eksplorasi
            tanpa batas bersama aora.
          </Text>

          <CustomButton
            onPress={() => router.push("/sign-in")}
            title="Daftar Menggunakan Email"
            containerStyle="w-full"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
