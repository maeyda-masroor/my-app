import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { PoweroffOutlined } from '@ant-design/icons';
import PhoneInput2 from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import 'react-phone-number-input/style.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';
import Image from './retentionCRM.jpeg';
import { useState } from 'react';
import { Form, Input, Button, Row, Col, Layout ,Space, Checkbox} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [checked, setChecked] = useState(false);
  const [showInputA, setShowInputA] = useState(false);
  const [showInputB, setShowInputB] = useState(false);
  const onChange = (e:any) => {
    setChecked(e.target.checked);
  };
  const handleLinkClick = (linkType: string) => {
    setShowInputA(linkType === 'linkA');
    setShowInputB(linkType === 'linkB');
  };
  const handleSubmit = () => {
    try {
    
        let data = JSON.stringify({
          email:email ,
          phoneNumber: phoneNumber,
       })
        console.log(data);
      }
      catch(err){
        console.log("something wrong")
      }
  };
  const handleChangeEmail=(e:any)=>{
    setEmail(e.target.value);
};

  const {t} = useTranslation(["locale"]);
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
  return (
    <Layout style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' , backgroundColor:'white' }}>
      <div>
      </div>
      <img src = {Image} width={200} height={50} />
      <br/>
      <div style={{width:'500px'}}>
      <h1 style={{fontFamily:'inherit'}}>{t("getPasscode", {ns: ['main','home']})}</h1>
      <p>{t("EnterYourEmail",{ns:['main','home']})}</p>
      </div>
      <Form
        layout="vertical"
        style={{ width: '500px' }}
        autoComplete='on'
        onFinish={handleSubmit}
      >
       {showInputA && (
       <Form.Item label= {t("email", {ns: ['main','home']})}name="email"
        rules={[
            {
              pattern: emailRegex,
              message: t("invalid_email", {ns: ['main','home']}) // More specific message
            },
            {
              required: true,
              message : t("req_email", {ns: ['main','home']})
            }
        ]}
        >
        <Input prefix={<UserOutlined style={{color:'#4d7de1'}}/>} placeholder={t("email", {ns: ['main','home']})} onChange={handleChangeEmail} value={email} />
        </Form.Item>
       )}
       {showInputB && (
       <Form.Item label={t("phonenumber", {ns: ['main','home']})}>
       <PhoneInput2
        placeholder={t("phonenumber", {ns: ['main','home']})}
        value={phoneNumber}
        onChange={setPhoneNumber}
        enableAreaCodes={true}
        inputProps={{
          name: "phone",
          required: true,
          autoFocus: true
        }}
        inputStyle={{
          height: '50px',
          width:'100%'
        }}
        />
       </Form.Item>
       )}
      <a onClick={() => handleLinkClick('linkA')}>{t("use_email", {ns: ['main','home']})}</a>
      <br/>
      <a onClick={() => handleLinkClick('linkB')}>{t("use_phonenumber", {ns: ['main','home']})}</a>
      <Form.Item>
      <Button
          type="primary"
          icon={<PoweroffOutlined />}
          style={{width:'100%'}}
          onClick={handleSubmit}
          htmlType='submit'
        >
          {t("sendPasscode", {ns: ['main','home']})}
        </Button>
      </Form.Item>
      <div><center><p><Link to="/">{t("usePassword", {ns: ['main','home']})}</Link>{t("instead", {ns: ['main','home']})}</p></center>
      <hr/>
      <center><Link to ='/recover'>{t("forgetPassword", {ns: ['main','home']})}</Link></center>
      <center><p>{t("DontHaveAccount",{ns:['main','home']})}<Link to ="/register">{t("registerNow", {ns: ['main','home']})}</Link></p></center>
      <HorizontalLineContainer>
      <HorizontalLine />
      <span style={{ padding: '0 10px' }}>{t("or", {ns: ['main','home']})}</span>
      <HorizontalLine />
    </HorizontalLineContainer>
      </div>
      <div style={{ marginTop: '10px' }}>
      <div style={{display:'flex',gap:'2px',marginLeft:'200px'}}>
      <SocialButton>
        <FaFacebook size={50} color="#3b5998" />
      </SocialButton>
      <SocialButton>
        <FaTwitter size={50} color="#1da1f2" />
      </SocialButton>
      <SocialButton>
        <FaInstagram size={50} color="#c13584" />
      </SocialButton>
    </div>
      </div>
      <hr/>
      <center> <Link to='/register'>{t("login_title", {ns: ['main','home']})}</Link></center>  
      </Form>
    </Layout>
  );
};

export default LoginForm;
