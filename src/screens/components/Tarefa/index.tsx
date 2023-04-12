import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";



export function Participant(name: string) {
  return (
    <View style={styles.container}>
      <Text style={styles.eventDescricao}>
        {name}
      </Text>

    </View>
  )
}