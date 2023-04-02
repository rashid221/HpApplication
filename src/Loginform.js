import React, { useReducer, useState } from "react";
import MainSection from "./MainSection";
import Navbar from "./Navbar";
import {useFormik} from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  name:"",
  email:"",
  password:"",
  confirm_password:""
}

const initialState = {
  user: "",
  pass: "",
  login: false,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS":
      return {
        ...state,
        login: true,
        user: "",
        pass: ""
      }
    case "error":
      return {
        ...state,
        error: "invalid"
      }
    case "LOGOUT":
      return {
        ...state,
        error: false,
        login: false
      }
    case "user":
      return {
        ...state,
        user: action.value
      };
    case "pass":
      return {
        ...state,
        pass: action.value
      }
      default:
        return state
  }
};

const Loginform = () => {
  const [updatedState, dispatch] = useReducer(reducer, initialState);
  // const [user, setUser] = useState("");
  // const [pass, setPassword] = useState("");
  // const [login, setLogin] = useState(false);
  // const [error, setError] = useState(false);

  const obj = [
    {
      username: "rashidsahil1@gmail.com",
      password: "admin",
    },
    {
      username: "sahilhana1@gmail.com",
      password: "12345",
    },
  ];
 
  //   let data = obj.map((item) => item.username);
  //   let passdata = obj.map((ite) => ite.password);

  const handleForm = (e) => {
    e.preventDefault();
    if (
      updatedState.user === obj[0].username &&
      updatedState.pass === obj[0].password
    ) {
      // setLogin(true);
      // setUser("");
      // setPassword("");
      dispatch({ type: "SUCCESS" });
    } else {
      // setError("Please fill the correct Details");
      dispatch({ type: "error" });
    }
  };
  
 const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values,action)=>{
    console.log(values);
    console.log(errors);
    action.resetForm();
    }
  })

  return (
    <>
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {updatedState.login ? (
          <div>
            <MainSection />
            <button
              onClick={() => {
                // setLogin(false);
                // setError(false);
                dispatch({ type: "LOGOUT" });
              }}
            >
              Logout
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleForm}
            style={{
              boxShadow: "0px 1px 10px 0px black",
              width: "20%",
              height: "40%",
              backgroundColor: "#9389A6",
              display: "flex",
              padding: "30px",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <h2>Login here</h2>
            <hr></hr>
            <p style={{ color: "red" }}>{updatedState.error}</p>
            <input
              type="text"
              value={updatedState.user}
              placeholder="Username"
              onChange={(e) =>
                dispatch({ type: "user", value: e.target.value })
              }
            />
            <br></br>
            <input
              value={updatedState.pass}
              type="password"
              placeholder="Password"
              onChange={(e) =>
                dispatch({ type: "pass", value: e.target.value })
              }
            />
            <br></br>
            <button className="btn btn-danger" type="submit">
              Submit
            </button>
          </form>
        )}


         <div className="form-handle">
        <form onSubmit={handleSubmit}>
          <h3>Register here</h3>
          <hr></hr>
           {errors.name && touched.name ? (<p className="text-danger">{errors.name}</p>) : null}
          <input type="text" name="name" placeholder="enter username" value={values.name} onChange={handleChange} onBlur={handleBlur}/>
          <br></br>
          {errors.email && touched.email ? (<p className="text-danger">{errors.email}</p>) : null}
          <input type="email" name="email" placeholder="enter email" value={values.email} onChange={handleChange} onBlur={handleBlur}/>
          <br></br>
          {errors.password && touched.password ? (<p className="text-danger">{errors.password}</p>) : null}
          <input type="password" name="password" placeholder="enter password" value={values.password} onChange={handleChange} onBlur={handleBlur}/>
          <br></br>
          {errors.confirm_password && touched.confirm_password ? (<p className="text-danger">{errors.confirm_password}</p>) : null}
          <input type="password" name="confirm_password" placeholder="enter confirm password" value={values.confirm_password} onChange={handleChange} onBlur={handleBlur}/>
          <br></br>
           <button type="submit" className="btn btn-danger">Registration</button>
        </form>
        </div>
      </div>
    </>
  );
};

export default Loginform;
