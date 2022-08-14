
import BottomFormWithControls from '../bottomMeasurementForm/formWithControls';

const EditableProfile = ({customerData,updateBottomMeasurement}) =>{
    const {
        name,
        phoneNumber,
        email,
        bottomMeasurements,
        topMeasurements
    } = customerData;

    return(
        <div>
            {bottomMeasurements.map(measurement=>{
                return <BottomFormWithControls updateBottomMeasurement={updateBottomMeasurement} key={measurement.id} measurement={measurement}/>
            })}
        </div>
    )
}

export default EditableProfile