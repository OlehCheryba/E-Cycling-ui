import React from 'react';
import AdminPanel from './AdminPanel';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/reducers/admin-reducer';


const AdminPanelContainer = (props) => {
  return (
    <AdminPanel {...props} />
  )
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, { addProduct })(AdminPanelContainer);