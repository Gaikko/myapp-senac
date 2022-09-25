import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <Text style={styles.info}>Entre com a sua conta</Text>
        <Text style={styles.cpf}>CPF</Text>
        <View style={styles.vw_cpf}>
          <TextInput
            maxLength={11}
            placeholder="Digite seu CPF"
            placeholderTextColor={'gray'}
            style={styles.ph_cpf}
          />
        </View>
        <Text style={styles.senha}>Senha</Text>
        <View style={styles.vw_senha}>
          <TextInput
            maxLength={10}
            textContentType="password"
            placeholder="Digite sua Senha"
            placeholderTextColor={'gray'}
            style={styles.ph_senha}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.icon}>
            <Ionicons name="eye" color="white" size="25"></Ionicons>
          </TouchableOpacity>
        </View>
        <View style={styles.vw_btn_acessar}>
          <TouchableOpacity style={styles.btn_acessar}>
            <Text style={styles.txt_btn_acessar}>Entrar no clube</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.esqueceuSuaSenhaRow}>
          <Text style={styles.esqueceuSuaSenha}>Esqueçeu sua senha?</Text>
          <Text style={styles.cliqueAqui}>Clique aqui.</Text>
        </View>
        <View style={styles.vw_rodape}>
          <Text style={styles.rodape}>Ao se inscrever, você concorda com nossa Política de Privacidade e Termos de Uso</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rect: {
    flex: 1,
    backgroundColor: "rgba(6,6,6,1)",
    borderTopStartRadius: 15,
    borderTopEndRadius: 15
  },
  info: {
    color: "white",
    textAlign: "center"
  },
  vw_cpf: {
    flexDirection: "row",
    justifyContent: "center"
  },
  cpf: {
    color: "white",
    textAlign: "center"
  },
  ph_cpf: {
    keyboardType: 'numeric',
    color: "black",
    textAlign: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  vw_senha: {
    flexDirection: "row",
    justifyContent: "center"
  },
  senha: {
    color: "white",
    textAlign: "center"
  },
  ph_senha: {
    color: "black",
    textAlign: "center",
    borderColor: "white",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white"
  },
  icon: {
    backgroundColor: "black",
    justifyContent: "space-around"
  },
  vw_btn_acessar: {
    alignItems: "center"
  },
  btn_acessar: {
    backgroundColor: "rgba(139,87,42,1)",
    borderRadius: 15,
    width: '25%'
  },
  txt_btn_acessar: {
    color: 'white',
    textAlign: "center",
    fontWeight: "bold"
  },
  esqueceuSuaSenha: {
    color: "rgba(255,255,255,1)"
  },
  cliqueAqui: {
    color: "rgba(139,87,42,1)",
    marginLeft: 4,
    fontWeight: "bold"
  },
  esqueceuSuaSenhaRow: {
    flexDirection: "row",
    textAlign: "center",
    justifyContent: "center"
  },
  vw_rodape: {
    alignItems: "center"
  },
  rodape: {
    width: '70%',
    flexWrap: "wrap",
    color: "white",
    marginLeft: '5%',
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 25
  }
});

export default Login;
