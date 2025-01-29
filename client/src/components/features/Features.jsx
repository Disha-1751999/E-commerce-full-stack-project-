import React from "react";
import FeatureStore from "../../store/FeatureStore";
import FeaturesSkeleton from "../../skeleton/FeaturesSkeleton";

function Features() {
  const { FeatureList } = FeatureStore();
  return (
    <>
      {FeatureList === null ? (
        <FeaturesSkeleton />
      ) : (
        <div className="container section">
          <div className="row">
            {FeatureList.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-6 p-2 col-md-3 col-lg-3 col-sm-6"
                >
                  <div className="card shadow-sm">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-3">
                          <img
                            className="w-100"
                            src={item.img}
                            alt=""
                            style={{
                              width: "150px",
                              height: "50px",
                              objectFit: "cover",
                              border: "none",
                            }}
                          />
                        </div>
                        <div className="col-9">
                          <h3 className="bodyXLarge">{item.name}</h3>
                          <span className="bodySmal">{item.description}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Features;
