import {Typography} from 'antd'
import BottomFormWithControls from '../bottomMeasurementForm/formWithControls';
import TopFormWithControls from '../topMeasurementForm/topFormWithControls';
const {Title} = Typography;

const EditableProfile = ({customerData,updateBottomMeasurement,updateTopMeasurement}) =>{
    const {
        name,
        phoneNumber,
        email,
        bottomMeasurements,
        topMeasurements
    } = customerData;

    return(
        <div>
            
            <Title level={5}>Top Measurements</Title>
            {topMeasurements.map(measurement=>{
                return <TopFormWithControls updateTopMeasurement={updateTopMeasurement} key={measurement.id} measurement={measurement}/>
            })}

            <Title level={5}>Bottom Measurements</Title>
            {bottomMeasurements.map(measurement=>{
                return <BottomFormWithControls updateBottomMeasurement={updateBottomMeasurement} key={measurement.id} measurement={measurement}/>
            })}

        </div>
    )
}

export default EditableProfile