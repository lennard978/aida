import React, { useState } from 'react';
import './test.css';
import { Link } from 'react-router-dom';
import { btnData } from './btnData';

export default function Test() {
  const [btn, setBtn] = useState(btnData);
  return (
    <div className="cards">
      <h1 className="text-center my-4">Test</h1>
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
