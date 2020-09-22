import React, {Component} from 'react'

export default class Item extends Component{
    constructor(){
        super()
        this.state = {
            inEdit: false
        }
        this.editing = React.createRef()
    }
    onEdit=()=>{
        this.setState({
            inEdit: true
        },()=>{
            this.editing.current.value = this.props.content
            this.editing.current.focus()
        })
    }
    commitContent=()=>{
        let {current: input} = this.editing
        let conent = input.value.trim()
        let {alertTodoContent, deleteTodo, id} = this.props
        if(conent){
            alertTodoContent(id, conent)
        } else {
            deleteTodo(id)
        }
        input.value = ''
    }
    onBlur=(ev)=>{
        if(!this.state.inEdit){
            return
        }
        this.setState({
            inEdit: false
        })
        this.commitContent()
    }
    onKeyDown=(ev)=>{
        if (ev.keyCode === 27 || ev.keyCode === 13){
            this.setState({
                inEdit: false
            })
        }
        if (ev.keyCode === 13){
            this.commitContent()
        }
    }
    render(){
        let { id, content, hasCompleted, deleteTodo, toggleTodo } = this.props
        let { inEdit } = this.state
        let className = inEdit ? 'editing' : ''
        className = hasCompleted ? `${className} completed` : className
        return(
            <li className={className}>
                <div className="view">
                    <input
                        type="checkbox"
                        checked={hasCompleted}
                        onChange={()=>toggleTodo(id)} 
                        className="toggle"
                    />
                    <label onDoubleClick={this.onEdit}>{content}</label>
                    <button className="destroy" onClick={()=>{deleteTodo(id)}}></button>
                </div>
                <input
                    className="edit"
                    type="text"
                    ref={this.editing}
                    onBlur={this.onBlur}
                    onKeyDown={this.onKeyDown}
                />
            </li>
        )
    }
}