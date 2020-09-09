import React, {Component} from 'react'
import { Input, List, Button } from 'antd'
import styled from 'styled-components'
import store from "@/store"

class FormInfo extends Component {
    constructor(props) {
        super(props)
        this.state = store.getState()
        // 直接使用箭头函数(会新建函数，创建没必要的函数多了就影响性能)改变this在构造函数中影响性能
        this.changeInputValue = this.changeInputValue.bind(this)
        this.storeChange = this.storeChange.bind(this)
        store.subscribe(this.storeChange)
    }

    changeInputValue(e) {
        const action = {
            type: "changeInput",
            value: e.target.value
        }
        store.dispatch(action)
    }

    storeChange() {
        this.setState(store.getState())
    }
    
    render() { 
        return (
            <Container>
                <Input placeholder={this.state.inputValue} onChange={this.changeInputValue}/>
                <Button type="primary">Submit</Button>
            
                <List 
                    bordered
                    dataSource = {this.state.list}
                    renderItem = {item => (
                        <List.Item>{item}</List.Item>
                    )}
                />
            </Container>
         );
    }
}
 
export default FormInfo;


// style
const Container = styled.div`
    width: 100%;
    max-width: 800px;
    padding: 10px;

    Input {
        width: 350px;
        margin-right: 5px;
        margin-bottom: 10px;
        padding: 5px 10px;
        box-sizing: border-box;
    }

    Button {
        margin-bottom: 10px;
    }
`