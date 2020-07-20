import AsyncStorage from '@react-native-community/async-storage';

export const getData = async (name: string) => {
  try {
    const value = await AsyncStorage.getItem(name);
    return value;
  } catch (e) {
    console.log('error :>> ', e);
  }
};

export const storeData = (
  name: string,
  value: {
    [key: string]: string;
  },
) => {
  try {
    const jsonValue = JSON.stringify(value);
    AsyncStorage.setItem(name, jsonValue);
  } catch (e) {
    console.log('error :>> ', e);
  }
};
