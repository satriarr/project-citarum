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
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    time: new Date()
  };

  componentDidMount() {
    myserver.get("/antares/getparticular?limit=15").then(val => {
      const rdata = val.data.map(d => {
        return parseFloat(d.val.split(",")[0]);
      });
      this.setState({
        data: [...rdata]
      });
    });
    this.timerID = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
    this.RTE = setInterval(() => {
      myserver.get("/antares/getlatest").then(val => {
        const dt = parseFloat(val.data.val.split(",")[0]);
        const lastArray = this.state.data;
        lastArray.pop();
        lastArray.unshift(dt);
        this.setState({
          data: [...lastArray]
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
    console.log(this.state.data);
    const data = {
      labels: [
        "5s",
        "10s",
        "15s",
        "20s",
        "25s",
        "30s",
        "35s",
        "40s",
        "45s",
        "50s",
        "55s",
        "60s",
        "65s",
        "70s",
        "75s"
      ],
      datasets: [
        {
          label: "Today",
          data: this.state.data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
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
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
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
          <ul className="location__list-menu">
            <li className="list-menu__item">
              <div className="item__text text-center">
                <i className="fas list-menu__icon fa-water" />
                <h5>7.8</h5>
                <span>Turbidity</span>
              </div>
            </li>
            <li className="list-menu__item">
              <div className="item__text text-center">
                <i className="fas list-menu__icon fa-tint" />
                <h5>5.6</h5>
                <span>pH</span>
              </div>
            </li>
            <li className="list-menu__item">
              <div className="item__text text-center">
                <i className="fas list-menu__icon fa-temperature-low" />
                <h5>8.9</h5>
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
              <Line data={data} />
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row mt-5">
                <div className="col-md-6">
                  <h4 className="text-center">Past Week</h4>
                  <Line data={data} />
                </div>
                <div className="col-md-6">
                  <h4 className="text-center">Past Month</h4>
                  <Line data={data} />
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
