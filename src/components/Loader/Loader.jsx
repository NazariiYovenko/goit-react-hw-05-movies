import { ThreeDots } from 'react-loader-spinner';
import { StyledLoaderContainer } from './Loader.styled';
const Loader = () => {
  return (
    <StyledLoaderContainer>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </StyledLoaderContainer>
  );
};
export default Loader;
