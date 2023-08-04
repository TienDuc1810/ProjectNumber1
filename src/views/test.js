import React from "react";
import Child from "./child";
import Addcomponents from "./addcomponents";

class Test extends React.Component {
    state = {
        job: [
            {id:'abcjob1',name:'Duc',salary:'500'},
            {id:'abcjob2',name:'Quynh',salary:'600'},
            {id:'abcjob3',name:'Thao',salary:'700'}
        ]
    }

Addnew = (jobnew) => {
    console.log(jobnew)
    this.setState({
        job : [...this.state.job, jobnew]
    })
}
   
Deletejob = (job) => {
    let curent = this.state.job;
    curent = curent.filter(item => item.id !== job.id); 
    this.setState({
        job : curent
    })
}




    render() {
        return (
            <>
            <Addcomponents 
            Addnew={this.Addnew}
            />
            <Child job={this.state.job}
            Deletejob={this.Deletejob}/>
            </>
        )
    }
}

export default Test;