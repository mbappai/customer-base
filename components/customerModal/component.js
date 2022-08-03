import {Button,Modal,Form,Input,Select,Typography} from 'antd'


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

  function ModalForm({onSubmitCustomer}){
    return(
      <Form
        layout='vertical'
        name="customerForm"
        initialValues={{ remember: true }}
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
      
        <Form.Item
        name="topType"
        label="Top type"
        rules={[{ required: true, message: 'Please select type of style you want!' }]}
      >
        <Select placeholder="select your gender">
          <Option value="kaftan">Kaftan</Option>
          <Option value="agbada">Agbada</Option>
          <Option value="short">Shortsleeve</Option>
        </Select>
      </Form.Item>



      {/* ============== Shirt Measurements =================== */}

      <Title level={5}>Shirt Measurements</Title>

    <div style={{display:'flex',width:'100%',justifyContent:'flex-start',flexWrap:'wrap',marginBottom:'1em'}}>
      <Form.Item
          name="sleeve"
          label="Sleeve"
          style={{ width:'30%',marginRight:'10px' }}
          rules={[{ required: true, message: 'Required!' }]}
          >
          <Input addonBefore={'CM'} style={{ width:'100%' }} />
        </Form.Item>
      <Form.Item
          name="shoulder"
          label="Shoulder"
          style={{ width:'30%',marginRight:'10px' }}
          rules={[{ required: true, message: 'Required!' }]}
        >
          <Input addonBefore={'CM'} style={{width:'100%' }} />
        </Form.Item>
      <Form.Item
          name="neck"
          label="Neck"
          style={{ width:'30%',marginRight:'10px' }}
          rules={[{ required: true, message: 'Required!' }]}
        >
          <Input addonBefore={'CM'} style={{ width:'100%' }} />
        </Form.Item>
      <Form.Item
          name="chest"
          label="Chest"
          style={{ width:'30%',marginRight:'10px' }}
          rules={[{ required: true, message: 'Required!' }]}
        >
          <Input addonBefore={'CM'} style={{ width:'100%' }} />
        </Form.Item>
      <Form.Item
          name="cuff"
          label="Cuff"
          style={{ width:'30%',marginRight:'10px' }}
          rules={[{ required: true, message: 'Required!' }]}
        >
          <Input addonBefore={'CM'} style={{ width:'100%' }} />
        </Form.Item>
      <Form.Item
          name="tummy"
          label="Tummy"
          style={{ width:'30%',marginRight:'10px' }}
          rules={[{ required: true, message: 'Required!' }]}
        >
          <Input addonBefore={'CM'} style={{ width:'100%' }} />
        </Form.Item>
      <Form.Item
          name="length"
          label="Length"
          style={{ width:'30%',marginRight:'10px' }}
          rules={[{ required: true, message: 'Required!' }]}
        >
          <Input addonBefore={'CM'} style={{ width:'100%' }} />
        </Form.Item>
      </div>


      {/* ============== bottom =================== */}

      <Title level={5}>Trouser Measurements</Title>

<div style={{display:'flex',width:'100%',justifyContent:'flex-start',flexWrap:'wrap'}}>
  <Form.Item
      name="length"
      label="Length"
      style={{ width:'30%',marginRight:'10px' }}
      rules={[{ required: true, message: 'Required!' }]}
      >
      <Input addonBefore={'CM'} style={{ width:'100%' }} />
    </Form.Item>
  <Form.Item
      name="waist"
      label="Waist"
      style={{ width:'30%',marginRight:'10px' }}
      rules={[{ required: true, message: 'Required!' }]}
    >
      <Input addonBefore={'CM'} style={{width:'100%' }} />
    </Form.Item>
  <Form.Item
      name="lap"
      label="Lap"
      style={{ width:'30%',marginRight:'10px' }}
      rules={[{ required: true, message: 'Required!' }]}
    >
      <Input addonBefore={'CM'} style={{ width:'100%' }} />
    </Form.Item>
  <Form.Item
      name="base"
      label="Base"
      style={{ width:'30%',marginRight:'10px' }}
      rules={[{ required: true, message: 'Required!' }]}
    >
      <Input addonBefore={'CM'} style={{ width:'100%' }} />
    </Form.Item>
  </div>



  
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Save User
          </Button>
        </Form.Item>
      </Form>
    )
  }