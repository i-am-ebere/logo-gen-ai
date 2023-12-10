import React from "react";

import { Text, View, TouchableOpacity } from "react-native";
import { colors } from "../../styles";
export enum SelectedView {
  SEARCH = "search",
  FAVORITES = "favorites",
}

interface IFloatingToggleSwitchProps {
  selected: SelectedView;
  onSwitch: (val: SelectedView) => void;
}

export function FloatingToggleSwitch(props: IFloatingToggleSwitchProps) {
  return (
    <View>
      <View
        style={{
          height: 44,
          width: 215,
          backgroundColor: "white",
          borderRadius: 25,
          borderWidth: 1,
          borderColor: colors.primary,
          flexDirection: "row",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => props.onSwitch(SelectedView.SEARCH)}
          style={{
            flex: 1,

            backgroundColor:
              props.selected === SelectedView.SEARCH
                ? colors.primary
                : colors.white,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color:
                props.selected === SelectedView.SEARCH
                  ? colors.white
                  : colors.primary,
            }}
          >
            Search
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => props.onSwitch(SelectedView.FAVORITES)}
          style={{
            flex: 1,

            backgroundColor:
              props.selected === SelectedView.FAVORITES
                ? colors.primary
                : colors.white,
            borderRadius: 25,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color:
                props.selected === SelectedView.FAVORITES
                  ? colors.white
                  : colors.primary,
            }}
          >
            Favorites
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
