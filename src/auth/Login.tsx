"use client";
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
import { FormEvent } from "react";
import { Form, Input, Button, Row, Col, Layout ,Space, Checkbox} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
const LoginForm = () => {
  const [email,setemail] = useState<string|undefined>();
  const [phoneNumber, setPhoneNumber] = useState<string|undefined>();
  const [password,setpassword] = useState<string|undefined>();
  const [checked,setchecked] = useState<Boolean>(true);
  const [loadings, setLoadings] = useState<boolean[]>([]);
  const [showInputA, setShowInputA] = useState(false);
  const [showInputB, setShowInputB] = useState(false);
  const handleSubmit = () => {
    try {
    
        let data = JSON.stringify({
          email:email ,
          phoneNumber: phoneNumber,
          password: password,
          checked:checked
        })
        console.log(data);
      }
      catch(err){
        console.log("something wrong")
      }
  };
  const handleChangeemail = (e:any) => {
      setemail(e.target.value);
  }
  const handleChangepassword=(e:any)=>{
      setpassword(e.target.value);
  }
  const handleChangeremeberme=(e:any)=>{
      setchecked(e.target.value);
  };
  const handleLinkClick = (linkType: string) => {
    setShowInputA(linkType === 'linkA');
    setShowInputB(linkType === 'linkB');
  };
  const {t} = useTranslation(["locale"]);
  const emailReg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
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
    <Layout style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' ,backgroundColor:'white'}}>
      <div>
     </div>
      <img src = {Image} width={200} height={50}/>
      <h1 style={{fontFamily:'inherit'}}> {t("login_title", {ns: ['main','home']})}</h1>
      <Form 
        layout="vertical"
        onFinish={handleSubmit}
        style={{ width: '500px' }}
        autoComplete='on'
      >
       {showInputA && (
       <Form.Item label={t("email",{ns:['main','home']})} name="email" style={{fontFamily:'inherit',height:50}}
       rules={
        [{
          pattern:emailReg,
          message: t("invalid_email",{ns:['main','home']}),
       },
        {
          required:true,
          message: t("req_email",{ns:['main','home']}),
        }
      ]}  
      >
      <Input prefix={<UserOutlined style={{color:'#4d7de1'}}/>} placeholder= {t("email",{ns:['main','home']})} onChange={handleChangeemail} value={email} style={{fontFamily:'inherit',height:'50px'}}/>
      </Form.Item>
       )}
       <br/>
       {showInputB && (
       <Form.Item label={t("phonenumber",{ns:['main','home']})} style={{fontFamily:'inherit',height:50}} name="phoneNumber">
       <PhoneInput2
        placeholder={t("phonenumber",{ns:['main','home']})}
        value={phoneNumber}
        onChange={setPhoneNumber}
        inputStyle={
          {
            height:50,
            fontFamily:'inherit',
            width:'100%'

          }
        }
        />
       </Form.Item>
       )}
      <a onClick={() => handleLinkClick('linkA')} style={{fontFamily:'inherit'}}>{t("use_email", {ns: ['main','home']})}</a>
      <br/>
      <a onClick={() => handleLinkClick('linkB')} style={{fontFamily:'inherit'}}>{t("use_phonenumber", {ns: ['main','home']})}</a>
      <br/>
        <Form.Item label={t("password",{ns:['main','home']})} name="password"
        rules={[
            {
              pattern: passwordRegex,
              message: t("password_regex",{ns:['main','home']})
              },
            {
              required: true,
              message : t("password_req",{ns:['main','home']})
            }
        ]}
        >
        <Input.Password prefix={<LockOutlined style={{color:'#4d7de1'}} value={password}/> }
        placeholder={t("password",{ns:['main','home']})}
        iconRender={(visible) => (visible ? <EyeTwoTone style={{color:'#4d7de1'}}/> : <EyeInvisibleOutlined style={{color:'#4d7de1'}}/>)} onChange={handleChangepassword} name='password'
        style={{fontFamily:'inherit',height:'50px'}}
      />
      </Form.Item>
      <Form.Item>
      <Checkbox onChange={handleChangeremeberme}  style={{fontFamily:'fantasy',color:'#4d7de1'}} name='rememberme' value={checked}>   
      {t("rememberMe",{ns:['main','home']})}
      </Checkbox>
      </Form.Item>
      <Form.Item>
      <Button
          type="primary"
          icon={<PoweroffOutlined />}
          loading={loadings[1]}
          onClick={handleSubmit}
          style={{width:'100%'}}
          htmlType='submit'
        >
        {t("Login",{ns:['main','home']})}
        </Button>
      </Form.Item>
      <div><center><p>{t("ForgetPasscode",{ns:['main','home']})}<Link to="/forgetPassword">{t("sendPasscode",{ns:['main','home']})}</Link></p></center>
      <center><Link to ="/recover">{t("resetPasswordNow",{ns:['main','home']})}</Link></center>
      <HorizontalLineContainer>
      <HorizontalLine />
      <span style={{ padding: '0 10px' }}>{t("or",{ns:['main','home']})}</span>
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
      <center>{t("DontHaveAccount",{ns:['main','home']})}<Link to='/register'>{t("register_now",{ns:['main','home']})}</Link></center>  
      </Form>
    </Layout>
  );
};

export default LoginForm;
