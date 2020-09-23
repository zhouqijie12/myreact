// import React, { useState } from 'react';
// import ReactDOM from 'react-dom';
// // // import './index.css';
// import RouterComponent from './react-router'
// // import ToDo from './todo'
// // // import './App.css';
// // import App from './App';
// // import * as serviceWorker from './serviceWorker';


// // function Welcome(props){
// //     return <h3>{props.title}</h3>
// // }
// class Test extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             m: 1
//         }
//     }
//     hander = () => {
//         this.setState((state) => {
//             return {
//                 m: state.m + 1
//             }
//         })
//         this.setState((state) => {
//             return {
//                 m: state.m + 1
//             }
//         })
//         this.setState((state) => {
//             return {
//                 m: state.m + 1
//             }
//         })
//     }
//     render() {
//         let { m } = this.state
//         return (
//             <React.Fragment>
//                 <p>{m}{this.props.children('aaa')}</p>
//                 <button onClick={this.hander}>test</button>
//             </React.Fragment>
//         )
//     }
// }

// class Abc extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             cc: '周奇杰',
//             number: Math.random()
//         }
//         console.log('constructor')
//     }
//     static getDerivedStateFromProps(prop, state) {
//         let cln = null
//         if (state.number > 0.5) {
//             cln = `${state.cc} 老帅了`
//         } else {
//             cln = `${state.cc} 老有钱了`
//         }
//         console.log('getDerivedStateFromProps')
//         return {
//             cc: cln
//         }
//     }
//     componentDidMount() {
//         console.log('组件装载完成')
//     }
//     render() {
//         console.log('render完成')
//         let { cc } = this.state
//         return (
//             <div className="a">{cc}</div>
//         )
//     }
// }
// // function createCurry (func, ...args) {
// //     let len = func.length
// //     return function (...args2) {
// //         let newlen = [...args2, ...args].length
// //         if (newlen < len) {
// //             console.log(len, newlen)
// //             return createCurry.call(this, func, args2)
// //         }
// //         return func.apply(this, args2)
// //     }
// // }

// // function deepCopy (p, c = {}) {
// //     for (let i in p) {
// //         if (p.hasOwnProperty(i)) {
// //             if (typeof p[i] === 'object') {
// //                 c[i] = Array.isArray(p[i]) ? [] : {}
// //                 deepCopy(p[i], c[i])
// //             } else {
// //                 c[i] = p[i]
// //             }
// //         }
// //     }
// //     return c
// // }

// // let father1 = {name:'shangdi',age:1000,job:['teacher','cook']};

// // let children = deepCopy(father1)
// // children.job.push('aaa')
// // console.log(children)
// // console.log(father1)
// // for (var i=1; i<=5; i++) {
// //     (function(i){
// //         setTimeout(()=>{
// //             console.log(i)
// //         },i*1000);
// //     })(i)
// // }

// // var a = 20;
// // function fn() {
// //     function foo() {
// //         console.log(this);
// //     }
// //     foo();
// // }
// // fn();


// // function exam(a, b, c, d, e) {

// //     // 先看看函数的自带属性 arguments 什么是样子的
// //     console.log(arguments);

// //     // 使用call/apply将arguments转换为数组, 返回结果为数组，arguments自身不会改变
// //     var arg = [].slice.call(arguments);

// //     console.log(arg);
// // }

// // exam(2, 8, 9, 10, 3);

// function add(a, b, c, d) {
//     return a + b + c + d;
// }

// console.log('dasaa');
// function createCurry(func, ...args) {
//     let arity = func.length;
//     var argss = args || [];
//     return function () {
//         let allArgs = argss.slice(0);
//         var _args = [].slice.call(arguments);
//         allArgs.push(..._args);
//         // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
//         if (allArgs.length < arity) {
//             return createCurry.call(this, func, ...allArgs);
//         }
//         // 参数收集完毕，则执行func
//         return func.apply(this, allArgs);
//     }
// }

// const curryAdd = createCurry(add, 2);
// let sum = curryAdd(3)(4)(5);    // 14
// console.log(sum);


// // const createCurry = (fn, ...args) => {
// //     let _args = args || [];
// //     let length = fn.length; // fn.length代码函数参数数量

// //     return (...rest) => {
// //         let _allArgs = _args.slice(0);
// //         // 深拷贝闭包共用对象_args，避免后续操作影响（引用类型）
// //         _allArgs.push(...rest);
// //         if (_allArgs.length < length) {
// //             // 参数数量不满足原始函数数量，返回curry函数
// //             return createCurry.call(this, fn, ..._allArgs);
// //         } else {
// //             // 参数数量满足原始函数数量，触发执行
// //             return fn.apply(this, _allArgs);
// //         }
// //     }
// // }

// // const curryAdd = createCurry(add, 2);
// // let sum = curryAdd(3)(4)(5);    // 14
// // console.log(sum);

// function combineReducers(reducers) {
//     const reducerKeys = Object.keys(reducers)
//     const finalReducers = {}
//     for (let i = 0; i < reducerKeys.length; i++) {
//         const key = reducerKeys[i]
//         if (typeof reducers[key] === 'function') {
//             finalReducers[key] = reducers[key]
//         }
//     }
//     const finalReducerKeys = Object.keys(finalReducers)

//     return function combination(state = {}, action) {
//         let hasChanged = false
//         const nextState = {}
//         for (let i = 0; i < finalReducerKeys.length; i++) {
//             const key = finalReducerKeys[i]
//             const reducer = finalReducers[key]
//             const previousStateForKey = state[key]
//             const nextStateForKey = reducer(previousStateForKey, action)
//             nextState[key] = nextStateForKey
//             hasChanged = hasChanged || nextStateForKey !== previousStateForKey
//         }
//         return hasChanged ? nextState : state
//     }
// }
// function a() {

// }
// function b() {

// }
// combineReducers({
//     a,
//     b
// })

// function Example() {
//     const [num, setNum] = useState(1);
//     return (

//         <div>
//             <p>{num}</p>
//             <button onClick={() => setNum(num + 1)}></button>
//         </div>
//     )
// }
// ReactDOM.render(
//     <div className="todoapp">
//         {/* {Welcome({'title':'cccc'})} */}
//         {/* <Welcome title="aaa"/>*/}
//         {/* <Abc />
//         <Test>
//             {
//                 (xx) => {
//                     return <span>{xx}</span>
//                 }
//             }
//         </Test> */}
//         {/* <RouterComponent /> */}
//         <Example abc="ss" />
//         {/*todolist 例子*/}
//         {/* <ToDo /> */}
//     </div>,
//     document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// // serviceWorker.unregister();
