import React from 'react'

const ActionForm = (props) => {
  return (
    <div>
      <h3>Add new experience</h3>
      <form onSubmit={props.handleSubmit}>

        <label htmlFor="company-name">
          Company Name
        </label>
        <input
          id="company-name"
          onChange={props.handleChange}
          value={props.companyName}
        />

        <label htmlFor="title">
          Title
        </label>
        <input
          id="title"
          onChange={props.handleChange}
          value={props.title}
        />

        <label htmlFor="about">
          About
        </label>
        <input
          id="about"
          onChange={props.handleChange}
          value={props.about}
        />

        <label htmlFor="start">
          Start Date
        </label>
        <input
          id="start"
          onChange={props.handleChange}
          value={props.start}
        />

        <label htmlFor="end">
          Start Date
        </label>
        <input
          id="end"
          onChange={props.handleChange}
          value={props.end}
        />

        <label htmlFor="sort">
          Sort Order
        </label>
        <input
          id="sort"
          onChange={props.handleChange}
          value={props.sort}
          type="number"
        />

        <button>
          Add
        </button>
      </form>
    </div>
  );
};

export default ActionForm
