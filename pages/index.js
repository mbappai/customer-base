import Head from 'next/head'
import {useState} from 'react'
import styles from '../styles/Home.module.css'
import {Button, List} from 'antd'
import CustomerModal from '../components/customerModal/component'
import { v4 as uuidv4 } from 'uuid';

export default function Home() {

  const [isModalOpen,setIsModalOpen] = useState(false);
  const [customers, setCustomers] =  useState([]);

  function toggleModal(){
    setIsModalOpen(!isModalOpen);
  }

  function handleCreateCustomer(formData){

    const payload = {
      customerName: formData.customerName,
      phoneNumber: formData.phone
    } 
    // save to database
    fetch('/api/customer',{
      method:'POST',
      body: JSON.stringify(payload)
    })
    .then(res=>res.json())
    .then(data=>{

      const {id,name,phoneNumber} = data.message


    const clonedCustomers = [...customers];
    clonedCustomers.push({id,phoneNumber:phoneNumber,customerName:name});
    // update the state
    setCustomers(clonedCustomers)
      console.log(data)
    })
    .catch(err=>console.log(err))

    // close modal
    toggleModal();
  }

  function handleDeleteCustomer(targetID){

    const payload ={id:targetID}

     fetch('/api/customer',{
      method:'DELETE',
      body: JSON.stringify(payload) 
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))


    const clonedCustomerList = customers.slice();
    // delet target user
    const updatedCustomerList = clonedCustomerList.filter(customer=>customer.id !== targetID)
    // update the state with updated list
    setCustomers(updatedCustomerList)

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <Button style={{marginBottom:'1em'}} onClick={toggleModal}>Create customer</Button>
        <CustomerModal isModalOpen={isModalOpen} onToggleModal={toggleModal} handleCreateCustomer={handleCreateCustomer}/>
        <div style={{width:'700px',border:'1px solid #e5e5e5', padding:'1em'}}>
        <CustomersList onDeleteCustomer={handleDeleteCustomer} customerData={customers}/>
        </div>
      </main>
    </div>
  )
}

function CustomersList({customerData, onDeleteCustomer}){
  return(
    <List
    itemLayout="horizontal"
    dataSource={customerData} 
    renderItem={item => (
      <List.Item
        actions={[<Button type='danger' onClick={()=>onDeleteCustomer(item.id)} key='delete-button'>Delete</Button>  ]}
      >
        <List.Item.Meta
          title={item.customerName}
          description={item.phoneNumber}
        />
      </List.Item>
    )}
  />
  )
}

