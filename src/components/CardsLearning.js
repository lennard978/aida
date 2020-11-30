import React, { useEffect, useState } from 'react';
import './cardslearning.css';
import { useParams } from 'react-router';
import { Lesson1, Lesson2 } from './data';

export default function CardsLearning() {
  const params = useParams();
  const [data, setData] = useState([Lesson1, Lesson2]);
  const [disabled, setDisabled] = useState(false);

  const [addOne, setAddOne] = useState(0);
  const germanWord = data[params.id - 1][addOne].german;
  const englishWord = data[params.id - 1][addOne].english;

  const addOneHandler = () => {
    setAddOne(addOne + 1);
    if (addOne === data[params.id - 1].length - 2) {
      setDisabled(true);
    }
  };
  const prevHandler = () => {
    if (addOne === 0) {
      setDisabled(true);
    }
    setAddOne(addOne - 1);
  };

  return (
    <div className="cardslearning">
      <h1 className="text-center my-4">Cards {params.id}</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="box shadow">
              <div className="wrapper">
                <div className="card front">
                  <div className="card-body font-weight-bold text-uppercase">
                    {germanWord}
                  </div>
                </div>
                <div className="card back font-weight-bold text-uppercase">
                  <div className="card-body">{englishWord}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <button
              disabled={addOne === 0 ? 'enable' : disabled}
              onClick={prevHandler}
              className="btn btn-danger w-50 mt-3"
            >
              Prev
            </button>

            <button
              disabled={disabled}
              onClick={addOneHandler}
              className="btn btn-danger w-50 mt-3"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
