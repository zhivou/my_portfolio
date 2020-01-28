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

      <button>
        Add
      </button>
    </form>
  </div>
  );
};

export default ActionForm
