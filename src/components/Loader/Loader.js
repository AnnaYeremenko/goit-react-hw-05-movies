import { ThreeDots } from 'react-loader-spinner';
import { LoaderGallery } from './Loader.styled';

export const Loader = () => (
  <LoaderGallery>
    <ThreeDots
      height="200"
      width="200"
      radius="9"
      color="#DDA0DD"
      ariaLabel="three-dots-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  </LoaderGallery>
);