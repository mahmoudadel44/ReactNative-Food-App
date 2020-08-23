import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')
    const searchApi = async (serachTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: serachTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
            // console.log('results', response.data.businesses)
        }
        catch (err) {
            setErrorMessage('an eror occured')
        }
    };

    useEffect(() => {
        searchApi('pasta')
    }, []);
    return [searchApi, results, errorMessage]
}