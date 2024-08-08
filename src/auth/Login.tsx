import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { PoweroffOutlined } from '@ant-design/icons';
import PhoneInput2 from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';
import Image from './retentionCRM.jpeg';
import flags from 'react-phone-number-input/flags'
import { useState } from 'react';
import { Form, Input, Button, Row, Col, Layout ,Space, Checkbox} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
const LoginForm = () => {
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const [value, setValue] = useState<string | undefined>()
  const [checked, setChecked] = useState(false);
  const [showInputA, setShowInputA] = useState(false);
  const [showInputB, setShowInputB] = useState(false);
  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };
  const onChange = (e:any) => {
    setChecked(e.target.checked);
  };
  const handleLinkClick = (linkType: string) => {
    setShowInputA(linkType === 'linkA');
    setShowInputB(linkType === 'linkB');
  };
  const {t} = useTranslation(["locale"]);
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const SocialButton = styled.button`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: #f0f0f0;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HorizontalLineContainer = styled.div`
    display: flex;
    align-items: center;
  `;
  
  const HorizontalLine = styled.hr`
    flex: 1;
    height: 1px;
    border: none;
    background-color: black;
    margin: 10px 0;
  `;
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <Layout style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
      <div className="paraStyle">
                {t("line1", {ns: ['main','home']})} <br/>
                {t("line2", {ns: ['main','home']})} <br/>
                {t("line3", {ns: ['main','home']})} <br/>
      </div>
     </div>
      <img src = {Image} />
      <br/>
      <h1 style={{fontFamily:'Serif'}}>Log in to Your Account</h1>
      <Form
        layout="vertical"
        style={{ width: '300px' }}
      >
       {showInputA && (
       <Form.Item label="Username" name="username"
        rules={[
          {
            type: 'email',   

            message: 'Please enter a valid email',
          },
            {
              pattern: emailRegex,
              message: 'Please enter a valid email address', // More specific message
            },
            {
              required: true,
              message : 'Feild is required' 
            }
        ]}
        >
        <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
       )}
       {showInputB && (
       <Form.Item label="Phone number">
       <PhoneInput2
        placeholder="Enter phone number"
        value={value}
        onChange={setValue}
        enableAreaCodes={true}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true
        }}
        />
       </Form.Item>
       )}
      <a onClick={() => handleLinkClick('linkA')}>Use Email</a>
      <br/>
      <a onClick={() => handleLinkClick('linkB')}>Use Phone Number</a>
        <Form.Item label="Password" name="password"
        rules={[
            {
              pattern: passwordRegex,
              message: 'Password Should contain small letter , Capital letter , character and should be at least 8 character long', // More specific message
            },
            {
              required: true,
              message : 'Feild is required' 
            }
        ]}
        >
        <Input.Password prefix={<LockOutlined/>}
        placeholder="input password"
        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
      />
      </Form.Item>
      <Form.Item>
      <Checkbox onChange={onChange} checked={checked}>   
        Remember me
      </Checkbox>
      </Form.Item>
      <Form.Item>
      <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={() => enterLoading(1)}
          style={{width:'100%'}}
        >
          Log In
        </Button>
      </Form.Item>
      <div><center><p>Forget Password? <Link to="/forgetPassword">Send Passcode</Link></p></center>
      <center><Link to ="/recover">Reset Password Now</Link></center>
      <HorizontalLineContainer>
      <HorizontalLine />
      <span style={{ padding: '0 10px' }}>Or</span>
      <HorizontalLine />
    </HorizontalLineContainer>
      </div>
      <div style={{ marginTop: '10px' }}>
      <div style={{display:'flex',gap:'2px',marginLeft:'95px'}}>
      <SocialButton>
        <FaFacebook size={32} color="#3b5998" />
      </SocialButton>
      <SocialButton>
        <FaTwitter size={32} color="#1da1f2" />
      </SocialButton>
      <SocialButton>
        <FaInstagram size={32} color="#c13584" />
      </SocialButton>
    </div>
      </div>
      <hr/>
      <center>Don't have Retention CRM account Yet <Link to='/register'>Register Now</Link></center>  
      </Form>
    </Layout>
  );
};

export default LoginForm;
