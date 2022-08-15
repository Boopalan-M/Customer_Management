import { notification } from "antd";

export const showNotification = ({
  title = "",
  message = "",
  placement = "topRight",
  variant = "",
}) => {
  //to display notification msg
  notification.config({
    duration: 3,
    maxCount: 1,
  });
  if (variant === "success") {
    notification.success({
      message: title,
      description: message,
      placement: placement,
      className: "ant-notify-class",
    });
  } else if (variant === "error") {
    notification.error({
      message: title,
      description: message,
      placement: placement,
      className: "ant-notify-class",
    });
  } else {
    notification.open({
      message: title,
      description: message,
      placement: placement,
      className: "ant-notify-class",
    });
  }
};
