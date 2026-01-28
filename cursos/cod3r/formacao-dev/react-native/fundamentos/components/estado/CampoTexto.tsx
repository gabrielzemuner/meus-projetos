import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

export interface CampoTextoProps extends TextInputProps {
  label?: string;
  erro?: string;
}

// CampoTexto => TextInput
export default function CampoTexto(props: CampoTextoProps) {
  return (
    <View>
      {props.label && <Text>{props.label}</Text>}
      <TextInput {...props} style={styles.input} />
      {props.erro && <Text style={styles.erro}>{props.erro}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  erro: {
    color: "red",
    fontSize: 12,
  },
});
