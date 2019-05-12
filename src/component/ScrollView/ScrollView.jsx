import React, { Component } from 'react'
import Loading from '../Loading/Loading'
class ScrollView extends Component {

    onLoadPage=()=>{
        let clientHeight = document.documentElement.clientHeight,
            scrollHeight = document.body.scrollHeight,
            scroll = document.documentElement.scrollTop;

        let proLoadDis = 30;
        if (scroll+clientHeight>= (scrollHeight-proLoadDis)) {
            if (!this.props.isend) {
                this.props.loadCallback && this.props.loadCallback();
            }
        }
        
        
    }
    componentWillMount(){
        window.addEventListener('scroll',this.onLoadPage.bind(this));
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.onLoadPage.bind(this));
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
export default ScrollView;