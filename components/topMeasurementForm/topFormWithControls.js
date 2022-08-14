import {Form,Select,InputNumber,Input,Button} from 'antd'
import {useState} from 'react';

const {Option} = Select;
const {TextArea} = Input;

const TopFormWithControls = ({measurement,updateTopMeasurement}) =>{

    const {
        id,
        customerId,
        length,
        sleeve,
        cuff,
        chest,
        neck,
        shoulder,
        tummy, 
        type,
        tailorsNote,
    } = measurement

    console.log(measurement)

    const [form] = Form.useForm();
    const [canEdit, setCanEdit] = useState(false);

    const handleFormEdit = () =>{
        setCanEdit(!canEdit);
    }
    const revertChanges = () =>{
        form.resetFields();
        setCanEdit(!canEdit);
    }

    const saveChanges = (values) =>{
        const formData ={
            ...values,
            id: id,
            customerId:customerId
        }
        updateTopMeasurement(formData)
        handleFormEdit() 
    }  

    return(
        <div key={id} style={{display:'flex',flexDirection:'column'}}>
        <Form
        form={form}
        layout='vertical'
        name="topMeasurementForm"
        initialValues={measurement}
        onFinish={saveChanges}
        autoComplete="off"
      >
        <Form.Item
          name={'type'}
          label="Trouser type"
          rules={[{ required: true, message: 'Please select a style!' }]}
        >
          <Select disabled={!canEdit} initialValue={type||'kaftan'} placeholder="Select style">
            <Option value="kaftan">Kaftan</Option>
            <Option value="agbada">Agbada</Option>
            <Option value="short">Shortsleeve</Option>
          </Select>
        </Form.Item>
  
       <div style={{display:'flex',width:'100%',justifyContent:'flex-start',flexWrap:'wrap'}}>
  
       <Form.Item
          name={'sleeve'}
          label="Sleeve"
          intialValue={sleeve || 0}
          style={{ width:'22%' ,marginRight:'10px' }}
          >
          <InputNumber disabled={!canEdit} addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>

        <Form.Item
          name={'shoulder'}
          label="Shoulder"
          intialValue={shoulder || 0}
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber  disabled={!canEdit} addonAfter={'CM'} style={{width:'100%' }} />
        </Form.Item>

        <Form.Item
          name={'neck'}
          label="Neck"
          intialValue={neck || 0}
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber  disabled={!canEdit} addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>

        <Form.Item
          name={'cuff'}
          label="Cuff"
          intialValue={cuff || 0}
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber  disabled={!canEdit} addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>

        <Form.Item
          name={'chest'}
          label="Chest"
          intialValue={chest || 0}
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber  disabled={!canEdit} addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>

        <Form.Item
          name={ 'tummy'}
          label="Tummy"
          intialValue={tummy || 0}
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber  disabled={!canEdit} addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>

        <Form.Item
          name={'length'}
          label="Length"
          intialValue={length || 0}
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber  disabled={!canEdit} addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>

 
  
        </div>
  
         <Form.Item name={'tailorsNote'} label="Tailors note">
           <TextArea initialValue={tailorsNote || ''} autoSize allowClear disabled={!canEdit} rows={2}/>
        </Form.Item>  

        <div>
        {canEdit?<Button onClick={revertChanges} danger type='text'>Cancel</Button> :<Button onClick={handleFormEdit} type='link'>Edit</Button>}
        <Button type='primary' htmlType='submit' disabled={!canEdit}>Save</Button>
        </div> 

        </Form>
        
        </div>
    )
}

export default TopFormWithControls