import {Collapse, Form, Input, Button ,Select ,Row, Col, Radio,Checkbox} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Upload } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
const { Search } = Input;
function NewContact(){
    const props: UploadProps = {
        action: '//jsonplaceholder.typicode.com/posts/',
        listType: 'picture',
        previewFile(file) {
          console.log('Your upload file:', file);
          // Your process logic. Here we just mock to the same file
          return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
            method: 'POST',
            body: file,
          })
            .then(res => res.json())
            .then(({ thumbnail }) => thumbnail);
        },
      };
    const onChange = (e: CheckboxChangeEvent) => {
        console.log(`checked = ${e.target.checked}`);
      };    
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
      };
      const onSearch = (value: string) => console.log(value);    
    return (
        <div className="App">
      <Collapse accordion>
        <Collapse.Panel header="Contact Details" key="1" style={{backgroundColor:'#4d7de1'}}>
            <div style={{backgroundColor:'#38b6ff',color:'white',borderRadius:'5px',padding:'5px'}}>
                <Form layout='horizontal'>
                <Row gutter={16}>
                <Col span={2}>
                    <Select
                    defaultValue="lucy"
                    onChange={handleChange}
                    options={[
                        {
                        value: 'jack',
                        label: 'Jack',
                        },
                        {
                        value: 'lucy',
                        label: 'Lucy',
                        },
                        {
                        value: 'disabled',
                        disabled: true,
                        label: 'Disabled',
                        },
                        {
                        value: 'Yiminghe',
                        label: 'yiminghe',
                        },
                    ]}
                    />
                </Col>
                <Col span={4}>
                <Form.Item label="Firstname">
                <Input name="firstname" />
                </Form.Item>
                </Col>
                <Col span={4}>
                <Form.Item label="middlename">
                <Input name="middlename" />
                </Form.Item>
                </Col>
                <Col span={4}>
                <Form.Item label="lastname">
                <Input name="lastname" />
                </Form.Item>
                </Col>
                <Col span={2}>
                <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                    {
                value: 'jack',
                label: 'Jack',
                },
                {
                value: 'lucy',
                label: 'Lucy',
                },
                {
                value: 'disabled',
                disabled: true,
                label: 'Disabled',
                },
                {
                value: 'Yiminghe',
                label: 'yiminghe',
                },
            ]}
            />
                </Col>
                </Row>
                <Row gutter={16}>
                <Col span={8}>
                <Search
                    addonBefore="https://"
                    placeholder="input search text"
                    allowClear
                    onSearch={onSearch}
                    style={{ width: 304 }}
                    />

                </Col>
                <Col span={4}>
                <Form.Item label="Job Title">
                <Input name="jobtitle" />
                </Form.Item>
                </Col>
                <Col span={4}>
                <Form.Item label="Nickname">
                <Input name='Nickname'/>
                </Form.Item>
                </Col>
                </Row>
                <Row gutter={16}>
            <Col span={4}>
            <Form.Item label="Email">
                <Input name='email'/>
            </Form.Item>
            </Col>
            <Col span={3}>
            <Form.Item label="">
            <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />
            </Form.Item>
        </Col>
        <Col span={4}>
        <Checkbox onChange={onChange}>Checkbox</Checkbox>;
        </Col>
        <Col span={4}>
            <Form.Item>
            <Radio>
            Primary
            </Radio>
            </Form.Item>
        </Col>
    </Row>
    <Row gutter={16}>
        <Col span={4}>
            <Form.Item label="Phone">
                <Input name='phone'/>
                <p>Add anther phone number</p>
            </Form.Item>
        </Col>
        <Col span={4}>
            <Form.Item label="ext">
                <Input name='ext'/>
            </Form.Item>
        </Col>
        <Col span={4}>
            <Form.Item label="Phone Location">
            <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />
            </Form.Item>
        </Col>
        <Col span={4}>
            <Form.Item label="Phone type">
            <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />
            </Form.Item>
        </Col>
    </Row>
    <Row gutter={16}>
      <Col span={4}>
        <Form.Item label="Instant Massenger">
          <Input name='instantMassenger'/>
        </Form.Item>
      </Col>
      <Col span={4}>
            <Form.Item label="IMLocation">
            <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />
            </Form.Item>
        </Col>
        <Col span={4}>
            <Form.Item label="IMtype">
            <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />
            </Form.Item>
        </Col>
    </Row>
    <Row gutter={16}>
      <Col span={4}>
        <Form.Item label="website">
          <Input name='website'/>
        </Form.Item>
      </Col>
      <Col span={4}>
        <Form.Item label="Website type">
        <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        {
          value: 'jack',
          label: 'Jack',
        },
        {
          value: 'lucy',
          label: 'Lucy',
        },
        {
          value: 'disabled',
          disabled: true,
          label: 'Disabled',
        },
        {
          value: 'Yiminghe',
          label: 'yiminghe',
        },
      ]}
    />
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={4}>
        <Form.Item label="ContactSource">
          <Input name="ContactSource"/>
        </Form.Item>
      </Col>
      <Col span={4}>
        <Form.Item label="ExternalID">
          <Input name="ExternalID"/>
        </Form.Item>
      </Col>
    </Row>
    <Row gutter={16}>
      <Col span={4}>
      <Upload {...props}>
    <Button icon={<UploadOutlined />}>Upload</Button>
  </Upload>
      </Col>
    </Row>
    <Row gutter={16}>
        <Form.Item>
          <span style={{backgroundColor:'darkgray',color:'white'}}>Check For matching Contacts(s)</span>
      </Form.Item>
      </Row>
                </Form>
            </div>
        </Collapse.Panel>
        </Collapse>
        <br/>
        <Button type='primary' style={{backgroundColor:'#113274', width:'100px'}}>Save All</Button>
        </div>
    )
}
export default NewContact;