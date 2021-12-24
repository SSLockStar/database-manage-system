import React from "react";
import styled from "styled-components";
import {
  SearchOutlined,
  FilterOutlined,
  TableOutlined,
  EyeInvisibleFilled,
  EditFilled,
} from "@ant-design/icons";
import { Input, DatePicker, Checkbox, Table } from "antd";
import SelectedDatasourceCard from "../Components/SelectedDatasourceCard";
import { Button } from "antd";
import { Link } from "react-router-dom";

function DatasourceTable() {
  const columns = [
    {
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "center",
    },
    {
      width: 40,
      dataIndex: "date",
      key: "date",
      fixed: "center",
    },
    {
      key: "operation",
      width: 40,
      render: () => (
        <div style={{ display: "flex", flexDirection: "row", gap: 30 }}>
          <p>
            <EditFilled />
          </p>
          <p>
            <EyeInvisibleFilled />
          </p>
          <p>
            <Checkbox />
          </p>
        </div>
      ),
    },
  ];
  const data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: ` Edrward ${i}`,
      date: "06/12/2021",
    });
  }

  function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
  }
  const suffix = (
    <SearchOutlined
      style={{
        fontSize: 20,
        color: "#ef7434",
      }}
    />
  );

  const suffix1 = (
    <FilterOutlined
      style={{
        fontSize: 20,
        color: "#ef7434",
      }}
    />
  );

  return (
    <Tableview>
      <CardComponent>
        <SelectedDatasourceCard />
        <Button>
          <TableOutlined /> Create Custom Table
        </Button>
      </CardComponent>
      <TableContent>
        <Header>
          <h1>Select The Table From the DataSource</h1>
        </Header>
        <Components>
          <Input
            placeholder="Search Your Source"
            style={{ width: 283, height: 41 }}
            suffix={suffix}
          />
          <Input
            placeholder="Search Your Source"
            style={{ width: 147, height: 41 }}
            suffix={suffix1}
          />

          <DatePicker size={"large"} />
          <CheckboxSelect>
            <Checkbox onChange={onChange}>Select All</Checkbox>
          </CheckboxSelect>
        </Components>

        <Table
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: 800, y: 400 }}
          style={{ width: 900, marginTop: 30 }}
        />
        <ButtonPosition>
          <Link to={"/configuration/datasource/martdetails"}>
            <Button type="primary">Add Tables</Button>
          </Link>
        </ButtonPosition>
      </TableContent>
    </Tableview>
  );
}

export default DatasourceTable;
const Tableview = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 40px;

  margin-left: 200px;
`;
const CardComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;

const TableContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  > h1 {
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 0.05em;
    color: #ef7434;
  }
`;

const Components = styled.div`
  display: flex;
  width: 100%;
  margin-top: 25px;
  justify-content: center;
  gap: 20px;
`;
const CheckboxSelect = styled.div`
  display: flex;
  margin-left: 160px;
  align-items: center;
`;
const ButtonPosition = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: 100%;
`;
