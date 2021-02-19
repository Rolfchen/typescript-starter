import axios from 'axios';

const fetchLambdaBasic = async () => {
  return axios.get(
    `https://fwhwcxmf2a.execute-api.us-east-2.amazonaws.com/default/rc-cguru-training-func`
  );
};

export default fetchLambdaBasic;
