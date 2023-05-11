import axios from "axios";
import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

export class UserFruits extends Component {
  // /Fru-show

  constructor() {
    super();
    this.state = {
      showData: [],
      Count: "1",
    };
  }

  async componentDidMount() {
    const res = await axios.get("/api/Fru-show");
    console.log(res.lenght);
    this.setState({
      showData: res.data.message,
    });
  }

  Tcount = (count) => {
    var nu = count;
    console.log(nu);
    return nu;
  };

  update = () => {
    var cartData = localStorage.getItem("cart");
    var jsonConvart = JSON.parse(cartData);
    console.log(jsonConvart);
    var cartShow = jsonConvart.length;
    console.log(cartShow);
    return cartShow;
  };

  buyItem = (item) => {
    const data = {
      email: sessionStorage.getItem("email"),
      // name: item.name,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      productType: "Fruits",
    };
    this.setState({
      buy: true,
    });
    localStorage.setItem("buy", JSON.stringify([data]));
  };
  Increment = (count) => {
    var m = this.state.Count;
    var j = count + 1;
    return (m = j);
  };
  render() {
    var img = "";
    var x = this.state.showData.map((item) => {
      var jio = item.name.split(" ");
      var jino = jio[0];
      console.log(jio[0]);

      switch (jino) {
        case "Alphonso":
          img = (
            <>
              <img
                height="185px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/blog/wp-content/uploads/2015/07/7248255018_e825d712bb_o.jpg"
                alt="First slide"
              />
            </>
          );
          break;

        case "Kesar":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/blog/wp-content/uploads/2015/07/9108536414_b2fe3ca959_z.jpg"
                alt="First slide"
              />
            </>
          );
          break;

        case "Dasheri":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/Green_Mango_Rezowan_20190626121306.JPG"
                alt="First slide"
              />
            </>
          );
          break;

        case "Himsagar":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/blog/wp-content/uploads/2015/07/Mango_Himsagar_Asit_ftg.jpg"
                alt="First slide"
              />
            </>
          );
          break;

        case "Chausa":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/blog/wp-content/uploads/2015/07/Chaunsa1.jpg"
                alt="Chausa"
              />
            </>
          );
          break;
        case "Badami":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/blog/wp-content/uploads/2015/07/5943082196_1543591746_o.jpg"
                alt="Badami"
              />
            </>
          );
          break;
        case "Safeda":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/blog/wp-content/uploads/2015/07/6138447560_d311381e4d_z.jpg"
                alt="Safeda"
              />
            </>
          );
          break;

        case "Bombay":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/blog/wp-content/uploads/2015/07/Mango_Bombay_Asit_ftg.jpg"
                alt="Bombay"
              />
            </>
          );
          break;

        case "Langra":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/blog/wp-content/uploads/2015/07/Mango_LangraBenarsi_Asit_ftg.jpg"
                alt="Langra"
              />
            </>
          );
          break;
        case "Totapuri":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/blog/wp-content/uploads/2015/07/545712841_fc8c419eb4_z.jpg"
                alt="Totapuri"
              />
            </>
          );
          break;

        case "Neelam":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/8438682951_1c816de84c_b_20190621181146.jpg"
                alt="First slide"
              />
            </>
          );
          break;

        case "Raspuri":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/RaspuriMangoes_20190626143647.jpg"
                alt="Raspuri"
              />
            </>
          );
          break;
        case "":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src=""
                alt=""
              />
            </>
          );
          break;
        case "Malgoa/Mulgoba":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/Mango_Mulgoba_Asit_fs8_20190621183459.jpg"
                alt="Malgoa"
              />
            </>
          );
          break;

        case "Lakshmanbhog":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1057927583_20190626141915.jpg"
                alt="First slide"
              />
            </>
          );
          break;

        case "Amrapali":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/Amrapali_Mango_28129_20190624115234.jpg"
                alt="Amrapali"
              />
            </>
          );
          break;

        case "Imam":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/800px-Mango_ImamPasand_Asit_ftg_20190624122141.jpg"
                alt="Imam"
              />
            </>
          );
          break;
        case "Fazli":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/Screenshot2019-06-26at1.31.39PM_20190626133159.png"
                alt="Fazli"
              />
            </>
          );
          break;
        case "Mankurad":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/8853092098_6c9cf1f4f6_b_20190624133153.jpg"
                alt="Mankurad"
              />
            </>
          );
          break;
        case "Paheri/Pairi":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/Mango_Paheri_Asit_ftg_20190624144752.jpg"
                alt="Paheri/Pairi"
              />
            </>
          );
          break;

        case "Mallika":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/Mango_Mallika_Asit.fs8_20190624154219.jpg"
                alt="Mallika"
              />
            </>
          );
          break;

        case "Gulab":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/mango-323945_1920_20200108110929.jpg"
                alt="Gulab"
              />
            </>
          );
          break;
        case "Vanraj":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/3024_10151379174117689_888691326_n_20200108110536.jpg"
                alt="Vanraj"
              />
            </>
          );
          break;
        case "Kilichundan":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/30415009_2516767945214426_6479747404911345664_n_20200108105722.jpg"
                alt="Kilichundan"
              />
            </>
          );
          break;

        case "Rumani":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.holidify.com/images/cmsuploads/compressed/13521842_1209093585775653_6267861103060861432_n_20200108111159.jpg"
                alt="Rumani"
              />
            </>
          );
          break;
        case "Apple":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/750px-Red_Apple.jpg"
                alt="Apple"
              />
            </>
          );
          break;
        case "Banana":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Bananas_white_background.jpg/750px-Bananas_white_background.jpg"
                alt="Banana"
              />
            </>
          );
          break;
        case "Orange":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://5.imimg.com/data5/HM/KG/MY-42588315/fresh-orange-500x500.jpg"
                alt="Orange"
              />
            </>
          );
          break;
        case "Grapes":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://cdn2.stylecraze.com/wp-content/uploads/2014/07/Is-It-True-That-Eating-Too-Many-Grapes-Causes-Side-Effects.jpg"
                alt="Grapes"
              />
            </>
          );
          break;
        case "Pineapple":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://st.depositphotos.com/1050689/2099/i/950/depositphotos_20990611-stock-photo-pineapple-isolated.jpg"
                alt="Pineapple"
              />
            </>
          );
          break;
        case "Pomegranate":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.simplyrecipes.com/thmb/_zP3bxkOFCm0DulHWkMlWRloaTo=/1800x1200/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2005__11__pomegranate-horiz-a-1800-aabd491ecf0c4c1981406b571220cbfb.jpg"
                alt="Pomegranate"
              />
            </>
          );
          break;
        case "Papaya":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://images.healthshots.com/healthshots/en/uploads/2021/01/27181218/health-benefits-of-papaya.jpg"
                alt="Papaya"
              />
            </>
          );
          break;
        case "Watermelon":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.gardeningknowhow.com/wp-content/uploads/2021/05/whole-and-slices-watermelon.jpg"
                alt="Watermelon"
              />
            </>
          );
          break;
        case "Dragonfruit":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1d/Hylocereus_undatus_red_pitahaya.jpg"
                alt="Dragonfruit"
              />
            </>
          );
          break;
        case "Strawberry":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://cdn-prod.medicalnewstoday.com/content/images/articles/320/320894/strawberry-on-white-background-to-represent-strawberry-tongue.jpg"
                alt="Strawberry"
              />
            </>
          );
          break;
        case "Blueberry":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://www.healthifyme.com/blog/wp-content/uploads/2022/01/cropped-Blueberry-1.jpg"
                alt="Blueberry"
              />
            </>
          );
          break;
        case "Blackberry":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://m.media-amazon.com/images/I/71dpFyajA3L._SX466_.jpg"
                alt="Blackberry"
              />
            </>
          );
          break;
        case "Kiwifruit":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Kiwi_aka.jpg/640px-Kiwi_aka.jpg"
                alt="Kiwifruit"
              />
            </>
          );
          break;
        case "Pear":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://media.baamboozle.com/uploads/images/571859/1646072438_30584.jpeg"
                alt="Pear"
              />
            </>
          );
          break;
        case "Custard-Apple":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://cdn.britannica.com/95/126995-050-101B8B8D/Sweetsop.jpg"
                alt="Custard-Apple"
              />
            </>
          );
          break;
        case "Cherry":
          img = (
            <>
              <img
                height="200px"
                width="100%"
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cherry_Stella444.jpg/750px-Cherry_Stella444.jpg"
                alt="Cherry"
              />
            </>
          );
          break;

        default:
          console.log(52);
          break;
      }
      return (
        <>
          <div className="col-md-4" key={item.id}>
            <div className="card">
              <div className="card-header">
                <h5>{item.name}</h5>
                {img}
              </div>
              <div className="card-block text-center">
                <h6>{item.name}</h6>
                <h6>{item.quantity}</h6>
                <p>price :{item.price} &#8360;</p>
                <button
                  onClick={() => this.buyItem(item)}
                  className="btn btn-primary"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });
    // buy
    if (this.state.buy == true) {
      return (
        <>
          <Navigate to={"/PaymentDetails"} />
        </>
      );
    }
    // Cart show
    if (localStorage.getItem("cart") == null) {
      localStorage.setItem("cart", "[]");
    }
    var Data = sessionStorage.getItem("access_token_User");
    var DataDisplay = "";
    if (Data == null) {
      DataDisplay = (
        <>
          <div className="container-fluid row justify-content-center">
            <div>
              <img
                src="https://desainkaosmurah.com/files/image/cache/img_user/user_1/20220818092914_fathiyatul_fitri-481_error_404_ilustration-bg-800x600.png"
                className=""
              />
              <div className="container-fluid row justify-content-center">
                <Link to="/">
                  <button type="button" class="btn btn-outline-danger">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      DataDisplay = (
        <>
          <Navbar />

          <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
              <div className="pcoded-content">
                <div className="pcoded-inner-content">
                  {/* [ breadcrumb ] start */}
                  <div className="page-header">
                    <div className="page-block">
                      <div className="row align-items-center">
                        <div className="col-md-12">
                          <div className="page-header-title">
                            <h5 className="m-b-10">Fruits</h5>
                          </div>
                          <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                              <Link to="/User">
                                <i className="feather icon-home" />
                              </Link>
                            </li>
                            <li className="breadcrumb-item">
                              <Link to="/Fruits">ProductType</Link>
                            </li>
                            <li className="breadcrumb-item">
                              <Link to="/Fruits">Fruits</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* [ breadcrumb ] end */}
                  <div className="main-body">
                    <div className="page-wrapper">
                      {/* [ Main Content ] start */}
                      <div className="row">{x}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    return (
      <>
        <Helmet>
          <title>User | ProductType | Fruits</title>
        </Helmet>
        {DataDisplay}
      </>
    );
  }
}

export default UserFruits;
