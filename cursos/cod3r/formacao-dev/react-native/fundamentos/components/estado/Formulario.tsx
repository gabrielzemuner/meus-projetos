// Aula 1
// import { useState } from "react";
// import { Text, TextInput, View } from "react-native";

// export default function Formulario() {
//   const [nome, setNome] = useState("");

//   return (
//     <View>
//       <TextInput
//         placeholder="Digite seu nome"
//         value={nome}
//         onChangeText={setNome}
//         style={{
//           borderColor: "gray",
//           borderWidth: 1,
//           paddingHorizontal: 10,
//           paddingVertical: 5,
//           borderRadius: 5,
//         }}
//       />
//       <Text>Nome: {nome}</Text>
//     </View>
//   );
// }

// Aula 2
// import { useState } from "react";
// import { View } from "react-native";
// import CampoTexto from "./CampoTexto";

// export default function Formulario() {
//   const [nome, setNome] = useState("");

//   return (
//     <View>
//       <CampoTexto
//         label="Nome"
//         placeholder="Digite seu nome"
//         value={nome}
//         onChangeText={setNome}
//         erro="O nome precisa ser preenchido"
//         // secureTextEntry={true} // password
//       />
//     </View>
//   );
// }

// Aula 3
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CampoTexto from "./CampoTexto";
import Usuario from "@/data/model/Usuario";

export default function Formulario() {
  const [erro, setErro] = useState<any>({});
  const [usuario, setUsuario] = useState<Partial<Usuario>>({});

  function camposValidos(): boolean {
    const erro: any = {};

    if (!usuario.nome) {
      erro.nome = "Nome é obrigatório";
    }

    if (!usuario.email) {
      erro.email = "Email é obrigatório";
    }

    if (usuario.email && !usuario.email.includes("@")) {
      erro.email = "E-mail inválido";
    }

    if (!usuario.senha) {
      erro.senha = "Senha é obrigatória";
    }

    if (usuario.senha && usuario.senha.length < 6) {
      erro.senha = "Senha deve ter pelo menos 6 caracteres";
    }

    setErro(erro);
    return Object.keys(erro).length === 0;
  }

  function cadastrar() {
    if (!camposValidos()) return;

    setUsuario({});
    alert("Cadastrado com sucesso!");
  }

  return (
    <View style={styles.container}>
      <CampoTexto
        label="Nome"
        placeholder="Digite seu nome"
        value={usuario.nome ?? ""}
        onChangeText={(nome) => setUsuario({ ...usuario, nome })}
        erro={erro.nome}
      />
      <CampoTexto
        label="Email"
        placeholder="Digite seu email"
        keyboardType="email-address"
        value={usuario.email ?? ""}
        onChangeText={(email) => setUsuario({ ...usuario, email })}
        erro={erro.email}
      />
      <CampoTexto
        label="Senha"
        placeholder="Digite sua senha"
        secureTextEntry={true}
        value={usuario.senha ?? ""}
        onChangeText={(senha) => setUsuario({ ...usuario, senha })}
        erro={erro.senha}
      />
      <Pressable style={styles.botao} onPress={cadastrar}>
        <Text style={styles.botaoTexto}>Cadastrar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  botao: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  botaoTexto: {
    color: "white",
  },
});
