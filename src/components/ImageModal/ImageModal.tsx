import {Avatar, Box, Modal} from "@mui/material";
import  {FC, useState} from "react";

interface IProps {
  value: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: '50%',
  height:'70%',
  bgcolor: "background.paper",
  // border: "1px solid #000",
  boxShadow: 24,
  p: 2,
};

const ImageModal: FC<IProps> = ({ value }) => {
  
  const [openModal, setOpenModal] = useState(false)
  const handleOpenModal = () =>{
    setOpenModal(true)
  }
  const handleCloseModal = () =>{
    setOpenModal(false)
  }
  
  return (
    <>
      <Avatar alt="" src={value} onClick={handleOpenModal} sx={{cursor:'pointer'}} />
      <Modal open={openModal} onClose={handleCloseModal} closeAfterTransition>
        <Box sx={style}>
          <img src={value} alt="Image" style={{ width: "100%", height:'100%', objectFit:'contain' }} />
        </Box>
      </Modal>
    </>
  );
};

export default ImageModal;
