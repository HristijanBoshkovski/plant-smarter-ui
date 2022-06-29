import React from "react";
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

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


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
                <Progress />
            </div>

            <div className="score-board">
                <h2>LEADBOARD</h2>
                <Scoreboard person={"Person1"} trees={"18"} donations={"6.125MKD"} />
                <Scoreboard person={"Person1"} trees={"15"} donations={"5.900MKD"} />
                <Scoreboard person={"Person1"} trees={"15"} donations={"4.500MKD"} />
                <Scoreboard person={"Person1"} trees={"14"} donations={"4.500MKD"} />
                <Scoreboard person={"Person1"} trees={"12"} donations={"4.000MKD"} />
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
                            <Input placeholder="Tree code" type="text" name="tree-code"/>
                            <Input placeholder="Latitude" type="text" name="tree-latitude"/>
                            <Input placeholder="Longitude" type="text" name="tree-longitude"/>
                            <Input placeholder="Add a Picture" type="file" name="tree-pic" accept="image/*"/>
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