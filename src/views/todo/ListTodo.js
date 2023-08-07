import React from 'react';
import './ListTodo.scss';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {
    state = {
        listTodo: [
            { id: 'item1', title: 'Doing Homework' },
            { id: 'item2', title: 'Watching TV' },
            { id: 'item3', title: 'Listen To Music' }
        ],
        EditTodo: {}
    }

    ChangelistTodo = (todo) => {
        let curent = this.state.listTodo;
        curent.push(todo);
        this.setState({
            listTodo: curent
        })
        toast.success('Success!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    DeletelistTodo = (todo) => {
        let curentdelete = this.state.listTodo;
        curentdelete = curentdelete.filter(item => item.id !== todo.id);
        this.setState({
            listTodo: curentdelete
        })
        toast.success('Delete Success!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    Edittodo = (todo) => {
        let { listTodo, EditTodo } = this.state;
        let checkobject = Object.keys(EditTodo).length === 0;

        if (checkobject === false && EditTodo.id === todo.id) {
            let newlistTodo = [...listTodo]
            let objIndex = newlistTodo.findIndex((item => item.id === todo.id));
            newlistTodo[objIndex].title = EditTodo.title;
            this.setState({
                listTodo : newlistTodo,
                EditTodo : {}
            })
            toast.success('Update Data Success!', {
                position: "top-right",
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
        this.setState({
            EditTodo: todo
        })
    }

    EditTodonew = (event) => {
        let Todonew = this.state.EditTodo;
        Todonew.title = event.target.value;
        this.setState({
            EditTodo: Todonew
        })
    }

    render() {
        let { listTodo, EditTodo } = this.state;
        let checkobject = Object.keys(EditTodo).length === 0;
        return (
            <div className='container'>
                <AddTodo ChangelistTodo={this.ChangelistTodo} />
                <div className='content'>
                    {listTodo && listTodo.length > 0 && listTodo.map((item, index) => {
                        return (
                            <div className='child-item' key={item.id}>
                                {checkobject === true ?
                                    <span>{index + 1} - {item.title}</span>
                                    :
                                    <>
                                        {
                                            EditTodo.id === item.id ?
                                                <span>{index + 1} - <input type="text" value={EditTodo.title} onChange={(event) => this.EditTodonew(event)} /></span>
                                                :
                                                <span>{index + 1} - {item.title}</span>
                                        }
                                    </>
                                }
                                <button onClick={() => this.Edittodo(item)}>
                                    {checkobject === false && EditTodo.id === item.id ? 'Save' : 'Edit'}
                                </button>
                                <button onClick={() => this.DeletelistTodo(item)}>Delete</button>
                            </div>
                        )
                    })}

                </div>
            </div>
        );
    }





}

export default ListTodo;