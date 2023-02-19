import Header from "./Header";
import Footer from "./Footer";

const ErrorPage = () => (
  <>
    <Header />
    <div className="errorWrap">
      <div className="error">
        <h3>There was an error</h3>
        <p>Please try again later</p>
      </div>
    </div>
    <Footer />
  </>
);

export default ErrorPage