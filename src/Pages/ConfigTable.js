import React, { useState } from "react";
import styled from "styled-components";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Form, Input, Button } from "antd";
import SelectedDatasourceCard from "../Components/SelectedDatasourceCard";
import { Link, Switch } from "react-router-dom";
import Axios from "axios";

function ConfigTable() {
  const [form] = Form.useForm();

  const url = "http://192.168.0.103:8092/api/hii";

  const [data, setData] = useState({
    sourceName: "",
    host: "",
    user: "",
    password: "",
    ssl: "",
    databaseName: "",
  });

  function submit(e) {
    e.preventDefault();
    Axios.post(url, {
      type: data.type,
      sourceName: data.sourceName,
      host: data.host,
      user: data.user,
      password: data.password,
      ssl: data.ssl,
      databaseName: data.databaseName,
    }).then((res) => {
      console.log(res.data);
    });
  }

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
  }

  return (
    <ConfigBody>
      <SelectedDatasourceCard />
      <TableContent>
        <h1>Select SourceData Deatils </h1>
        <p>
          Fill in the Configuration’s
          <span>
            <InfoCircleOutlined style={{ marginLeft: 5, fontSize: 12 }} />
          </span>
        </p>
        <SearchBarContent>
          <Form form={form} layout="vertical">
            <Form.Item label="Name" required>
              <Input
                onChange={(e) => handle(e)}
                id="sourceName"
                value={data.sourceName}
                type="text"
                style={{ width: 450, height: 41 }}
                placeholder="input placeholder"
              />
            </Form.Item>
            <Form.Item label="Host" required>
              <Input
                onChange={(e) => handle(e)}
                id="host"
                value={data.host}
                type="value"
                style={{ width: 450, height: 41 }}
                placeholder="input placeholder"
              />
            </Form.Item>
            <Form.Item label="User" required>
              <Input
                onChange={(e) => handle(e)}
                id="user"
                value={data.user}
                type="text"
                style={{ width: 450, height: 41 }}
                placeholder="input placeholder"
              />
            </Form.Item>
            <Form.Item label="Password" required>
              <Input
                onChange={(e) => handle(e)}
                id="password"
                value={data.password}
                type="password"
                style={{ width: 450, height: 41 }}
                placeholder="input placeholder"
              />
            </Form.Item>
            <Form.Item label="SSL Mode" required>
              <Input
                onChange={(e) => handle(e)}
                id="ssl"
                value={data.ssl}
                type="text"
                style={{ width: 450, height: 41 }}
                placeholder="input placeholder"
              />
            </Form.Item>
            <Form.Item label="DataBase Name">
              <Input
                onChange={(e) => handle(e)}
                id="databaseName"
                value={data.databaseName}
                type="text"
                style={{ width: 450, height: 41 }}
                placeholder="input placeholder"
              />
            </Form.Item>
            <Form.Item>
              <Link to={"/configuration/datasource"}>
                {" "}
                <Button onSubmit={(e) => submit(e)} type="primary">
                  Create Connections
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </SearchBarContent>
      </TableContent>
    </ConfigBody>
  );
}

export default ConfigTable;

const ConfigBody = styled.div`
  display: flex;

  width: 100%;

  flex-direction: row;
  gap: 50px;
  justify-content: center;
`;

const TableContent = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-weight: bold;
    font-size: 30px;
    align-items: center;
    letter-spacing: 0.05em;
    line-height: 37px;
    color: #ef7434;
    text-align: center;
  }
  > p {
    font-size: 18px;
    font-weight: 500;
    align-items: center;
    letter-spacing: 0.05em;
    line-height: 37px;
    text-align: center;
  }
`;

const SearchBarContent = styled.div`
  display: flex;
  text-align: right;
  width: 100%;
  justify-content: center;
`;
