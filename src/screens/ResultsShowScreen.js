import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    // console.log('result', result);

    const getResult = async id => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };
    useEffect(() => {
        getResult(id);
    }, [id]);
    if (!result) {
        return null;
    }
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.nameStyle}>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }}
                        style={styles.imageStyle} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
justifyContent:'space-around',
alignItems:'center'
    },
    nameStyle:{
fontSize:18,
marginTop:5,
fontWeight:'bold',
color:'gray'
    },
    imageStyle: {
        width: 220,
        height: 120,
        borderRadius:4,
        marginVertical:10
    }
});

export default ResultsShowScreen;
