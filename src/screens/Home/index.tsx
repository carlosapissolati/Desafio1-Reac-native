import { useState } from "react";
import { Alert, FlatList, Text, TextInput, TouchableOpacity, View, Image } from "react-native";

import { Participant } from "../components/Tarefa";

import { styles } from "./styles";

export function Home() {
  const [tarefas, setTarefas] = useState<{check: number; descricao: string}[]>([]);
  const [tarefaName, setTarefaName] = useState('');
  
  function handleTarefaAdd() {

    setTarefas(prevState => [...prevState, {check:0, descricao:tarefaName}]);
    setTarefaName('');
  }


  function handleTarefaRemove(descricao: string) {
    
    Alert.alert("Remover", `Remover a tarefa?`, [
      {
        text: 'Sim',
        onPress: () => setTarefas(prevState => prevState.filter(desc => desc.descricao !== descricao))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }


  function handleCheckBox(descricao: string) {
    

  }

  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Image style ={styles.logo}
          source={require("../../../assets/logo.png")}
        />
      </View>

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
        keyExtractor={(item) => item.descricao}
        renderItem={({ item }) => (
          <Participant
           key={item.descricao}
           descricao={item.descricao}
           onRemove={() => handleTarefaRemove(item.descricao)} 
           onCheckBox={() => handleCheckBox(item.descricao)} 
          />

        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={styles.formList}>

             <View style={styles.imgListContainer}>
              <Image style ={styles.listEmptyImg}
                source={require("../../../assets/clipboard.png")}
              />
             </View>

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