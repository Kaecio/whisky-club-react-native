import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import CWModal from "../../components/CWModal/CWModal";

export default function BottleForm({route, navigation}: any) {
  const [showModal, setShowModal] = useState(false)
  console.log("naviation: ", navigation)
  console.warn("BottleForm");

  function handleShowModalProps() {
    console.log("Entrou na função")
    return {
      onConfirm: () =>{ 
        navigation.navigate("LabelBottle")
        setShowModal(false)
      },
      onCancel: () => setShowModal(false),
    };
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Nome do Proprietario da garrafa</Text>
        <TextInput style={styles.input} placeholder=" ex: Kaka" />
      </View>
      <View style={styles.form}>
        <Text>Código da garrafa</Text>
        <TextInput style={styles.input} placeholder="ex: AB-0000" />
      </View>
      <View style={styles.form}>
        <Text>Garrafa</Text>
        <TextInput style={styles.input} placeholder="Marca" />
      </View>
      <View style={styles.form}>
        <Text>Senha / data de nasc</Text>
        <TextInput style={styles.input} placeholder="ex: dd/mm/yy" keyboardType="decimal-pad" />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={()=>{ setShowModal(true)}}>
          <Text style={styles.text}>Salvar</Text>
        </Pressable>
      </View>
          {showModal && <CWModal openModal={showModal}  {...handleShowModalProps()}/>}
    </View>
  );
}
 