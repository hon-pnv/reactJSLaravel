import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Carlist() {
    const api ='http://localhost:8000/api/carapi'
    const [cars, setCars] = useState([]);
    const getCars = () => {
        axios.get(api)
            .then(function (response) {
                setCars(response.data)
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
            });
    }
    useEffect((()=>
        getCars()
    ), [])
    return (
        <div>
            <h2>Danh sách xe</h2>
            <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Model</th>
                    <th>Description</th>
                    <th>Produced_on</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car, index) =>
                <tr key={index}>
                    <td scope="row">{car.id}</td>
                    <td>{car.model}</td>
                    <td>{car.description}</td>
                    <td>{car.produced_on}</td>
                    <td><img className='img-thumbnail' style={{width: '10rem'}} src={car.image}/></td>
                </tr>)}
            </tbody>
        </table>
        </div>
    );
}

export default Carlist;