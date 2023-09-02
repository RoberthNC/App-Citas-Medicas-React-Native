import React from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  Pressable
} from 'react-native';

const App = () => {

  const nuevaCitaHandler = () => {
    console.log('Diste click');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={nuevaCitaHandler}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#F3F4F6',
    flex:1
  },
  titulo:{
    textAlign:'center',
    fontSize:30,
    color:'#374151',
    fontWeight:'600'
  },
  tituloBold:{
    fontWeight:'900',
    color:"#6D289D",
  },
  btnNuevaCita:{
    backgroundColor:'#6D28D9',
    padding:15,
    marginTop:20,
    marginHorizontal:20,
    borderRadius:10
  },
  btnTextoNuevaCita:{
    textAlign:'center',
    color:'#FFF',
    fontSize:18,
    fontWeight:'900',
    textTransform:'uppercase'
  }
});

export default App;
