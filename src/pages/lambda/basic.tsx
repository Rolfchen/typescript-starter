import MainNavigation from '../../components/MainNavigation';
import fetchLambdaBasic from '../../helpers/fetchLambdaBasic';
import { PageContainer } from '../../components/styled/PageContainer';
import { useState } from 'react';

const Basic = () => {
  const [result, setResult] = useState<string | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const handleClick = () => {
    setIsFetching(true);
    setResult(null);
    fetchLambdaBasic()
      .then((res) => {
        setIsFetching(false);
        if (res?.data) {
          setResult(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsFetching(false);
      });
  };

  return (
    <PageContainer>
      <MainNavigation />
      <h1>Lambda Basic</h1>
      <p>Make a simple request to AWS Lambda</p>
      <button type="button" onClick={handleClick}>
        Click to fetch data
      </button>
      {result && <p>Lambda says: "My name is {result}"</p>}
      {isFetching && <p>Loading from API...</p>}
    </PageContainer>
  );
};

export default Basic;
