import React from "react";
import "./basic.css";

const name = "홍길동";
const isLoggedin = true;
const items = ["사과", "바나나", "체리"];

export default function BasicExp() {
  return (
    <div className="container">
      <h1>좋은 오후 {name}</h1>
      <p>{isLoggedin ? "로그인 하였습니다." : "로그아웃 상태입니다."}</p>
      <p style={{ color: "red", fontSize: "30px" }}> 스타일은 그대로</p>
      <ul>
        {items.map((items, index) => (
          <li key={index}>
            {index + 1} {items}
          </li>
        ))}
      </ul>
    </div>
  );
}
