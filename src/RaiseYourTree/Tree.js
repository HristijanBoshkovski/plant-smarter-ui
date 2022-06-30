import React, { useEffect, useState } from "react";
import { Button } from "../components/Common/Forms/Button";
import NavBlack from "../Router/NavBlack";
import { useNavigate } from "react-router-dom"
import Footer from "../Router/Footer";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from "../components/Common/Forms/Input";

import "./Tree.css"
import Progress from "./Progress";
import { Scoreboard } from "./Scoreboard";
import { useUserAuth } from "../CustomHooks/useUserAuth";
import { TreesAPI, UsersAPI } from "../Api";
import Info from "../components/Common/Info/Info";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

function Tree() {

    let navigate = useNavigate();
    const [user] = useUserAuth()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [tree, setTree] = React.useState({
        tree_lat: null,
        tree_lon: null,
        user_id: user.id,
        picture: null
    })

    const [users, setUsers] = useState([])
    const [trees, setTrees] = useState([])

    const [submitHandler, setSubmitHandler] = React.useState({
        submitted: false, type: "idle", message: ""
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(e => {
            setTree({
                ...tree,
                tree_lat: e.coords.latitude.toString(),
                tree_lon: e.coords.longitude.toString()
            })
        })

        UsersAPI.read().then(res => setUsers(res.users))
        TreesAPI.read().then(res => setTrees(res.trees))
    }, [])

    useEffect(() => setSubmitHandler({ submitted: false, type: "idle", message: "" }), [tree])

    const handleSubmit = e => {
        e.preventDefault()
        setSubmitHandler({ submitted: true, type: "pending", message: "Planting tree.. Please wait." })
        const data = new FormData()

        data.append("tree_lat", tree.tree_lat)
        data.append("tree_lon", tree.tree_lon)
        data.append("user_id", tree.user_id)
        data.append("picture", tree.picture)

        TreesAPI.create(data)
            .then(res => {
                setSubmitHandler({ submitted: true, type: "success", message: "Tree has been planted" })
                setTrees([...trees, res.tree])
            })
            .catch(error => {
                setSubmitHandler({ submitted: true, type: "failure", message: error.message })
            })
    }

    return (
        <div className="tree-container">
            <div className="hero-tree">
                <NavBlack />
                <div className="hero-text">
                    <h1>RAISE A TREE</h1>
                    <h3>Now is the time to take action. PLANT A TREE TODAY!</h3>
                    <Button value={"JOIN US"} styleClass={"btns btn-hero"} onClick={() => navigate('/joinus')}></Button>
                </div>
            </div>

            <div className="prog">
                <Progress 
                    users={users} 
                    trees={trees}
                />
            </div>

            <div className="score-board">
                <h2>LEADBOARD</h2>
                {users.filter(usr => trees.find(tree => tree.user_id === usr.id) !== undefined)
                    .sort((a, b) => trees.filter(tree => tree.user_id === a.id).length > trees.filter(tree => tree.user_id === b.id).length ? -1 : 1)
                    .map(usr => <Scoreboard person={usr.firstname + " " + usr.lastname} trees={trees.filter(tree => tree.user_id === usr.id).length} />)
                }
            </div>

            <div className="adding-tree">
                <Button value={"Add a tree"} styleClass={"btns btn-hero"} onClick={handleOpen}></Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            You have planted a tree?
                        </Typography>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Add your tree now and collect points!
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Input placeholder="Tree code" type="text" name="tree-code" />
                            <Input onChange={e => setTree({ ...tree, tree_lat: e.target.value })} value={tree.tree_lat} placeholder="Latitude" type="text" name="tree-latitude" />
                            <Input onChange={e => setTree({ ...tree, tree_lon: e.target.value })} value={tree.tree_lon} placeholder="Longitude" type="text" name="tree-longitude" />
                            <Input onChange={e => setTree({ ...tree, picture: e.target.files[0] })} placeholder="Add a Picture" type="file" name="tree-pic" accept="image/*" />
                            {submitHandler.submitted === false ?
                                <Button onClick={e => handleSubmit(e)} value="Plannt Tree" type="Submit" styleClass="btns btns-submit"></Button> :
                                <Info type={submitHandler.type} message={submitHandler.message} />
                            }
                        </Typography>
                    </Box>
                </Modal>
            </div>

            <div className="footer-container-tree">
                <Footer />
            </div>


        </div>
    )
}

export default Tree;