import Map from "../../components/Map";

const MapPage = () => {
  return (
    <div className="page-wrapper">
		<div className="page-breadcrumb">
			<div className="row align-items-center">
				<div className="col-5">
					<h4 className="page-title">Map</h4>
					<div className="d-flex align-items-center">
						<nav aria-label="breadcrumb">
							<ol className="breadcrumb">
								<li className="breadcrumb-item">Home</li>
								<li className="breadcrumb-item active" aria-current="page">Map</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
		</div>
		<div className="container-fluid mx-0 px-0 py-0">
			<div className="row">
				<div className="col-12">
					<Map />
				</div>
			</div>
		</div>
	</div>
  );
}

export default MapPage;
