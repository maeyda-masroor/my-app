import { Layout ,Form} from "antd";
import { Button, Upload , Input ,Col , Row} from 'antd';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Avatar from 'react-avatar-edit'
const AddContact=()=>{
    const [avatarUrl, setAvatarUrl] = useState('');
    const handleAvatarChange = (e:any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload   = () => {
      setAvatarUrl(reader.result as string);
    };
    reader.readAsDataURL(file);   

  };
    const EngagmentOption = [
    
        { label: "**1(1)", value: "**1(1)", id: 1 },
        { label: "1A(List4)", value: "1A(List4)", id: 2 },
        { label: "1A(List for Academy)", value: "1A(List for Academy)", id: 3 }
    ]    
    const handleSubmit=()=>{
        console.log('Engagement Option... ' + EngagmentOptions + "contact information"+avatarUrl);
    }
    const [EngagmentOptions, setEngagmenentOptions] = useState<string|undefined>()
    const handleEngagmentOptionChange = (e:any) => {
        setEngagmenentOptions(e.target.value)
    }
  
    const {t} = useTranslation(["locale"]);
    return (
        <div>
        <center><h1 style={{fontFamily:'inherit'}}>Add Contact</h1></center>
        <Layout style={{ height: '100vh', display: 'flex',backgroundColor:'white',padding:'50px'}}>
        <Row gutter={[16, 16]}>
        <Col span={8}>
        <Form 
        layout="vertical"
        onFinish={handleSubmit}
        style={{ width: '500px' }}
        autoComplete='on'
        >
        <Form.Item label={t("engagementOption",{ns:['main','home']})} name="engagmentOption" style={{fontFamily:'inherit',height:50}}>     
        <select onChange={handleEngagmentOptionChange} style={{width:'100%',height:'50px'}}> 
            <option value=""> -- Add to List </option>
            {EngagmentOption.map((EngagementOptions) => <option value={EngagementOptions.value}>{EngagementOptions.label}</option>)}
        </select>
        </Form.Item>
        <br/>
        <Form.Item label={t("contactInformation",{ns:['main','home']})} name = "contact">
        <div>
          <Avatar src={avatarUrl} width={100} height={100}/>
          <br/>
          <input type="file" onChange={handleAvatarChange} />
        </div>
        </Form.Item>
        <br/>
        <Button
          type="primary"
          onClick={handleSubmit}
          style={{width:'100%'}}
          htmlType='submit'
        >
        {t("Login",{ns:['main','home']})}
        </Button>
        </Form>
        </Col>
        </Row>
        </Layout>
        </div>
    )

}
export default AddContact;