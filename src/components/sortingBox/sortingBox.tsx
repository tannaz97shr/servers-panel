import { useState } from "react";
import { Col, Form, Row, Select } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";

import { SortingBoxContainer } from "./styled";

import { SortbyType, SortingOrderType } from "../../models/servers";
export interface ISortFormValues {
  sortBy: SortbyType;
  order: SortingOrderType;
}

const SortingBoxComponent = () => {
  const { Option } = Select;
  const [orderEnable, setOrderEnable] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <SortingBoxContainer>
      <Form
        onValuesChange={(changedValue, allValues:ISortFormValues) => {
          console.log("form values", allValues);
          setOrderEnable(allValues.sortBy ? true : false);
          if (allValues.sortBy) setSearchParams({ sortBy: allValues.sortBy });
        }}
      >
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item name={"sortBy"} label={"Sort By"}>
              <Select allowClear>
                <Option value={"uptime"}>Uptime</Option>
                <Option value={"created"}>Created</Option>
                <Option value={"status"}>Status</Option>
              </Select>
            </Form.Item>
          </Col>
          {orderEnable ? (
            <Col span={6}>
              <Form.Item name={"order"} label={"order"}>
                <Select>
                  <Option value={"accending"}>Accending</Option>
                  <Option value={"decending"}>Decending</Option>
                </Select>
              </Form.Item>
            </Col>
          ) : null}
        </Row>
      </Form>
    </SortingBoxContainer>
  );
};

export default SortingBoxComponent;
