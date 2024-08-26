import React from 'react';
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha"
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
  const [email, setemail] = useState<string|undefined>();
  const [phoneNumber, setPhoneNumber] = useState<string|undefined>();
  const [checked, setChecked] = useState(false);
  const [showInputA, setShowInputA] = useState(false);
  const [showInputB, setShowInputB] = useState(false);
  const handleSubmit = () => {
    try {
    
        let data = JSON.stringify({
          email:email ,
          phoneNumber: phoneNumber,
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
  const onChangechecked = (e:any) => {
    setChecked(e.target.checked);
  };
  const handleLinkClick = (linkType: string) => {
    setShowInputA(linkType === 'linkA');
    setShowInputB(linkType === 'linkB');
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
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  return (
    <Layout style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div>
     </div>
      <img src = {Image} width={200} height={50}/>
      <br/>
      <div style={{width:'500px'}}>
      <h1 style={{fontFamily:'inherit'}}>{t("createYourAccount", {ns: ['main','home']})}</h1>
      </div>
      <Form
        layout="vertical"
        style={{ width: '500px' }}
        autoComplete='on'
        onFinish={handleSubmit}
      >
       {showInputA && (
       <Form.Item label={t('email',{ns:["main","home"]})} name="email"
        rules={[
            {
              pattern: emailRegex,
              message: t('invalid_email',{ns:["main","home"]}), // More specific message
            },
            {
              required: true,
              message : t('req_email',{ns:["main","home"]})
            }
        ]}
        >
        <Input prefix={<UserOutlined />} placeholder={t('email',{ns:["main","home"]})} onChange={handleChangeemail} name='email' value={email} style={{height:'50px'}}/>
        </Form.Item>
       )}
       {showInputB && (
       <Form.Item label={t('phoneNumber',{ns:["main","home"]})}>
       <PhoneInput2
        placeholder={t('phoneNumber',{ns:["main","home"]})}
        value={phoneNumber}
        onChange={setPhoneNumber}
        enableAreaCodes={true}
        inputStyle={{
          width:'100%',
          height:'50px',
        }}
        />
       </Form.Item>
       )}
      <a onClick={() => handleLinkClick('linkA')}>{t('use_email',{ns:["main","home"]})}</a>
      <br/>
      <a onClick={() => handleLinkClick('linkB')}>{t('use_phonenumber',{ns:["main","home"]})}</a>
      <Form.Item>
      <Form.Item>
      <Checkbox onChange={onChangechecked} value={checked}>   
        {t('agreetoTerm',{ns:["main","home"]})} <Link to='/termofuse'>{t('termofuse',{ns:["main","home"]})}</Link> {t('and',{ns:["main","home"]})} <Link to ='/privacypolicy'>{t('privacy_policy',{ns:["main","home"]})}</Link>
      </Checkbox>
     
      </Form.Item>
      <Button
          type="primary"
          icon={<PoweroffOutlined />}
          onClick={handleSubmit}
          htmlType='submit'
          style={{width:'100%'}}
        >
          {t('sendPasscode',{ns:["main","home"]})}
        </Button>
      </Form.Item>
      <div><center><p><Link to="/">{t('usePassword',{ns:["main","home"]})}</Link>{t('instead',{ns:["main","home"]})}</p></center>
      <hr/>
      <center>{t('forgetPassword',{ns:["main","home"]})}<Link to ='/recover'>{t('resetPassword',{ns:["main","home"]})}</Link></center>
      <center><p>{t('DontHaveAccount',{ns:["main","home"]})}<Link to ="/register">{t('registerNow',{ns:["main","home"]})}</Link></p></center>
      <HorizontalLineContainer>
      <HorizontalLine />
      <span style={{ padding: '0 10px' }}>Or</span>
      <HorizontalLine />
    </HorizontalLineContainer>
      </div>
      <div style={{ marginTop: '10px' }}>
      <div style={{display:'flex',gap:'2px',marginLeft:'200px'}}>
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
      <center>{t("rememberMyPassword",{ns:['main','home']})} <Link to='/'>{t("BtoLogin",{ns:['main','home']})}</Link></center>  
      </Form>
    </Layout>
  );
};

export default LoginForm;