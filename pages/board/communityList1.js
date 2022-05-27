import React,{useState} from 'react';
import {connect} from 'react-redux';
import {CommunityList1} from '@/components';

const CommunityList1Page = ({}) => {
    const [table, setTable] = useState({blah:''})


    const onChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setTable({
            ...table,
            [name]: value
        })
    }
    
    const onSubmit = e => {
        e.preventDefault()
        
    
    }
    return (
     <CommunityList1 onChange={onChange} onSubmit={onSubmit}/>);
};
const mapStateToProps = state => ({})
const CommunityList1Actions = {}
export default connect(mapStateToProps, CommunityList1Actions)(CommunityList1Page);