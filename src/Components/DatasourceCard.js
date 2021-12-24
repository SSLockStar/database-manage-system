import React from "react";
import { Card } from "antd";
import styled from "styled-components";
import { Col } from "antd";
import { Link } from "react-router-dom";
function Datasources() {
  const dataSource = [
    {
      img: "../images/Postgre.png",
      title: "PostGreSQL",
      type: "POSTGRESSQL",
      objectId: 0,
    },
    {
      img: "../images/Snowflake.png",
      title: "SnowFlake",
      type: "SNOWFLAKE",
      objectId: 1,
    },
    {
      img: "../images/Amazon.png",
      title: "Amazon S3 CSV",
      type: "AMAZON",
      objectId: 2,
    },
    {
      img: "../images/Dynamo.png",
      title: "Dynamo DB",
      type: "DYNAMO",
      objectId: 3,
    },
    {
      img: "../images/Ibm.png",
      title: "SnowFlake",
      type: "SNOWFLAKE",
      objectId: 4,
    },
    {
      img: "../images/MySql.png",
      title: "MySQL",
      type: "MYSQL",
      objectId: 5,
    },
    {
      img: "../images/Mango.png",
      title: "Mamgo DB",
      type: "MANGO",
      objectId: 6,
    },
    {
      img: "../images/Addnew.png",
      title: "Add Datasource",
      type: "ADD",
      objectId: 5,
    },
  ];

  return (
    <>
      {dataSource.map((data) => {
        return (
          <Col span={8}>
            <Link to={"/configuration"}>
              <Card id={data.objectId} hoverable>
                {console.log(data)}
                <ImageContainer>
                  <img src={data.img} />
                </ImageContainer>
                <ImageName>
                  <p>{data.title}</p>
                </ImageName>
              </Card>
            </Link>
          </Col>
        );
      })}
    </>
  );
}

export default Datasources;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageName = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  > p {
    align-items: center;
  }
`;
