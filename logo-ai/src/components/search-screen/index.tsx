import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { colors, styles, textStyles } from "../../styles";
import { useGenerateLogoMutation } from "../../hooks/use-generate-logo";
import { useFavoriteLogo } from "../../hooks/use-favorite-logo";
import { AlertBox } from "../alert-box";

export function SearchScreen() {
  const generateLogoMutation = useGenerateLogoMutation();
  const favoriteLogoController = useFavoriteLogo();
  const [searchText, setSearchText] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    { label: "Technology", value: "technology" },
    { label: "Healthcare", value: "healthcare" },
    { label: "Finance", value: "finance" },
    { label: "Others", value: "other" },
  ]);

  function generateLogo() {
    generateLogoMutation.reset();
    generateLogoMutation.mutate({
      companyName: searchText,
      companySector: value || "other",
    });
    setSearchText("");
    setValue(null);
  }
  const isSearchInvalid = searchText.trim().length === 0 || value === null;

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Text style={textStyles.header}>
            Let our AI generate 3 logos for your business.
          </Text>
          <Text style={[textStyles.base, textStyles.bold, styles.marginB10]}>
            Generated images are only valid for a short time, press save to save
            to device.
          </Text>
          <View style={styles.marginB10}>
            <Text style={[textStyles.base, textStyles.bold]}>
              Company sector{" "}
            </Text>
            <DropDownPicker
              onPress={Keyboard.dismiss}
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
            />
          </View>
          <View style={styles.marginB10}>
            <Text style={[textStyles.base, textStyles.bold]}>
              Company name{" "}
            </Text>
            <TextInput
              style={[styles.textInput]}
              value={searchText}
              onChangeText={(txt) => setSearchText(txt)}
              placeholder={"Example: Seattle Shades"}
            />
          </View>
          <TouchableOpacity
            onPress={generateLogo}
            style={[
              isSearchInvalid ? styles.disabledButton : styles.button,
              styles.marginB10,
            ]}
            disabled={isSearchInvalid}
          >
            <Text
              style={[
                {
                  color: colors.white,
                },
                styles.textCenter,
              ]}
            >
              Generate
            </Text>
          </TouchableOpacity>
          {generateLogoMutation.isPending && (
            <View style={styles.row}>
              <ActivityIndicator />
              <Text>Generating logos...</Text>
            </View>
          )}
          {generateLogoMutation.error?.response?.data.message && (
            <AlertBox
              message={generateLogoMutation.error?.response?.data.message}
              variant={"error"}
            />
          )}
          {favoriteLogoController.message.length > 0 && (
            <AlertBox
              message={favoriteLogoController.message}
              variant={"success"}
            />
          )}
        </>
      }
      contentContainerStyle={{
        flexGrow: 1,
      }}
      style={styles.screen}
      data={generateLogoMutation.data || []}
      horizontal={false}
      numColumns={2}
      key={2}
      columnWrapperStyle={{
        justifyContent: "space-between",
        gap: 5,
        marginBottom: 5,
      }}
      renderItem={({ item }) => (
        <View style={styles.logoContainer} testID={"logos"}>
          <Image
            resizeMode={"cover"}
            style={styles.logos}
            source={{ uri: item.url }}
          />
          <TouchableOpacity
            style={styles.floatingSaveButton}
            onPress={() => favoriteLogoController.saveLogoFile(item.url)}
          >
            <View
              style={{
                backgroundColor: colors.darkGreen,
                borderRadius: 5,
                paddingVertical: 5,
                paddingHorizontal: 20,
              }}
            >
              <Text style={textStyles.textWhite}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    />
  );
}
