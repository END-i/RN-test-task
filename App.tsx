import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';

export default function () {
  const str: string = 'some text';
  return (
    <>
      <StatusBar />
      <SafeAreaView>
        <View>
          <Text>{str}</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
