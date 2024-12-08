import React from "react";

function Home() {
  return (
    <section className="collections my-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 fw-bold">Collections</h2>
          <a href="#" className="text-danger fw-bold">
            All collections in Kochi ;
          </a>
        </div>
        <p>
          Explore curated lists of top restaurants, cafes, pubs, and bars in Kochi, based on trends
        </p>

        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://b.zmtcdn.com/data/pictures/6/95426/f590563b52ffa32f7430bde2faa59058_featured_v2.jpg?output-format=webp"
                className="card-img-top rounded-3"
                alt=""
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h6>
                  8 Places for Art Lovers
                </h6>
                <p>7 Places</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://b.zmtcdn.com/data/pictures/7/21138897/1a1df4130324d929841ddb7d99afa4d6_featured_v2.jpg?output-format=webp"
                className="card-img-top rounded-3"
                alt=""
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h6>
                  Great Cafes
                </h6>
                <p>11 Places</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://b.zmtcdn.com/data/pictures/6/20440486/c5d98b619f54cdcf65b4d367a2f14e15_featured_v2.jpg"
                className="card-img-top rounded-3"
                alt=""
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h6>
                  6 Places for Authentic Kerala Cuisine
                </h6>
                <p>5 Places</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://b.zmtcdn.com/data/pictures/8/900078/ccec784adb16dd182bd57d155f8b715c_featured_v2.jpg"
                className="card-img-top rounded-3"
                alt=""
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h6>
                  5 Must-Visit Legendary Places
                </h6>
                <p>5 Places</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
        <div className="col-12 mb-4 text-center">
  <img
    className="img-fluid"
    style={{ height: "auto", maxWidth: "100%",  }}
    src="https://b.zmtcdn.com/data/o2_assets/e067a1cf0d3fe27b366402b98b994e9f1716296909.png"
    alt="Restaurants in Kochi"
  />
</div>
        </div>
        <h2 className="text-center mt-4 mb-4">Restaurants in Kochi</h2>
        <div className="row mt-4">
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://b.zmtcdn.com/data/pictures/1/95271/a33182567a1a3e7559968c833d5dc377_featured_v2.jpg?output-format=webp"
                className="card-img-top rounded-3"
                alt="Restaurant 1"
                style={{ height: "277px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="card-text text-center fw-semibold">Flat 30% Off</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://b.zmtcdn.com/data/pictures/6/903046/4dc77243fb62f605e201808a9574693e_featured_v2.jpg"
                className="card-img-top rounded-3"
                alt="Restaurant 2"
                style={{ height: "277px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="card-text text-center fw-semibold">Flat 20% Off</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <img
                src="https://b.zmtcdn.com/data/pictures/2/19129252/46aa524fa073c591762606cdbe083584_featured_v2.jpg"
                className="card-img-top rounded-3"
                alt="Restaurant 3"
                style={{ height: "277px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="card-text text-center fw-semibold">Flat 25% Off</p>
              </div>
            </div>
          </div>
        </div>
      </div>
 

    </section>

    
  );
}

export default Home;