
import React from "react";
import Header from './Components/Header';
import Products from './Components/Products';
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import BannerLeft from "./Components/BannerLeft";
import BannerRight from "./Components/BannerRight";
import Pagination from "./Components/Pagination";
import LeftBottom from "./Components/LeftBottom";
import MiddleBottom from "./Components/MiddleBottom";
import RightBottom from "./Components/RightBottom";
import ScrollTop from "./Components/ScrollTop";
import TaskForm from "./Components/TaskForm";
import Control from "./Components/Control";
import TaskList from "./Components/TaskList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      txtUsername: "",
      txtPassword: "",
      txtDes: "",
      sltCategory: 1,
      rdYear: "2020",
      checkStatus: false,
      tasks: [],
      isDisplayForm: false,
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
     sortBy:'name',
     sortValue:1,
      keyword: ''
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }
  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({ tasks: tasks });
    }
  }
  s4() {
    return Math.floor(1 * Math.random() * 0x10000).toString(16).substring(1);
  }
  generateID() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }
  onHandleChange(event) {
    var target = event.target;
    var value = target.type === "checkbox" ? target.checked : target.value;
    var name = target.name;

    this.setState({
      [name]: value
    });
  }
  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }
  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null
      });
    }

  }
  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }
  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    });
  }
  onSubmit = (data) => {
    var { tasks } = this.state;
    if (data.id === '') {
      data.id = this.generateID();
      tasks.push(data);
    } else {
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }

    this.setState({
      tasks: tasks,
      taskEditing: null
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  onSort=(sortBy,sortValue)=>{
    this.setState({ 
      sortBy: sortBy,
      sortValue: sortValue,
    })

  }
  onUpdateStatus = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({ tasks: tasks });
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  onDelete = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    if (index !== -1) {
      tasks.splice(index, 1);
      this.setState({ tasks: tasks });
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    this.onCloseForm();
  }
  onUpdate = (id) => {
    var { tasks } = this.state;
    var index = this.findIndex(id);
    var taskEditing = tasks[index];
    this.setState({ taskEditing: taskEditing });
    this.onShowForm();
  }
  findIndex = (id) => {
    var { tasks } = this.state;
    var result = -1;
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  }
  onFilter = (filterName, filterStatus) => {
    filterStatus = parseInt(filterStatus, 10);
    this.setState({
      filter: {
        name: filterName.toLowerCase(),
        status: filterStatus,
      }
    });
  }
  onSearch = (keyword) => {
    this.setState({
      keyword: keyword,
    });
  }
  render() {
    var { tasks, isDisplayForm, taskEditing, filter, keyword,sortBy,sortValue } = this.state;
    if (filter) {
      if (filter.name) {
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        if (filter.status === -1) {
          return task;
        } else {
          return task.status === (filter.status === 1 ? true : false);
        }
      });
    }
    if (keyword) {

      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(keyword) !== -1;
      });
    }
    if(sortBy==='name') {
      tasks.sort((a,b)=>{
        if(a.name>b.name) return sortValue;
        else if(a.name<b.name) return -sortValue;
        else return 0;
      });
    }else{
      tasks.sort((a,b)=>{
        if(a.status>b.status) return -sortValue;
        else if(a.status<b.status) return sortValue;
        else return 0;
      });
    }
    var elementTaskForm = isDisplayForm ? <TaskForm onSubmit={this.onSubmit} task={taskEditing}
      onCloseForm={this.onCloseForm} /> : "";
    var products = [
      {
        id: 1,
        ISBN: "ABCXYZ",
        category: "action",
        name: "Kengan Omega",
        author: "Nogul",
        dob: Date,
        des: "Chapter 123",
        view: "5555555",
        picture: "chuong1.jpg",
      },
      {
        id: 2,
        ISBN: "ABCXY1",
        category: "action",
        name: "Kengan Omega",
        author: "Nogul",
        dob: Date,
        des: "Chapter 124",
        view: "123123",
        picture: "chuong1.jpg",
      },
      {
        id: 3,
        ISBN: "ABCXYZ",
        category: "action",
        name: "Kengan Omega",
        author: "Nogul",
        dob: Date,
        des: "Chapter 125",
        view: "1000212",
        picture: "chuong1.jpg",
      },
      {
        id: 4,
        ISBN: "ABCXYZ",
        category: "action",
        name: "Kengan Omega",
        author: "Nogul",
        dob: Date,
        des: "Chapter 126",
        view: "123123",
        picture: "chuong1.jpg",
      },
      {
        id: 5,
        ISBN: "ABCXYZ",
        category: "action",
        name: "Kengan Omega",
        author: "Nogul",
        dob: Date,
        des: "Chapter 127",
        view: "123127",
        picture: "chuong1.jpg",
      },
      {
        id: 6,
        ISBN: "ABCXYZ",
        category: "action",
        name: "Kengan Omega",
        author: "Nogul",
        dob: Date,
        des: "Chapter 128",
        view: "123128",
        picture: "chuong1.jpg",
      }


    ]
    let elements = products.map((product, index) => {
      return <Products key={product.id} name={product.name} des={product.des} image={product.picture} />
    });
    return (
      <div>

        <Header />
        <br /> <br /> <br />
        <div className="banner">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <BannerLeft />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <Banner />
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <BannerRight />
          </div>
        </div>
        <h1>TRUYỆN ĐỀ CỬ </h1>
        <div className="row">
          <div className="col-xs- col-sm- col-md- col-lg-">
            {elements}
          </div>
        </div>

        <div className="container">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit} >
                  <legend>Form title</legend>
                  <div className="form-group">
                    <label >Username</label>
                    <input type="text" className="form-control" placeholder="Input field"
                      name="txtUsername" onChange={this.onHandleChange} />


                  </div>
                  <div className="form-group">
                    <label >Author</label>
                    <input type="text" className="form-control" placeholder="Input field"
                      name="txtPassword" onChange={this.onHandleChange} />
                  </div> <div className="form-group">
                    <label >Description</label>

                    <textarea name="txtDes" className="form-control" rows="3" onChange={this.onHandleChange}></textarea>
                  </div>
                  <label >Category</label>

                  <select name="sltCategory" className="form-control" value={this.state.sltCategory} onChange={this.onHandleChange}>
                    <option value={0}>Action</option>
                    <option value={1}>Drama</option>
                    <option value={2}>Adult</option>
                  </select>

                  <div className="radio">
                    <label>
                      <input type="radio" name="rdYear" value="2020" onChange={this.onHandleChange} checked={this.state.rdYear === "2020"} />
                      2020
                    </label>
                    <label>
                      <input type="radio" name="rdYear" value="2021" onChange={this.onHandleChange} checked={this.state.rdYear === "2021"} />
                      2021
                    </label>
                  </div>

                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value={true} onChange={this.onHandleChange}
                        name="checkStatus" checked={this.state.checkStatus === true} />
                      Accept
                    </label>
                  </div>

                  <br />

                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="reset" className="btn btn-primary">Reset</button>
                </form>
              </div>

            </div>

          </div>

        </div>
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
            <hr />
          </div>
        </div>
        <div className="container-fluid task">
          <div className="row">
            <div className={isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
              {elementTaskForm}
            </div>
            <div className={isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
              <button type="button" className="btn btn-primary" onClick={this.onToggleForm}>
                <span className="fa fa-plus mr-5"></span>Thêm Công Việc
              </button>
              <Control onSearch={this.onSearch} onSort={this.onSort} sortBy={sortBy} sortValue={sortValue}/>
              <TaskList tasks={tasks} onUpdateStatus={this.onUpdateStatus}
                onDelete={this.onDelete} onUpdate={this.onUpdate}
                onFilter={this.onFilter}
              />
            </div>
          </div>
        </div>
        <ScrollTop />
        <div className="top_bottom">
          <Pagination />
        </div>
        <div className="bottom">
          <div className="row"><LeftBottom />
            <MiddleBottom />
            <RightBottom /></div>
          <div className="row"><Footer /></div>

        </div>

      </div>

    );

  }

}

export default App;
