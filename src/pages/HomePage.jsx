import MainLayout from '../layouts/MainLayout'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import data from '../data.json'

export default function HomePage({discount, setDiscount, onChange, numberWithCommas}) {
    return (
        <MainLayout>
            <table className="table table-light table-responsive m-5 text-nowrap">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Item's Name</th>
                    <th scope="col">Price (IDR)</th>
                    <th scope="col">Discount</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((el, i)=> {
                        
                        return (
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <td>{el.item}</td>
                                <td>{numberWithCommas(el.price)}</td>
                                <td><input
                                        type="text"
                                        className="input-discount"
                                        name="discount"
                                        onChange={onChange}
                                        value={el.discount}
                                    /> %
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <Link to="/pos" type="button" className="btn btn-success" onClick={onChange}>Check Out</Link>
        </MainLayout>
    )
}
