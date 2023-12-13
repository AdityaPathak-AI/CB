import React from "react";
class App extends React.Component {
  state = {
    emp: [
      {
        jobId: 101,
        name: "Aditya",
        salary: 50000,
        deptBox: "Software Engineer",
      },
      { jobId: 102, name: "Rudiger", salary: 40000, deptBox: "Testing" },
      { jobId: 102, name: "Petr Yan", salary: 40000, deptBox: "UI/UX" },
    ],
    update: [],
  };
  render() {
    return (
      <div className="container bg-secondary mt-5">
        <h1 className= 'bg-warning' style={{ color: "red", textAlign: "center", fontSize: "50px" }}>
          Add Employeee Data
        </h1>

        <form 
          style={{ textAlign: "center", marginTop: "40px", fontSize: "40px" }}
        >
          <input type="text" placeholder="Enter Your ID" />
          &nbsp;&nbsp;
          <input type="text" placeholder="Enter Your Name" />
          <br />
          <br />
          <input type="Number" placeholder="Enter Your Number" />
          &nbsp;&nbsp;
          <input type="text" placeholder="Enter Your Department" />
          <br />
          <br />
          <button className="btn btn-primary">Click to Add Record</button>
          <hr />
          <div className="bg-warning">
            <h1>Employee Data</h1>
            <table className="table table-bordered table-striped table-hover bs-success text-dander">
              <thead>
                <tr style={{ fontSize: "20px" }}>
                  <th>S.No</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Employee Salary</th>
                  <th>Employee Department</th>
                  <th>Oprations</th>
                </tr>
              </thead>
              <tbody>
                {this.state.emp.map((data, index) => {
                  return (
                    <tr style={{ fontSize: "20px" }}>
                      <td>{index + 1}</td>
                      <td>{data.id}</td>
                      <td>{data.nameBox}</td>
                      <td>{data.salaryBox}</td>
                      <td>{data.deptBox}</td>
                      <td>
                        <button
                          className="btn btn-success "
                          onClick={() => this.update(data.id)}
                        >
                          Update
                        </button>
                        &nbsp;&nbsp;
                        <button
                          className="btn btn-danger "
                          onClick={() => this.delete(data.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </form>
        <hr />
        <div className="container container-fluid ">
          <h1 className="bg-warning" style={{ color: "red", textAlign: "center" }}>Update Data</h1>

          <form
            style={{ textAlign: "center", marginTop: "40px", fontSize: "20px" }}
          >
            <input type="text" placeholder="Enter Your ID" />
            &nbsp;&nbsp;
            <input type="text" placeholder="Enter Your Name" />
            <br />
            <br />
            <input type="Number" placeholder="Enter Your Number" />
            &nbsp;&nbsp;
            <input type="text" placeholder="Enter Your Department" />
            <br />
            <br />
            <button className="btn btn-success">Click to Update Record</button>
          </form>
        </div>
      </div>
    );
  }
}
export default App;
