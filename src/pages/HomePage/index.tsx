import { useEffect, useState } from "react";
import DoughnutComponent from "../../containers/DoughnutComponent"
import { getDoughnutData } from '../../services/api.service';

const HomePage = () => {
    const [doughnutData, setDoughnutData] = useState(null);
    
    useEffect(() => {
        getDoughnutData().then(data => setDoughnutData(data));
    }, [getDoughnutData])

    return (
        <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row align-items-center">
                    <div className="col-5">
                        <h4 className="page-title">Dashboard</h4>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-md-flex align-items-center">
                                    <div>
                                        <h4 className="card-title">Sales Summary</h4>
                                        <h5 className="card-subtitle">Overview of Latest Month</h5>
                                    </div>
                                    <div className="ms-auto d-flex no-block align-items-center">
                                        <ul className="list-inline font-12 dl m-r-15 m-b-0">
                                            <li className="list-inline-item text-info"><i className="fa fa-circle"></i> Iphone
                                            </li>
                                            <li className="list-inline-item text-primary"><i className="fa fa-circle"></i> Ipad
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <DoughnutComponent data={doughnutData} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Feeds</h4>
                                <div className="feed-widget">
                                    <ul className="list-style-none feed-body m-0 p-b-20">
                                        <li className="feed-item">
                                            <div className="feed-icon bg-info"><i className="far fa-bell"></i></div> You have 4
                                            pending tasks. <span className="ms-auto font-12 text-muted">Just Now</span>
                                        </li>
                                        <li className="feed-item">
                                            <div className="feed-icon bg-success"><i className="ti-server"></i></div> Server #1
                                            overloaded.<span className="ms-auto font-12 text-muted">2 Hours ago</span>
                                        </li>
                                        <li className="feed-item">
                                            <div className="feed-icon bg-warning"><i className="ti-shopping-cart"></i></div> New
                                            order received.<span className="ms-auto font-12 text-muted">31 May</span>
                                        </li>
                                        <li className="feed-item">
                                            <div className="feed-icon bg-danger"><i className="ti-user"></i></div> New user
                                            registered.<span className="ms-auto font-12 text-muted">30 May</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="d-md-flex">
                                    <div>
                                        <h4 className="card-title">Top Selling Products</h4>
                                        <h5 className="card-subtitle">Overview of Top Selling Items</h5>
                                    </div>
                                    <div className="ms-auto">
                                        <div className="dl">
                                            <select className="form-select shadow-none">
                                                <option value="0" selected>Monthly</option>
                                                <option value="1">Daily</option>
                                                <option value="2">Weekly</option>
                                                <option value="3">Yearly</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table v-middle">
                                    <thead>
                                        <tr className="bg-light">
                                            <th className="border-top-0">Products</th>
                                            <th className="border-top-0">License</th>
                                            <th className="border-top-0">Support Agent</th>
                                            <th className="border-top-0">Technology</th>
                                            <th className="border-top-0">Tickets</th>
                                            <th className="border-top-0">Sales</th>
                                            <th className="border-top-0">Earnings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="m-r-10"><a
                                                            className="btn btn-circle d-flex btn-info text-white">EA</a>
                                                    </div>
                                                    <div className="">
                                                        <h4 className="m-b-0 font-16">Elite Admin</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Single Use</td>
                                            <td>John Doe</td>
                                            <td>
                                                <label className="label label-danger">Angular</label>
                                            </td>
                                            <td>46</td>
                                            <td>356</td>
                                            <td>
                                                <h5 className="m-b-0">$2850.06</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="m-r-10"><a
                                                            className="btn btn-circle d-flex btn-orange text-white">MA</a>
                                                    </div>
                                                    <div className="">
                                                        <h4 className="m-b-0 font-16">Monster Admin</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Single Use</td>
                                            <td>Venessa Fern</td>
                                            <td>
                                                <label className="label label-info">Vue Js</label>
                                            </td>
                                            <td>46</td>
                                            <td>356</td>
                                            <td>
                                                <h5 className="m-b-0">$2850.06</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="m-r-10"><a
                                                            className="btn btn-circle d-flex btn-success text-white">MP</a>
                                                    </div>
                                                    <div className="">
                                                        <h4 className="m-b-0 font-16">Material Pro Admin</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Single Use</td>
                                            <td>John Doe</td>
                                            <td>
                                                <label className="label label-success">Bootstrap</label>
                                            </td>
                                            <td>46</td>
                                            <td>356</td>
                                            <td>
                                                <h5 className="m-b-0">$2850.06</h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <div className="m-r-10"><a
                                                            className="btn btn-circle d-flex btn-purple text-white">AA</a>
                                                    </div>
                                                    <div className="">
                                                        <h4 className="m-b-0 font-16">Ample Admin</h4>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>Single Use</td>
                                            <td>John Doe</td>
                                            <td>
                                                <label className="label label-purple">React</label>
                                            </td>
                                            <td>46</td>
                                            <td>356</td>
                                            <td>
                                                <h5 className="m-b-0">$2850.06</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Recent Comments</h4>
                            </div>
                            <div className="comment-widgets scrollable">
                                <div className="d-flex flex-row comment-row m-t-0">
                                    <div className="p-2"><img src="../../assets/images/users/1.jpg" alt="user" width="50"
                                            className="rounded-circle" /></div>
                                    <div className="comment-text w-100">
                                        <h6 className="font-medium">James Anderson</h6>
                                        <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing
                                            and type setting industry. </span>
                                        <div className="comment-footer">
                                            <span className="text-muted float-end">April 14, 2021</span> <span
                                                className="label label-rounded label-primary">Pending</span> <span
                                                className="action-icons">
                                                <a href="javascript:void(0)"><i className="ti-pencil-alt"></i></a>
                                                <a href="javascript:void(0)"><i className="ti-check"></i></a>
                                                <a href="javascript:void(0)"><i className="ti-heart"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row comment-row">
                                    <div className="p-2"><img src="../../assets/images/users/4.jpg" alt="user" width="50"
                                            className="rounded-circle" /></div>
                                    <div className="comment-text active w-100">
                                        <h6 className="font-medium">Michael Jorden</h6>
                                        <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing
                                            and type setting industry. </span>
                                        <div className="comment-footer ">
                                            <span className="text-muted float-end">April 14, 2021</span>
                                            <span className="label label-success label-rounded">Approved</span>
                                            <span className="action-icons active">
                                                <a href="javascript:void(0)"><i className="ti-pencil-alt"></i></a>
                                                <a href="javascript:void(0)"><i className="icon-close"></i></a>
                                                <a href="javascript:void(0)"><i className="ti-heart text-danger"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-row comment-row">
                                    <div className="p-2"><img src="../../assets/images/users/5.jpg" alt="user" width="50"
                                            className="rounded-circle" /></div>
                                    <div className="comment-text w-100">
                                        <h6 className="font-medium">Johnathan Doeting</h6>
                                        <span className="m-b-15 d-block">Lorem Ipsum is simply dummy text of the printing
                                            and type setting industry. </span>
                                        <div className="comment-footer">
                                            <span className="text-muted float-end">April 14, 2021</span>
                                            <span className="label label-rounded label-danger">Rejected</span>
                                            <span className="action-icons">
                                                <a href="javascript:void(0)"><i className="ti-pencil-alt"></i></a>
                                                <a href="javascript:void(0)"><i className="ti-check"></i></a>
                                                <a href="javascript:void(0)"><i className="ti-heart"></i></a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Temp Guide</h4>
                                <div className="d-flex align-items-center flex-row m-t-30">
                                    <div className="display-5 text-info"><i className="wi wi-day-showers"></i>
                                        <span>73<sup>°</sup></span></div>
                                    <div className="m-l-10">
                                        <h3 className="m-b-0">Saturday</h3><small>Ahmedabad, India</small>
                                    </div>
                                </div>
                                <table className="table no-border mini-table m-t-20">
                                    <tbody>
                                        <tr>
                                            <td className="text-muted">Wind</td>
                                            <td className="font-medium">ESE 17 mph</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">Humidity</td>
                                            <td className="font-medium">83%</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">Pressure</td>
                                            <td className="font-medium">28.56 in</td>
                                        </tr>
                                        <tr>
                                            <td className="text-muted">Cloud Cover</td>
                                            <td className="font-medium">78%</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <ul className="row list-style-none text-center m-t-30">
                                    <li className="col-3">
                                        <h4 className="text-info"><i className="wi wi-day-sunny"></i></h4>
                                        <span className="d-block text-muted">09:30</span>
                                        <h3 className="m-t-5">70<sup>°</sup></h3>
                                    </li>
                                    <li className="col-3">
                                        <h4 className="text-info"><i className="wi wi-day-cloudy"></i></h4>
                                        <span className="d-block text-muted">11:30</span>
                                        <h3 className="m-t-5">72<sup>°</sup></h3>
                                    </li>
                                    <li className="col-3">
                                        <h4 className="text-info"><i className="wi wi-day-hail"></i></h4>
                                        <span className="d-block text-muted">13:30</span>
                                        <h3 className="m-t-5">75<sup>°</sup></h3>
                                    </li>
                                    <li className="col-3">
                                        <h4 className="text-info"><i className="wi wi-day-sprinkle"></i></h4>
                                        <span className="d-block text-muted">15:30</span>
                                        <h3 className="m-t-5">76<sup>°</sup></h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer text-center">
                All Rights Reserved by Xtreme Admin. Designed and Developed by <a
                    href="https://www.wrappixel.com">WrapPixel</a>.
            </footer>
        </div>
    );
}

export default HomePage;