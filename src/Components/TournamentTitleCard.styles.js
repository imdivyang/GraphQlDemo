import {StyleSheet} from 'react-native';
import {cardColor, secondaryColorButton, width} from '../Helper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: cardColor,
    flexDirection: 'row',
    paddingLeft: width / 35,
    paddingRight: width / 20,
    borderRadius: width / 40,
    paddingVertical: width / 30,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titileText: {
    fontWeight: 'bold',
    color: secondaryColorButton,
    letterSpacing: 1,
    fontSize: width / 25,
    marginLeft: width / 40,
  },
});

export default styles;
