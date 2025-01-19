import HomeBanner from "../../Components/HomeBanner";

const Home = () => {
  return (
    <>
      <HomeBanner />

      <section className="homeProducts">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="banner">
                <img src="https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg"
                  className="cursor" />
              </div>

            </div>

            <div className="col-md-3">
              <div className="d-flex align-items-center">
                <div className="info">
                  <h3>BEST SELLERS</h3>
                  <p className="text-light">Do not miss the current offers
                    until the end of March.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
