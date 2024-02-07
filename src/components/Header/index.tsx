import { Image, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { HeaderProps } from "./models";
import colors from "tailwindcss/colors";

export const Header = ({ title, cardQuantityItems = 0 }: HeaderProps) => {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-5 mx-5">
      <View className="flex-1">
        <Image source={require("@/assets/logo.png")} className="w-32 h-6" />

        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>

      {cardQuantityItems > 0 ? (
        <TouchableOpacity className="relative" activeOpacity={0.7}>
          <View className="bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5">
            <Text className="text-slate-900 font-bold text-xs">
              {cardQuantityItems}
            </Text>
          </View>

          <Feather name="shopping-bag" size={24} color={colors.white} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
