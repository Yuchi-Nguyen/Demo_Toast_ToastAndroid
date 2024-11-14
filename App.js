import React from 'react';

import {
  SafeAreaView,
  View,
  Text,
  ToastAndroid,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

const App = () => {
  const toastWithDurationHandler = () => {
    ToastAndroid.show(
      'Hi I am Simple Toast', ToastAndroid.SHORT
    );
  };

  const toastWithDurationGravityHandler = () => {
    ToastAndroid.showWithGravity(
      'Hi I am Toast with center gravity',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const toastWithDurationGravityOffsetHandler = () => {

    ToastAndroid.showWithGravityAndOffset(
      'Hi I am Toast with garavity and offset',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM, 25, 500,
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native Toast - Toast Alert for Android
        </Text>
        {/*To generate Toast With Duration*/}
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={toastWithDurationHandler}>
          <Text style={styles.buttonTextStyle}>
            Generate Toast With Duration
          </Text>
        </TouchableHighlight>

        {/*To generate Toast With Duration And Gravity*/}
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={toastWithDurationGravityHandler}>
          <Text style={styles.buttonTextStyle}>
            Generate Toast With Duration AND Gravity
          </Text>
        </TouchableHighlight>

        {/*To generate Toast With Duration, Gravity And Offset*/}
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={toastWithDurationGravityOffsetHandler}>
          <Text style={styles.buttonTextStyle}>
            Generate Toast With Duration, Gravity And Offset
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#307ecc',
    padding: 16,
  },
  buttonStyle: {
    minWidth: '100%',
    padding: 10,
    backgroundColor: '#f5821f',
    margin: 15,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});