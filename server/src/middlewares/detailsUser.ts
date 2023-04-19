import { usersDB } from "../services/db/users.db";

export const detailsUser = (req,res) => {
    const currentUser = req.body
    const {id} = req.params
    usersDB.detailsItem(parseInt(id))
    console.log(`succesfuly findet user with id:${id}`)
    res.json(currentUser)
}