import { StyleSheet } from "react-native";

export const colors = {
  primary: "#3078c6",
  white: "#ffffff",
  gray: "#a1a1a1",
  green: "#aeeea6",
  darkGreen: "#355e30",
  red: "#ef6262",
  darkRed: "#651919",
};

export enum FontSize {
  Header = 25,
  Base = 14,
}

export const textStyles = StyleSheet.create({
  header: {
    fontWeight: "bold",
    fontSize: FontSize.Header,
    marginBottom: 10,
  },
  base: {
    fontSize: FontSize.Base,
  },
  bold: {
    fontWeight: "bold",
  },
  textDarkGreen: {
    color: colors.darkGreen,
    fontWeight: "bold",
  },
  textDarkRed: {
    fontWeight: "bold",
    color: colors.darkRed,
  },
  textWhite: {
    color: colors.white,
  },
});

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
  },
  textCenter: {
    textAlign: "center",
  },
  marginB10: {
    marginBottom: 10,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 25,
    marginVertical: 20,
    paddingBottom: 25,
  },
  itemsCenter: {
    alignItems: "center",
  },
  button: {
    marginTop: 10,
    backgroundColor: colors.primary,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },
  disabledButton: {
    marginTop: 10,
    backgroundColor: colors.gray,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
  },
  textInput: {
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  alertBox: {
    paddingVertical: 6,
    borderRadius: 5,
    borderWidth: 1,
  },
  alertBoxSuccess: {
    backgroundColor: colors.green,
    borderColor: colors.darkGreen,
  },
  alertBoxError: {
    backgroundColor: colors.red,
    borderColor: colors.darkRed,
  },
  logoContainer: {
    flex: 1 / 2,
    borderRadius: 12,
    overflow: "hidden",
    position: "relative",
  },
  logos: {
    width: "100%",
    height: 150,
    borderRadius: 12,
  },
  floatingSaveButton: { position: "absolute", right: 10, top: 10 },
  floatingDelButton: {
    backgroundColor: "red",
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  floatingButtonContainer: {
    position: "absolute",
    width: "100%",
    bottom: 40,
    alignItems: "center",
    marginHorizontal: "auto",
  },
});
