import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Navbar = () => {
	const { t, i18n } = useTranslation(['home', 'main']);
	const onClickLanguageChange = (e: any) => {
        const language = e.target.value;
        i18n.changeLanguage(language); //change the language
    }
	return (
		<div style={{backgroundColor:'white',color:'black',width:'100%',height:'55px',top:'0px',}}>
       	<select className="custom-select" style={{width: 200,height:50,float:'right',margin:'1px',backgroundColor:'#4d7de1'}} onChange={onClickLanguageChange}>
        <option value="en" style={{fontFamily:'inherit'}}>English</option>
        <option value="es" style={{fontFamily:'inherit'}}>Spanish</option>
        <option value="fr" style={{fontFamily:'inherit'}}>French</option>
        </select>
	  	</div>
		
	);
};
export default Navbar;