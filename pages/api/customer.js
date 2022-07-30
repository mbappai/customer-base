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
        // create a new customer
        res.status(200).json({message:result})
        // createCustomer(customerData)
    }

    if(req.method == 'DELETE'){

        // delete customer
        const {id} = JSON.parse(req.body);
        console.log(id)
        // 
        const deletedCustomer = await prisma.Customer.delete({
            where: {
              id: id,
            },
          }); 


        // query database and delete where id exist
        res.status(200).json({message:deletedCustomer})
    }
}

function createCustomer(customerData){
    // save data in database
    console.log(customerData)
}

function deleteCustomer(id){
    // delete customer at the given id
}