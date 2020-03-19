import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer DDrVw0tb6dLPx3KyeM-C6M_yUy2qHjlW9iwLeDoVOXjx3zvFwA5SjcuZTLB-XYrY-0BHfAGoItFBpfQS6_UohngU-XI1TloCJ28oQ5Q-__iiCC-ZgCtw8UilJ8xyXnYx'
  }
});
