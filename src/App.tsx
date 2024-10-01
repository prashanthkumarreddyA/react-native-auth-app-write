import React from 'react';
import {StatusBar, View} from 'react-native';
import {AppwriteProvider} from './appwrite/AppwriteContext';
import {Router} from './routes/Router';

const App = () => {
  return (
    <AppwriteProvider>
      <View style={{flex: 1}}>
        <StatusBar />
        <Router />
      </View>
    </AppwriteProvider>
  );
};

export default App;
