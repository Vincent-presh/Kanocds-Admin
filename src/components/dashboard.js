import React from "react";
import Header from "./header";
import Main from "./main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./SideBar";
import Transaction from "./transaction";
import Profile from "./profile";
import Users from "./users";
import Fund from "./fund";
import Support from "./support";
import WalletHistory from "./WalletHistory";
import TransferFund from "./transferFund";
import EditTransactionPin from "./EditTransactionPin";
import Vouchers from "./vouchers";
import GenerateVoucher from "./generateVoucher";
import CreateUser from "./CreateUser";
import cookie from "react-cookies";
import Material from "./material";
import Directdonations from "./directDonations";
import Messages from "./messages";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

  componentDidMount() {
    const user = cookie.load("user");
    console.log(cookie.load("token"));
    if (!user) {
      this.props.history.push("/signIn");
    }
  }

  render() {
    return (
      <div>
        <Header></Header>
        <SideBar></SideBar>
        <Switch>
          <Route
            exact
            key={2}
            path="/"
            render={(routerProps) => <Transaction></Transaction>}
          />
          <Route
            exact
            key={10}
            path="/direct"
            render={(routerProps) => <Directdonations></Directdonations>}
          />
          <Route
            exact
            key={10}
            path="/Contact-messages"
            render={(routerProps) => <Messages></Messages>}
          />

          <Route
            exact
            key={3}
            path="/profile"
            render={(routerProps) => <Profile></Profile>}
          />
          <Route
            exact
            key={4}
            path="/contributors"
            render={(routerProps) => <Users></Users>}
          />

          <Route
            exact
            key={6}
            path="/support"
            render={(routerProps) => <Support></Support>}
          />

          <Route
            exact
            key={8}
            path="/material"
            render={(routerProps) => <Material></Material>}
          />

          <Route
            exact
            key={11}
            path="/expertise"
            render={(routerProps) => <Material></Material>}
          />
          <Route
            exact
            key={12}
            path="/projects"
            render={(routerProps) => <Material></Material>}
          />

          <Route
            exact
            key={9}
            path="/edit-transaction-pin"
            render={(routerProps) => <EditTransactionPin></EditTransactionPin>}
          />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
