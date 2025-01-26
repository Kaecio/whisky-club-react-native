import { View, Text, Modal, SafeAreaView, Pressable } from "react-native";
import { styles } from "./styles";

export default function CWModal({ openModal, onConfirm, onCancel }: any) {
  console.log("onConfirm", onConfirm);
  console.log("onCancel, ", onCancel);
  console.log("openModal: ", openModal);
  return (
    <Modal transparent visible={openModal}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View>
            <Pressable style={styles.buttonC} onPress={onCancel}>
              <Text style={styles.text}>Cancelar</Text>
            </Pressable>
          </View>
          <View>
            <Pressable style={styles.button} onPress={onConfirm}>
              <Text style={styles.text}>Confirmar</Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}
