import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

export default function Nav() {
  const [isNavCollapsed, setCollapsed] = useState(true);
  const handleNAv = () => {
    setCollapsed(!isNavCollapsed);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow">
        <a href="/" className="navbar-brand font-weight-light">
          <span className="text-danger font-weight-bolder">AidaPerla</span>
        </a>
        <button
          className="navbar-toggler shadow"
          type="button"
          data-toggle="collapse"
          data-target="#Navbar"
          aria-controls="Navbar"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navbigation"
          onClick={handleNAv}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`${
            isNavCollapsed ? 'collapse' : ''
          } navbar-collapse bg-dark py-2`}
          id="Navbar"
          onClick={!isNavCollapsed ? true : false}
        >
          <Link
            to="/"
            className="nav-link nav-item text-light active text-uppercase"
          >
            Home
          </Link>
          <Link
            to="lessons"
            className="nav-link nav-item text-info text-uppercase"
          >
            Lessons
          </Link>
          <Link
            to="grammary"
            className="nav-link nav-item text-info text-uppercase"
          >
            Grammary
          </Link>
          <Link
            to="pronounce"
            className="nav-link nav-item text-info text-uppercase"
          >
            Pronounce
          </Link>
          <Link
            to="cards"
            className="nav-link nav-item text-info text-uppercase"
          >
            Cards
          </Link>
          {/* <Link
            to="test"
            className="nav-link nav-item text-info text-uppercase"
          >
            Test
          </Link> */}
        </div>
      </nav>
    </>
  );
}
