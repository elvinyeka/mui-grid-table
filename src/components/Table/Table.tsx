import {columns} from "./constants.tsx";
import {DataGrid, GridToolbar, GridFilterModel, GridColumnVisibilityModel} from "@mui/x-data-grid";
import {Box} from "@mui/material";
import { useEffect, useState} from "react";
import axios from "axios";

const Table = () => {
  const [products, setProducts] = useState([])
  const visibilityJSON = localStorage.getItem("visibility")
  const visibilityModel = (visibilityJSON) ? JSON.parse(visibilityJSON) : {}
  const [columnVisibilityModel, setColumnVisibilityModel] = useState<GridColumnVisibilityModel>(visibilityModel)
  const filterJSON = localStorage.getItem("filter")
  const initialFilterModel = (filterJSON) ? JSON.parse(filterJSON) : {items: []}
  const [filterModel, setFilterModel] = useState<GridFilterModel>(initialFilterModel)
  
  const saveColumnSettings = (newModel:GridColumnVisibilityModel) => {
    localStorage.setItem("visibility", JSON.stringify(newModel))
    setColumnVisibilityModel(newModel)
  }
  
  const saveFilterSettings = (newModel:GridFilterModel) => {
    localStorage.setItem("filter", JSON.stringify(newModel))
    setFilterModel(newModel)
  }
  
  useEffect(()=>{
    axios.get('https://dummyjson.com/products?select=thumbnail,title,description,price,stock')
      .then((res) =>{
        setProducts(res.data.products)
      })
  },[])
  
  return (
    <Box sx={{
      width:'80%',
      margin: '5rem auto 2rem'
    }}>
      <DataGrid
        rows={products}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        sx={{p:2}}
        columnVisibilityModel={columnVisibilityModel}
        onColumnVisibilityModelChange={saveColumnSettings}
        filterModel={filterModel}
        onFilterModelChange={saveFilterSettings}
        getRowHeight={() => 'auto'}
        getEstimatedRowHeight={() => 200}
      />
    </Box>
  
  );
};

export default Table;
