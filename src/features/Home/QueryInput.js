import React from "react";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const QueryInput = ({ inputValue, onSubmitForm, onInputChange, className }) => (
  <InputGroup className={className}>
    <Input
      type="text"
      value={inputValue}
      onChange={e => {
        onInputChange(e.target.value);
      }}
    />
    <InputGroupAddon addonType="prepend">
      <Button
        onClick={e => {
          onSubmitForm(inputValue);
        }}
      >
        Search
      </Button>
    </InputGroupAddon>
  </InputGroup>
);

export default QueryInput;
