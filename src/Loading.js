import Header from "./Header";
import Footer from "./Footer";

const Loading = () => {
  return (
    <>
      <Header />
      <div className="loadingWrap">
        <div className="loadingCard">
          <h1>Loading</h1>
          <div className="spinner">
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Loading;
