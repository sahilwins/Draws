import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './src/Routes/BottomTab';
import Drawers from './src/Screen/Drawerscreen/Drawers';
// import Drawers from './src/Screen/SettingsScreen/Drawerscreen/Drawer';


export default function App() {
  return (
    <NavigationContainer>
      {/* <BottomTab /> */}
      <Drawers />
    </NavigationContainer>
  );
}
