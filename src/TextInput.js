import * as React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: transparent;
  border: 1px grey solid;
  border-radius: 5px;
  padding: 5px 10px;
  width: 100%;
  font-size: 12px;
  line-height: 20px;
  box-sizing: border-box;
  padding-left: 10px;
  &:focus {
    outline: none;
    border: 2px solid orange;
  }
  ${props => props.extraStyles};
`;

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  color: white;
`;

export const TextInput = props => {
  const { label, placeholder, type = 'text', extraStyles } = props;

  const onChangeHandler = e => {
    onChange(e.target.value);
  };

  return (
    <StyledLabel>
      {label}
      <StyledInput
        {...{
          onChange: onChangeHandler,
          placeholder,
          extraStyles,
          type
        }}
      />
    </StyledLabel>
  );
};

// ${props =>
// background-color: white;
// height: 45px;
// width: 380px;
// margin: 5px 0 15px 0;
// border: none;
// border: ${({
//       isDirty,
//       isValid
//   }: {
//       isDirty: boolean
//       isValid: boolean
//   }) =>
//           isDirty
//               ? isDirty && !isValid
//                   ? `2px solid red`
//                   : `2px solid green`
//               : `none`};
// border-radius: 3px;
