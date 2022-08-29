import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { sendCommand, DEVICE_COMMAND_ANDROID } from 'react-native-kaas-sdk';

export default function App() {
  const [result, setResult] = React.useState<string>('-');

  React.useEffect(() => {
    sendCommand(DEVICE_COMMAND_ANDROID.UNLOCK).then(() => setResult('SUCCESS'));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
