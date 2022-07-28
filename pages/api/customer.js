export default function handler(req,res){

    if(req.method == 'POST'){ 
        // create a new customer
        const {id, customerName, phoneNumber} = JSON.parse(req.body);
        console.log(id, customerName,phoneNumber);
        res.status(200).json({message:'User created successfully'})
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