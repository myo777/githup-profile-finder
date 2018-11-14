import React from 'react';


const SearchBar = (props) => {

		return (
			
    		<div className="row">
				<div className="col-md-10 col-md-offset-2">
					<form className="input-group" onSubmit={props.submitForm}>
						<input type="text" className="form-control" placeholder="Search github profiles..." value={props.term}
							onChange={props.handleChange}/>
						<span className="input-group-btn">
							<button className="btn btn-primary" type="submit">Search</button>
						</span>
					</form>
				</div>
			</div>
		);
};

export default SearchBar;
