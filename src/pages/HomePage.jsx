import React from 'react'
import MainLayout from '../layouts/MainLayout'


export default function HomePage() {
  return (
    <MainLayout>
        <table class="table table-light table-responsive m-5 text-nowrap">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Item's Name</th>
                <th scope="col">Price</th>
                <th scope="col">Discount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Chocolate</td>
                    <td>10000</td>
                    <td>10%</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Water</td>
                    <td>5000</td>
                    <td>3%</td>
                </tr>
            </tbody>
        </table>
    </MainLayout>
  )
}
