import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import styles from './index.styles';
import Upcoming from './Upcoming/Upcoming';
import Live from './Live/Live';
import Result from './Result/Result';
import CustomTab from '../Components/CustomTab';
import {NavigationContainer} from '@react-navigation/native';
import {secondaryColorButton, width} from '../Helper';
const Index = () => {
  const Tab = createMaterialTopTabNavigator();
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text
          style={{
            color: secondaryColorButton,
            fontWeight: 'bold',
            fontSize: width / 15,
          }}>
          Schedule
        </Text>
      </View>
      <NavigationContainer>
        <Tab.Navigator tabBar={props => <CustomTab {...props} />}>
          <Tab.Screen
            name="Upcoming"
            component={Upcoming}
            options={{
              tabBarLabel: 'Upcoming',
            }}
          />
          <Tab.Screen
            name="Live"
            component={Live}
            options={{
              tabBarLabel: 'Live',
            }}
          />
          <Tab.Screen
            name="Result"
            component={Result}
            options={{
              tabBarLabel: 'Result',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Index;
