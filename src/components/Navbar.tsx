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
		<div style={{backgroundColor:'white',color:'black',width:'100%',height:'50px',top:'0px',}}>
       	<select className="custom-select" style={{width: 200}} onChange={onClickLanguageChange}>
        <option value="en" >English</option>
        <option value="es" >Spanish</option>
        <option value="fr" >French</option>
        </select>
	  	</div>
		
	);
};
export default Navbar;