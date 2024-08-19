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

module.exports = contactForm ;