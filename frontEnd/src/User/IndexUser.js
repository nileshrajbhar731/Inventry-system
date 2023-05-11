import React, { Component } from "react";
import { Link, Navigate } from "react-router-dom";
import LogOut from "./LogOut";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet";
import axios from "axios";

export class IndexUser extends Component {
  // show data
  constructor(props) {
    super(props);
    this.state = {
      showData: [],
      showDataGlo: [],
      showDataVeg: [],
    };
  }
  
  async componentDidMount() {
    const res = await axios.get("/api/Fru-show");
    const resGlo = await axios.get("/api/Glo-show");
    const resVeg = await axios.get("/api/Veg-show");
    this.setState({
      showData: res.data.message,
      showDataGlo: resGlo.data.message,
      showDataVeg: resVeg.data.message,
    });
  }
  
  //  buy items

  buyItemFruits = (item) => {
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
  buyItemGrocery = (item) => {
    const data = {
      email: sessionStorage.getItem("email"),
      name: item.name,
      nameType: item.nameType,
      quantity: item.quantity,
      price: item.price,
      productType: "Grocery",
    };
    this.setState({
      buy: true,
    });
    localStorage.setItem("buy", JSON.stringify([data]));
  };
  buyItemVegitables = (item) => {
    const data = {
      email: sessionStorage.getItem("email"),
      // name: item.name,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      productType: "Vegitables",
    };
    this.setState({
      buy: true,
    });
    localStorage.setItem("buy", JSON.stringify([data]));
  };

  addTocart = (item, type, e) => {
    // console.log(img.props.children.props.src);
    console.log(type);
    console.log(e);
    let id = 1;
    if (localStorage.getItem("cart")) {
      id = localStorage.getItem("cart").length + 1;
    }
    const data = {
      id: id,
      // url: img,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
      productType: type,
    };

    if (localStorage.getItem("cart") == null) {
      localStorage.setItem("cart", "[]");
    }
    var update = JSON.parse(localStorage.getItem("cart"));
    update.push(data);
    localStorage.setItem("cart", JSON.stringify(update));
  };

  render() {

    window.addEventListener("storage", () => {
      if (localStorage.getItem("cart") === null) {
        localStorage.setItem("cart", "[]");
      }
    });
    
    var img = "";
    var x = this.state.showData.map((item) => {
      // console.table(item);
      var jio = item.name.split(" ");
      var jino = jio[0];
      // Fruits
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
          // console.log(52);
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
                  onClick={() => this.buyItemFruits(item)}
                  className="btn btn-primary"
                >
                  Buy
                </button>
                <button
                  onClick={(e) =>
                    this.addTocart(item, "Fruits", e)
                  }
                  className="btn btn-warning"
                >
                  Cart
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

    var nameType = "";
    var xGlo = this.state.showDataGlo.map((item) => {
      var jinoGlo = item.nameType;
      // Grocery
      switch (jinoGlo) {
        case "1":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kfpq5jk0/pulses/8/u/r/1-toor-dal-arhar-dal-desi-toor-dal-unbranded-original-imafw49gxj269b5w.jpeg?q=70"
                alt="Toor Dal"
              />
            </>
          );
          nameType = "Toor Dal";

          break;
        case "2":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/l3rmzrk0/pulses/h/l/p/-original-imaget5jbgfgd4fa.jpeg?q=70"
                alt="Urad Dal"
              />
            </>
          );
          nameType = "Urad Dal";
          break;
        case "3":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kwv0djk0/pulses/m/r/t/-original-imag9fygy8uuvgwu.jpeg?q=70"
                alt="Moong Dal"
              />
            </>
          );
          nameType = "Moong Dal";
          break;
        case "4":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/416/416/ju04akw0/pulses/5/r/h/500-chana-dal-chana-dal-rajdhani-original-imaff8aweg8jaz49.jpeg?q=70"
                alt="Chana Dal"
              />
            </>
          );
          nameType = "Chana Dal";
          break;
        // Ghee
        case "5":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/jxnksy80/ghee/u/8/s/1-pure-pouch-amul-original-imafg2myjpdpg9tz.jpeg?q=70"
                alt="Amul Pure Ghee 1 L Pouch"
              />
            </>
          );
          nameType = "Amul Pure Ghee 1 L Pouch";
          break;
        case "6":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/jkmwdjk0/ghee/s/v/n/1-pure-cow-pouch-gowardhan-original-imaf7yfncspcyy3w.jpeg?q=70"
                alt="Gowardhan Pure Cow Ghee 1 L Pouch"
              />
            </>
          );
          nameType = "Gowardhan Pure Cow Ghee 1 L Pouch";
          break;
        case "7":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/juu4jgw0/ghee/v/s/g/1-pure-tin-sagar-original-imaffv4undqzskts.jpeg?q=70"
                alt="Sagar Pure Ghee 1 L Tin"
              />
            </>
          );
          nameType = "Sagar Pure Ghee 1 L Tin";
          break;
        case "8":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/ksaoqkw0/ghee/p/j/q/na-pouch-godrej-jersey-original-imag5w33yre3hjht.jpeg?q=70"
                alt="Godrej Jersey Ghee 100 ml Pouch"
              />
            </>
          );
          nameType = "Godrej Jersey Ghee 100 ml Pouch";
          break;
        case "9":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/jkwwgi80/ghee/p/z/h/1-na-carton-ananda-original-imaf8666ha2vnnnr.jpeg?q=70"
                alt="Ananda Ghee 1 L Carton"
              />
            </>
          );
          nameType = "Ananda Ghee 1 L Carton";
          break;
        // Oils
        case "10":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/khuvxjk0/edible-oil/6/r/d/5-xpert-pro-sugar-conscious-can-blended-oil-fortune-original-imafxs3z2jtvq8zu.jpeg?q=70"
                alt="Blended Oli"
              />
            </>
          );
          nameType = "Blended Oli";
          break;
        case "11":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/ka2tmkw0/edible-oil/j/s/m/1-refined-pouch-sunflower-oil-gemini-original-imafrq4ygcpsvhna.jpeg?q=70"
                alt="Sunflower Oli"
              />
            </>
          );
          nameType = "Sunflower Oli";
          break;
        case "12":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kfcv6vk0/edible-oil/h/9/8/1-extra-virgin-plastic-bottle-olive-oil-oleev-original-imafvtpgqa83mpyu.jpeg?q=70"
                alt="Olive Oli"
              />
            </>
          );
          nameType = "Olive Oli";
          break;
        case "13":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/k6pd7680/edible-oil/f/k/e/5-filter-groundnut-oil-can-groundnut-oil-gulab-original-imafp3w2zmngbjkx.jpeg?q=70"
                alt="Groundnut Oli"
              />
            </>
          );
          nameType = "Groundnut Oli";
          break;
        case "14":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/l547yq80/edible-oil/n/s/r/-original-imagfv89wyzguhb3.jpeg?q=70"
                alt="Mustard Oli"
              />
            </>
          );
          nameType = "Mustard Oli";
          break;
        //Atta
        case "15":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/ks4yz680/flour/d/r/9/superior-mp-atta-whole-wheat-flour-aashirvaad-original-imag5rsz8gzx6fd5.jpeg?q=70"
                alt="AASHIRVAAD Select Sharbati Atta"
              />
            </>
          );
          nameType = "AASHIRVAAD Select Sharbati Atta";
          break;
        case "16":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/l13whow0/flour/c/u/b/10-chakki-atta-1-whole-wheat-flour-unbranded-original-imagcqv5xgekmenf.jpeg?q=70"
                alt="Chakki Atta"
              />
            </>
          );
          nameType = "Chakki Atta";
          break;
        case "17":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kxgfzbk0/flour/k/s/s/5-wheat-flour-atta-1-whole-wheat-flour-flipkart-grocery-original-imag9wrzauz7fbzq.jpeg?q=70"
                alt="Classic Wheat Flour Atta"
              />
            </>
          );
          nameType = "Classic Wheat Flour Atta";
          break;
        case "18":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kosxzm80/flour/j/p/a/10-chakki-fresh-atta-1-whole-wheat-flour-wheatkart-original-imag36aavzqcjkds.jpeg?q=70"
                alt="WHEATKART Chakki Fresh Atta"
              />
            </>
          );
          nameType = "WHEATKART Chakki Fresh Atta";
          break;
        case "19":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/l2nmnww0/flour/k/k/z/1-gold-atta-1-whole-wheat-flour-pillsbury-original-imagdygzz84dhsqt.jpeg?q=70"
                alt="Pillsbury Gold Sharbati Atta"
              />
            </>
          );
          nameType = "Pillsbury Gold Sharbati Atta";
          break;
        //Maida
        case "20":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kixgtjk0/flour/v/r/w/500-wheat-maida-1-maida-organic-tattva-original-imafym8cchphahk9.jpeg?q=70"
                alt="Organic Tattva Wheat Maida"
              />
            </>
          );
          nameType = "Organic Tattva Wheat Maida";
          break;
        case "21":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/ju04akw0/flour/x/r/r/500-maida-maida-rajdhani-original-imaff8avbrf3mhnw.jpeg?q=70"
                alt="Rajdhani Maida"
              />
            </>
          );
          nameType = "Rajdhani Maida";
          break;
        // Besan
        case "22":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kqidx8w0/flour/r/4/5/besan-besan-fortune-original-imag4gb4hzv2qzvy.jpeg?q=70"
                alt="Fortune Besan"
              />
            </>
          );
          nameType = "Fortune Besan";
          break;
        case "23":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kjvrdzk0/flour/n/z/n/besan-besan-24-mantra-organic-original-imafzce3cghhtzhh.jpeg?q=70"
                alt="24 mantra ORGANIC Besan/Gram"
              />
            </>
          );
          nameType = "24 mantra ORGANIC Besan/Gram";
          break;
        case "24":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kixgtjk0/flour/j/s/2/500-besan-1-besan-organic-tattva-original-imafym8zcway3gkz.jpeg?q=70"
                alt="Organic Tattva Besan"
              />
            </>
          );
          nameType = "Organic Tattva Besan";
          break;
        case "25":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/knknc7k0/flour/v/l/e/fine-besan-besan-tata-sampann-original-imag27vfgxfy4qae.jpeg?q=70"
                alt="Tata Sampann 100% Chana Dal Fine Besan"
              />
            </>
          );
          nameType = "Tata Sampann 100% Chana Dal Fine Besan";
          break;
        //  Masalas
        case "26":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/l572ufk0/spice-masala/d/v/v/-original-imagfx6agzfdxzzg.jpeg?q=70"
                alt="Maggi Masala Magic All in One Masala"
              />
            </>
          );
          nameType = "Maggi Masala Magic All in One Masala";
          break;
        case "27":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/km0x5zk0/spice-masala/7/u/u/turmeric-powder-pouch--powder-original-imagfydn4kzhecbc.jpeg?q=70"
                alt="EVEREST TURMERIC POWDER"
              />
            </>
          );
          nameType = "EVEREST TURMERIC POWDER";
          break;

        case "28":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kjabs7k0-0/spice-masala/d/p/v/meat-masala-box-everest-powder-original-imafyvpgsnstqzyg.jpeg?q=70"
                alt="EVEREST Meat Masala"
              />
            </>
          );
          nameType = "EVEREST Meat Masala";
          break;

        case "29":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/knknc7k0/spice-masala/w/x/j/meat-masala-box-tata-sampann-powder-original-imag27vhgzdmsy6y.jpeg?q=70"
                alt="Tata Sampann Meat Masala"
              />
            </>
          );
          nameType = "Tata Sampann Meat Masala";
          break;

        case "30":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kgv5x8w0/spice-masala/k/8/p/100-sabzi-masala-powder-box-catch-powder-original-imafxyf45hxgzgzu.jpeg?q=70"
                alt="Catch Sabzi Masala Powder"
              />
            </>
          );
          nameType = "Catch Sabzi Masala Powder";
          break;

        case "31":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/jlo1tow0/spice-masala/n/f/8/50-nawabi-meat-masala-box-badshah-powder-original-imaf8rykfx7ds7kw.jpeg?q=70"
                alt="BADSHAH Nawabi Meat Masala"
              />
            </>
          );
          nameType = "BADSHAH Nawabi Meat Masala";
          break;
        //  spices
        case "32":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/jw84ya80/spice-masala/x/w/j/100-methi-pouch-jk-whole-original-imafgyggwg5bqhfy.jpeg?q=70"
                alt="JK Methi"
              />
            </>
          );
          nameType = "JK Methi";
          break;
        case "33":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/jw84ya80/spice-masala/g/g/x/100-cardamom-pouch-jk-whole-original-imafgygh7m6typpa.jpeg?q=70"
                alt="JK Cardamom"
              />
            </>
          );
          nameType = "JK Cardamom";
          break;

        case "34":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kgv5x8w0/spice-masala/u/y/f/25-hing-plastic-bottle-catch-whole-original-imafxyf4mtw65wuv.jpeg?q=70"
                alt="Catch Hing"
              />
            </>
          );
          nameType = "Catch Hing";
          break;

        case "35":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kgv5x8w0/spice-masala/g/5/d/25-kasuri-methi-box-catch-whole-original-imafxyf4cwzxyrhq.jpeg?q=70"
                alt="Catch Kasuri Methi"
              />
            </>
          );
          nameType = "Catch Kasuri Methi";
          break;

        case "36":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kixgtjk0/spice-masala/z/h/z/100-cumin-pouch-organic-tattva-whole-original-imafym93jhapeugt.jpeg?q=70"
                alt="Organic Tattva Cumin"
              />
            </>
          );
          nameType = "Organic Tattva Cumin";
          break;

        case "37":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kwtkxow0/spice-masala/e/l/v/-original-imag9euhnetnup9c.jpeg?q=70"
                alt="Classic Cumin Seeds"
              />
            </>
          );
          nameType = "Classic Cumin Seeds";
          break;

        // Basmati Rice

        case "38":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kziqvm80/rice/u/6/5/-original-imagbgg73bd8ehau.jpeg?q=70"
                alt="Organic Tattva Basmati Rice"
              />
            </>
          );
          nameType = "Organic Tattva Basmati Rice";
          break;

        case "39":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/l29c9e80/rice/s/n/u/-original-imagdmxjgqfgmbsg.jpeg?q=70"
                alt="INDIA GATE Feast Rozzana Basmati Rice"
              />
            </>
          );
          nameType = "INDIA GATE Feast Rozzana Basmati Rice";
          break;

        case "40":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kqidx8w0/rice/t/t/l/white-rozana-na-basmati-rice-pouch-fortune-original-imag4gb4ds2vk7fv.jpeg?q=70"
                alt="Fortune Rozana Basmati Rice"
              />
            </>
          );
          nameType = "Fortune Rozana Basmati Rice";
          break;

        case "41":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kzegk280/rice/n/6/7/5-white-rozana-raw-basmati-rice-bag-devaaya-long-grain-original-imagbf66nfgpgrsr.jpeg?q=70"
                alt="Devaaya Rozana Basmati Rice"
              />
            </>
          );
          nameType = "Devaaya Rozana Basmati Rice";
          break;
        //Sona Masoori Rice

        case "42":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kxnl6kw0/rice/2/c/p/-original-imaga27tbsaaugcf.jpeg?q=70"
                alt="Sona Masoori Rice"
              />
            </>
          );
          nameType = "Sona Masoori Rice";
          break;

        case "43":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/ke8uv0w0/test-ndc-grocery/g/h/n/1-white-broken-pouch-sona-masoori-rice-24-mantra-organic-original-imafuz3shvprkd45.jpeg?q=70"
                alt="24 mantra ORGANIC Organic Broken"
              />
            </>
          );
          nameType = "24 mantra ORGANIC Organic Broken";
          break;

        case "44":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/ktx9si80/rice/6/w/m/5-brown-na-raw-sona-masoori-rice-pouch-ecofresh-medium-grain-original-imag75nsfyddq7gf.jpeg?q=70"
                alt="ecoFRESH Organic Hand Pounded Brown"
              />
            </>
          );
          nameType = "ecoFRESH Organic Hand Pounded Brown";
          break;

        case "45":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/ktx9si80/rice/1/j/q/5-white-na-raw-sona-masoori-rice-pouch-ecofresh-medium-grain-original-imag75ns2ufuctxs.jpeg?q=70"
                alt="ecoFRESH Organic Sona Masoori Rice"
              />
            </>
          );
          nameType = "ecoFRESH Organic Sona Masoori Rice";
          break;

        //  Dry Fruits

        case "46":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kwtkxow0/nut-dry-fruit/j/f/h/-original-imag9euee6cyhpsg.jpeg?q=70"
                alt="Classic Figs"
              />
            </>
          );
          nameType = "Classic Figs";
          break;

        case "47":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/l4hcx3k0/nut-dry-fruit/f/b/y/200-selecta-afghan-dried-anjeer-1-vacuum-pack-farmley-original-imagfdfpweygapyz.jpeg?q=70"
                alt="Farmley Selecta Afghan Dried Anjeer Figs"
              />
            </>
          );
          nameType = "Farmley Selecta Afghan Dried Anjeer Figs";
          break;

        case "48":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/k70spzk0/nut-dry-fruit/3/b/h/200-dried-cranberry-sliced-pouch-regency-original-imafpcv77tkgz5ga.jpeg?q=70"
                alt="Regency Dried Cranberries"
              />
            </>
          );
          nameType = "Regency Dried Cranberries";
          break;

        case "49":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/k70spzk0/nut-dry-fruit/t/e/z/75-dried-blueberry-pouch-regency-original-imafpcv7hfpqr7sz.jpeg?q=70"
                alt="Regency Dried Blueberry"
              />
            </>
          );
          nameType = "Regency Dried Blueberry";
          break;

        // Nuts

        case "50":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kgcl7680/nut-dry-fruit/n/x/9/500-indian-whole-pouch-ziofit-original-imafwhngv9afqbfc.jpeg?q=70"
                alt="Ziofit Indian Whole Cashews"
              />
            </>
          );
          nameType = "Ziofit Indian Whole Cashews";
          break;

        case "51":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kgcl7680/nut-dry-fruit/h/x/f/500-indian-whole-pouch-ziofit-original-imafwhngwesm96zd.jpeg?q=70"
                alt="Ziofit Indian Whole + Free Californian"
              />
            </>
          );
          nameType = "Ziofit Indian Whole + Free Californian";
          break;

        case "52":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kynb6vk0/nut-dry-fruit/o/n/o/500-premium-w400-cashews-100-natural-raw-kaju-500-g-pouch-1-original-imagau6qb7w5tf3m.jpeg?q=70"
                alt=""
              />
            </>
          );
          break;

        case "53":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/krdtlzk0/nut-dry-fruit/a/j/a/na-pouch-molsi-s-original-imag56t9ejufasfz.jpeg?q=70"
                alt="Farmley Popular W400 Raw Kaju Cashews"
              />
            </>
          );
          nameType = "Farmley Popular W400 Raw Kaju Cashews";
          break;

        // Seeds

        case "54":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/ke8uv0w0/edible-seed/z/n/b/100-pouch-raw-zoff-whole-original-imafuz6ctnfdccf3.jpeg?q=70"
                alt="zoff Makhana Lotus Seeds"
              />
            </>
          );
          nameType = "zoff Makhana Lotus Seeds";
          break;

        case "55":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/krtjgcw0/edible-seed/s/b/x/500-active-heart-special-flax-seeds-raw-pouch-india-gate-whole-original-imag5j35djsgvtmr.jpeg?q=70"
                alt="INDIA GATE Roasted Flax Seed/Alsi"
              />
            </>
          );
          nameType = "INDIA GATE Roasted Flax Seed/Alsi";
          break;

        case "56":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kwcfngw0/nut-dry-fruit/k/d/o/200-makhana-lotus-seed-200g-pouch-1-farmley-original-imag9fqgs7n9gmfv.jpeg?q=70"
                alt="Farmley Prasadam Makhana"
              />
            </>
          );
          nameType = "Farmley Prasadam Makhana";
          break;

        case "57":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/krtjgcw0/edible-seed/8/9/0/200-wholesome-health-special-chia-seeds-200-gm-pack-raw-pouch-original-imag5j35vpny6rkm.jpeg?q=70"
                alt="INDIA GATE Chia Seeds"
              />
            </>
          );
          nameType = "INDIA GATE Chia Seeds";
          break;

        // Sugar

        case "58":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/krayqa80/sugar/e/s/j/500-icing-box-icing-sugar-solar-crystal-original-imag54gxnswfuztx.jpeg?q=70"
                alt="Solar Icing Sugar"
              />
            </>
          );
          nameType = "Solar Icing Sugar";
          break;

        case "59":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kmwcuq80/sugar/4/m/k/50-less-calories-pouch-white-sugar-sugarlite-crystal-original-imagfzwgus8krhz9.jpeg?q=70"
                alt="Sugarlite 50% Less Calories Sugar"
              />
            </>
          );
          nameType = "Sugarlite 50% Less Calories Sugar";
          break;

        case "60":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kixgtjk0/sugar/q/f/w/500-na-pouch-white-sugar-organic-tattva-crystal-original-imafym93epxmmh9f.jpeg?q=70"
                alt="Organic Tattva Sugar"
              />
            </>
          );
          nameType = "Organic Tattva Sugar";
          break;

        case "61":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kixgtjk0/sugar/h/b/h/500-brown-pouch-brown-sugar-organic-tattva-crystal-original-imafym93dhc6yqsx.jpeg?q=70"
                alt="Organic Tattva Brown Sugar"
              />
            </>
          );
          nameType = "Organic Tattva Brown Sugar";
          break;

        // Jaggery

        case "62":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kixgtjk0/jaggery/s/z/f/500-powder-powder-pouch-organic-tattva-original-imafym8srzgnrqec.jpeg?q=70"
                alt="Organic Tattva Powder Jaggery"
              />
            </>
          );
          nameType = "Organic Tattva Powder Jaggery";
          break;

        case "63":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/ktx9si80/jaggery/m/f/r/powder-na-pouch-safe-harvest-original-imag762nkdyghexh.jpeg?q=70"
                alt="safe harvest Powder Jaggery"
              />
            </>
          );
          nameType = "safe harvest Powder Jaggery";
          break;

        case "64":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kjhgzgw0/jaggery/c/h/e/450-jaggery-block-pouch-parth-original-imafzfwdjk49jfus.jpeg?q=70"
                alt="parth Kolhapur Block Jaggery"
              />
            </>
          );
          nameType = "parth Kolhapur Block Jaggery";
          break;

        case "65":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/ku8pbbk0/jaggery/z/o/2/400-block-na-1-plastic-bottle-parth-original-imag7esyxhehebdn.jpeg?q=70"
                alt="parth Block Jaggery"
              />
            </>
          );
          nameType = "parth Block Jaggery";
          break;

        // Salt

        case "66":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kr3tj0w0/salt/g/1/e/na-iodized-salt-aashirvaad-original-imag4z2dpaaqtvmv.jpeg?q=70"
                alt="AASHIRVAAD Salt,with 4-Step advantage"
              />
            </>
          );
          nameType = "AASHIRVAAD Salt,with 4-Step advantage";
          break;

        case "67":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/krjjde80/salt/p/s/z/1-himalayan-pink-salt-powder-1000g-himalayan-pink-salt-himalayan-original-imag5b7qu3czbdvc.jpeg?q=70"
                alt="Himalayan Natives Powder 1000g"
              />
            </>
          );
          nameType = "Himalayan Natives Powder 1000g";
          break;

        case "68":
          img = (
            <>
              <img
                className="d-block w-100"
                src="data:image/jpeg;base64,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"
                alt="Tata Lite Iodized Salt"
              />
            </>
          );
          nameType = "Tata Lite Iodized Salt";
          break;

        case "69":
          img = (
            <>
              <img
                className="d-block w-100"
                src="https://rukminim1.flixcart.com/image/280/280/kuof5ow0/salt/b/w/a/na-iodized-salt-tata-original-imag7qyapwcyntsj.jpeg?q=70"
                alt=" Tata Iodized Salt"
              />
            </>
          );
          nameType = " Tata Iodized Salt";
          break;

        default:
          // console.log(52);
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
                <h6>{nameType}</h6>
                <h6>{item.quantity}</h6>
                <p>price :{item.price} &#8360;</p>
                <button
                  onClick={() => this.buyItemGrocery(item)}
                  className="btn btn-primary"
                >
                  Buy
                </button>
                <button
                  onClick={() =>
                    this.addTocart(
                      item,
                      "Grocery",
                      img.props.children.props.src
                    )
                  }
                  className="btn btn-warning"
                >
                  Cart
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });
    var xVeg = this.state.showDataVeg.map((item) => {
      // console.log(item);
      var Veg = item.name.split(" ");
      var jinoVeg = Veg[0];
      // console.log(Veg[0]);
      // Vegitables
      switch (jinoVeg) {
        case "Potato":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Potato.png"
                alt="Potato"
              />
            </>
          );
          break;

        case "Tomato":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Tomato.png"
                alt="Tomato"
              />
            </>
          );
          break;

        case "Brinjal":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/brinjal-min.png"
                alt="Brinjal"
              />
            </>
          );
          break;

        case "Cabbage":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/cabbage-min.png"
                alt="Cabbage"
              />
            </>
          );
          break;

        case "Radish":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/radish-min.png"
                alt="Radish"
              />
            </>
          );
          break;
        case "Onion":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/onion-min.png"
                alt="Onion"
              />
            </>
          );
          break;
        case "Bitter":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Bitter-Gourd-min.png"
                alt="Bitter Gourd"
              />
            </>
          );
          break;

        case "Lady’s":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/lady-finger-min.png"
                alt="Lady’s finger"
              />
            </>
          );
          break;

        case "Langra":
          img = (
            <>
              <img className="d-block w-100" src="/Vegitables/" alt="Langra" />
            </>
          );
          break;
        case "Cauliflower":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/cauliflower-min.png"
                alt="Cauliflower"
              />
            </>
          );
          break;

        case "Pumpkin":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/pumpkin-min.webp"
                alt="Pumpkin"
              />
            </>
          );
          break;

        case "Carrot":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/carrot-min.webp"
                alt="Carrot"
              />
            </>
          );
          break;

        case "Ginger":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/ginger-min.webp"
                alt="Ginger"
              />
            </>
          );
          break;

        case "Chilli":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/chilli-min.webp"
                alt="Chilli"
              />
            </>
          );
          break;

        case "Capsicum":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/capsicum-min.webp"
                alt="Capsicum"
              />
            </>
          );
          break;

        case "Spinach":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/spinach-min.webp"
                alt="Spinach"
              />
            </>
          );
          break;
        case "Jackfruit":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Jackfruit-min-1.webp"
                alt="Jackfruit"
              />
            </>
          );
          break;
        case "Mushroom":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/mushroom-min.webp"
                alt="Mushroom"
              />
            </>
          );
          break;
        case "Sweet":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/sweet-potato-min.webp"
                alt="Sweet Potato"
              />
            </>
          );
          break;

        case "Beetroot":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/beetroot-min.webp"
                alt="Beetroot"
              />
            </>
          );
          break;

        case "Cucumber":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/cucumber-min.webp"
                alt="Cucumber"
              />
            </>
          );
          break;
        case "Broccoli":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/broccoli-min.webp"
                alt="Broccoli"
              />
            </>
          );
          break;
        case "Asparagus":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/asparagus-min.webp"
                alt="Asparagus"
              />
            </>
          );
          break;

        case "Corn":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/corn-min.webp"
                alt="Corn"
              />
            </>
          );
          break;

        case "Celery":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Celery-min-1.webp"
                alt="Celery"
              />
            </>
          );
          break;

        case "Green":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/green-bean-min.webp"
                alt="Green bean"
              />
            </>
          );
          break;

        case "Chickpea":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/chickpea-min.webp"
                alt="Chickpea"
              />
            </>
          );
          break;

        case "Lentil":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/lentil-min.webp"
                alt="Lentil"
              />
            </>
          );
          break;

        case "Peas":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/peas-min.webp"
                alt="Peas"
              />
            </>
          );
          break;

        case "Garlic":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/garlic-min.webp"
                alt="Garlic"
              />
            </>
          );
          break;

        case "Coriander":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/coriander-min.webp"
                alt="Coriander"
              />
            </>
          );
          break;

        case "Apple":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Apple-Gourd-min.webp"
                alt="Apple Gourd"
              />
            </>
          );
          break;

        case "Drumstick":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Drumstick-min.webp"
                alt="Drumstick"
              />
            </>
          );
          break;

        case "Bottle":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/bottle-gourd-min.webp"
                alt="Bottle Gourd"
              />
            </>
          );
          break;

        case "Leek":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/leek-min.webp"
                alt="Leek"
              />
            </>
          );
          break;

        case "Cluster":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Cluster.webp"
                alt="Cluster Beans"
              />
            </>
          );
          break;

        case "Pointed":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Pointed-Gourd-min.webp"
                alt="Pointed Gourd"
              />
            </>
          );
          break;

        case "Yam":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/yam-min.webp"
                alt="Yam"
              />
            </>
          );
          break;

        case "Artichoke":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Artichoke-min.webp"
                alt="Artichoke"
              />
            </>
          );
          break;

        case "Ash":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Ash-Gourd-min.webp"
                alt="Ash Gourd"
              />
            </>
          );
          break;

        case "Bok":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Bok-choy-min.webp"
                alt="Bok Choy"
              />
            </>
          );
          break;

        case "Brussels":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Brussels-sprout-min.webp"
                alt="Brussels Sprout"
              />
            </>
          );
          break;

        case "Chayote":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/chayote-min.webp"
                alt="Chayote"
              />
            </>
          );
          break;

        case "Endive":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/endive-min.webp"
                alt="Endive"
              />
            </>
          );
          break;

        case "Kohlrabi":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Kohlrabi.webp"
                alt="Kohlrabi"
              />
            </>
          );
          break;

        case "Luffa":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/luffa-min.webp"
                alt="Luffa"
              />
            </>
          );
          break;

        case "Parsnip":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Parsnip-min.webp"
                alt="Parsnip"
              />
            </>
          );
          break;

        case "Ridged":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Ridged-Gourd-min.webp"
                alt="Ridged Gourd"
              />
            </>
          );
          break;

        case "Swiss":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Swiss-chard-min.webp"
                alt="Swiss Chard"
              />
            </>
          );
          break;

        case "Turnip":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/Turnip-min.webp"
                alt="Turnip"
              />
            </>
          );
          break;

        case "Zucchini":
          img = (
            <>
              <img
                className="d-block w-100"
                src="/Vegitables/zucchini-min.webp"
                alt="Zucchini"
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
                  onClick={() => this.buyItemVegitables(item)}
                  className="btn btn-primary"
                >
                  Buy
                </button>
                <button
                  onClick={() =>
                    this.addTocart(
                      item,
                      "Vegitables",
                      img.props.children.props.src
                    )
                  }
                  className="btn btn-warning"
                >
                  Cart
                </button>
              </div>
            </div>
          </div>
        </>
      );
    });
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

          <section className="pcoded-main-container">
            <div className="pcoded-wrapper">
              <div className="pcoded-content">
                <div className="pcoded-inner-content">
                  <div className="main-body">
                    <div className="page-wrapper">
                      {/* [ Main Content ] start */}
                      <div className="row">
                        {/* [ Hover-table ] start */}
                        <div className="col-xl-12">
                          <div className="card">
                            <div className="card-header">
                              <h5>Fruits</h5>
                            </div>
                            <div className="row">
                              {x.length === 0 ? (
                                <div className="col-md-4">
                                  <div className="card">not found</div>
                                </div>
                              ) : (
                                x
                              )}
                            </div>
                          </div>
                        </div>
                        {/* [ Hover-table ] end */}

                        <div className="col-xl-12">
                          <div className="card">
                            <div className="card-header">
                              <h5>Grocery</h5>
                            </div>
                            <div className="row">
                              {xGlo.length === 0 ? (
                                <div className="col-md-4">
                                  <div className="card">not found</div>
                                </div>
                              ) : (
                                xGlo
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="card">
                            <div className="card-header">
                              <h5>Vegitables</h5>
                            </div>
                            <div className="row">
                              {xVeg.length === 0 ? (
                                <div className="col-md-4">
                                  <div className="card">not found</div>
                                </div>
                              ) : (
                                xVeg
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* [ Main Content ] end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      );
    }
    return (
      <>
        <Helmet>
          <title>User</title>
        </Helmet>
        {DataDisplay}
      </>
    );
  }
}

export default IndexUser;
