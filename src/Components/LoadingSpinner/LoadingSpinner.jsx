
import "./spinner.css"
const LoadingSpinner = () => {
    return (
        <div className="flex h-[100vh] items-center justify-center">
              <section className=".spinner">
        <div className="loader">
          <div className="upper ball"></div>
          <div className="right ball"></div>
          <div className="lower ball"></div>
          <div className="left ball"></div>
        </div>
      </section>
        </div>
      
    );
};

export default LoadingSpinner;