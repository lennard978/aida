import React, { useState } from 'react';
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
        >
          <a
            href="/"
            className="nav-link nav-item text-light active text-uppercase"
          >
            Home
          </a>
          <a
            href="/lessons"
            className="nav-link nav-item text-info text-uppercase"
          >
            Lessons
          </a>
          <a
            href="/grammary"
            className="nav-link nav-item text-info text-uppercase"
          >
            Grammary
          </a>
          <a
            href="/pronounce"
            className="nav-link nav-item text-info text-uppercase"
          >
            Pronounce
          </a>
          <a
            href="/cards"
            className="nav-link nav-item text-info text-uppercase"
          >
            Cards
          </a>
          <a
            href="/test"
            className="nav-link nav-item text-info text-uppercase"
          >
            Test
          </a>
        </div>
      </nav>
    </>
  );
}
