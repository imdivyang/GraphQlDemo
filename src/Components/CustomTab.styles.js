import {StyleSheet} from 'react-native';
import {width} from '../Helper';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: width / 50,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: width / 40,
    borderBottomWidth: 3,
    // borderRadius: width / 10,
  },
  lableText: {
    color: 'white',
    fontSize: width / 25,
  },
});

export default styles;
