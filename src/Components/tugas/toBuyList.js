import React, {useState, useEffect} from 'react';
import MaterialTable from 'material-table'
import axios from '../axios'
// import MytokenContext from '../Store'
import ls from 'local-storage'


const ToBuyList = () => {
    // const [mytoken] = useContext(MytokenContext);
    const columns =[
        {title: "ID", field: "id", editable:'never'},
        {title: "Item(s)", field: "nama"}
        
    ]

    const [myToBuy, setMyToBuy] = useState([])
    let AuthStr = 'Token ' + ls.get('apptoken')
    useEffect(() =>{
        //get To Buy data
        axios.get(`api/tugasan/tobuy/list`, { 'headers': { 'Authorization': AuthStr } })
      .then(res1 => setMyToBuy(res1.data))
      
      },[setMyToBuy, AuthStr])

      // console.log(myToBuy)

    if (myToBuy.length<1){
        return  (<><h2>Loading data ...</h2></>)
 
     }else{
        return (
        <>
        
        <MaterialTable 
        title = "List of Item(s) to Buy"
        data = {myToBuy}
        columns = {columns}
        options={{
            exportButton: true,
            headerStyle: {
                backgroundColor: '#01577b',
                color: '#FFF'
              },
            padding: "dense",
            paging: false
          }}
        
          // actions={[
          //   {
          //     icon: 'add',
          //     tooltip: 'Add User',
          //     isFreeAction: true,
          //     onClick: (event) => alert("You want to add a new row")
          //   },
            // {
            //     icon: 'save',
            //     tooltip: 'Save User',
            //     onClick: (event, rowData) => alert("You saved " + rowData.nama)
            //   },
            //   {
            //     icon: 'delete',
            //     tooltip: 'Delete User',
            //     onClick: (event, rowData) => alert("You want to delete " + rowData.nama)
            //   }
          // ]}

          detailPanel={[
            {
              tooltip: 'Show Name',
              render: rowData => {
                return (
                  <div
                    style={{
                      fontSize: 100,
                      textAlign: 'center',
                      color: 'white',
                      backgroundColor: '#43A047',
                    }}
                  >
                    {rowData.nama}
                  </div>
                )
              },
            },
            // {
            //   icon: 'account_circle',
            //   tooltip: 'Show Surname',
            //   render: rowData => {
            //     return (
            //       <div
            //         style={{
            //           fontSize: 100,
            //           textAlign: 'center',
            //           color: 'white',
            //           backgroundColor: '#E53935',
            //         }}
            //       >
            //         {rowData.nama}
            //       </div>
            //     )
            //   },
            // }            
          ]}


          editable={{
            // onRowAdd: newData =>
            //   new Promise((resolve, reject) => {
                
            //         setMyToBuy([...myToBuy, newData]);
                  
            //       resolve();
                
            //   }),
            onRowAdd: newData => 
            
              new Promise((resolve, reject) => {

                axios.post(`api/tugasan/tobuy/create`,newData, { 'headers': { 'Authorization': AuthStr } })
                    .then(res1 => setMyToBuy([...myToBuy, res1.data]))
                // setMyToBuy([...myToBuy, newData]);

                resolve();
            }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                let urlStr = `api/tugasan/tobuy/edit/`+oldData.id
                axios.post(urlStr,newData, { 'headers': { 'Authorization': AuthStr } })
                .then(res1 => {
                  const dataUpdate = [...myToBuy];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setMyToBuy([...dataUpdate]);
    
                  resolve();
                })
              }),
              
            onRowDelete: oldData =>
              new Promise((resolve, reject) => {
// console.log("kkkkkkkkk", oldData)
                let urlStr = `api/tugasan/tobuy/delete/`+oldData.id
                axios.post(urlStr,oldData, { 'headers': { 'Authorization': AuthStr } })
                .then(res1 => {
                  const dataDelete = [...myToBuy];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setMyToBuy([...dataDelete]);

                })
                
                resolve()
                
              }),
          }}


        />

        </>
    );
    }
}

export default ToBuyList;
