import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text,
  View,
  Pressable,
  FlatList,
  Alert,
  Modal
} from 'react-native';

import Formulario from './src/components/Formulario';
import InformacionPaciente from './src/components/InformacionPaciente';
import Paciente from './src/components/Paciente';

const App = () => {

  const [modalVisible, setModalVisible] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});
  const [modalPaciente, setModalPaciente] = useState(false);

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(pacienteState => pacienteState.id === id);
    setPaciente(pacienteEditar[0]);
  }

  const pacienteEliminar = id => {
    Alert.alert(
      '¿Deseas eliminar este paciente?',
      'Un paciente eliminado no se puede recuperar',
      [{text:'Cancelar'}, {text:'Sí, Eliminar', onPress:() => {
        const pacientesActualizados = pacientes.filter(pacienteState => pacienteState.id !== id);
        setPacientes(pacientesActualizados);
      }}]
    );
  }

  const cerrarModal = () => {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Administrador de Citas {' '}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Pressable
        onPress={() => setModalVisible(true)}
        style={styles.btnNuevaCita}
      >
        <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? 
        <Text style={styles.noPacientes}>No hay pacientes</Text> : 
        <FlatList
          style={styles.listado}
          data={pacientes}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => {
            return (
              <Paciente
                item={item}
                setModalVisible={setModalVisible}
                pacienteEditar={pacienteEditar}
                pacienteEliminar={pacienteEliminar}
                setModalPaciente={setModalPaciente}
                setPaciente={setPaciente}
              />
            );
          }}
        />
      }

      { modalVisible && (
        <Formulario
          cerrarModal={cerrarModal}
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      ) }

      <Modal
        animationType='slide'
        visible={modalPaciente}
      >
        <InformacionPaciente
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
      </Modal>
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
    borderRadius:10,
  },
  btnTextoNuevaCita:{
    textAlign:'center',
    color:'#FFF',
    fontSize:18,
    fontWeight:'900',
    textTransform:'uppercase'
  },
  noPacientes:{
    marginTop:40,
    textAlign:'center',
    fontSize:24,
    fontWeight:'600'
  },
  listado:{
    marginTop:50,
    marginHorizontal:30
  }
});

export default App;
