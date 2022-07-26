import { useState } from "react";
import { Col, Form, Row, Select, Input, Slider, Button } from "antd";
import { useSearchParams, useNavigate } from "react-router-dom";

import { FilterBoxContainer, FilterBoxHeader } from "./styled";
import { IFilterFormValues } from "./types";

const FilterBoxComponent = () => {
  let navigate = useNavigate();
  const { Option } = Select;
  const [orderEnable, setOrderEnable] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();

  const onFinish = (values: IFilterFormValues) => {
    let currentParams: any = {};
    searchParams.forEach((k, v) => (currentParams[v] = k));
    const newParams = { ...currentParams, ...values }
    let paramsObject:any = new Object;
    Object.entries(newParams).map((entry) => {
      if (entry[1]) {
        paramsObject[entry[0]] = entry[1]
      }
    });
    setSearchParams(paramsObject);
  };

  return (
    <FilterBoxContainer>
      <FilterBoxHeader>Filter</FilterBoxHeader>
      <Form method="get" onFinish={onFinish}>
        <Row gutter={24}>
          <Col span={5}>
            <Form.Item name={"serverName"} label={"Server Name"}>
              <Input />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name={"status"} label={"Status"}>
              <Select mode="multiple"  allowClear>
                <Option value={"online"}>online</Option>
                <Option value={"offline"}>offline</Option>
                <Option value={"idle"}>idle</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              name={"cpuUtilization"}
              label={"CPU Utilization (percent)"}
            >
              <Slider range defaultValue={[0,100]} />
            </Form.Item>
          </Col>
          <Col span={4}>
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
