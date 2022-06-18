import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './MatchCard.styles';
import FastImage from 'react-native-fast-image';
import {Icons} from '../Assets/Images';
import {secondaryColorButton, width} from '../Helper';
import ProgressBar from 'react-native-progress/Bar';
const MatchCard = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headreContainer}>
        <View style={{}}>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.titleText}>1st T20I</Text>
            <View style={styles.featureContainer}>
              <Text style={styles.featureText}>UPCOMING</Text>
            </View>
          </View>
          <View style={styles.mapPinContainer}>
            <FastImage
              source={Icons.mapsPin}
              style={{height: 20, width: 20}}
              tintColor="red"
            />
            <Text style={styles.locationText}>Delhi</Text>
          </View>
        </View>
        <View style={styles.headerNotiContainer}>
          <FastImage
            source={Icons.bell}
            style={styles.notificationIcon}
            tintColor={secondaryColorButton}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.countyMatchContainer}>
        <View style={styles.firstCountyLable}>
          <FastImage
            source={Icons.india}
            style={styles.flagImg}
            resizeMode="contain"
          />
          <Text style={[styles.countyName, {marginLeft: width / 35}]}>IND</Text>
        </View>
        <View style={styles.matchTypeContainer}>
          <Text style={styles.matchTypeText}>T20</Text>
        </View>
        <View style={styles.secondCountyLable}>
          <Text style={[styles.countyName, {marginRight: width / 35}]}>
            IND
          </Text>
          <FastImage
            source={Icons.india}
            style={styles.flagImg}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.TimeContainer}>
        <Text style={styles.timeText}>09 June, 07:00 PM</Text>
      </View>
      <Text style={styles.winPercentageText}>WIN PERCENTAGE</Text>
      <View style={{marginVertical: width / 35}}>
        <ProgressBar
          progress={0.6}
          width={300}
          color={'#59bc5f'}
          borderWidth={0}
          unfilledColor={secondaryColorButton}
        />
      </View>
      <View style={styles.winPercentageTextCountry}>
        <Text style={styles.winPercentageCountyText}>IND(54%)</Text>
        <Text style={styles.winPercentageCountyText}>SA(46%)</Text>
      </View>
    </View>
  );
};

export default MatchCard;
