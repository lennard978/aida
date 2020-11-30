import React, { useState } from 'react';
import './grammary.css';
import { btnData } from './btnData';
import { Link } from 'react-router-dom';

export default function Grammary() {
  const [btn, setBtn] = useState(btnData);
  return (
    <div className="grammary">
      <h1 className="text-center my-4">Grammary</h1>
      <div className="container">
        <div className="row justify-content-center">
          {btn.map((index) => (
            <div key={index.id} className="col-6">
              <Link
                to={`${index.id}`}
                className={`btn btn-block ${index.btnColor} py-4 mb-2`}
              >
                {index.btnTitle}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
