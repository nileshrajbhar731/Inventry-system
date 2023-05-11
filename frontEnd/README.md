1. retailer => 10 5% of
  1. electonic => quntaty
  2. food => kg
  3. fruits => kg
  4. vegitables kg
2. user => 2 5% of
  1. electonic
  2. food
  3. fruits
  4. vegitables 
<!-- 3. Admin =>
update,delete,all,edit,add(  1. electonic
  2. food
  3. fruits
  4. vegitables ) -->

  admin=>payment details=> qr scnare pdf

database

register => login(token) =>
                      1. electonic
                      2. food
                      3. fruits
                      4. vegitables  => visbale

<!-- register =>
1. name 
2. number
3. email
4. adreess
5. state
6. city
7. pin
8. store name 
9. store type
10. password -->

<!-- login => 
1. email
2. password
3. reset password
4. token barar
  async componentDidMount() {
    let token = "Bearer " + localStorage.getItem("login");
    console.log(token);
    const res = await axios.get("/api/Show-LoginData", {
      headers: { Authorization: token },
    });
    console.log(res.data);
    if (res.status === 200) {
      this.setState({
        message: [res.data],
        loading: false,
      });
    }
  } -->

product tracker =>
input and submit 

order table
name
username
price 
qmtay 
date
mode
clor
arget ->price high -> today  
history table
admin=> user

oreder impormation
acept and deny and cncle
delvary drop

email sending
phone otp


<!-- backup -->

    // const res_one = await axios.post("/api/RetailerBackupDetails", res.data.repose);
    // console.log(res_one.data);
    // this.setState({
    //   name: "",
    //   nametype: "",
    //   price: "",
    //   totalPrice: "",
    //   quantity: "",
    //   totalQuantity: "",
    // });