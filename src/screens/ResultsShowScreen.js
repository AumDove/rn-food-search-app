import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
import Hyperlink from 'react-native-hyperlink';
import ResultsList from '../components/ResultsList';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  console.log(id);
  return (
    <View>
      <Text style={styles.titleStyle}>{result.name}</Text>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return (
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: item }} />
            </View>
          );
        }}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.address}>
          {result.location.address1} {result.location.city},{' '}
          {result.location.state}
        </Text>
        <Text style={styles.phone}>
          Call now: {result.display_phone}
        </Text>
        <Hyperlink linkDefault={true}>
          <Text style={{ fontSize: 15 }}>Website: {result.url}</Text>
        </Hyperlink>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 20
  },
  imageContainer: {
    flex: 1
  },
  image: {
    height: 100,
    width: 110
  },
  infoContainer: {
    marginHorizontal: 15
  },
  address: {
    fontSize: 18,
    marginVertical: 10
  },
  phone: {
    fontSize: 20,
    marginVertical: 20
  }
});

export default ResultsShowScreen;
