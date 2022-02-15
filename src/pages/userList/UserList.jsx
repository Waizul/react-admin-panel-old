import './userList.css'

import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';

import { userRows } from '../../dummyData';
import { Link } from 'react-router-dom';

const UserList = () => {
    const [data,setData] = React.useState(userRows)

const handleDelete = id =>{
setData(data.filter(user=>user.id!==id))
}

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'user', headerName: 'User', width: 170,renderCell:params=>{
return(
    <div className='userListUser'>
        <img className='userListUserImg' src={params.row.avatar} alt=''/>
        <span className="userListUserName">{params.row.username}</span>
    </div>
)
  } },
  { field: 'email', headerName: 'Email', width: 170 },
   {field: 'transaction',headerName: 'Transaction',width: 120,},
  {field: 'status',headerName: 'Status',width: 80,
  },
  {field: 'action',headerName: 'Action',width: 120,renderCell:params=>{
      return(
          <>
     <Link to={'/user/'+params.row.id} > <button className='userListEditButton'>Edit</button>
         </Link>  
          <DeleteOutline className='userListDeleteIcon' onClick={()=>handleDelete(params.row.id)}/>
          </>
      )
  }
  },
];

  return <div className='userList'>
       <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        // rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
      </div>;
};

export default UserList;
