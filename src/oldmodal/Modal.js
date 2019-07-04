import React, { Component } from 'react';
import styled from 'styled-components';
import { TextInput } from '../TextInput';
import Header from '../Header';
import PropTypes from 'prop-types';

const ModalOverlay = styled.div`
  position: fixed;
  ${props => (props.toggle ? 'display: flex;' : 'display: none;')}
  justify-content: center;
  align-items: center;
  background: grey;
  opacity: 0.8;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;
const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  width: 420px;
  height: 500px;
  opacity: 1;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  text-align: center;
  > * {
    padding: 15px;
  }

`;
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

class Modal extends Component {
  state = {
    firstname: '',
    lastname: '',
    organisation: '',
    email: '',
    password: ''
  };
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <ModalOverlay toggle={this.props.toggle}>
          <ModalContent>
            <Form onSubmit={e => e.preventDefault()}>
              <Header>Register</Header>
              <TextInput placeholder={'Enter First Name...'} />
              <TextInput placeholder={'Enter Last Name...'} />
              <TextInput placeholder={'Enter Organisation...'} />
              <TextInput placeholder={'Enter Email...'} />
              <TextInput placeholder={'Enter password max 8 char...'} />
              <Button>Cancel</Button>
              <Button type="submit">Submit</Button>
            </Form>
          </ModalContent>
        </ModalOverlay>
      </div>
    );
  }
}

export default Modal;
