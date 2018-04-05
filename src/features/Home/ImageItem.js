import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button
} from "reactstrap";

const ImageItem = ({ data, key }) => (
  <div className="d-inline-flex p-2 w-25">
    <Card key={key}>
      <CardImg top width="30%" src={data.urls.thumb} alt="Card image cap" />
      <CardBody>
        <CardTitle>{data.name}</CardTitle>
        <CardSubtitle>{data.user.instagram_username}</CardSubtitle>
        <CardText>Profile: {data.user.portfolio_url}</CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  </div>
);

export default ImageItem;
