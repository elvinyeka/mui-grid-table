import { GridColDef} from "@mui/x-data-grid";
import ImageModal from "../ImageModal";
import {Box, Chip} from "@mui/material";

export const columns:GridColDef[] = [
  { field: "thumbnail",
    headerName: "Image",
    width:90,
    editable:true,
    renderCell:(params) =>{
    return (
        <ImageModal value={params.value}/>
    )
    }
  },
  {
    field: "title",
    headerName: "Name",
    flex:1,
    cellClassName: "name-column--cell",
    renderCell:(params) => {
      return (<div style={{color:'#2196f3'}}>{params.value}</div>)
    }
  },
  {
    field: "description",
    headerName: "Description",
    flex:2,
    cellClassName: "name-column--cell",
    renderCell:(params) => {
      return (<Box sx={{color:'#757575', textWrap:'wrap', padding:'5px 0'}}>{params.value}</Box>)
    }
  },
  {
    field: "price",
    headerName: "Price",
    type: "number",
    width: 100 ,
  },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
    width: 80,
    renderCell:(params) => {
      return (<Chip label={params.value} color="primary" variant="outlined" />)
    }
  }
];



