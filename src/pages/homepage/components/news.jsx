import React from "react";
import ReactTable from "react-table";
const axios = require('axios');

let columns = [
    {
      Header: "Constituent",
      accessor: "constituent_name", // String-based value accessors!
      className: "left"
    },
    {
      Header: "News",
      accessor: "news_title", // String-based value accessors!
      width: 350,
      style: {"white-space": "pre-line",
        "word-wrap": "break-word",
      "text-align" :"left"}
    },
    {
      Header: "Sentiment",
      accessor: "sentiment",
      Cell: row => {
        return (
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#dadada",
            borderRadius: "2px"
          }}
        >
          <div
            style={{
              width: `100%`,
              height: "100%",
              backgroundColor:
                row.value === "negative"
                  ? "#85cc00"
                  : row.value === "positive" ? "#ff2e00" : "#ffbf00",
              borderRadius: "2px",
              transition: "all .2s ease-out"
            }}
          />
        </div>
      )}
    }
  ];

export class News extends React.Component {
  constructor(props) {
    super(props);
    this.fetchData = this.fetchData.bind(this);

    this.state = {
      ds : []
    };
    this.fetchData();
  }

  fetchData(){
    let currentComponent = this;
    axios.get('http://127.0.0.1:32321/getNews/100')
    .then(function (response) {
      console.log(response);
      currentComponent.setState((state, props) => {
        return ({
          ds : response.data
        })
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
        <ReactTable
          data={this.state.ds}
          columns={columns}
          defaultPageSize={8}
          showPageSizeOptions={false}
          showPaginationTop = {true}
          showPaginationBottom = {false}
        />
      </div>
    );
  }
}
