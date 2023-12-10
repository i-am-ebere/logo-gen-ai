import { View, Text } from "react-native";
import { styles, textStyles } from "../../styles";

interface IAlertBoxProps {
  message?: string;
  variant: "success" | "error";
}

export function AlertBox(props: IAlertBoxProps) {
  const isSuccess = props.variant === "success";
  return (
    <View
      style={[
        styles.alertBox,
        styles.marginB10,
        isSuccess ? styles.alertBoxSuccess : styles.alertBoxError,
      ]}
    >
      <Text
        style={[
          styles.textCenter,
          isSuccess ? textStyles.textDarkGreen : textStyles.textDarkRed,
        ]}
      >
        {props.message}
      </Text>
    </View>
  );
}
