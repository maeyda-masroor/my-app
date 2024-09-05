import React from 'react';
import { Form, Input, Row, Col , Button} from 'antd';

const MyForm = () => {
  return (
    <Form layout="vertical">
      <Row gutter={[16, 16]}>
        <Col span={8}>
          <Form.Item label="Field 1" name="field1">
            <Input />
          </Form.Item>
          <Form.Item label="Field 2" name="field2">
            <Input />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="Field 3" name="field3">
            <Input />
          </Form.Item>
          <Form.Item label="Field 4" name="field4">
            <Input />
          </Form.Item>
          <Form.Item label="Field 5" name="field5">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;