import { Button, Col, Form, Row, Select } from "antd";

import { SortingBoxComponentProps } from "./types";
import { SortingBoxContainer } from "./styled";

const SortingBoxComponent = (props: SortingBoxComponentProps) => {
  const { Option } = Select;
  const onFinish = (values: any) => {
    console.log(values);
  };
  return (
    <SortingBoxContainer>
      <Form onFinish={onFinish}>
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item name={"sortBy"} label={"Sort By"}>
              <Select allowClear>
                <Option value={"uptime"}>Uptime</Option>
                <Option value={"created"}>Created</Option>
                <Option value={"status"}>Dtatus</Option>
                <Option value={"default"}>Default</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name={"order"} label={"order"}>
              <Select>
                <Option value={"accending"}>Accending</Option>
                <Option value={"decending"}>Decending</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={2}>
            <Form.Item>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </SortingBoxContainer>
  );
};

export default SortingBoxComponent;
