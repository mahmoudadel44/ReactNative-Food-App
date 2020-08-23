import React from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const ResultsDetails = ({ result }) => {
    return (

        <View style={styles.containerStyle}>
            <Image source={{ uri: result.image_url }}
                style={styles.imagesStyle}
            />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text style={styles.rateAndReviewStyle}>{result.rating} Stars, {result.review_count} Reviews</Text>

        </View>

    )
}
const styles = StyleSheet.create({
    containerStyle: {
        marginLeft:15
    },
    imagesStyle: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    nameStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    rateAndReviewStyle:{
        color:'gray'
    }
})

export default ResultsDetails
