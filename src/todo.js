import React, {Component, Fragment} from 'react'

import Item from './components/Item'
import Footer from './components/Footer'
require('./common/base.css')
require('./common/index.css')


class ToDo extends Component{
    constructor(){
        super()
        this.state = {
            todoList: [],
            view: 'all'
        }
    }
    addTodo = (ev)=>{
        let keyCode = ev.keyCode
        let value = this.input.value
        if (keyCode !== 13 || !value.trim()) {
            return
        }
        let { todoList } = this.state
        this.setState({
            todoList: [
                {
                    id: Math.random(),
                    content: value,
                    hasCompleted: false
                },
                ...todoList
            ]
        },()=>{
            this.input.value = ''
        })
    }
    deleteTodo = (id)=>{
        let {todoList} = this.state
        todoList = todoList.filter((item)=>{
            return item.id !== id
        })
        this.setState({
            todoList
        })
    }
    toggleAll = (ev)=>{
        console.log(ev.target.checked)
        console.log(ev.target.value)
        let {todoList} = this.state
        todoList = todoList.map((item)=>{
            item.hasCompleted = ev.target.checked
            return item
        })
        this.setState({
            todoList
        }, ()=>{
            console.log(JSON.stringify(todoList,null,2))
        })
    }
    toggleTodo = (id)=>{
        let {todoList} = this.state
        todoList = todoList.map((item)=>{
            if (item.id === id) {
                item.hasCompleted = !item.hasCompleted
            }
            return item
        })
        this.setState({
            todoList
        }, ()=>{
            console.log(JSON.stringify(todoList,null,2))
        })
    }
    changeState=(str)=>{
        this.setState({
            view: str
        })
    }
    clearSelect=()=>{
        let {todoList} = this.state
        todoList = todoList.filter((item)=>{
            return !item.hasCompleted
        })
        this.setState({
            todoList
        }, ()=>{
            console.log(JSON.stringify(todoList,null,2))
        })
    }
    alertTodoContent=(id, value)=>{
        let {todoList} = this.state
        todoList = todoList.map((item)=>{
            if (item.id === id) {
                item.content = value
            }
            return item
        })
        this.setState({
            todoList
        }, ()=>{
            console.log(JSON.stringify(todoList,null,2))
        })
    }
    render(){
        let {todoList, view} = this.state
        let active = todoList.find((item) => item.hasCompleted === false)
        let ishowButton = todoList.find((item) => item.hasCompleted)
        let len = 0

        let filterToDo = todoList.filter((item) => {
            if (!item.hasCompleted){
                len++
            }
            switch (view) {
                case 'active':
                    return !item.hasCompleted
                case 'completed':
                    return item.hasCompleted
                case 'all':
                default:
                    return true
            }
        })
        let todo = filterToDo.map((item)=>{
            return(
                <Item
                    key={item.id}
                    {...{
                        id: item.id,
                        deleteTodo: this.deleteTodo,
                        toggleTodo: this.toggleTodo,
                        alertTodoContent: this.alertTodoContent,
                        content: item.content,
                        hasCompleted: item.hasCompleted 
                    }}
                />
            )
        })
        return(
            <div>
                <header className="header">
                    <h1>todolist</h1>
                    <input ref={el=>this.input = el}
                        type="text"
                        className="new-todo"
                        onKeyDown={this.addTodo}
                    />
                    {todoList.length >0 && (
                        <Fragment>
                            <section className="main">
                                {/* 是否是全选中状态*/}
                                <input
                                    type="checkbox"
                                    checked={!active && todoList.length>0}
                                    onChange={this.toggleAll}
                                    className="toggle-all"
                                />
                                <ul className="todo-list">
                                    {todo}
                                </ul>
                            </section>
                            <Footer
                                {...{
                                    ishowButton,
                                    len,
                                    view,
                                    changeState: this.changeState,
                                    clearSelect: this.clearSelect
                                }}
                            />
                        </Fragment>
                    )}
                </header>
            </div>
        )
    }
}
export default ToDo