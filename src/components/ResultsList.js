import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetails from '../components/ResultsDetails'
const ResultsList = ({ title, results, navigate }) => {
    // if(! results.length){
    //     return null;
    // }
    return (
        <View style={styles.containerStyle}>
         {results.length>0?<Text style={styles.title}>{title}</Text>:null}
            <FlatList
                style={styles.flatListStyle}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={results}
                keyExtractor={result => result.id}
                renderItem={({ item }) => {
                    return <TouchableOpacity
                        onPress={() => {
                            navigate('ResultsShow', { id: item.id })
                            // console.log('id', item.id)
                        }
                        }
                    >
                        <ResultsDetails result={item} />

                    </TouchableOpacity>
                }}

            />
        </View>
    )
}
const styles = StyleSheet.create({
    containerStyle: {
        marginBottom: 10
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5

    },
});

export default ResultsList
