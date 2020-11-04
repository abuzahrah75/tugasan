import React, {useEffect, useState} from 'react';
import axios from '../axios'
import ls from 'local-storage'

const DocsHome = () => {
    // let AuthStr = 
    const [myProjects, setMyProjects]=useState([])
    useEffect(() =>{
        axios.get(`api/dokumen/project/list`, { 'headers': { 'Authorization': ls.get('authToken') } })
      .then(res1 => {
        setMyProjects(res1.data)
        console.log(res1.data)
      })
      
      },[setMyProjects])

    return (
        <div>
            <h3>Digital Document Projects</h3>
            <ul>
            { myProjects.map(baris => 
            <li key ={baris.id}>
                {baris.nama } : {baris.kategori.nama}
            </li>)
            }
            </ul>
        </div>
    );
}

export default DocsHome;
