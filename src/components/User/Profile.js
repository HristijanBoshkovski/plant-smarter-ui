import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { TreesAPI, UsersAPI } from "../../Api"
import NavBlock from "../../Router/NavBlack"
import ProfileImg from "../../static/profile.svg"
import "./Profile.css"

const Profile = props => {

    const id = parseInt(useParams().id)
    const [user, setUser] = useState(false)
    const [trees, setTrees] = useState(false)
    useEffect(() => {
        TreesAPI.read(id).then(res => setTrees(res.trees))
        UsersAPI.read(id).then(res => setUser(res.user))
    }, [])

    return (
        <div className="profile-container">
            <NavBlock />
            <div className="profile-info">
                <img src={ProfileImg} alt="Profile" />
                <h1>{user.firstname + " " + user.lastname}'s trees</h1>
            </div>
            <div className="user-trees">
                {trees === false ? <h3>Loading... Please wait.</h3> : trees.map(tree => <span className="planted-tree-card">
                    <img src={"http://104.248.112.235:888/"+tree.picture} />
                    <span>
                        <p>Coordinates: {tree.tree_lat}, {tree.tree_lon}</p>
                        <p>Date Planted: {tree.date_planted}</p>
                    </span>
                </span>)}
            </div>
        </div>
    )
}

export default Profile













