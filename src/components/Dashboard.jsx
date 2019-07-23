import React from "react";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
import myserver from "../apis/myserver";
import moment from "moment";
// import antares from "antares-http";

class Dashboard extends React.Component {
  state = {
    lat: null,
    long: null,
    errLoc: false,
    dataTurbidity: [0, 0, 0, 0, 0],
    dataPh: [0, 0, 0, 0, 0],
    dataSuhu: [0, 0, 0, 0, 0],
    time: new Date(),
    turbidity: null,
    ph: null,
    suhu: null,
    taken: null
  };

  componentDidMount() {
    myserver.get("/antares/getparticular?limit=5").then(val => {
      const turbData = val.data.map(d => {
        return parseFloat(d.val.split(",")[1]);
      });
      const phData = val.data.map(d => {
        return parseFloat(d.val.split(",")[0]);
      });
      const suhuData = val.data.map(d => {
        return parseFloat(d.val.split(",")[2]);
      });
      this.setState({
        dataTurbidity: [...turbData],
        dataPh: [...phData],
        dataSuhu: [...suhuData]
      });
    });
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
    this.RTE = setInterval(() => {
      myserver.get("/antares/getlatest").then(val => {
        const dt = parseFloat(val.data.val.split(",")[1]);
        const dp = parseFloat(val.data.val.split(",")[0]);
        const ds = parseFloat(val.data.val.split(",")[2]);
        if (this.state.taken) {
          if (!(val.data.date === this.state.taken)) {
            myserver.post("/antares/", {
              turbidity: dt,
              ph: dp,
              suhu: ds
            });
            console.log("direkam");
          }
        }
        this.setState({
          turbidity: parseFloat(val.data.val.split(",")[1]),
          ph: parseFloat(val.data.val.split(",")[0]),
          suhu: parseFloat(val.data.val.split(",")[2]),
          taken: val.data.date
        });
        const dtLastArray = this.state.dataTurbidity;
        dtLastArray.pop();
        dtLastArray.unshift(dt);
        const dpLastArray = this.state.dataPh;
        dpLastArray.pop();
        dpLastArray.unshift(dp);
        const dsLastArray = this.state.dataSuhu;
        dsLastArray.pop();
        dsLastArray.unshift(ds);
        this.setState({
          dataTurbidity: [...dtLastArray],
          dataPh: [...dpLastArray],
          dataSuhu: [...dsLastArray]
        });
      });
    }, 5000);
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.setState({
            lat: position.coords.latitude,
            long: position.coords.longitude
          });
        },
        () => {
          this.setState({
            errLoc: true
          });
        }
      );
    }
  }

  componentWillUnmount() {
    clearInterval([this.timerID, this.RTE]);
  }

  getLatitude() {
    if (this.state.lat) {
      return <h5>{this.state.lat}</h5>;
    }

    if (this.state.errLoc) {
      return <h5>Tidak diketahui</h5>;
    }

    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  getLongitude() {
    if (this.state.long) {
      return <h5>{this.state.long}</h5>;
    }

    if (this.state.errLoc) {
      return <h5>Tidak diketahui</h5>;
    }

    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  render() {
    const { firstname, lastname, admin } = this.props.user;
    const dataTurbidity = {
      labels: ["5s", "10s", "15s", "20s", "25s"],
      datasets: [
        {
          label: "Turbidity",
          data: this.state.dataTurbidity,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)"
          ],
          borderWidth: 1
        }
      ]
    };
    const dataPh = {
      labels: ["5s", "10s", "15s", "20s", "25s"],
      datasets: [
        {
          label: "pH",
          data: this.state.dataPh,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)"
          ],
          borderWidth: 1
        }
      ]
    };
    const dataSuhu = {
      labels: ["5s", "10s", "15s", "20s", "25s"],
      datasets: [
        {
          label: "Suhu",
          data: this.state.dataSuhu,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)"
          ],
          borderWidth: 1
        }
      ]
    };
    return (
      <div className="main animated zoomIn faster">
        <div className="main__text-header">
          {admin ? (
            <h2>{`${firstname} ${lastname} (Administrator)`}</h2>
          ) : (
            <h2>{`${firstname} ${lastname}`}</h2>
          )}
          <h4>Selamat datang kembali</h4>
        </div>
        <div className="location">
          <ul className="location__list-menu">
            <li className="list-menu__item">
              <div className="item__text">
                <h5>{moment().format("dddd")}</h5>
                <span>Hari</span>
              </div>
            </li>
            <li className="list-menu__item">
              <div className="item__text">
                <h5>{this.state.time.toLocaleTimeString()}</h5>
                <span>Jam</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="location">
          <h4>Data terakhir: {this.state.taken}</h4>
          <ul className="location__list-menu">
            <li className="list-menu__item">
              <div className="item__text text-center">
                <i className="fas list-menu__icon fa-water" />
                {this.state.turbidity ? (
                  <h5>{this.state.turbidity}</h5>
                ) : (
                  <div className="text-center mb-3">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
                <span>Turbidity</span>
              </div>
            </li>
            <li className="list-menu__item">
              <div className="item__text text-center">
                <i className="fas list-menu__icon fa-tint" />
                {this.state.ph ? (
                  <h5>{this.state.ph}</h5>
                ) : (
                  <div className="text-center mb-3">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
                <span>pH</span>
              </div>
            </li>
            <li className="list-menu__item">
              <div className="item__text text-center">
                <i className="fas list-menu__icon fa-temperature-low" />
                {this.state.suhu ? (
                  <h5>{this.state.suhu}</h5>
                ) : (
                  <div className="text-center mb-3">
                    <div className="spinner-border" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                )}
                <span>Suhu</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="location">
          <h4>Info Lokasi</h4>
          <ul className="location__list-menu">
            <li className="list-menu__item">
              <div className="item__text">
                <h5>Bandung</h5>
                <span>Wilayah</span>
              </div>
            </li>
            <li className="list-menu__item">
              <div className="item__text">
                {this.getLatitude()}
                <span>Latitude</span>
              </div>
            </li>
            <li className="list-menu__item">
              <div className="item__text">
                {this.getLongitude()}
                <span>Langitude</span>
              </div>
            </li>
          </ul>
          <div className="row mt-4 align-items-center">
            <div className="col-md-8">
              <iframe
                title="citarum"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d990.0759470004054!2d107.63296482919216!3d-6.973440668500981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTgnMjQuNCJTIDEwN8KwMzgnMDAuNiJF!5e0!3m2!1sid!2sid!4v1563423931302!5m2!1sid!2sid"
                frameborder="0"
                style={{
                  border: "0",
                  width: "100%",
                  height: "300px",
                  borderRadius: "5px"
                }}
                allowfullscreen
              />
            </div>
            <div className="col-md-4">
              <h5>Lokasi Microcontroller</h5>
              <address>
                Jl. Telekomunikasi, Sukapura, Dayeuhkolot, Bandung, West Java
              </address>
            </div>
          </div>
        </div>
        <div className="river-chart">
          <h4 className="mb-4">Sungai Citarum</h4>
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Realtime
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                History
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row">
                <div className="col-md-12">
                  <Line data={dataTurbidity} />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <Line data={dataPh} />
                </div>
                <div className="col-md-6">
                  <Line data={dataSuhu} />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row mt-5">
                <div className="col-md-12">
                  <iframe
                    title="Turbidity history"
                    style={{
                      border: "none",
                      borderRadius: "2px",
                      boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
                    }}
                    width="100%"
                    height="480"
                    src="https://charts.mongodb.com/charts-project-0-ancdr/embed/charts?id=73e423f4-766b-4e3b-9ddc-0ac7dcbe0341&tenant=495c6e62-49e2-47c7-a358-e219fee9b427"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-md-6">
                  <iframe
                    title="Suhu history"
                    style={{
                      border: "none",
                      borderRadius: "2px",
                      boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
                    }}
                    width="100%"
                    height="480"
                    src="https://charts.mongodb.com/charts-project-0-ancdr/embed/charts?id=fbcf3393-098e-4900-8c67-347dfca50b8d&tenant=495c6e62-49e2-47c7-a358-e219fee9b427"
                  />
                </div>
                <div className="col-md-6">
                  <iframe
                    title="pH history"
                    style={{
                      border: "none",
                      borderRadius: "2px",
                      boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
                    }}
                    width="100%"
                    height="480"
                    src="https://charts.mongodb.com/charts-project-0-ancdr/embed/charts?id=ecdbefab-c2d6-44a8-ac56-5e954b0b8d81&tenant=495c6e62-49e2-47c7-a358-e219fee9b427"
                  />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <div className="row mt-5">
                <div className="col-md-8" />
                <div className="col-md-4">
                  <div className="card mb-3 bg-primary text-white">
                    <div className="card-body">
                      <div className="card-title">Ph</div>
                    </div>
                  </div>
                  <div className="card mb-3 bg-warning text-white">
                    <div className="card-body">
                      <div className="card-title">Lat</div>
                    </div>
                  </div>
                  <div className="card mb-3 bg-danger text-white">
                    <div className="card-body">
                      <div className="card-title">Lang</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    user: state.user
  };
};

export default connect(mapStateToProps)(Dashboard);
