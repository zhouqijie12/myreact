import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom'
import React, { Component } from 'react'

// let single = function (fn) {
//     let ret;
//     return function (){
//         console.log(ret, 'aaa')
//         return ret || (ret = fn.apply(this, arguments))
//     }
// }

// let bindEvent = single(function(){
//     return true
// })

// let renders = function () {
//     console.log('xuanran')
//     bindEvent()
// }
// renders()
// renders()
// renders()

// function curry(fn){
//     let slice = Array.prototype.slice,
//         args = slice.call(arguments, 1);
//         console.log(args)
//     return function(){
//         let newArgs = slice.call(arguments);
//         return fn.apply(null, [...args, ...newArgs])
//     }
// }
// const curry = (fn, ...first) => (...second) => fn(...first, ...second)
// const foo = curry(function(a,b,c,d){
//     console.log(a,b,c,d)
// },'a','fdas','aa')
// foo(1, '32');


// function sub_curry(fn) {
//     var args = [].slice.call(arguments, 1);
//     return function() {
//       return fn.apply(this, args.concat([].slice.call(arguments)));
//     };
//   }

//   function curry(fn, length) {

//     length = length || fn.length;

//     var slice = Array.prototype.slice;

//     return function() {
//         console.log(arguments.length, length)
//       if (arguments.length < length) {
//         var combined = [fn].concat(slice.call(arguments));
//         return curry(sub_curry.apply(this, combined), length - arguments.length);
//       } else {
//         return fn.apply(this, arguments);
//       }
//     };
//   }

//   var fn = curry(function(a, b, c) {
//     return [a, b, c];
//   });

// //   fn("a", "b", "c") // ["a", "b", "c"]
//   fn("a", "b")("c") // ["a", "b", "c"]
// //   fn("a")("b")("c") // ["a", "b", "c"]
// //   fn("a")("b", "c") // ["a", "b", "c"]

class Aa extends Component {
    render() {
        let { location, match, history, history: { length, action } } = this.props
        return (
            <div className="aa">
                <p><span style={{ 'color': 'red' }}>location: </span>{JSON.stringify(location, null, 2)}</p>
                <p><span style={{ 'color': 'red' }}>match: </span>{JSON.stringify(match, null, 2)}</p>
                <p><span style={{ 'color': 'red' }}>history: </span>{JSON.stringify(history, null, 2)}</p>
                我是Aa
                <p>id:{new URLSearchParams(location.search).get('id')}</p>
                <p>id:{new URLSearchParams(location.search).get('name')}</p>
                <p>{length}</p>
                {action}
            </div>
        )
    }
}
class Bb extends Component {
    render() {
        let { location, match, history } = this.props
        return (
            <div className="bb">
                <p><span style={{ 'color': 'red' }}>location: </span>{JSON.stringify(location, null, 2)}</p>
                <p><span style={{ 'color': 'red' }}>match: </span>{JSON.stringify(match, null, 2)}</p>
                <p><span style={{ 'color': 'red' }}>history: </span>{JSON.stringify(history, null, 2)}</p>
                我是Bb
            </div>
        )
    }
}

class RouterComponent extends Component {
    render() {
        return (
            <Router>
                <div>
                    <AddressBar></AddressBar>
                    <ul className="linkLi">
                        <li><Link to="/aa?id=123&name=minooo">aa</Link></li>
                        <li><Link to="/bb">bb</Link></li>
                        <li><Link to="/cc">ccc</Link></li>
                        <li><Link to="/dd/react/router">dddd</Link></li>
                        <li><NavLink activeClassName="select" to="/bb">eeee</NavLink></li>
                    </ul>
                    <Route exact path="/aa" component={Aa}></Route>
                    <Route path="/bb" component={Bb}></Route>
                    <Route path="/cc" render={() => <div>CCCCCCC</div>}></Route>
                    <Route path="/dd/:page/:supage?" render={({ location, match, history }) => {
                        return (
                            <div>dddd
                                <p><span style={{ 'color': 'red' }}>location: </span>{JSON.stringify(location, null, 2)}</p>
                                <p><span style={{ 'color': 'red' }}>match: </span>{JSON.stringify(match, null, 2)}</p>
                                <p><span style={{ 'color': 'red' }}>history: </span>{JSON.stringify(history, null, 2)}</p>
                            </div>
                        )
                    }}></Route>
                </div>
            </Router>
        )
    }
}

class AddressBar extends Component {
    render() {
        return (
            <Route render={({ location, match, history }) => {
                return (
                    <div>
                        <div>location URL: {JSON.stringify(location, null, 2)}}</div>
                        <div>match URL: {JSON.stringify(match, null, 2)}}</div>
                        <div>history URL: {JSON.stringify(history, null, 2)}}</div>
                    </div>
                )
            }}>
            </Route>
        )
    }
}
export default RouterComponent