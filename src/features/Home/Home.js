import React from "react";
import QueryInput from "./QueryInput";
import QueryResult from "./QueryResult";
import { updateInputValue, queryImg } from "./action";
import { connect } from "react-redux";
import styled from "styled-components";

const StyledQueryInput = styled(QueryInput)`
  width: 80% !important;
  margin: auto;
`;

const Container = styled.div.attrs({
  className: "container"
})`
  margin: 3%;
`;

const Home = ({
  inputValue,
  responseQueryImageData,
  onSubmitForm,
  onInputChange
}) => (
  <Container>
    <StyledQueryInput
      inputValue={inputValue}
      onSubmitForm={onSubmitForm}
      onInputChange={onInputChange}
    />

    <QueryResult dataList={responseQueryImageData} />
  </Container>
);

const matchStateToProps = state => ({
  inputValue: state.homeStore.inputValue,
  responseQueryImageData: state.homeStore.responseQueryImageData
});

const matchActionToProps = dispatch => ({
  onSubmitForm: value => dispatch(queryImg(value)),
  onInputChange: value => dispatch(updateInputValue(value))
});

export default connect(matchStateToProps, matchActionToProps)(Home);
