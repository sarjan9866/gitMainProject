import React from "react"
import { Form, Row, Button, Col, Space, Tag, Radio, Divider } from "antd"
import { Input, Password, Select } from "../../Components/Common/AntdCommom";
// import { numberMask } from "../../utils/commonUtils"
// import { countryCodes } from "./countryList"
import { Link } from "react-router-dom"
import GoogleLogin from "react-google-login"
import FacebookLogin from "react-facebook-login"
// import { AuthContext } from "../Context/AuthContext"
// import lineTwo from "../../assets/images/lineTwo.jpg"
import SignupImage from "assets/images/classes.jpg";
// import studentWhite from "../../assets/images/studentWhite.svg"
// import tutorGreen from "../../assets/images/tutorGreen.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"
import { Image } from "antd"
import gmail from "assets/images/classes.jpg"

// import { useSize } from "../../windowSize"

const RegistrationForm = () => {
//   const [form] = Form.useForm()
//   const {
//     handleSignUp,
//     handleFacebookRegister,
//     handleGoogleRegister,
//   } = useContext(AuthContext)

//   const [btnLoading, setBtnLoading] = useState(false)
//   const { innerWidth } = useSize()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     form.validateFields().then((values) => {
//       setBtnLoading(true)
//       values?.gender && parseInt(values?.gender)
//       values.usertype = 4
//       handleSignUp({ ...values }, setBtnLoading)
//     })
//   }

//   const confirmPassword = (rules, value) => {
//     if (value === form.getFieldValue("password")) {
//       return Promise.resolve()
//     } else {
//       return Promise.reject("Passwords must be same")
//     }
//   }

//   let genderObject = [
//     { id: 0, gender: "Male" },
//     { id: 1, gender: "Female" },
//   ]

  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0, 164, 73, .7),rgba(10, 81, 163, .7)), url(${SignupImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "white",
        height: "100%",
        overflow: "auto",
        paddingBottom: "1rem",
        padding: ".5rem .5rem",
      }}
    >
      <Row justify="center">
        <Col xxl={9} xl={9} lg={9} md={9} sm={24} xs={24}>
          <Row className="signup_containt">
            <Form name="Add User">
              <Row gutter={[8, 8]}>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Tag style={{ padding: ".5rem", width: "100%" }}>
                        <Radio defaultChecked={true}>Customer Sign Up </Radio>
                    </Tag>
                    </Col>
                    <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Tag style={{ padding: ".5rem", width: "100%" }}>
                        {/* <Link to={"/auth/tutor/register"}> */}
                        <Radio>Admin Sign Up</Radio>
                        {/* </Link> */}
                    </Tag>
                </Col>
                <Col span={23}>
                  <Row justify="center">
                    <h3> Create a new one here </h3>
                  </Row>
                </Col>
                <Col span={12}>
                  <Input
                    name={"first_name"}
                    label={"First Name"}
                    type={"username"}
                    required
                    hideLabel
                  />
                </Col>
                <Col span={12}>
                  <Input
                    name={"last_name"}
                    label={"Last Name"}
                    type={"username"}
                    required
                    hideLabel
                  />
                </Col>

                <Col span={24}>
                  <Input
                    name={"email"}
                    label={"Email"}
                    type={"email"}
                    required
                    hideLabel
                  />
                </Col>
                <Col span={12}>
                  <Password
                    name={"password"}
                    label={"Password"}
                    // onChange={() => {
                    //   if (form.getFieldValue("ConfirmPassword")) {
                    //     form.validateFields(["ConfirmPassword"])
                    //   }
                    // }}
                    validate
                    required
                    hideLabel
                  />
                </Col>
                <Col span={12}>
                  <Password
                    validate
                    name={"ConfirmPassword"}
                    label={"Confirm Password"}
                    // rules={[{ validator: confirmPassword }]}
                    required
                    hideLabel
                  />
                </Col>
                <Col span={24}>
                  <Input
                    name={"phonenumber"}
                    label={"Mobile Number"}
                    required
                    type="text"
                    rules={[
                      {
                        pattern: new RegExp(/^[0-9\b]+$/),
                        message: "Should contain a number",
                      },
                      { max: 10, message: "Max length is 10." },
                    ]}
                    // onBlur={(e) => {
                    //   let str = e.target.value.split("")
                    //   str.splice(0, 0, " ")
                    //   form.setFieldsValue({
                    //     CompanyMaster: {
                    //       CompanyPhone: str.join("").slice(0, 11),
                    //     },
                    //     phonenumber: numberMask(e.target.value),
                    //   })
                    // }}
                    hideLabel
                  />
                </Col>
                <Col span={12}>
                  <Select
                    name={"gender"}
                    label={"Gender"}
                    allowClear
                    // form={form}
                    // array={genderObject}
                    value={"id"}
                    description={"gender"}
                    required
                    hideLabel
                  />
                </Col>
                <Col span={12}>
                  <Select
                    name={"country"}
                    label={"Country"}
                    // array={countryCodes.map((Item) => Item.name)}
                    // initialValue={countryCodes[149].name.en}
                    description={"en"}
                    value={"en"}
                    required
                    hideLabel
                  />
                </Col>
                <Col span={24}>
                  <Button
                    // onClick={handleSubmit}
                    // form={form}
                    // loading={btnLoading}
                    style={{
                      borderRadius: "5px",
                      height: "40px",
                    }}
                    block
                  >
                    Sign Up
                  </Button>
                </Col>
                <Col span={23}>
                  <Divider plain>OR</Divider>
                </Col>
                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                  <FacebookLogin
                    appId="184040017025668"
                    fields="name,email,picture"
                    autoLoad={false}
                    // callback={handleFacebookRegister}
                    icon={
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        style={{ marginTop: "9px", marginRight: "5px" }}
                      />
                    }
                    cssClass={"facebook-btn"}
                    textButton={
                      <span style={{ marginTop: "5px" }}>
                        &nbsp;&nbsp;Continue with Facebook
                      </span>
                    }
                  />
                </Col>
                <Col xxl={24} xl={24} lg={24} md={24} sm={24} xs={24}>
                  <GoogleLogin
                    clientId="398789378948-nb37eegdhfh705rs5hburce46l1mhgvp.apps.googleusercontent.com"
                    className="google-btn"
                    icon={false}
                    // onSuccess={handleGoogleRegister}
                    // onFailure={handleGoogleRegister}
                  >
                    <Image
                      style={{ height: "15px", width: "20px" }}
                      src={gmail}
                    />

                    <span>&nbsp;&nbsp;Continue with Gmail</span>
                  </GoogleLogin>
                </Col>
                <Col>
                  <Row
                    style={{
                      color: "#5B6065",
                    //   fontSize: innerWidth > 700 ? "12px" : "10px",
                    }}
                  >
                    <Space direction="horizontal">
                      <span>By signing up, I agree to Your Tutor’s</span>
                      <span style={{ color: "#00a449" }}>
                        {" "}
                        terms of use{" "}
                      </span>{" "}
                      and
                      <span style={{ color: "#00a449" }}>privacy policy.</span>
                    </Space>
                  </Row>
                </Col>
                <Col span={24} style={{ textAlign: "center" }}>
                  <p>
                    Already have an account?
                    <Link
                      to={"/auth/login"}
                      style={{ color: "#00a449", paddingLeft: "5px" }}
                    >
                      Log In
                    </Link>
                  </p>
                </Col>
              </Row>
            </Form>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default RegistrationForm