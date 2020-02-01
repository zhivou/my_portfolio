import React from 'react'

const ActionForm = (props) => {
  return (
    <div className="container p-5">
      <h3>Add new experience</h3>
      <small id="emailHelp" className="text-muted">Use the form below to add custom Experience records.</small>
      <form onSubmit={props.handleSubmit} id="exp-adder-form">

        <div className="form-group">
          <label htmlFor="company">
            Company Name
          </label>
          <input
            id="company"
            onChange={props.handleChange}
            value={props.companyName}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="title">
            Title
          </label>
          <input
            id="title"
            onChange={props.handleChange}
            value={props.title}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="about">
            About
          </label>
          <textarea
            id="about"
            onChange={props.handleChange}
            value={props.about}
            required
            rows="4"
            cols="50"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="start_date">
            Start Date
          </label>
          <input
            id="start_date"
            onChange={props.handleChange}
            value={props.start}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="end_date">
            Start Date
          </label>
          <input
            id="end_date"
            onChange={props.handleChange}
            value={props.end}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="sort">
          Sort Order
        </label>
          <input
            id="sort"
            onChange={props.handleChange}
            value={props.sort}
            type="number"
            required
            className="form-control"
          />
        </div>

        <button className="btn btn-light">
          Add
        </button>
      </form>
    </div>
  );
};

export default ActionForm
