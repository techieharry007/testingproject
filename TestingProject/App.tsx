import React from "react";
import { View } from "react-native";
import BottomStack from "./src/bottomTabs";
import DrawerTabs from "./src/drawerCmp";
function App(): JSX.Element {

  
  return (
   <View style={{flex:1}}>
  <DrawerTabs/>
   </View>
  );
}
export default App