import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveStoreToken(data){
  try {
    console.log(data)
    await AsyncStorage.setItem('@caentrenos-token', data);
    return true;
  } catch (e) {
    return false;
  }
}

async function saveStoreUser(data){
  try {
    await AsyncStorage.setItem('@caentrenos-user', JSON.stringify(data));
    return true;
  } catch (e) {
    return false;
  }
}

async function getStoreUser() {
  try {
    const result = await AsyncStorage.getItem('@caentrenos-user');
    const user = result ? JSON.parse(result) : null;
    return user;
  } catch (e) {
    return null;
  }
}

async function getToken() {
  try {
    return await AsyncStorage.getItem('@caentrenos-token');
  } catch (e) {
    return null;
  }
}

async function clearStoreAuth(){
  try {
    await AsyncStorage.removeItem('@caentrenos-token');
    return true;
  } catch (e) {
    return false;
  }
}

export { clearStoreAuth, getStoreUser, getToken, saveStoreToken, saveStoreUser };