import React from 'react';

const Form = (props) => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="symbolInput">Symbol</label>
        <input type="text" className="form-control" id="symbolInput" aria-describedby="symbolHelp" placeholder="Enter symbol"/>
        <small id="symbolHelp" className="form-text text-muted">Use short SYMBOL label like APPL or MSFT.</small>
      </div>

      <div className="form-group">
        <label htmlFor="sharesInput">Shares/Coins</label>
        <input type="number" className="form-control" id="sharesInput" placeholder="Enter share or coin count"/>
      </div>

      <div className="form-group">
        <label htmlFor="averagePriceInput">Average Price</label>
        <input type="number" className="form-control" id="averagePriceInput" placeholder="Enter Average Price"/>
      </div>

      <div class="form-group">
        <label for="notesTextarea">Notes</label>
        <textarea class="form-control" id="notesTextarea" rows="3" placeholder="Enter Some Notes in Here"></textarea>
      </div>

      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="cryptoCheck"/>
        <label className="form-check-label" htmlFor="cryptoCheck">Crypto curency</label>
      </div>

      <button type="submit" className="btn btn-outline-primary btn-block mt-3" onClick={props.handleSubmit}>Submit</button>
    </form>
  );
};

export default Form
