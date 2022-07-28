import {Button,Modal,Form,Input} from 'antd'


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
  
  
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }