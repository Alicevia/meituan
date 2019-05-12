import React, { Component } from 'react'
import {connect} from 'react-redux'
import './Header.scss'
import action from '../store/action';
import {TABKEY} from '../store/config'

class Header extends Component {
 constructor(props,context){
  super(props,context)
  this.props.getFilterData();
 }

 changeTab=(key)=>{
     let closePanel = false;
     if ((this.props.activeKey===key)&& !this.props.closePanel) {
         closePanel = true;
     }
    this.props.changeTab({key,closePanel})
 } 

 revertActive=(key,dataList)=>{
    if (key===TABKEY.cate) {
        for (let i = 0; i < dataList.length; i++) {
            for (let j = 0; j < dataList[i].sub_category_list.length; j++) {
                dataList[i].sub_category_list[j].active =false;
            }
            
        }
    }else if (key===TABKEY.type) {
        for (let i = 0; i < dataList.length; i++) {
            dataList[i].active = false;
            
        }
    }else {
        for (let i = 0; i < dataList.length; i++) {
            for (let j = 0; j < dataList[i].items.length; j++) {
                dataList[i].items[j].active =false;
                
            }
            
        }
    }
 }

 changeDoFilter=(item,key,dataList)=>{
     this.revertActive(key,dataList);
     item.active = true;
     this.props.changeFilter({item,key});


     let closePanel = !this.props.closePanel;
     this.props.changeTab({key,closePanel})
     


    this.props.getContentListFilterData({
        filterData:item,
        page:0,
        isend:false
    })




 }





 renderTabs(){
     let {tabs,activeKey} = this.props;
     let array=[];
     for (const key in tabs) {
         if (tabs.hasOwnProperty(key)) {
             let item = tabs[key];
             let cls = item.key+' item';
             if (item.key===activeKey && !this.props.closePanel) {
                 cls+=' current'
             }
             array.push(
                 <div className={cls} key={item.key} onClick={()=>{this.changeTab(item.key)}}>
                     {item.text}
                 </div>
             )
         }
     }

     return array
 }



renderCateInnerContent(items,cateList){
    if (items.length===0) {
        return ''
    }
    return items.sub_category_list.map((item,index)=>{
         let cls = item.active?'cate-box-inner active':'cate-box-inner';
        return (
            <div className="cate-box" key={index} onClick={()=>this.changeDoFilter(item,TABKEY.cate,cateList)}>
                <div className={cls}>
                    {item.name}({item.quantity})
                </div>
            </div>
        )
    })
}

 renderCateContent(){
     let cateList = this.props.filterData.category_filter_list||[];
    return cateList.map((item,index)=>{
        let {name,quantity} = item;
        return (
            <li key={index} className='cate-item'>
                <p className="item-title">{name}<span className='item-count'>{quantity}</span></p>
                <div className="item-conetnt clearfix">
                    {this.renderCateInnerContent(item,cateList)}
                </div>
            </li>
        )
    })


 }

renderTypeContent(){
    let typeList = this.props.filterData.sort_type_list||[];
    return typeList.map((item,index)=>{
        let cls = item.active?'type-item active':'type-item';
        return (
            <li key={index} className={cls} onClick={()=>this.changeDoFilter(item,TABKEY.type,typeList)}>
                {item.name}
            </li>
        )
    })
}

 renderContent(){
     let {tabs,activeKey} = this.props;
     let array =[];
     for (let key in tabs) {
         if (tabs.hasOwnProperty(key)) {
             let item = tabs[key];
             let cls = item.key +'-panel';
             if (item.key===activeKey) {
                 cls+=' current'
             }
             if (item.key===TABKEY.cate) {
                 array.push(
                     <ul key={item.key} className={cls}>
                        {this.renderCateContent()}
                     </ul>
                 )
             }else if (item.key===TABKEY.type) {
                array.push(
                    <ul key={item.key} className={cls}>
                       {this.renderTypeContent()}
                    </ul>
                )
            }else if (item.key===TABKEY.filter) {
                array.push(
                    <ul key={item.key} className={cls}>
                       {this.renderFilterContent()}
                    </ul>
                )
            }
             
         }
     }
     return array;
 }

 renderFilterInnerContent(items,filterList){
    return items.map((item,index)=>{
        let cls = item.icon?'cate-box-inner has-icon':'cate-box-inner';
        if (item.active) {
            cls+=' active';
        } 
        return (
            <div key={index} className='cate-box' onClick={()=>this.changeDoFilter(item,TABKEY.filter,filterList)}>
                <div className={cls}>
                   {item.icon?<img src={item.icon} />:null} {item.name}
                </div>
            </div>
        )
    })
 }

 renderFilterContent(){
     let filterList = this.props.filterData.activity_filter_list||[];
     return filterList.map((item,index)=>{
         return (
             <li key={index} className='filter-item'>
                <p className="filter-title">{item.group_title}</p>
                <div className="item-content clearfix">
                    {this.renderFilterInnerContent(item.items,filterList)}
                </div>
             </li>
         )
     })
 }


 render() {
     let cls = 'panel';
     console.log(this.props.closePanel)
     if (!this.props.closePanel) {
        cls ='panel show' 
     }

  return (
      <div className='header'>
        <div className='header-top'>
            {this.renderTabs()}
        </div>
        <div className={cls}>
            <div className="panel-inner">
                {this.renderContent()}
            </div>
        </div>
      </div>
    )
 }
}
export default connect(state=>({...state.header}),{
    ...action.header,
    ...action.contentList
})(Header);