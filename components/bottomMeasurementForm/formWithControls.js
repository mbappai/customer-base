import {Form,Select,InputNumber,Input,Button} from 'antd'
import {useState} from 'react';

const {Option} = Select;
const {TextArea} = Input;

const BottomFormWithControls = ({measurement,updateBottomMeasurement}) =>{

    const {
        id,
        customerId,
        lap,
        base,
        length,
        waist,
        type,
        tailorsNote,
    } = measurement;

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
        updateBottomMeasurement(formData)
        handleFormEdit() 
    }  

    return(
        <div key={id} style={{display:'flex',flexDirection:'column'}}>
        <Form
        form={form}
        layout='vertical'
        name="customerForm"
        initialValues={{ remember: false }}
        onFinish={saveChanges}
        autoComplete="off"
      >
        <Form.Item
          name={'type'}
          label="Trouser type"
          rules={[{ required: true, message: 'Please select a style!' }]}
        >
          <Select disabled={!canEdit} defaultValue={type||'kaftan'} placeholder="Select style">
            <Option value="kaftan">Kaftan</Option>
            <Option value="agbada">Agbada</Option>
            <Option value="short">Shortsleeve</Option>
          </Select>
        </Form.Item>
  
       <div style={{display:'flex',width:'100%',justifyContent:'flex-start',flexWrap:'wrap'}}>
  
         <Form.Item

            name={'lap'}
            label="Lap"
            initialValue={lap || 0}
            style={{ width:'22%' ,marginRight:'10px' }}
          >
            <InputNumber disabled={!canEdit} init addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>
  
        <Form.Item
            name={'length'}
            label="Length"
            initialValue={length || 0}
            style={{ width:'22%' ,marginRight:'10px' }}
          >
            <InputNumber disabled={!canEdit} addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>
  
        <Form.Item
               name={'base'}
               label="Base"
               initialValue={base || 0}
               style={{ width:'22%' ,marginRight:'10px' }}
             >
               <InputNumber disabled={!canEdit} addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>
  
        <Form.Item
            name={'waist'}
            label="Waist"
            initialValue={waist||0} 
            style={{ width:'22%' ,marginRight:'10px' }}
          >
            <InputNumber disabled={!canEdit} placeholder={waist||0} addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>
   
  
        </div>
  
         <Form.Item name={'tailorsNote'} label="Tailors note">
           <TextArea defaultValue={tailorsNote || ''} autoSize allowClear disabled={!canEdit} rows={2}/>
        </Form.Item>  

        <div>
        {canEdit?<Button onClick={revertChanges} danger type='text'>Cancel</Button> :<Button onClick={handleFormEdit} type='link'>Edit</Button>}
        <Button type='primary' htmlType='submit' disabled={!canEdit}>Save</Button>
        </div>

        </Form>
        
        </div>
    )
}

export default BottomFormWithControls