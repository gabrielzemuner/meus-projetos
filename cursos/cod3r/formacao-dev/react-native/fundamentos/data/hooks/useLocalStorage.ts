import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useLocalStorage() {
  const alterarItem = async (chave: string, valor: any) => {
    await AsyncStorage.setItem(chave, JSON.stringify(valor));
  };

  const obterItem = async (chave: string) => {
    const valor = await AsyncStorage.getItem(chave);
    return valor ? JSON.parse(valor) : null;
  };

  return { alterarItem, obterItem };
}
