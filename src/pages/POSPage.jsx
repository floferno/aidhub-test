import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { useEffect } from 'react'
import data from '../data.json'

export default function POSPage({value, discount}) {
    return (
        <MainLayout>
            <table className="table table-light table-responsive m-5 text-nowrap">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Item's Name</th>
                <th scope="col">Price (IDR)</th>
                <th scope="col">Discount</th>
                <th scope="col">Tax</th>
                <th scope="col">Total Price</th>
                </tr>
            </thead>
            <tbody>
                {data.map((el, i)=> {
                    const grandTotal = el.price - el.discount + (0.1 * el.price)
                    function numberWithCommas(x) {
                        var parts = x.toString().split(".");
                        parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
                        return parts.join(",");
                    }
                    numberWithCommas(grandTotal)
                    console.log(grandTotal)
                    return (
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{el.item}</td>
                            <td>{el.price}</td>
                            <td>{el.discount} % </td>
                            <td>10 %</td>
                            <td>{grandTotal}</td>
                        </tr>
                    )
                })
            }
            </tbody>

        </table>
        <div>
            <p className="grand-total">Grand Total</p>
            <p>{}</p>
        </div>

        </MainLayout>

    )
}
