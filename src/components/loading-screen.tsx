import { ScaleLoader } from 'react-spinners';
import styled from 'styled-components';

const LoadingScreen = () => {
  return (
    <LoaderContainer>
      <ScaleLoader />
    </LoaderContainer>
  );
};

// 스타일 정의
const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export default LoadingScreen;
