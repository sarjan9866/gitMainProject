import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import moment from "moment"
import {
  Input,
  Button,
  Form,
  AutoComplete,
  notification,
  Select,
  Checkbox,
  Dropdown,
  Menu,
  Skeleton,
  Popover,
  DatePicker,
  Spin,
  Modal,
  Tooltip,
  TimePicker,
  Upload,
  message,
} from "antd"
import {
  SearchOutlined,
  LoadingOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ArrowLeftOutlined,
  MailOutlined,
  LockOutlined,
  PaperClipOutlined,
  PlusOutlined,
  DeleteFilled,
  DeleteOutlined,
  ExclamationCircleOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons"

import { isArray, isEmpty } from "Utils/CommonUtlis";
import iconCancel from "assets/images/icon-image/icon-cancel.svg";
import iconDotted from "assets/images/icon-image/icon-dotted.svg";
import iconCheck from "assets/images/icon-image/icon-check.svg";

const { Option } = Select
const { confirm } = Modal

export const FormItem = ({
  name,
  label,
  colon,
  children,
  formStyle,
  localRules,
  formItemProps,
  formItemLayout,
  hideLabel,
  overflowHidden,
  initialValue,
  shouldUpdate,
  required,
  viewDetails,
  textArea,
  valuePropName,
  hidden,
}) => {
  const localFormStyle = formStyle || {}
  const hiddenStyle = hidden ? { height: 0, width: 0, margin: 0 } : {}
  const localStyle = overflowHidden
    ? { overflowX: "hidden", overflowY: "hidden", ...localFormStyle }
    : { ...localFormStyle }
  return (
    <Form.Item
      name={name}
      label={
        hideLabel || hidden ? null : (
          <span
            style={{
              fontSize: ".725rem",
              fontWeight: "bold",
              fontFamily: "Avenir",
              color: "#777777",
            }}
          >
            {label}
            {!viewDetails && required && (
              <span
                style={{
                  color: "red",
                  fontSize: "13px",
                  fontFamily: "Roboto",
                }}
              >
                *
              </span>
            )}
            {viewDetails && ":"}
          </span>
        )
      }
      valuePropName={valuePropName}
      validateFirst
      shouldUpdate={shouldUpdate}
      initialValue={
        initialValue ||
        typeof initialValue === "boolean" ||
        initialValue === "" ||
        initialValue === 0
          ? initialValue
          : null
      }
      style={{ ...localStyle, ...hiddenStyle }}
      {...formItemProps}
      rules={localRules}
      {...formItemLayout}
      colon={colon || false}
      className={viewDetails && !textArea ? "detail-view" : ""}
    >
      {children}
    </Form.Item>
  )
}

const AntInput = (props) => {
  const {
    type,
    style,
    rules,
    label,
    onBlur,
    search,
    onClick,
    loading,
    hidden,
    message,
    disabled,
    onSearch,
    onChange,
    required,
    className,
    fieldProps,
    allowClear,
    placeholder,
    suffix,
  } = props

  const handleWhiteSpaceValidation = (rules, value) => {
    if (value && typeof value !== "number") {
      if (value?.split("")?.[0] !== " ") {
        return Promise.resolve()
      } else {
        return Promise.reject(`${label} cannot start with space`)
      }
    } else {
      return Promise.resolve()
    }
  }

  const handleNumberValidation = (rules, value) => {
    if (value) {
      if (value.length !== 10) {
        return Promise.resolve()
      } else {
        return Promise.reject(` invalid ${label}`)
      }

    //   if (isNaN(Number(value)) || value.length !== 10) {
    //     return Promise.resolve()
    //   } else {
    //     return Promise.reject(`${label} should be number ,invalid ${label}`)
    //   }
    } else {
      return Promise.resolve()
    }
  }

  const positiveNumberValidation = (rules, value) => {
    if (value) {
      if (!isNaN(Number(value) >= 0)) {
        return Promise.resolve()
      } else {
        return Promise.reject(`${label} should be positive`)
      }
    } else {
      return Promise.resolve()
    }
  }

  const emailPattern = {
    pattern: new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$"),
    message: "Please enter in example@email.com format",
  }

  const whiteSpacePattern = {
    validator: handleWhiteSpaceValidation,
  }
  const numberPattern = {
    validator: handleNumberValidation,
  }
  const positive = {
    validator: positiveNumberValidation,
  }

  const pattern =
    type === "email"
      ? [emailPattern]
      : type === "number"
      ? props.allInteger
        ? [whiteSpacePattern, numberPattern]
        : [whiteSpacePattern, numberPattern, positive]
      : [whiteSpacePattern]

  const tempRule = [
    {
      required: required,
      message: message || `Please enter ${label}`,
    },
    ...pattern,
  ]

  const localRules = rules instanceof Array ? [...tempRule, ...rules] : tempRule

  const searchProps = search
    ? {
        suffix: !loading ? (
          <SearchOutlined style={{ color: "rgba(14, 16, 26, 0.5)" }} />
        ) : (
          <LoadingOutlined style={{ color: "rgba(14, 16, 26, 0.5)" }} />
        ),
        onPressEnter: onSearch,
      }
    : {}

  return (
    <FormItem {...props} localRules={localRules}>
      {!props.viewDetails || props.isField ? (
        <Input
          type={props.inputType}
          min={props.inputType && !props.allInteger ? 0 : undefined}
          hidden={hidden || false}
          onBlur={onBlur}
          autoFocus={false}
          onClick={onClick}
          disabled={disabled || props.viewDetails}
          onChange={onChange}
          className={className}
          allowClear={allowClear}
          placeholder={placeholder || `Enter ${label}`}
          style={{
            height: "32px",
            color: disabled && !props.viewDetails ? "#777777" : "inherit",
            border: props.viewDetails ? "none" : "",
            background: props.viewDetails ? "white" : "",
            fontWeight: props.viewDetails ? "bold" : "",
            textAlign: props.viewDetails ? "center" : "",
            ...style,
          }}
          prefix={
            type === "email" ? (
              <MailOutlined
                style={{
                  color:
                    disabled && !props.viewDetails ? "#777777" : "lightgrey",
                }}
              />
            ) : null
          }
          suffix={
            suffix === "search" ? (
              <Tooltip title="Search">
                <SearchOutlined
                  style={{ color: "rgb(0, 164, 73", fontSize: "19px" }}
                />
              </Tooltip>
            ) : null
          }
          {...searchProps}
          {...fieldProps}
        />
      ) : (
        <div
          style={{
            textAlign: "center",
            wordWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          <b>{props.initialValue || "-"}</b>
        </div>
      )}
    </FormItem>
  )
}

const AntSelect = (props) => {
  const {
    mode,
    style,
    array,
    value,
    rules,
    label,
    onBlur,
    onSelect,
    onClick,
    message,
    disabled,
    onChange,
    required,
    fieldProps,
    noClear,
    placeholder,
    description,
  } = props

  const tempRule = [
    {
      required: required,
      message: message || `Please select ${label}`,
    },
  ]

  const localRules = rules instanceof Array ? [...tempRule, ...rules] : tempRule

  return (
    <FormItem {...props} localRules={localRules}>
      {!props.viewDetails ||
      props.isField ||
      props.initialValue instanceof Array ? (
        <Select
          mode={mode}
          showSearch={!props.noSearch}
          onBlur={onBlur}
          autoFocus={false}
          onClick={onClick}
          disabled={disabled || props.viewDetails}
          onChange={onChange}
          onSelect={onSelect}
          optionFilterProp="children"
          className={props.viewDetails ? "custom-select" : props.className}
          allowClear={!noClear}
          notFoundContent={props.waitFor ? <Spin size="small" /> : null}
          dropdownRender={props.dropdownRender}
          placeholder={placeholder || `Select ${label}`}
          style={{
            ...style,
          }}
          {...fieldProps}
        >
          {!isEmpty(array)
            ? isArray(array) &&
              array.map((item, index) => {
                return (
                  <Option key={index} value={item[value]}>
                    {item[description]}
                  </Option>
                )
              })
            : props.children}
        </Select>
      ) : (
        <div
          style={{
            textAlign: "center",
            wordWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          <b>
            {array.find((item, index) => item[value] === props.initialValue)?.[
              description
            ] || "-"}
          </b>
        </div>
      )}
    </FormItem>
  )
}

export const Search = (props) => {
  const {
    style,
    loading,
    onClick,
    options,
    onSearch,
    onChange,
    onSelect,
    className,
    inputStyle,
    fieldProps,
    placeholder,
    inputClassName,
  } = props

  const searchProps = {
    suffix: !loading ? (
      <SearchOutlined style={{ color: "rgba(14, 16, 26, 0.5)" }} />
    ) : (
      <LoadingOutlined style={{ color: "rgba(14, 16, 26, 0.5)" }} />
    ),
    onPressEnter: onSearch,
  }

  return (
    <AutoComplete
      allowClear
      onClick={onClick}
      backfill={true}
      options={options}
      onSearch={onSearch}
      onChange={onChange}
      onSelect={onSelect}
      className={className}
      style={{ ...style, width: "100%" }}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      {...fieldProps}
    >
      <Input
        className={inputClassName}
        placeholder={placeholder}
        style={{
          ...inputStyle,
          height: "32px",

          color: "#262626",
          ...inputStyle,
        }}
        {...searchProps}
      />
    </AutoComplete>
  )
}

export const TextArea = (props) => {
  const {
    rules,
    style,
    label,
    onBlur,
    onClick,
    message,
    minRows,
    maxRows,
    onChange,
    required,
    className,
    fieldProps,
    placeholder,
  } = props

  const handleWhiteSpaceValidation = (rules, value) => {
    if (value) {
      if (value?.split("")?.[0] !== " ") {
        return Promise.resolve()
      } else {
        return Promise.reject(`${label} cannot start with space`)
      }
    } else {
      return Promise.resolve()
    }
  }

  const whiteSpacePattern = {
    validator: handleWhiteSpaceValidation,
  }

  const pattern = [whiteSpacePattern]

  const tempRule = [
    {
      required: required,
      message: message || `Write your ${label}`,
    },
    ...pattern,
  ]

  const localRules = rules instanceof Array ? [...tempRule, ...rules] : tempRule

  return (
    <FormItem {...props} localRules={localRules} textArea overflowHidden>
      <Input.TextArea
        onBlur={onBlur}
        onClick={onClick}
        autoFocus={false}
        autoComplete="off"
        onChange={onChange}
        disabled={props.disabled || props.viewDetails}
        className={className}
        autoSize={{ minRows: minRows || 2, maxRows: maxRows || 12 }}
        placeholder={placeholder || `Write your  ${label}`}
        style={{
          color: "#262626",
          overflowX: "hidden",
          overflowY: "hidden",
          border: props.viewDetails ? "none" : "",
          background: props.viewDetails ? "white" : "",
          fontWeight: props.viewDetails ? "bold" : "",
          ...style,
        }}
        {...fieldProps}
      />
    </FormItem>
  )
}

export const Password = (props) => {
  const {
    label,
    style,
    rules,
    onBlur,
    message,
    onClick,
    required,
    onChange,
    className,
    fieldProps,
    allowClear,
    placeholder,
  } = props

  const lengthValidator = {
    validator: (rules, value) => {
      if (value?.length >= 8) {
        return Promise.resolve()
      } else {
        return Promise.reject(`Should be at least 8 characters long`)
      }
    },
  }

  const upperCaseValidator = {
    pattern: new RegExp("^(?=.*[A-Z]).+$"),
    message: "Should contain a uppercase alphabet",
  }

  const lowerCaseValidator = {
    pattern: new RegExp("^(?=.*[a-z]).+$"),
    message: "Should contain a lowercase alphabet",
  }

  const numberValidor = {
    pattern: new RegExp("^(?=.*[0-9]).+$"),
    message: "Should contain a number",
  }

  const specialChar = {
    pattern: new RegExp("^(?=.*[!@#$%^&*]).+$"),
    message: "Should contain a special character",
  }

  const tempRules = rules instanceof Array ? rules : []
  const localRules =
    props.validate && required
      ? [
          ...tempRules,
          {
            required: required,
            message: message || "Please enter your password",
          },
          lowerCaseValidator,
          upperCaseValidator,
          numberValidor,
          specialChar,
          lengthValidator,
        ]
      : required
      ? [
          ...tempRules,
          {
            required: required,
            message: message || "Please enter your password",
          },
        ]
      : tempRules

  return (
    <FormItem {...props} localRules={localRules}>
      <Input.Password
        allowClear={allowClear}
        onBlur={onBlur}
        autoFocus={false}
        onClick={onClick}
        onChange={onChange}
        className={className}
        placeholder={placeholder || `Enter ${label}`}
        autoComplete="new-password"
        style={{
          height: "32px",

          ...style,
        }}
        prefix={<LockOutlined style={{ color: "lightgrey" }} />}
        {...fieldProps}
      />
    </FormItem>
  )
}

const confirmApprove = (e, callback) => {
  confirm({
    title: "Are you sure you want to approve?",
    icon: <CheckCircleOutlined style={{ color: "#10C469" }} />,
    okText: "Approve",
    cancelText: "Cancel",
    okButtonProps: {
      className: "confirm-approve-button ",
    },
    cancelButtonProps: {
      className: "cancel-button",
    },
    onOk() {
      callback && callback(e)
    },
  })
}

const confirmDisapprove = (e, callback) => {
  confirm({
    title: "Are you sure you want to dissapprove?",
    icon: <CloseCircleOutlined />,
    okText: "Disapprove",
    cancelText: "Cancel",
    okButtonProps: {
      className: "confirm-disapprove-button ",
    },
    cancelButtonProps: {
      className: "cancel-button",
    },
    onOk() {
      callback && callback(e)
    },
  })
}

const confirmDelete = (e, callback) => {
  confirm({
    title: "Are you sure you want to delete?",
    icon: <DeleteOutlined style={{ color: "red" }} />,
    okText: "Delete",
    cancelText: "Cancel",
    okButtonProps: {
      className: "confirm-delete-button ",
    },
    cancelButtonProps: {
      className: "cancel-button",
    },
    onOk() {
      callback && callback(e)
    },
  })
}

const AntButton = (props) => {
  const {
    to,
    type,
    style,
    onClick,
    children,
    className,
    fieldProps,
    width,
  } = props
  const localType = props.attach ? "text" : type
  const localClassName =
    localType === "cancel"
      ? "cancel-button"
      : localType === "text"
      ? "text-button"
      : localType === "danger"
      ? "danger"
      : localType === "success"
      ? "success"
      : localType === "none"
      ? ""
      : "primary-button"

  return (
    <FormItem local {...props}>
      <Link style={{ textDecoration: "none" }} to={to ? to : "#"}>
        <Button
          onClick={(e) => {
            !to && e.preventDefault()
            return props.isApproveConfirm
              ? confirmApprove(e, onClick)
              : props.isDissapproveConfirm
              ? confirmDisapprove(e, onClick)
              : props.isDeleteConfirm
              ? confirmDelete(e, onClick)
              : onClick && onClick(e)
          }}
          className={`centralize ${localClassName} ${className}`}
          loading={props.loading}
          style={{
            height: props.height || "32px",

            maxWidth: props.maxWidth,
            width: width || "100%",
            ...style,
          }}
          {...fieldProps}
        >
          {props.attach ? (
            <span style={{ fontWeight: "bold", fontSize: "16px" }}>
              <PaperClipOutlined /> Attach
            </span>
          ) : (
            children
          )}
        </Button>
      </Link>
    </FormItem>
  )
}

export const Notification = (title, message, type) => {
  notification.open({
    message: (
      <span
        style={{
          color:
            type === "success"
              ? "#10c469"
              : type === "error"
              ? "red"
              : "#f2994a",
        }}
      >
        {title}!
      </span>
    ),
    description: message,
    icon:
      type === "success" ? (
        <CheckCircleOutlined style={{ color: "#10c469" }} />
      ) : type === "error" ? (
        <CloseCircleOutlined style={{ color: "red" }} />
      ) : (
        <ExclamationCircleOutlined style={{ color: "#f2994a" }} />
      ),
    placement: "bottomRight",
  })
}

const AntCheckbox = (props) => {
  const { disabled, style, onClick, className, defaultChecked } = props
  const tempRule = [
    {
      required: props.required,
      message: props.message || `Please check ${props.label}`,
    },
  ]

  const localRules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule
  return (
    <FormItem {...props} valuePropName="checked" localRules={localRules}>
      {!props.viewDetails ? (
        <Checkbox
          onChange={props.onChange}
          disabled={disabled}
          defaultChecked={defaultChecked}
          onClick={onClick}
          style={style}
          className={className}
        />
      ) : (
        <div
          style={{
            textAlign: "center",
            wordWrap: "break-word",
            wordBreak: "break-word",
          }}
        >
          <b>{props.initialValue ? "Yes" : "No"}</b>
        </div>
      )}
    </FormItem>
  )
}

const AntDatePicker = (props) => {
  const tempRule = [
    {
      required: props.required,
      message: props.message || `Please select ${props.label}`,
    },
  ]

  const localRules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule
  const localInitialValue = props.initialDate
    ? moment(props.initialDate, "YYYY-MM-DD")
    : null

  function disabledDate(current) {
    if (!current) {
      alert("disabledDate called without moment instance")
    }
    const start = props.disabledDate
    return current > start || current > moment()
  }

  return (
    <FormItem
      {...props}
      initialValue={localInitialValue}
      localRules={localRules}
    >
      <DatePicker
        {...props}
        disabled={props.disabled || props.viewDetails}
        disabledDate={props.disabledDate ? disabledDate : ""}
        showTime={props.showTime}
        placeholder={props.showTime ? "DD-MM-YYYY HH:mm" : "DD-MM-YYYY"}
        format={props.showTime ? "DD-MM-YYYY HH:mm" : "DD-MM-YYYY"}
        onChange={onchange}
        className={props.viewDetails ? "view-date" : props.className}
        style={{
          height: "32px",
          width: "100%",
          border: props.viewDetails ? "none" : "",
          background: props.viewDetails ? "white" : "",
          fontWeight: props.viewDetails ? "bold" : "",
          textAlign: props.viewDetails ? "center" : "",
          color: props.disabled && !props.viewDetails ? "#777777" : "#262626",
          ...props.style,
        }}
      />
    </FormItem>
  )
}

const AntTimePicker = (props) => {
  const tempRule = [
    {
      required: props.required,
      message: props.message || `Please select ${props.label}`,
    },
  ]

  const localRules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule
  const localInitialValue = props.ininitialValue
    ? moment(props.ininitialValue, "HH:mm")
    : ""

  return (
    <FormItem
      {...props}
      initialValue={localInitialValue}
      localRules={localRules}
      // initialValue={props.ininitialValue}
    >
      <TimePicker
        {...props}
        disabled={props.disabled || props.viewDetails}
        showTime={props.showTime}
        disabledMinutes={props.disabledMinutes}
        use12Hours
        placeholder={"HH:mm"}
        format="h:mm A"
        onChange={props.onchange}
        className={props.viewDetails ? "view-time" : props.className}
      />
    </FormItem>
  )
}

export const CompletionButton = (props) => {
  const [isChecked, setIsChecked] = useState(props.initialValue)
  useState(() => {
    setIsChecked(props.initialValue)
  }, [props.initialValue])
  return (
    <FormItem {...props}>
      <div
        onClick={(e) => {
          setIsChecked(!isChecked)
          if (props.onClick) {
            props.onClick(e)
          }
        }}
        className={"a-c completion-button"}
      >
        <Checkbox
          onClick={props.onClick}
          checked={isChecked}
          name={props.name}
        />{" "}
        Completion Status
      </div>
    </FormItem>
  )
}

export const SearchButton = (props) => {
  return (
    <AntButton {...props} maxWidth="200px" type="text">
      <i className="fa fa-search" style={{ marginRight: "5px" }} /> Search
    </AntButton>
  )
}

export const ClearSearchButton = (props) => {
  return (
    <AntButton {...props} className="clear-search" maxWidth="110px" type="none">
      <i className="fa fa-close" style={{ marginRight: "5px" }} /> Clear Search
    </AntButton>
  )
}

export const AttachFile = (props) => {
  const Url = process.env.REACT_APP_ATTACH_FILE
  const [value, setValue] = useState(props.initialValue)
  const [output, setOutput] = useState(null)
  const [selectedFile, setSelectedFile] = useState(props.selectedFile)
  const [form] = Form.useForm()
  const localField = form.getFieldValue(props.name)
  const tempRule = [
    {
      required: props.required,
      message: props.validationMessage || `Please attach ${props.label}`,
    },
  ]
  const localRules =
    props.rules instanceof Array ? [...tempRule, ...props.rules] : tempRule

//   useEffect(() => {
//     form.setFieldsValue({ [props.name]: value })
//   }, [props.form, props.name, value])
  useEffect(() => {
    if (!localField) {
      setValue(null)
    }
  }, [localField])

  useEffect(() => {
    setValue(props.initialValue)
  }, [props.initialValue])
  useEffect(() => {
    setSelectedFile(props.selectedFile)
    if (props.selectedFile) {
      props.selectedFile?.url
        ? setOutput(props.selectedFile?.url)
        : setOutput(URL.createObjectURL(props.selectedFile))
    }
  }, [props.selectedFile])
  const handelUrl = (item) => {
    const split = item.split("/")
    const url = split[split.length - 1]
    return url
  }
  return (
    <FormItem localRules={localRules} {...props}>
      <div>
        {!value ? (
          <>
            {!props.disabled && !props.viewDetails ? (
              <div
                className="centralize text-button"
                style={{
                  overflow: "hidden",
                  height: "32px",
                }}
              >
                <span
                  style={{
                    fontWeight: "bold",
                    fontSize: "16px",
                    marginRight: "3rem ",
                  }}
                >
                  <PaperClipOutlined size="small" />
                  Attach
                </span>
                <input
                  style={{
                    position: "absolute",
                    opacity: 0,
                    width: "100%",
                  }}
                  type="file"
                  onChange={(e) => {
                    setValue(e.target.files[0].name)
                    setOutput(URL.createObjectURL(e.target.files[0]))
                    setSelectedFile(e.target.files[0])
                    props.onChange instanceof Function && props.onChange(e)
                  }}
                />
              </div>
            ) : (
              <>
                {props.message ? (
                  <Popover content={props.message}>
                    <div className="centralize file-disabled">
                      <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                        <PaperClipOutlined />{" "}
                        {props.viewDetails ? "No Doc." : "Attach"}
                      </span>
                    </div>
                  </Popover>
                ) : (
                  <div className="centralize file-disabled">
                    <span style={{ fontWeight: "bold", fontSize: "16px" }}>
                      <PaperClipOutlined />{" "}
                      {props.viewDetails ? "No Doc." : "Attach"}
                    </span>
                  </div>
                )}
              </>
            )}
          </>
        ) : (
          <div
            className="a-c file-uploaded"
            style={{
              overflow: "hidden",
              height: "32px",
              marginTop: props.hazard ? "25px" : "",
              cursor: "pointer",
              justifyContent: "space-around",
            }}
          >
            {props.initialValue === value && !selectedFile ? (
              <Popover
                style={{ borderRadius: "4px" }}
                content={handelUrl(value)}
              >
                <a
                  href={`${Url}${value}`}
                  className="centralize"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: "none",
                    background: "transparent",
                    height: "100%",
                    width: "90%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {value.match(/.(jpg|jpeg|png|gif)$/i) ? (
                    <img
                      src={`${Url}${value}`}
                      style={{
                        height: "22px",
                        width: "22px",
                        marginRight: "5px",
                        position: "absolute",
                        left: "5px",
                      }}
                      alt=""
                    />
                  ) : (
                    <PaperClipOutlined
                      style={{
                        marginRight: "5px",
                        position: "absolute",
                        left: "5px",
                        cursor: "pointer",
                      }}
                    />
                  )}
                  <input
                    style={{
                      position: "absolute",
                      opacity: 0,
                      width: "100%",
                    }}
                    type="file"
                    onChange={(e) => {
                      setValue(e.target?.files[0]?.name)
                      setOutput(URL.createObjectURL(e.target.files[0]))
                      setSelectedFile(e.target.files[0])
                      props.onChange instanceof Function && props.onChange(e)
                    }}
                  />
                  <div
                    className="centralize"
                    style={{
                      padding: "2px 0 0 4px",
                      height: "25px",
                      width: "fit-content",
                      position: "absolute",
                      left: "30px",
                      display: "inline",
                    }}
                  >
                    {handelUrl(value)}
                  </div>
                </a>
              </Popover>
            ) : (
              <Popover content={selectedFile?.name || value}>
                <a
                  href={output}
                  className="centralize"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    border: "none",
                    background: "transparent",
                    height: "100%",
                    width: "81%",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {value?.match(/.(jpg|jpeg|png|gif)$/i) ||
                  selectedFile?.name?.match(/.(jpg|jpeg|png|gif)$/i) ? (
                    <img
                      src={output}
                      style={{
                        height: "22px",
                        width: "22px",
                        marginRight: "5px",
                        position: "absolute",
                        left: "5px",
                      }}
                      alt=""
                    />
                  ) : (
                    <PaperClipOutlined
                      style={{
                        marginRight: "5px",
                        position: "absolute",
                        left: "10px",
                      }}
                    />
                  )}
                  <input
                    style={{
                      position: "absolute",
                      opacity: 0,
                      width: "100%",
                    }}
                    type="file"
                    onChange={(e) => {
                      setValue(e.target?.files[0]?.name)
                      setOutput(URL.createObjectURL(e.target?.files[0]))
                      setSelectedFile(e.target.files[0])
                      props.onChange instanceof Function && props.onChange(e)
                    }}
                  />
                  <div
                    className="centralize"
                    style={{
                      padding: "1px 0 0 4px",
                      height: "25px",
                      width: "fit-content",
                      position: "absolute",
                      left: "30px",
                      display: "inline",
                    }}
                  >
                    {selectedFile?.name || value}
                  </div>
                </a>
              </Popover>
            )}
            {!props.viewDetails && (
              <div style={{ color: "red" }}>
                <DeleteFilled
                  color="red"
                  onClick={(e) => {
                    e.preventDefault()
                    setValue(null)
                    props.onDelete && props.onDelete(e)
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </FormItem>
  )
}

export const AddButton = (props) => {
  return (
    <AntButton
      style={{ paddingTop: "5px" }}
      {...props}
      maxWidth={!props.width ? (!props.full ? "40px" : "200px") : props.width}
      type="text"
    >
      <PlusOutlined />
      {props.children || (props.full && "Add")}
    </AntButton>
  )
}
export const DeleteButton = (props) => {
  return (
    <AntButton
      {...props}
      className="centralize delete-button"
      maxWidth={!props.full ? "40px" : "200px"}
      type="text"
    >
      <DeleteFilled style={{ marginTop: 2 }} />
      {props.full ? "Delete" : null}
    </AntButton>
  )
}

export const HelpTip = (props) => {
  return (
    <FormItem {...props}>
      <Popover content={props.content}>
        <QuestionCircleOutlined style={{ color: "#006595" }} />
      </Popover>
    </FormItem>
  )
}

export const Card = (props) => {
  return (
    <div>
      {props.backLabel && !props.renderHeadTitle ? (
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontWeight: "bold" }}>
            <Link className={"card-link"} to={props.backLink || "#"}>
              <ArrowLeftOutlined /> {props.backLabel}
            </Link>
          </h3>
        </div>
      ) : (
        props.renderHeadTitle && <>{props.renderHeadTitle()}</>
      )}
      <div
        className={`${props.className}`}
        style={{
          background: "white",
          minWidth: "275px",
          width: props.width || "100%",

          border: props.borderless ? "none" : "1px solid lightgrey",
          padding: !props.sub ? "18px 20px" : "10px",
          overflow: "auto",
          ...props.style,
        }}
      >
        <Skeleton loading={props.loading} active>
          {props.renderHeader ? (
            <>{props.renderHeader()}</>
          ) : props.title && !props.sub ? (
            <h3
              style={{
                fontWeight: "bold",
                marginBottom: props.headingMargin || "20px",
              }}
            >
              {props.title}
            </h3>
          ) : (
            <h4
              style={{
                fontWeight: "bold",
                marginBottom: props.headingMargin || "10px",
              }}
            >
              {props.title}
            </h4>
          )}
          {props.children}
        </Skeleton>
      </div>
    </div>
  )
}

export const Action = (props) => {
  const menu = (
    <Menu style={{ padding: 10 }}>
      {props.changePassword && (
        <Menu.Item>
          <Link style={{ color: "#006595" }} to={`${props.to}/change-password`}>
            <i className="fa fa-pencil" /> &nbsp; Change Password
          </Link>
        </Menu.Item>
      )}
      {props.view && (
        <Menu.Item>
          <Link style={{ color: "#006595" }} to={`${props.to}/view`}>
            <i className="fa fa-eye" /> &nbsp; View
          </Link>
        </Menu.Item>
      )}
      {props.edit && (
        <Menu.Item>
          {" "}
          <Link style={{ color: "#006595" }} to={`${props.to}/edit`}>
            <i className="fa fa-pencil" /> &nbsp; Edit
          </Link>
        </Menu.Item>
      )}
      {props.onDeleteClick && (
        <Menu.Item
          onClick={(e) => confirmDelete(e, props.onDeleteClick)}
          style={{ color: "red" }}
        >
          <DeleteFilled /> Delete
        </Menu.Item>
      )}
      {props.onApprovalClick && (
        <Menu.Item>
          {props.isApproved ? (
            <div
              onClick={(e) => confirmDisapprove(e, props.onApprovalClick)}
              className="text-warning"
            >
              <img src={iconCancel} alt="iconCancel" /> <span>Disapprove</span>
            </div>
          ) : (
            <div
              onClick={(e) => confirmApprove(e, props.onApprovalClick)}
              className="text-success"
            >
              <img src={iconCheck} alt="iconCheck" />
              &nbsp;
              <span>Approve</span>
            </div>
          )}
        </Menu.Item>
      )}
    </Menu>
  )
  return (
    <div style={{ cursor: "pointer" }} className="centralize">
      <Dropdown overlay={menu}>
        <img src={iconDotted} alt={"action"} />
      </Dropdown>
    </div>
  )
}

const AntModal = (props) => {
  return (
    <Modal
      {...props}
      centered
      closable={props.isClosable || false}
      footer={props.footer || null}
      title={props.title || null}
    >
      {props.children}
    </Modal>
  )
}

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener("load", () => callback(reader.result))
  reader.readAsDataURL(img)
}

export const Avater = (props) => {
  const [imageUrl, setImageUrl] = useState(null)

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png"
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!")
    }
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!")
    }
    return isJpgOrPng && isLt2M
  }

  const handleChange = (info) => {
    getBase64(info.file.originFileObj, (img) => {
      setImageUrl(img)
      props.onChange instanceof Function && props.onChange(info, img)
    })
  }

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  )

  useEffect(() => {
    setImageUrl(props.initialImageUrl)
  }, [props.initialImageUrl])

  return (
    <Upload
      name="avatar"
      listType="picture-card"
      showUploadList={false}
      onChange={handleChange}
      className="avatar-uploader"
      customRequest={() => {}}
      beforeUpload={beforeUpload}
    >
      {imageUrl ? (
        <img
          src={imageUrl}
          alt="avatar"
          style={{ minWidth: "100%", maxHeight: 180 }}
        />
      ) : (
        uploadButton
      )}
    </Upload>
  )
}

export { AntInput as Input }
export { AntSelect as Select }
export { AntButton as Button }
export { AntCheckbox as Checkbox }
export { AntDatePicker as DatePicker }
export { AntTimePicker as TimePicker }
export { AntModal as Modal }
