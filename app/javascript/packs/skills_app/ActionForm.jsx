import React from 'react'

const ActionForm = (props) => {
  return (
    <div className="container p-5">
      <h3>Add new experience</h3>
      <small id="emailHelp" className="text-muted">Use the form below to add new Experience records.</small>
      <form onSubmit={props.handleSubmit} id="exp-adder-form">

        <div className="form-group">
          <label htmlFor="organization">
            Company Name
          </label>
          <input
            id="organization"
            onChange={props.handleChange}
            value={props.organization}
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
          <label htmlFor="exp_body">
            About
          </label>
          <textarea
            id="exp_body"
            onChange={props.handleChange}
            value={props.exp_body}
            required
            rows="4"
            cols="50"
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date_started">
            Start Date
          </label>
          <input
            id="date_started"
            onChange={props.handleChange}
            value={props.date_started}
            required
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="date_ended">
            Start Date
          </label>
          <input
            id="date_ended"
            onChange={props.handleChange}
            value={props.date_ended}
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
