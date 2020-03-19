import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async searchTerm => {
    console.log('Hi There!');

    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'wichita'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong!! 💥');
    }
  };

  // Call searchApi when componenet
  // is first rendered
  useEffect(() => {
    searchApi('');
  }, []);

  return [searchApi, results, errorMessage];
};
