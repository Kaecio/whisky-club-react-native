import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    form: {
        padding: 10
    },
    input:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
        marginTop: 10
    },
    button:{
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        width: 200,
    },
    text:{
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    buttonContainer:{
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center"
    }
})