import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Verbs1, Verbs2 } from './data';
import Speech from 'speak-tts';
import './grammarylearn.css';

export default function GrammaryLearn() {
  const params = useParams();
  const [data, setData] = useState([Verbs1, Verbs2]);
  const speech = new Speech();

  useEffect(() => {
    if (speech.hasBrowserSupport()) {
      speech
        .init({
          volume: 1,
          lang: 'de-DE',
          rate: 0.7,
          pitch: 0.8,
          voice: 'Anna',
          splitSentences: true,
        })
        .then((data) => {
          // console.log('Is Ready', data);
        })
        .catch((e) => {
          console.error('An Error');
        });
    }
  }, []);

  const listenHandler = (e) => {
    speech.speak({
      text: e.target.textContent,
    });
  };
  return (
    <div className="grammarylearn">
      <h1 className="text-center my-3">Verbs {params.id}</h1>
      <div className="mt-2 container">
        <div className="row justify-content-center">
          {data[params.id - 1].map((index) => (
            <div
              key={index.id}
              className="col-11 bg-light mb-2 shadow border d-flex"
            >
              <div className="justify-content-center align-self-center pt-2 mr-3">
                <p className="gender">{index.gender}</p>
              </div>
              <ul className="list-unstyled mb-0">
                <li onClick={listenHandler} className="font-weight-bolder pt-2">
                  {index.german}
                </li>
                <li className="font-italic pb-2">{index.english}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
