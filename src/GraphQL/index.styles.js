import {StyleSheet} from 'react-native';
import {primaryColorButton, secondaryColorButton, w, width} from '../Helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColorButton,
  },
  headerContainer: {
    width: w,
    backgroundColor: primaryColorButton,
    marginVertical: width / 30,
    marginLeft: width / 30,
    // paddingBottom: width / 50,
  },
  headerRow: {
    flexDirection: 'row',
    width: w / 1.1,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: width / 30,
    justifyContent: 'space-between',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIconContainer: {
    padding: 2,
    marginRight: width / 20,
  },
  notificationIcon: {
    width: width / 13,
    height: width / 13,
  },
  registerButton: {
    // width: w / 3.2,
    padding: width / 100,
    backgroundColor: primaryColorButton,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: width / 35,
  },
  registerBtnText: {
    fontSize: width / 32,
    color: secondaryColorButton,
    width: w / 3.5,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  profileIcon: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  tabBarStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#000',
    width: width / 1,
  },
  tabaBarLabel: {
    fontSize: width / 26,
    color: secondaryColorButton,
  },

  tabbarIndicator: {
    backgroundColor: '#000',
    // backgroundColor: 'red',
  },
});

export default styles;
