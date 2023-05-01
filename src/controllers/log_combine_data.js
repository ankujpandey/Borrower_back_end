const LogCombineData = (data) => {
  const logData = {};

  if (data.currentStatus == "1000") {
    logData.current_status = data.currentStatus;
    logData.user_ip = data.req.socket.remoteAddress;
    logData.uid = data.req.params.id;
  } else {
    logData.current_status = data.currentStatus;
    logData.user_ip = data.req.socket.remoteAddress;
    logData.uid = data.req.params.id;
  }

  return logData;
};

module.exports = {
  LogCombineData,
};
