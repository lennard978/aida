import React, { useState } from 'react';
import './lessons.css';
import Speech from 'speak-tts';
import { btnData } from './btnData';
import { Link } from 'react-router-dom';

const speech = new Speech();

export default function Lessons() {
  const [btn, setBtn] = useState(btnData);

  return (
    <div className="lessons">
      <h1 className="text-center my-4">Lessons</h1>
      <div className="container">
        <div className="row justify-content-center">
          {btn.map((index) => (
            <div key={index.id} className="col-12">
              <Link
                to={`${index.id}`}
                className={`btn btn-block ${index.btnColor} mb-2`}
              >
                {index.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
