import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req,res){

    if(req.method == 'POST'){ 
        const {id, customerName, phoneNumber} = JSON.parse(req.body);
        const result = await prisma.Customer.create({
            data:{
                name: customerName,
                phoneNumber: phoneNumber
            }
        })
        console.log(result)
        // const customerData = await prisma.Customer.create({
        //     data:{customerName,phoneNumber}
        // });
        // create a new customer
        res.status(200).json({message:'User created!'})
        // createCustomer(customerData)
    }
    if(req.method == 'DELETE'){
        // delete customer
        const id = req.body.id;
        console.log(req.body)
        // query database and delete where id exist
        res.status(200).json({message:'User deleted successfully'})
    }
}

function createCustomer(customerData){
    // save data in database
    console.log(customerData)
}

function deleteCustomer(id){
    // delete customer at the given id
}