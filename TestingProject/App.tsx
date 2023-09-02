import React from "react";
import { View } from "react-native";
import DrawerTabs from "./src/drawerCmp";
import AuthModule from "./src/authscreen";
import { Provider } from 'react-redux';
import store from "./src/store";
import RootNavigation from "./src/navigation/rootNavigation";
function App(): JSX.Element {
  return (
   <View style={{flex:1}}>
    <Provider store={store}>
  <RootNavigation/>   
    </Provider>
  </View>
  );
}
export default App