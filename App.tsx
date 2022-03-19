// import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useFlipper} from '@react-navigation/devtools';
import RNBootSplash from 'react-native-bootsplash';
import {NativeBaseProvider} from 'native-base';
import {PersistGate} from 'redux-persist/integration/react';
import Splash from 'screens/Splash';
import {privateNavigatorRef} from 'utils/navigationService';
import {store, persistor} from 'store';
import {NativeBaseTheme} from 'theme/theme';

const App = () => {
  useFlipper(privateNavigatorRef);
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NativeBaseProvider theme={NativeBaseTheme}>
          <SafeAreaProvider>
            <NavigationContainer
              onReady={() => RNBootSplash.hide({fade: true})}
              ref={privateNavigatorRef}>
              <Splash />
            </NavigationContainer>
          </SafeAreaProvider>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
