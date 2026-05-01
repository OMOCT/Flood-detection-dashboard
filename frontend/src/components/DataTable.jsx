function DataTable({data}){
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Distance</th>
            <th>Flow</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{new Date(item.timestamp).toLocaleString()}</td>
              <td>{item.distance}</td>
              <td>{item.flow}</td>
              <td style={{
                color:
                  item.status === "danger" ? "red" :
                  item.status === "warning" ? "orange" : "green"
              }}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default DataTable
