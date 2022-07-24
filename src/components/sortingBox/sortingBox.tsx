import { useState } from "react";
import { Col, Form, Row, Select } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";

import { SortingBoxContainer } from "./styled";
import { ISortFormValues } from "./types";

const SortingBoxComponent = () => {
  const { Option } = Select;
  const [orderEnable, setOrderEnable] = useState(false);
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <SortingBoxContainer>
      <Form
        onValuesChange={(changedValue, allValues: ISortFormValues) => {
          setOrderEnable(allValues.sortBy ? true : false);
          if (allValues.sortBy) {
            setSearchParams({
              sortBy: allValues.sortBy,
              order: allValues.order ? allValues.order : "ascend" ,
            });
          } else {
            setSearchParams({});
          }
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
                  <Option value={"ascend"}>ascend</Option>
                  <Option value={"descend"}>descend</Option>
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
