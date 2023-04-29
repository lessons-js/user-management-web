import { usersDB } from "../services/db/users.db";

export const detailsUser = (req,res) => {
    const id = req.params.id
    const user = usersDB.detailsItem(parseInt(id))
    res.send(user)
}
