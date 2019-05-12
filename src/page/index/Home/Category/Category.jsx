import React, { Component } from 'react'
import {connect} from 'react-redux'
import action from '../../store/action';
import './Category.scss'



class Category extends Component {
 constructor(props,context){
  super(props,context)
  this.props.getHeaderData();
 }

//  componentWillReceiveProps(){
//     let {items,getHeaderData} = this.props;
//     if (!items) {
//         getHeaderData();
//     }
//  }
 

renderItem=()=>{
    let {items} = this.props;
    items = items.slice(0,8);
    return items.map((item,index)=>{
        let {name,url} = item; 
        return <div key={index} className='category-item'>
                <img className='item-icon' src={url} alt=""/>
                <p className='item-name'>{name}</p>
                </div>
    })
}

 render() {
  return (
      <div className='category-content clearfix'>
      {this.renderItem()}
      </div>
    )
 }
}
export default connect(state=>({
    ...state.category
}),action.category)(Category);