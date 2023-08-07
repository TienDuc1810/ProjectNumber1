import React from 'react';
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }

    Changevalue = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    AddTodolist = () => {
        let todo = {
            id: Math.floor(Math.random() * 1000),
            title: this.state.title
        }
        if (!this.state.title) {
            toast.warn('Missing title!', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        this.props.ChangelistTodo(todo)
    }
    render() {
        let { title } = this.state;
        return (
            <div className='add-todo'>
                <input type="text" value={title} onChange={(event) => this.Changevalue(event)} />
                <button onClick={() => this.AddTodolist()} >Add</button>
            </div>
        );
    }
}

export default AddTodo;