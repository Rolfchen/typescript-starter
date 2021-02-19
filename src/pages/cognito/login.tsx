import { useState } from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { API } from 'aws-amplify';
import MainNavigation from '../../components/MainNavigation';
import { PageContainer } from '../../components/styled/PageContainer';

interface SayMyNameResponse {
  success: string;
  url: string;
}

const Login = () => {
  const [response, setResponse] = useState<SayMyNameResponse | null>(null);
  const fetchSayMyName = async () => {
    try {
      const result = await API.get('sayMyName', '/myname', {});
      setResponse(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <AmplifyAuthenticator>
      <PageContainer>
        <MainNavigation />
        <h1>Cognito Protected</h1>
        <p>
          This page is protected by Cognito. Press the button below to make a
          Lambda request. This request is created by Amazon Amplify
        </p>
        <button type="button" onClick={fetchSayMyName}>
          Fetch my name
        </button>
        {response && (
          <div>
            <pre>{JSON.stringify(response, null, ' ')}</pre>
          </div>
        )}
      </PageContainer>
    </AmplifyAuthenticator>
  );
};

export default Login;
