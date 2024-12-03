import { images } from "@/constants";
import { Image, Text, View } from "react-native";
const Logo = () => {
  return (
    <View className="relative">
      <Text className="text-5xl font-bold text-secondary">Rumpi</Text>
      <Image
        source={images.path}
        resizeMode="contain"
        className="absolute -bottom-6 h-6 w-[136px]"
      />
    </View>
  );
};
export default Logo;
