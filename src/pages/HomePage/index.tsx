import { useEffect, useMemo } from "react";
import DoughnutComponent from "../../containers/DoughnutComponent"
import { useDispatch, useSelector } from 'react-redux';
import './styles.scss';
import { AppState } from "../../store/states/app.state";
import { doughnutDataAction, feedAction, lineDataAction, ordersAction } from "../../store/actions/dashboard.actions";
import { getDoughnutData, getLineData } from "../../library/charts.data";
import LineComponent from "../../containers/LineComponent";
import FeedComponent from "../../containers/FeedComponent";
import TableComponent from "../../containers/TableComponent";
import { Order } from "../../models/order.model";
import * as timeago from 'timeago.js';

const rowRender = (row: Order) => {
	return (
		<tr>
			<td>{row.title}</td>
			<td>
				<label className="label label-info">{row.items}</label>
			</td>
			<td>{timeago.format(row.date)}</td>
			<td>
				<h5 className="m-b-0">${row.total}</h5>
			</td>
		</tr>
	)
}

const HomePage = () => {
	const dashboard = useSelector((state: AppState) => state.dashboard);
	const doughnutData = useMemo(() => getDoughnutData(dashboard.doughnut.data), [dashboard.doughnut]);
	const lineData = useMemo(() => getLineData(dashboard.line.data), [dashboard.line]);
	const feedData = dashboard.feed.data;
	const ordersData = dashboard.orders.data;

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(doughnutDataAction());
		dispatch(lineDataAction());
		dispatch(feedAction());
		dispatch(ordersAction());
	}, [dispatch]);

	return (
		<div className="page-wrapper">
			<div className="page-breadcrumb">
				<div className="row align-items-center">
					<div className="col-5">
						<h4 className="page-title">Dashboard</h4>
						<div className="d-flex align-items-center">
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">Home</li>
									<li className="breadcrumb-item active" aria-current="page">Dashboard</li>
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
										<h4 className="card-title">Tasks Summary</h4>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-12 p-3">
										<DoughnutComponent data={doughnutData} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-body">
										<div className="d-flex align-items-center"></div>
										<div>
											<h4 className="card-title">Budget</h4>
										</div>
										<div className="row">
											<div className="col-lg-12 p-3">
												<LineComponent data={lineData} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<div className="card">
									<div className="card-body">
										<h4 className="card-title">Feeds</h4>
										<div className="feed-widget">
											<FeedComponent data={feedData} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						{ordersData && <TableComponent title={'Orders'} headers={ordersData.headers.map((h: any) => h.label)} data={ordersData.data} rowRender={rowRender} />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
