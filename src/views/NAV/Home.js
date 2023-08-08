import React from 'react';
import logo from '../../assets/images/Avatar.jpg'
import { connect } from 'react-redux';

class Home extends React.Component {
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }
    AddUser = () => {
        this.props.addNewUserRedux();
    }
    render(){
        let ListUser = this.props.dataRedux;
        return(
            <>
            <div>Home</div>
            <div>
                <img src={logo} style={{height:'200px', width:'200px',marginTop:'20px'}}/>
            </div>
            <div>
                {ListUser && ListUser.length > 0 && 
                    ListUser.map((item, index) =>{
                        return(
                            <div key={item.id}>
                                {index + 1} - {item.name}<span onClick={()=>this.handleDeleteUser(item)}> x</span>
                            </div>
                        )
                    })
                }
                <button onClick={()=>this.AddUser()}>Add New</button>
            </div>
            </>
        )
    }
}


const mapStateToProps = (state) =>{
   return{ 
    dataRedux:  state.users
   } 
}

const mapDispatchToProps = (dispatch) => {
    return {
      deleteUserRedux: (userDelete) => dispatch({ type: 'deleteUser', payload: userDelete }),
      addNewUserRedux: () => dispatch({ type: 'newUser' }) // Corrected action name here
    };
};
  
export default connect(mapStateToProps,mapDispatchToProps)(Home);   