import {StyleSheet} from 'react-native';
import {primaryColorButton, secondaryColorButton, width} from '../../Helper';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: primaryColorButton,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: secondaryColorButton,
    fontSize: width / 20,
  },
});
export default styles;
