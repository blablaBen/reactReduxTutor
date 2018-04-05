import React from "react";
import styled from "styled-components";
import ImageItem from "./ImageItem";

const Container = styled.div`
  margin: 5%;
`;

const QueryResult = ({ dataList }) => (
  <Container>
    {dataList.map(function(item, i) {
      return <ImageItem data={item} key={i} />;
    })}
  </Container>
);

export default QueryResult;
