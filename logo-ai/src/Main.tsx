import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FloatingToggleSwitch, SelectedView } from "./components/toggle-switch";
import { SearchScreen } from "./components/search-screen";
import { FavoritesScreen } from "./components/favorites-screen";
import { styles } from "./styles";

export function Main() {
  const [activeTab, setActiveTab] = React.useState(SelectedView.SEARCH);

  return (
    <SafeAreaView style={[styles.container]}>
      {activeTab === SelectedView.SEARCH ? (
        <SearchScreen />
      ) : (
        <FavoritesScreen />
      )}
      <View style={styles.floatingButtonContainer}>
        <FloatingToggleSwitch
          selected={activeTab}
          onSwitch={(val) => setActiveTab(val)}
        />
      </View>
    </SafeAreaView>
  );
}
