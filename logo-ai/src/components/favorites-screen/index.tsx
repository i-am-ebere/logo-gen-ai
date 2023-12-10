import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { styles, textStyles } from "../../styles";
import React from "react";
import { useFavoriteLogo } from "../../hooks/use-favorite-logo";

export function FavoritesScreen() {
  const { getSaveLogos, logos, deleteLogoFile } = useFavoriteLogo();
  React.useEffect(() => {
    (async () => {
      await getSaveLogos();
    })();
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={textStyles.header}>Favorite Logos </Text>
      <FlatList
        ListEmptyComponent={<Text>You dont have any favorite logos yet</Text>}
        data={logos}
        numColumns={2}
        style={{ flex: 1 }}
        contentContainerStyle={{
          justifyContent: "space-between",
          gap: 5,
          marginBottom: 5,
        }}
        renderItem={({ item }) => (
          <View style={styles.logoContainer} testID={"logos"}>
            <Image
              resizeMode={"cover"}
              style={styles.logos}
              source={{ uri: item }}
            />
            <TouchableOpacity
              style={styles.floatingSaveButton}
              onPress={() => deleteLogoFile(item)}
            >
              <View style={styles.floatingDelButton}>
                <Text style={{ color: "white" }}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
