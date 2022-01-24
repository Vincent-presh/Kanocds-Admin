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

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

  render() {
    return (
      <div>
        <Header></Header>
        <SideBar></SideBar>
        <Switch>
          <Route
            exact
            path="/"
            key={1}
            render={(routerProps) => <Main></Main>}
          />
          <Route
            exact
            key={2}
            path="/transactions"
            render={(routerProps) => <Transaction></Transaction>}
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
            path="/users"
            render={(routerProps) => <Users></Users>}
          />
          <Route
            exact
            key={5}
            path="/fund"
            render={(routerProps) => <Fund></Fund>}
          />
          <Route
            exact
            key={6}
            path="/support"
            render={(routerProps) => <Support></Support>}
          />
          <Route
            exact
            key={7}
            path="/wallet-history"
            render={(routerProps) => <WalletHistory></WalletHistory>}
          />
          <Route
            exact
            key={8}
            path="/transfer-fund"
            render={(routerProps) => <TransferFund></TransferFund>}
          />

          <Route
            exact
            key={9}
            path="/edit-transaction-pin"
            render={(routerProps) => <EditTransactionPin></EditTransactionPin>}
          />
          <Route
            exact
            key={10}
            path="/vouchers"
            render={(routerProps) => <Vouchers></Vouchers>}
          />
          <Route
            exact
            key={11}
            path="/generate-voucher"
            render={(routerProps) => <GenerateVoucher></GenerateVoucher>}
          />
          <Route
            exact
            key={12}
            path="/create-users"
            render={(routerProps) => <CreateUser></CreateUser>}
          />
        </Switch>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default Dashboard;
