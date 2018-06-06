import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux2/Aux2';

const withErrorHandler = ( WrappedComponent, axios ) => {
  return class extends Component {
    state = {
      error: null,
    }

    componentWillMount() {
      this.reqInterceptors = axios.interceptors.request.use(req => {
        this.setState({error: null});
        return req;
      });
      
      this.resInterceptors = axios.interceptors.response.use(req => req, error => {
        this.setState({error: error});
      });
    }

    componentWillUnmount() {
      // console.log('will unmonth', this.reqInterceptors, this.resInterceptors);
      axios.interceptors.request.eject(this.reqInterceptors);
      axios.interceptors.response.eject(this.resInterceptors);
    }

    errorConfimedHandler = () => {
      this.setState({error: null});
    }

    render () {
      return (
        <Aux>
          <Modal 
            show={this.state.error}
            modalClosed={this.errorConfimedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent 
            {...this.props} 
          />
        </Aux>
      );
    }
  }
}

export default withErrorHandler;