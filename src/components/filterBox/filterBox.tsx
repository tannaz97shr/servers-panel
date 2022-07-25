import { useState } from "react";
import { Col, Form, Row, Select, Input, InputNumber, Button } from "antd";
import { useSearchParams, useNavigate } from "react-router-dom";

import { StatusType } from "../../models/servers";
import { FilterBoxContainer } from "./styled";
import { IFilterFormValues } from "./types";

const FilterBoxComponent = () => {
  let navigate = useNavigate();
  const { Option } = Select;
  const [orderEnable, setOrderEnable] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const onFinish = (values: IFilterFormValues) => {
    // navigate(`/${}`);
    let paramsObject:any = new Object;
    Object.entries(values).map((entry) => {
      if (entry[1]) {
        paramsObject[entry[0]] = entry[1]
      }
    });
    console.log(Object.fromEntries([...searchParams]))
    // setSearchParams({...searchParams,...paramsObject });
  };

  return (
    <FilterBoxContainer>
      <Form onFinish={onFinish}>
        <Row gutter={24}>
          <Col span={6}>
            <Form.Item name={"serverName"} label={"Server Name"}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name={"status"} label={"Status"}>
              <Select allowClear>
                <Option value={"online"}>online</Option>
                <Option value={"offline"}>offline</Option>
                <Option value={"idle"}>idle</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={7}>
            <Form.Item
              name={"cpuUtilization"}
              label={"CPU Utilization (percent)"}
            >
              <InputNumber min={1} max={100} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </FilterBoxContainer>
  );
};

export default FilterBoxComponent;
