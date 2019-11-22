import React, { Component } from "react";
import Header from "../../components/layout/header";
import Input from "./../../components/Input";
export default class Search extends Component {
  render() {
    return (
      <div>
        <Header title="搜索" />
        <Input placeholder="请输入关键字" />
      </div>
    );
  }
}
