import { Text, TouchableOpacity, View , Image} from "react-native";

import { styles } from "./styles";

type Props = {
  descricao: string;
  onRemove: () => void;
  onCheckBox: () => void;
}

export function Participant({ descricao, onRemove , onCheckBox}: Props){
  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.buttonDelete} onPress={onCheckBox}>
          
          <Image style={styles.imgCheckBox}
                source={require("../../../../assets/check.png")}
          />
        
      </TouchableOpacity>


      <Text style={styles.eventDescricao}>
        {descricao}
      </Text>

      <TouchableOpacity style={styles.buttonDelete} onPress={onRemove}>
     
            <Image style={styles.imgLixeira}
                  source={require("../../../../assets/lixeira.png")}
            />
          
      </TouchableOpacity>
    </View>
  )
}