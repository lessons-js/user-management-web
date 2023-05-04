import { usersDB } from "../services/db/users.db";

export const detailsUser = (req,res) => {
    const id = req.params.id
    const user = usersDB.detailsItem(parseInt(id))
    if(user === undefined) {
        res.status(400).json({massage: "user was not found"})
    } else{
        res.json(user)
    }
}
