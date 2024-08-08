import { Spin } from 'antd';
import Image from './retentionCRM.jpeg';
function Loading(){
    return <center><img src={Image} style={{
        width: '500px',
        height: '100px',
        position: 'absolute',
        top: '50%',
        left: '40%',
        right:'50%',
        margin: '-50px 0 0 -50px'
    }}/></center>;
}
export default Loading;