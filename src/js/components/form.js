import React, {Component} from "react";
import ReactDOM from "react-dom";

class Form extends Component {
    constructor() {
        super();

        this.state = {
            value: "",
            data:[],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitButton = this.handleSubmitButton.bind(this);
    }

    handleSubmitButton(event){
        event.preventDefault();
        let v= this.state.value;
        const newData=this.state.data;
          newData.push(v);

        this.setState({
           data:newData
        })

    }
    handleChange(event) {
        const {value} = event.target;
        this.setState(() => {
            return {
                value
            };
        });
    }

    render() {

        return (
            <div>
            <form onSubmit={this.handleSubmitButton}>
                <p>Type your name here:</p>
                <span>
                    <input
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}

                />
                </span>
                <input
                    type='submit'
                />

                <br/>

            </form>

                <div style={{float:"center"}}>
                    <p> Paragraph will be visible here</p>
                    {this.state.value}

                    <br/>
                    <div>
                        <p>Name</p>

                          {this.state.data.map( name => <li key={name}> {name} </li> )}


                    </div>

                </div>
            </div>

        );
    }
}

export default Form;

