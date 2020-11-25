import React from 'react';
import './home.css';

export default function Home() {
  return (
    <div className="container-fluid home">
      <div className=" vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <h4 className="mb-0 text-uppercase font-weight-bolder">
                Be in charge
              </h4>
              <p className="font-weight-light font-italic">
                of your language skills!
              </p>
              <h4 className="text-white text-uppercase font-weight-bolder mb-0">
                Be prepared
              </h4>
              <p className="text-white font-italic font-weight-light">
                with your Vocabulary Book and Dictionary App
              </p>
              <h4 className="mb-0 text-uppercase font-weight-bolder">
                Use the words,
              </h4>
              <p>the grammar will follow easier</p>
              <h4 className="text-white text-uppercase font-weight-bolder mb-0">
                15 words a day -
              </h4>
              <p className="text-white font-italic font-weight-light">
                A1 vocabulary in about a month
              </p>
              <h4 className="mb-0 text-uppercase font-weight-bolder">
                Practice
              </h4>
              <p>with everyone at every opportunity</p>
              <div className="row justify-content-center">
                <div className="col-4">
                  <h4 className="text-white text-uppercase font-weight-bolder mb-0">
                    Learn
                  </h4>
                  <p className="text-white font-italic font-weight-light text-center">
                    the words,
                  </p>
                </div>
                <div className="col-4">
                  <h4 className="text-white text-uppercase font-weight-bolder mb-0">
                    Practice
                  </h4>
                  <p className="text-white font-italic font-weight-light mb-0">
                    the grammar,
                  </p>
                </div>
                <div className="col-4">
                  <h4 className="text-white text-uppercase font-weight-bolder mb-0">
                    Talk
                  </h4>
                  <p className="text-white font-italic font-weight-light mb-0">
                    to Germans,
                  </p>
                </div>
              </div>

              <h4 className="mb-0 text-uppercase font-weight-bolder">
                Get Support
              </h4>
              <p>in Expert and from your Training Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
