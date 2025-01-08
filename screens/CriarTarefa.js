import React, {useState} from "react";
import { Alert, Button, TextInput, View} from "react-native";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { banco } from '../backend/FirebaseConfig';
import { useNavigation } from "@react-navigation/native";

const CriarTarefa = () => {
    const[nome, setNome] = useState('');
    const[descricao, setDescricao] = useState('');

    const navegacao = useNavigation();
    const cadastrar = async () => {
        try{
            await addDoc(collection(banco, 'tarefas'),{
                nome, descricao, 'data_criacao': Timestamp.now()
            });
            alert("Cadastrado com sucesso!");
            navegacao.navigate('Interna');
        } catch(error){
            alert("Erro" + error.message);
        }
    }

    return (
        <View>
            <TextInput placeholder="Nome da Tarefa" value={nome} onChangeText={setNome} />
            <TextInput placeholder="Descrição" value={descricao} onChangeText={setDescricao} />
            <Button title="Cadastrar" onPress={cadastrar} />
        </View>
    );
}

export default CriarTarefa;