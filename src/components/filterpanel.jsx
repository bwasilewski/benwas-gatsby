import React from 'react'

const FilterPanel = () => {
  return (
    <section className="section">
      <nav className="panel">
        <p className="panel-heading">Filters</p>
        <a className="panel-block is-active">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          bulma
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          marksheet
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          minireset.css
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-book" aria-hidden="true"></i>
          </span>
          jgthms.github.io
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-code-branch" aria-hidden="true"></i>
          </span>
          daniellowtw/infboard
        </a>
        <a className="panel-block">
          <span className="panel-icon">
            <i className="fas fa-code-branch" aria-hidden="true"></i>
          </span>
          mojs
        </a>
      </nav>
    </section>
  )
}

export default FilterPanel
