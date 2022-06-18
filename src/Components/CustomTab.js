import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, View, TouchableOpacity, Animated} from 'react-native';
import styles from './CustomTab.styles';
import {lightBlue, primaryColorButton, secondaryColorButton} from '../Helper';

// eslint-disable-next-line react/require-optimization
export class CustomTab extends Component {
  onFocsedItem = isFocused => {
    if (isFocused) {
      return lightBlue;
    }
    return primaryColorButton;
  };
  textColor = isFocused => {
    if (isFocused) {
      return lightBlue;
    }
    return secondaryColorButton;
  };
  render() {
    const {state, descriptors, navigation} = this.props;
    return (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              style={[
                styles.itemContainer,
                {
                  borderBottomColor: this.onFocsedItem(isFocused),
                },
              ]}
              onPress={onPress}>
              <Animated.Text
                style={[
                  styles.lableText,
                  {
                    color: this.textColor(isFocused),
                  },
                ]}>
                {label}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

CustomTab.propTypes = {
  state: PropTypes.any,
  descriptors: PropTypes.any,
  navigation: PropTypes.object,
};

export default CustomTab;
