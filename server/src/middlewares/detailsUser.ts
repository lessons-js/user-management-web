import { usersDB } from "../services/db/users.db";

export const detailsUser = (req,res) => {
    const id = req.params.id
    const user = usersDB.detailsItem(parseInt(id))
    if (id == 'undefined') {
        res.status(400).send("undefined")
    } else {
        res.status(200).json(user)
    }
}
