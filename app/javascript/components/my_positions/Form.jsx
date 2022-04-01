import React from 'react';

const Form = (props) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="symbol">Symbol</label>
        <input
          type="text"
          className="form-control"
          id="symbol"
          aria-describedby="symbolHelp"
          placeholder="Enter symbol"
          onChange={props.handleChange}
        />
        <small id="symbolHelp" className="form-text text-muted">Use short SYMBOL label like APPL or MSFT.</small>
      </div>

      <div className="form-group">
        <label htmlFor="shares">Shares/Coins</label>
        <input
          type="number"
          className="form-control"
          id="shares"
          placeholder="Enter share or coin count"
          onChange={props.handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="average_price">Average Price</label>
        <input
          type="number"
          className="form-control"
          id="average_price"
          placeholder="Enter Average Price"
          onChange={props.handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea
          className="form-control"
          id="notes"
          rows="3"
          placeholder="Enter Some Notes in Here"
          onChange={props.handleChange}
        />
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="crypto"
          onClick={props.handleChange}
        />
        <label className="form-check-label" htmlFor="crypto">Crypto curency</label>
      </div>

      <button
        type="submit"
        className="btn btn-outline-primary btn-block mt-3"
        onClick={props.handleSubmit}
        >
          { props.submitName }
        </button>
        <small id="submitHelp" className="form-text text-muted">
          "{ props.submitName }" action will look for exisiting stocks/cryptos records
          and if it does not exist it will a crete new one. This event will trigger
          API sync event and will populate new symbol with required data.
        </small>
    </form>
  );
};

export default Form
