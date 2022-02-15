import React, {useContext, useEffect} from "react";
import Context from "../Context"
import ajax from "../ajax"

function User() {
  const {state, dispatch} = useContext(Context)
  useEffect(() => {
    ajax("/user").then(user => {
      dispatch({type: "setUser", user})
    })
  }, [])
  return (
    <div>
      <h1>个人信息</h1>
      <div>Name: {state.user ? state.user.name : "加载中..."}</div>
    </div>
  );
}

export default User