import React from 'react'

const index = (props) => {
    console.log(props)
    return (
     
        <div>
            <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Portfolio</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <th scope="row">1</th>
                            <td>Adam Hydorn</td>
                            <td></td>
                            <td>https://ahydorn.github.io/responsive-portfolio/index.html</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Clifford Jorgensen</td>
                            <td></td>
                            <td>@</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Badri Vasistha</td>
                            <td>badri.vasistha@gmail.com</td>
                            <td>https://badvasistha.github.io/Portfolio/</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Deepesh Nagarkoti</td>
                            <td>deepesh.nagarkoti@gmail.com</td>
                            <td> https://depeace.github.io/basic-portfolio/</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Michael Jiang</td>
                            <td></td>
                            <td>@</td>
                        </tr>   
                     
                    </tbody>
                </table>
        </div>
    )
}

export default index;
