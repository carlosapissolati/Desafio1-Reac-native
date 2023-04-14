import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    padding: 14
  },
  logoContainer: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: '#FFF',
    padding: 12,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24
  },
  button: {
    width: 52,
    height: 52,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  formList: {
    width: '100%'
  },
  formDados: {
    width: '100%',
    flexDirection: 'row',
    alignContent:"center",
    justifyContent: 'center'
  },
  imgListContainer: {
    marginTop: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  listEmptyText: {
    color: '#808080',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 30
  },
  logo:{
    width : 110.34,
    height: 32
  },
  listEmptyImg:{
    width : 56,
    height: 56
  },
  eventCriado:{
    color: '#4EA8DE',
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "bold",
    marginRight:8
  },
  eventConcluidas:{
    color: '#8284FA',
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "bold",
    marginRight: 8,
    marginLeft: 8
  },
  eventDados:{
    color: '#FFF',
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "bold",
    backgroundColor: "#333333",
    gap:10,
    width:25,
    height:19,
    textAlign: "center",
    borderRadius: 999
  },
  eventTarefas:{
    marginTop:38,
    fontSize:14,
    color: '#FFF',
  },
  eventFlatList:{
    borderTopColor: "#333333",
    borderTopWidth: 1,
    marginTop:20
  }
})