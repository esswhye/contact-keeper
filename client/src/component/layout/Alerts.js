import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alerts = () => {
  const alertContact = useContext(AlertContext);
  return (
    alertContact.alerts.length > 0 &&
    alertContact.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fas fa-info-circle" />
        {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
