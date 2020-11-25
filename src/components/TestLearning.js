import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Verbs1, Verbs2 } from './data';
import './testleaning.css';

export default function TestLearning() {
  const params = useParams();
  const [data, setData] = useState([Verbs1, Verbs2]);
  const [back, setBack] = useState('bg-light');
  const [answer, setAnswer] = useState('');

  const [addOne, setAddOne] = useState(0);
  const germanWord = data[params.id - 1][addOne].german;
  const englishWord = data[params.id - 1][addOne].english;
  const options = data[params.id - 1][addOne].options;

  const optionHandler = (e) => {
    console.log(e.target.innerHTML);
    console.log(englishWord);
    e.target.innerHTML === englishWord
      ? setBack('bg-success')
      : setBack('bg-danger');
    e.target.innerHTML !== englishWord
      ? setBack('bg-danger')
      : setBack('bg-success');
  };

  return (
    <div className="testlearning d-flex justify-content-center align-content-center flex-column">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 text-center mb-5">
            <h1>{germanWord}</h1>
          </div>
          <div className="col-8">
            {options.map((index) => (
              <button
                onClick={optionHandler}
                className={`btn btn-light w-100 mb-2 p-3 ${back}`}
                key={index}
              >
                {index}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
