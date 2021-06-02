import React from 'react';
import Index from './src';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '@src/store';
const App: React.FC<{}> = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
