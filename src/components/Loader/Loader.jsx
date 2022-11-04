import { Discuss } from 'react-loader-spinner';

function Loader() {
  return (
    <div className="set">
      <Discuss
        visible={true}
        height="100"
        width="100"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
    </div>
  );
}

export default Loader;
