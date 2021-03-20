const TableComponent = (props: { title: string, headers: string[], data: any[], rowRender: Function }) => {
  const { title, headers, data, rowRender } = props;
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-md-flex">
          <div>
            <h4 className="card-title">{title}</h4>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table v-middle">
          <thead>
            <tr className="bg-light">
              {headers && headers.map(h => <th key={h} className="border-top-0">{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 && data.map(d => rowRender(d))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableComponent;
