import {useState} from 'react'
import {Drawer,Descriptions,Button} from 'antd'                     
import EditableProfile from './editableProfile';


const CustomerProfile = ({customerData,isProfileVisible,onToggleProfile,updateBottomMeasurement}) =>{


    const [isEditMode,setIsEditMode] = useState(false);

    const toggleEditMode = () =>{
        setIsEditMode(!isEditMode)
    }


    return(
        <Drawer title='Customer profile' width={540} placement="right" extra={<Button onClick={toggleEditMode} type='link'>Edit</Button>} closable={false} onClose={onToggleProfile} visible={isProfileVisible}>
            {isEditMode?<EditableProfile updateBottomMeasurement={updateBottomMeasurement} customerData={customerData}/>:<ReadOnlyProfile customerData={customerData}/>}
        </Drawer>
    )
}

export default CustomerProfile

const ReadOnlyProfile = ({customerData}) =>{

    const {
        name,
        phoneNumber,
        email,
        topMeasurements = [],
        bottomMeasurements = []
    } = customerData;

   return( <>
    <Descriptions column={1} title="Basic Info">
                <Descriptions.Item label="Customer Name">{name}</Descriptions.Item>
                <Descriptions.Item label="Phone Number">{phoneNumber}</Descriptions.Item>
                <Descriptions.Item label="Email">{email||'mujahid.bappai@yahoo.com'}</Descriptions.Item>
            </Descriptions>

             <Descriptions title="Top Measurements">
                {topMeasurements.map(measurement=>{
                    let view = [];
                    for(const [key,value] of Object.entries(measurement)){
                        if(key == 'id' || key == 'customerId') continue;
                       view.push(<Descriptions.Item label={key}>{value}</Descriptions.Item>)
                    }
                    return view
                })}
            </Descriptions> 

             <Descriptions title="Bottom Measurements">
                {bottomMeasurements.map(measurement=>{
                    let view = [];
                    for(const [key,value] of Object.entries(measurement)){
                        if(key == 'id' || key == 'customerId') continue;
                       view.push(<Descriptions.Item label={key}>{value}</Descriptions.Item>)
                    }
                    return view
                })}
            </Descriptions> 
    </>
   )
}