import { Button, Form, Select } from "antd";

import { SortingBoxComponentProps } from "./types";

const SortingBoxComponent = (props: SortingBoxComponentProps) => {
  const { Option } = Select;
  const onFinish = (values: any) => {
    console.log(values);
  };
  const [form] = Form.useForm();
  return (
    <div>
      <Form form={form} onFinish={onFinish} >
        <Form.Item name={"sortBy"} label={"Sort By"}>
          <Select allowClear defaultValue={"default"}>
            <Option value={"uptime"}>Uptime</Option>
            <Option value={"created"}>Created</Option>
            <Option value={"status"}>Dtatus</Option>
            <Option value={"default"}>Default</Option>
          </Select>
        </Form.Item>
        <Form.Item name={"order"} label={"order"}>
          <Select defaultValue={"accending"}>
            <Option value={"accending"}>Accending</Option>
            <Option value={"decending"}>Decending</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary">Submit</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SortingBoxComponent;
