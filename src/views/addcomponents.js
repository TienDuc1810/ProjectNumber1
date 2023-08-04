import React from "react";

class Addcomponents extends React.Component {
    state = {
        name: '',
        salary: ''
    }

    Changejob = (event) => {
        this.setState({
            name: event.target.value,
        })
    }
    Changesalary = (event) => {
        this.setState({
            salary: event.target.value,
        })
    }
    Callbutton = (event) => {
        event.preventDefault()
        // console.log("check data: ", this.state)
        if(!this.state.salary || !this.state.name){
            alert("Please confirm")
            return;
        }
        this.props.Addnew({
            id: Math.floor(Math.random()*1000),
            name: this.state.name,
            salary: this.state.salary
        })

        this.setState({
            name: '',
            salary: ''
        })
    }
    
    
    render() {
        return (
            <>
                <form>
                    <label htmlFor="name">Job title</label><br />
                    <input type="text" value={this.state.name} onChange={(event) => this.Changejob(event)} /><br />
                    <label htmlFor="salary">Salary</label><br />
                    <input type="text" value={this.state.salary} onChange={(event) => this.Changesalary(event)} /><br /><br />
                    <input type="submit" value="Submit" onClick={(event)=>this.Callbutton(event)}/>
                </form>
            </>
        )
    }
}

export default Addcomponents;