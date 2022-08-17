import Header from '../components/header/Header';

const WithHeader = (Component) => {
  return (props) => {
    return (
      <div>
        <Header />
        <Component {...props} />
      </div>
    );
  };
};
export default WithHeader;
