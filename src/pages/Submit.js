import React from 'react'; 
import '../App.css'; 
import generateRowId from '../functions/GenerateDebateId';  
import createDebate from '../functions/CreateDebate';  
class Submit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {title: '',description: ''};
    
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleTitleChange(event) {
        this.setState({title: event.target.value, description: event.target.description});
      }

      handleDescriptionChange(event) {
        this.setState({description: event.target.value});
      }
    
      handleSubmit(event) {  
        createDebate({debateTitle: this.state.title , debateSummary: this.state.description} )
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
            </label>
            <label>
              Name:
              <textarea value={this.state.description} onChange={this.handleDescriptionChange} /> 
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
  }
 
export default Submit;

 