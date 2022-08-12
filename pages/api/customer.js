import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req,res){

    if(req.method == 'POST'){ 
        const {customerName, phoneNumber,topMeasurements,bottomMeasurements} = JSON.parse(req.body);
        const result = await prisma.Customer.create({
            data:{
                name: customerName,
                phoneNumber: phoneNumber,
                topMeasurements: {
                   create: [
                    ...topMeasurements
                   ]
                }
            },
            include:{
                topMeasurements: true
            }
        })
        // create a new customer
        res.status(200).json({message:result})
        // createCustomer(customerData)
    }

    if(req.method == 'DELETE'){

        // delete customer
        const {id} = JSON.parse(req.body);
        console.log(typeof id)

        // delete everything about a customer
        const deleteTopMeasurement = prisma.topMeasurement.deleteMany({
            where:{
                customerId: id
            }
        })
        console.log('in delete',deleteTopMeasurement)

        // console.log(prisma.topMeasurement)

        const deletedCustomer =  prisma.customer.delete({
            where: {
              id: id,
            },
          }); 
        
        console.log('customer',deletedCustomer)

          const transaction = await prisma.$transaction([deleteTopMeasurement,deletedCustomer])

        // console.log(deleteTopMeasurement)
        // console.log(deletedCustomer)
 

        // query database and delete where id exist
        res.status(200).json({message:transaction})
        // res.status(200).json({message:deletedCustomer})
    }

    if(req.method == 'GET'){
       
    }
}

function createCustomer(customerData){
    // save data in database
    console.log(customerData)
}

function deleteCustomer(id){
    // delete customer at the given id
}