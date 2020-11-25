import React, { useState } from 'react';
import './pronounce.css';
import { FaPlus } from 'react-icons/fa/index';
import Speech from 'speak-tts';

export default function Pronounce() {
  const [newWord, setNewWord] = useState(['Hallo', 'Bitte']);
  const [textInput, setTextInput] = useState('');
  const [disabled, setDisabled] = useState(true);
  const speech = new Speech();

  const newWordHandler = (e) => {
    setTextInput(e.target.value);
    if (textInput === '') {
      setDisabled(false);
    }
  };
  const addNewWord = (e) => {
    e.preventDefault();
    setNewWord([...newWord, textInput]);
    setTextInput('');
    setDisabled(true);
  };

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

  const listenHandler = (e) => {
    speech.speak({
      text: e.target.textContent,
    });
  };
  return (
    <div className="pronounce">
      <h1 className="text-center my-4">Pronounce</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11">
            <input
              onChange={newWordHandler}
              className=" p-1 w-100 mb-2"
              type="text"
              value={textInput}
              placeholder="New word"
            />
            <button
              disabled={disabled}
              onClick={addNewWord}
              className="btn btn-dark btn-block"
            >
              <FaPlus />
            </button>
          </div>
          <div className="col-11">
            <ul onClick={listenHandler} className="list-unstyled">
              {newWord.map((index, i) => (
                <li
                  className="my-2 bg-light text-center text-dark text-uppercase font-weight-bolder p-3 shadow"
                  key={i}
                >
                  {index}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
