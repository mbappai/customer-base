import {Drawer,Descriptions} from 'antd'                     


const CustomerProfile = ({customerData,isProfileVisible,onToggleProfile}) =>{

    const {
        name,
        phoneNumber,
        email,
        topMeasurements = [],
        bottomMeasurements = []
    } = customerData;

    console.log(topMeasurements)


    return(
        <Drawer title='Customer profile' width={540} placement="right" closable={false} onClose={onToggleProfile} visible={isProfileVisible}>
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
        </Drawer>
    )
}

export default CustomerProfile