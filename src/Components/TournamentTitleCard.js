import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {cardColor, secondaryColorButton, width} from '../Helper';
import styles from './TournamentTitleCard.styles';
import {Icons} from '../Assets/Images';
const TournamentTitleCard = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <FastImage source={Icons.india} style={{height: 20, width: 20}} />
        <Text style={styles.titileText}>South Africa tour of India,2022</Text>
      </View>
      <FastImage
        source={Icons.rightArrow}
        style={{height: 20, width: 20}}
        tintColor={'#59bc5f'}
      />
    </View>
  );
};

export default TournamentTitleCard;
