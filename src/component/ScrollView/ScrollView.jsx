import React, { Component } from 'react'
import Loading from '../Loading/Loading'
import {connect} from 'react-redux'

class ScrollView extends Component {
    constructor(props){
        super(props);
        this._onLoadPage = this.onLoadPage.bind(this)
    }

    onLoadPage=()=>{
        
        if (!this.props.readyToLoad) {
            return;
        }
        let clientHeight = document.documentElement.clientHeight,
            scrollHeight = document.body.scrollHeight,
            scroll = document.documentElement.scrollTop;

        let proLoadDis = 30;
        if (scroll+clientHeight>= (scrollHeight-proLoadDis)) {
            if (!this.props.isend) {
                if (!this.props.readyToLoad) {
                    return;
                }
                this.props.loadCallback && this.props.loadCallback();
            }
        }
        
        
    }
    componentWillMount(){
        window.addEventListener('scroll',this._onLoadPage);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this._onLoadPage);
    }    
        


    render() {
        return (
            <div className='scrollview'>
                {this.props.children}
                <Loading isend={this.props.isend}></Loading>
            </div>
        )
    }
}
export default connect(state=>state.scrollView)(ScrollView);