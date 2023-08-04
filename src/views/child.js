import React from "react";

class Child extends React.Component {
    state ={
        conditional:false
    }
    handleClick=()=>{
        this.setState({
            conditional:!this.state.conditional
        })
    }
    render(){
    let {job} = this.props;
    let {conditional} = this.state;

    const deletejob = (job) => {
       console.log(job)
       this.props.Deletejob(job)
    }

    return(
        <>
        {
        conditional === false ?
            
            <div>
                <button onClick={() => this.handleClick()}>Show</button>
            </div>
        

        :
        <>
            <div>{
                job.map((item,index) => {
                    return(
                        <div key={item.id}>
                            {item.name} - {item.salary} <></> <span onClick={()=>deletejob(item)}>x</span>
                        </div>
                    )
                })
                } 
            </div>
        <div>
            <button onClick={() => this.handleClick()}>Hide</button>
        </div>
        </>
        }
        </>
    )
    }
}
export default Child;