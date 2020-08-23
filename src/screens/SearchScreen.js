import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useReults from '../Hooks/useResults'
import ResultsList from '../components/ResultsList'
const SearchScreen = (props) => {
  const { navigation:{navigate} } = props
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useReults();
  // console.log('results',results)
  const filterResultsByPrice = (price) => {
    return results.filter(result => {
      return result.price === price
    })
  }
  return (
    <View style={{flex:1}}>
      <SearchBar term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)} />
        
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
      <ResultsList
        title="Cost Effective"
        results={filterResultsByPrice('$')}
        navigate={navigate}
      />
      <ResultsList title="Bit Pricer"
        results={filterResultsByPrice('$$')}
        navigate={navigate}

      />
      <ResultsList title="Big Spender"
        results={filterResultsByPrice('$$$')}
        navigate={navigate}

      />
</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default SearchScreen;
