import React from "react";

const MainBody = () => {
  const players = [
    {
      id: 1,
      name: "L. Mesi",
      role: "FWD",
      match: "LV vs BAL",
      sell_by: "20%",
      points: 120,
    },
    {
      id: 2,
      name: "L. Mesi",
      role: "FWD",
      match: "LV vs BAL",
      sell_by: "20%",
      points: 120,
    },
    {
      id: 3,
      name: "L. Mesi",
      role: "FWD",
      match: "LV vs BAL",
      sell_by: "20%",
      points: 120,
    },
    {
      id: 4,
      name: "L. Mesi",
      role: "FWD",
      match: "LV vs BAL",
      sell_by: "20%",
      points: 120,
    },
    {
      id: 5,
      name: "L. Mesi",
      role: "FWD",
      match: "LV vs BAL",
      sell_by: "20%",
      points: 120,
    },
  ];


  const matches=[
    {
        id:1,
        match:'LV vs BAL',
        status:'Completed',
        score:'2-4'
    },
    {
        id:2,
        match:'LV vs BAL',
        status:'Completed',
        score:'2-4'
    },
    {
        id:3,
        match:'LV vs BAL',
        status:'Pending',
        score:'2-4'
    },
    {
        id:4,
        match:'LV vs BAL',
        status:'Completed',
        score:'2-4'
    },
    {
        id:5,
        match:'LV vs BAL',
        status:'Completed',
        score:'2-4'
    }
  ]

  return (
    <div className="body-center">
      <div className="body-top">
        <h3 className="body-top-heading">Live Matches/ All Players</h3>

        <div className="body-header-top">
          <div className="body-header-inner-left">
            <h2>EPL</h2>
            <h3>24-25 Sep</h3>
            <h3>13 Matches</h3>
          </div>
          <div className="body-header-inner-right">
            {
                matches.map((data)=>(
                    <div key={data.id}>
              <h2>{data.match}</h2>
              <h3>{data.status}</h3>
              <h3>{data.score}</h3>
            </div>
                ))
            }
          </div>
        </div>
      </div>
      <div>
        <h2>PLAYER DETAILS</h2>

        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Role</td>
              <td>Match</td>
              <td>Sell By %</td>
              <td>Pts</td>
            </tr>
          </thead>
          <tbody className="table-body">
            {players.map((data) => (
              <tr className="table-row" key={data?.id}>
                <td>{data?.name}</td>
                <td>{data?.role}</td>
                <td>{data?.match}</td>
                <td>{data?.sell_by}</td>
                <td>{data?.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainBody;
