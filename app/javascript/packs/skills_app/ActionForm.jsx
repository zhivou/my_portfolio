import React from 'react'

const ActionForm = (props) => {
  return (
    <div>
      <h3>Add new experience</h3>
      <form onSubmit={props.handleSubmit} id="exp-adder-form">

        <label htmlFor="company">
          Company Name
        </label>
        <input
          id="company"
          onChange={props.handleChange}
          value={props.companyName}
          required
        />

        <label htmlFor="title">
          Title
        </label>
        <input
          id="title"
          onChange={props.handleChange}
          value={props.title}
          required
        />

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
        />

        <label htmlFor="start_date">
          Start Date
        </label>
        <input
          id="start_date"
          onChange={props.handleChange}
          value={props.start}
          required
        />

        <label htmlFor="end_date">
          Start Date
        </label>
        <input
          id="end_date"
          onChange={props.handleChange}
          value={props.end}
          required
        />

        <label htmlFor="sort">
          Sort Order
        </label>
        <input
          id="sort"
          onChange={props.handleChange}
          value={props.sort}
          type="number"
          required
        />

        <button>
          Add
        </button>
      </form>
    </div>
  );
};

export default ActionForm
