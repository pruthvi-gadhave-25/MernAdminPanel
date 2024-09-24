const Contact = require("../models/contact-model");


const contactForm = async ( req , res ) => {

    try {
        const response  = req.body ;

         await  Contact.create(response) ;  /// will cretate add data in Contacts in DB 
        return  res.status(200).json( {msg : "Contact and messgae send succefully"});

    } catch (error) {
        console.log(error);
        return  res.status(500).json( {msg : "Message not delivered"});
    }
}


const getContactById = async (req, res) => {
debugger ;
    try {
        const id = req.params.id;
        const data = await Contact.findOne({ _id: id }, { password: 0 });
        console.log(data);

        return res.status(200).json({ data });

    } catch (error) {
        console.log('unable to find Contact')
        console.error(error)
    }
}


//delete 
const deleteContactById = async (req, res) => {
    try {
        const id = req.params.id;
        await Contact.deleteOne({ _id: id });

        return res.status(200).json({ message: "contact Deleted Succefully " });

    } catch (error) {
        console.log('unable to delete contact')
        console.error(error)
    }
}

//update 
const updateContactById = async (req, res) =>  {
    try {
        const id = req.params.id;
        
        const updateContactData = req.body ;
        const updatedData = await Contact.updateOne(
            { _id: id },
            {
                $set: updateContactData,
            }
        )
        return res.status(200).json(updatedData);
       
    } catch (error) {
       console.log(error);
       
    }
    
}


module.exports = {contactForm , getContactById ,deleteContactById ,updateContactById} ;