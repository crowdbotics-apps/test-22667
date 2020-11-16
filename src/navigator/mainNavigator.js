import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps174250Navigator from '../features/Maps174250/navigator';
import UserProfile174246Navigator from '../features/UserProfile174246/navigator';
import CopyOfBlankScreen0174223Navigator from '../features/CopyOfBlankScreen0174223/navigator';
import BlankScreen0174222Navigator from '../features/BlankScreen0174222/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps174250: { screen: Maps174250Navigator },
UserProfile174246: { screen: UserProfile174246Navigator },
CopyOfBlankScreen0174223: { screen: CopyOfBlankScreen0174223Navigator },
BlankScreen0174222: { screen: BlankScreen0174222Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
