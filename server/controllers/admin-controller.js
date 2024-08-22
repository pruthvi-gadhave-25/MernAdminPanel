const Contact = require("../models/contact-model");
const User = require("../models/user-model");


const getAllUsers = async (req, res) => {

    try {
        const response = await User.find({}, { password: 0 });

        if (!response) {
            res.status(404).json({ msg: "No User Found" });
            return;
        }
        res.status(200).json({ response });
    } catch (error) {
        console.log()
    }
}

const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();

        if (!contacts || contacts.length === 0) {
            res.status(404).json({ msg: "No users Found" });
            return;
        }
        res.status(200).json({ contacts });
    } catch (error) {
        console.log(`contacts ${error}`)
    }
}

const deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        await User.deleteOne({ _id: id });

        return res.status(200).json({ message: "user Deleted Succefully " });

    } catch (error) {
        console.log('unable to delete user')
        console.error(error)
    }
}

const getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = await User.findOne({ _id: id }, { password: 0 });
        console.log(data);

        return res.status(200).json({ message: "User find  Succefully " });

    } catch (error) {
        console.log('unable to find User')
        console.error(error)
    }
}

module.exports = { getAllUsers, getAllContacts, deleteUserById, getUserById };