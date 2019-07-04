import * as React from 'react';
import styled from 'styled-components';
import ModalHook from './modal/ModalHook';
import { TextInput } from './TextInput';
import Header from './Header';
const ModalOverlay = styled.div`
  position: fixed;
  display: flex;
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
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  > * {
    margin-bottom: 20px;
  }
`;
const FromControls = styled.div`
  display: flex;
  > * {
    &:last-child {
      margin-left: 50px;
    }
  }
`;
const Button = styled.button`
  flex-grow: 1;
  height: 35px;
  background: transparent;
  border-radius: 3px;
  font-size: 14px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  &:hover {
    border: 3px solid teal;
    color: teal;
  }
`;

class ToggleButton extends React.Component {
  state = { showModal: true };

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    return (
      <>
        <Button onClick={this.toggleModal}>Hello React,Webpack4,Babel7!</Button>
        {this.state.showModal ? (
          <ModalHook>
            <div>
              <ModalOverlay onClick={this.toggleModal}>
                <ModalContent>
                  <Form onSubmit={e => e.preventDefault()}>
                    <Header>Register</Header>
                    <TextInput placeholder={'Enter First Name...'} />
                    <TextInput placeholder={'Enter Last Name...'} />
                    <TextInput placeholder={'Enter Organisation...'} />
                    <TextInput placeholder={'Enter Email...'} />
                    <TextInput placeholder={'Enter password max 8 char...'} />
                    <FromControls>
                      <Button onClick={this.toggleModal}>Cancel</Button>
                      <Button type="submit">Submit</Button>
                    </FromControls>
                  </Form>
                </ModalContent>
              </ModalOverlay>
            </div>
          </ModalHook>
        ) : null}
      </>
    );
  }
}

export default ToggleButton;
