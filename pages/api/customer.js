import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req,res){

    if(req.method == 'POST'){ 
        const {id, customerName, phoneNumber,topMeasurements,bottomMeasurements} = JSON.parse(req.body);
        console.log('top',topMeasurements)
        const result = await prisma.Customer.create({
            data:{
                name: customerName,
                phoneNumber: phoneNumber,
                topMeasurements: {
                   create: [
                    {
                           type: 'agbada',
                            sleeve: 32,
                            shoulder: 23,
                            neck: 32,
                            cuff: 43,
                            chest: 43,
                            tummy: 43,
                            length: 43,
                            tailorsNote: 'Made for the best client',
                            } 
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
}

function createCustomer(customerData){
    // save data in database
    console.log(customerData)
}

function deleteCustomer(id){
    // delete customer at the given id
}