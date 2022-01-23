import React from "react";
import '../style.css';


class Search extends React.Component{
constructor( props ) {
    super( props );
    
    this.state = {
        query: '',
        results:{},
        loading: false,
        message:''
    }
}
handleOnInputChange = ( e ) => {
    const query = e.target.value;
    this.setState( state, { query } );

};

 
    render(){ 
        const { query } = this.state;
        const query=this.state.query;

        return(
            <div className="container">
                {/* Heading*/}
                <h2 className="heading">Search country</h2>
                {/* Search Input*/}
                <label className="search-label" htmlFor="search-input">
                    <input
                     type="text"
                     name="query"
                     value=""
                     id="search-input"
                     placeholder="Search..."
                     onChange={this.handleOnChange}
                     />
                </label>
         
            </div>
        )
    }
}
export default Search;