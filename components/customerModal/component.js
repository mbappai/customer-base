import {Button,Modal,Form,Input,Select,Typography, InputNumber} from 'antd'
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';

// @param isModalOpen state that toggles the visibility of modal
// @param onToggleModal function that toggles the visibility state of the modal
// @param handleCreateCustomer collects entire form data to update local state and save to DB
export default function CustomerModal({isModalOpen,onToggleModal,handleCreateCustomer}){
    return(
      <Modal
      title="Create a new customer"
      centered
      visible={isModalOpen}
      onOk={onToggleModal} 
      onCancel={onToggleModal}
      footer={null}
      // width={1000}
    >
      <ModalForm onSubmitCustomer={handleCreateCustomer}/>
    </Modal>
    )
  }
  
  const { Option } = Select;
  const {Title} = Typography;
  const { TextArea } = Input;


  function ModalForm({onSubmitCustomer}){
    return(
      <Form
        layout='vertical'
        name="customerForm"
        initialValues={{ remember: false }}
        onFinish={onSubmitCustomer}
        autoComplete="off"
      >
        <Form.Item
          label="Customer Name"
          name="customerName"
          rules={[{ required: true, message: 'Please input name of customer!' }]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: 'Please input customer phone number!' }]}
        >
          <Input addonBefore={'+234'} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please input current email address!' }]}
        >
          <Input style={{ width: '100%' }} />
        </Form.Item>
  
        {/* measurement ================= */}
      
        



      {/* ============== Shirt Measurements =================== */}
      <Title level={5}>Shirt Measurements</Title>
      <TopMeasurementsForm/>

      {/* ============== bottom =================== */}
      <Title level={5}>Trouser Measurements</Title>
      <BottomMeasurementsForm/>
  
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Save User
          </Button>
        </Form.Item>
      </Form>
    )
  }


  function TopMeasurementsForm (){
    return(
      
      <Form.List name="topMeasurements">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
    <div key={key} style={{display:'flex',flexDirection:'column'}}>

      <Form.Item
        name={[name,'type']}
        label="Shirt type"
        rules={[{ required: true, message: 'Please select a style!' }]}
      >
        <Select placeholder="Select style">
          <Option value="kaftan">Kaftan</Option>
          <Option value="agbada">Agbada</Option>
          <Option value="short">Shortsleeve</Option>
        </Select>
      </Form.Item>

      <div style={{display:'flex',width:'100%',justifyContent:'flex-start',flexWrap:'wrap' }}>

        <Form.Item
          {...restField}
          name={[name, 'sleeve']}
          label="Sleeve"
          style={{ width:'22%' ,marginRight:'10px' }}
          >
          <InputNumber addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>

        <Form.Item
          {...restField}
          name={[name, 'shoulder']}
          label="Shoulder"
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber addonAfter={'CM'} style={{width:'100%' }} />
        </Form.Item>

        <Form.Item
         {...restField}
          name={[name, 'neck']}
          label="Neck"
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>

        <Form.Item
         {...restField}
          name={[name, 'cuff']}
          label="Cuff"
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>

        <Form.Item
          {...restField}
          name={[name, 'chest']}
          label="Chest"
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>

        <Form.Item
          {...restField}
          name={[name, 'tummy']}
          label="Tummy"
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>

        <Form.Item
          {...restField}
          name={[name, 'length']}
          label="Length"
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber addonAfter={'CM'} style={{ width:'100%' }} />
        </Form.Item>

        <MinusCircleOutlined onClick={() => remove(name)} />

      </div>

      <Form.Item name={[name,'tailorsNote']} label="Tailors note">
          <TextArea rows={2} />
      </Form.Item>

  </div>
          ))}
          <Form.Item>
            <Button type="link" onClick={() => add()} icon={<PlusCircleOutlined />}>
              Add shirt measurements
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    )
  }

  function BottomMeasurementsForm (){
    return(
      
      <Form.List name="bottomMeasurements">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
     <div key={key} style={{display:'flex',flexDirection:'column'}}>
        
      <Form.Item
        name={[name,'type']}
        label="Trouser type"
        rules={[{ required: true, message: 'Please select a style!' }]}
      >
        <Select placeholder="Select style">
          <Option value="kaftan">Kaftan</Option>
          <Option value="agbada">Agbada</Option>
          <Option value="short">Shortsleeve</Option>
        </Select>
      </Form.Item>

     <div style={{display:'flex',width:'100%',justifyContent:'flex-start',flexWrap:'wrap'}}>

      <Form.Item
          {...restField}
          name={[name, 'lap']}
          label="Lap"
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber addonAfter={'CM'} style={{ width:'100%' }} />
      </Form.Item>

      <Form.Item
          {...restField}
          name={[name, 'length']}
          label="Length"
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber addonAfter={'CM'} style={{ width:'100%' }} />
      </Form.Item>

      <Form.Item
             {...restField}
             name={[name, 'base']}
             label="Base"
             style={{ width:'22%' ,marginRight:'10px' }}
           >
             <InputNumber addonAfter={'CM'} style={{ width:'100%' }} />
      </Form.Item>

      <Form.Item
         {...restField}
          name={[name, 'waist']}
          label="Waist"
          style={{ width:'22%' ,marginRight:'10px' }}
        >
          <InputNumber addonAfter={'CM'} style={{ width:'100%' }} />
      </Form.Item>


      <MinusCircleOutlined onClick={() => remove(name)} />

      </div>


      <Form.Item name={[name,'tailorsNote']} label="Tailors note">
         <TextArea rows={2} />
      </Form.Item>

      </div>
          ))}
          <Form.Item>
            <Button type="link" onClick={() => add()} icon={<PlusCircleOutlined />}>
              Add trouser measurements
            </Button>
          </Form.Item>
        </>
      )}
    </Form.List>
    )
  }