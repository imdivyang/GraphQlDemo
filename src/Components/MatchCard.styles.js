import {StyleSheet} from 'react-native';
import {
  cardColor,
  lightBlue,
  primaryColorButton,
  secondaryColorButton,
  width,
} from '../Helper';

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: cardColor,
    height: width / 1.32,
    marginRight: width / 25,
    marginTop: 10,
    paddingHorizontal: width / 20,
    borderRadius: width / 30,
    paddingVertical: width / 25,
  },
  headreContainer: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  headerNotiContainer: {
    backgroundColor: primaryColorButton,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width / 25,
    borderRadius: width / 30,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: width / 25,
    fontWeight: '600',
  },
  featureContainer: {
    borderColor: lightBlue,
    borderWidth: 1,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 20,
    marginLeft: width / 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  featureText: {
    color: lightBlue,
    fontSize: width / 25,
    fontWeight: '700',
  },
  mapPinContainer: {
    flexDirection: 'row',
    marginTop: width / 50,
    alignItems: 'center',
  },
  locationText: {
    color: secondaryColorButton,
    fontSize: width / 25,
    fontWeight: '600',
    marginLeft: width / 70,
  },
  notificationIcon: {
    height: width / 20,
    width: width / 20,
  },
  countyMatchContainer: {
    backgroundColor: primaryColorButton,
    borderRadius: width / 30,
    marginVertical: width / 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: width / 25,
    paddingTop: width / 45,
    paddingBottom: width / 25,
  },
  firstCountyLable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: width / 15,
  },
  secondCountyLable: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width / 15,
  },
  countyName: {
    color: secondaryColorButton,
    fontWeight: '500',
    fontSize: width / 24,
  },
  flagImg: {
    height: width / 10,
    width: width / 10,
  },
  matchTypeContainer: {
    borderColor: '#59bc5f',
    borderWidth: 1,
    borderRadius: width / 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  matchTypeText: {
    color: '#59bc5f',
    fontWeight: '700',
    fontSize: width / 24,
  },
  TimeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: primaryColorButton,
    paddingVertical: 5,
    borderRadius: width / 50,
  },
  timeText: {
    color: secondaryColorButton,
    fontSize: 15,
    fontWeight: '600',
  },
  winPercentageText: {
    color: secondaryColorButton,
    fontWeight: '600',
    marginTop: width / 25,
  },
  winPercentageTextCountry: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  winPercentageCountyText: {
    color: secondaryColorButton,
    fontWeight: '600',
  },
});

export default styles;
