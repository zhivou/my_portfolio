import React from 'react'

const ActionForm = (props) => {
  return (
    <div>
      <h3>Add new experience</h3>
      <form onSubmit={props.handleSubmit} id="exp-adder-form">

        <label htmlFor="company-name">
          Company Name
        </label>
        <input
          id="company-name"
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
        <input
          id="about"
          onChange={props.handleChange}
          value={props.about}
          required
        />

        <label htmlFor="start">
          Start Date
        </label>
        <input
          id="start"
          onChange={props.handleChange}
          value={props.start}
          required
        />

        <label htmlFor="end">
          Start Date
        </label>
        <input
          id="end"
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
