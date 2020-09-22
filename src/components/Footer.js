import React, {Component} from 'react'

export default class Footer extends Component{
    render(){
        let { len, view, ishowButton, clearSelect, changeState } = this.props
        return(
            <footer className="footer">
                <span className="todo-count">
                    <strong>{len}</strong>
                    <span>item left</span>
                </span>
                <ul className="filters">
                    <li className="">
                        <a 
                            href="#/all"
                            className={view ==='all' ? 'selected': ''}
                            onClick={()=>changeState('all')}
                        >All</a>
                    </li>
                    <li>
                        <a
                            href="#/active"
                            className={view ==='active' ? 'selected': ''}
                            onClick={()=>changeState('active')}
                        >Active</a>
                    </li>
                    <li>
                        <a
                            href="#/completed"
                            className={view ==='completed' ? 'selected': ''}
                            onClick={()=>changeState('completed')}
                        >Completed</a>
                    </li>
                    {
                        ishowButton && (
                            <div className="clear-completed" onClick={clearSelect}>
                                clear all Selected
                            </div>
                        )
                    }
                </ul>
            </footer>
        )
    }
}