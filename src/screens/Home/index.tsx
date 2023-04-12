import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View, Image } from "react-native";

import { Participant } from "../components/Tarefa";

import { styles } from "./styles";

export function Home() {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [tarefaName, setTarefaName] = useState('');
  
  function handleTarefaAdd() {

    setTarefas(prevState => [...prevState, tarefaName]);
    setTarefaName('');
  }

  return (
    <View style={styles.container}>


        <Image style ={styles.logo}
          source={require("../../../assets/logo.png")}
        />


      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#808080"
          onChangeText={setTarefaName}
          value={tarefaName}
        />
        
        <TouchableOpacity style={styles.button} onPress={handleTarefaAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.formDados}>
        <Text style={styles.eventCriado}>
              Criadas
        </Text>
        <Text style={styles.eventDados}>
              0
        </Text>


        <Text style={styles.eventConcluidas}>
              Concluidas
        </Text>
        <Text style={styles.eventDados}>
              0
        </Text>

      </View>



      <FlatList style={styles.eventFlatList}
        data={tarefas}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          Participant(item)

        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View>
            <Image style ={styles.listEmptyImg}
            source={require("../../../assets/clipboard.png")}
            />
            <Text style={styles.listEmptyText}>
              Você ainda não tem tarefas cadastradas {"\n"}
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />
      
    </View>
  )
}