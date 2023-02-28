import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Main from "./Components/Main"
import LoadingSpinner from "./Components/LoadingSpinner";
import axios from "axios";

function App() {
    const [order,setOrder] = React.useState({
            sum: 354.0,
            table: 0,
            datetime: "",
            payment_method:"",
            cust_id: 3831,
            rest_id: 3821
    })

    const [orderComplete,setOrderComplete] = React.useState(false)
    React.useEffect(() => {
        const fetchOrder = async () => {
            try {
                console.log(JSON.stringify(order))
                const response = await axios.post("http://localhost:8080/api/order/", order, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (orderComplete) {
            fetchOrder();
        }
    }, [orderComplete, order]);


    return (
      <div>
          <Header />
          {orderComplete ?<LoadingSpinner text="Η παραγγελία σας ελέγχεται απο το κατάστημα"/> : <Main ord={setOrderComplete} orr={setOrder} order={order}/> }
          <Footer/>
      </div>
  );

}

export default App;
