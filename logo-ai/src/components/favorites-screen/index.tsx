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
        renderItem={({ item }) => (
          <View style={{ borderRadius: 12 }} testID={"logos"}>
            <Image
              resizeMode={"cover"}
              style={styles.logos}
              source={{ uri: item }}
            />
            <TouchableOpacity
              style={styles.floatingSaveButton}
              onPress={() => deleteLogoFile(item)}
            >
              <View
                style={{
                  backgroundColor: "red",
                  borderRadius: 5,
                  paddingVertical: 5,
                  paddingHorizontal: 10,
                }}
              >
                <Text style={{ color: "white" }}>X</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
