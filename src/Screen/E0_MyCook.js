import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const E0_MyCook = () => {
    return (
        <View style={styles.container}>
          <Text>나만의 요리</Text>
        </View>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default E0_MyCook;