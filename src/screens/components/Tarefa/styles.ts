import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#262626',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  eventDescricao: {
    flex: 1,
    maxWidth:'85%',
    fontSize: 16,
    color: '#F2F2F2'
  },
  buttonDelete:{
    width: 50,
    height: 64,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imgLixeira:{
    width: 14,
    height: 14,
  },
  imgCheckBox:{
    width: 24,
    height: 24,
  }
})