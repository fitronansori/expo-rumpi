import { GestureResponderEvent, Text, TouchableOpacity } from "react-native";

type CustomButtonType = {
  onPress: (event: GestureResponderEvent) => void;
  title: string;
  containerStyle?: string;
  textStyle?: string;
  loading?: boolean;
};

const CustomButton = ({
  onPress,
  title,
  containerStyle,
  textStyle,
  loading,
}: CustomButtonType) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      className={`min-h-16 items-center justify-center rounded-xl bg-secondary ${containerStyle} ${loading ? "opacity-90" : ""}`}
      disabled={loading}
    >
      <Text className={`text-lg font-semibold text-primary ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
