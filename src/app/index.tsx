import { FlatList, View } from "react-native";
import { Header, CategoryButton } from "@/components";

import { CATEGORIES } from "@/utils";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState(CATEGORIES[0]);

  const handleCategorySelect = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  return (
    <View className="flex-1 pt-8">
      <Header title="Faça seu pedido" />

      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === category}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        className="max-h-10 mt-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}
