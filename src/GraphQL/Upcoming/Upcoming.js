import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Upcoming.styles';
import TournamentTitleCard from '../../Components/TournamentTitleCard';
import MatchCard from '../../Components/MatchCard';
import {gql, useLazyQuery} from '@apollo/client';
import {Matches} from '../../query/AllQuery';
const Upcoming = () => {
  const [MatchesData, setMatchesData] = useState([]);
  const [getMatchesData, {error, data}] = useLazyQuery(Matches);

  useEffect(async () => {
    getMatchesData();
  }, []);
  useEffect(() => {
    if (data) {
      console.log('data', data);
      // setMatchesData(data);
    } else if (error) {
      console.log('Error', error);
    }
  }, [data]);
  return (
    <View style={styles.container}>
      <TournamentTitleCard />
      <FlatList
        horizontal
        data={[1, 33, 3, 2]}
        key={0}
        keyExtractor={(item, index) => {
          item + index.toString();
        }}
        renderItem={({item}) => {
          return <MatchCard />;
        }}
      />
    </View>
  );
};

export default Upcoming;
