const LogCombineData = (data) => {
  const logData = {};

  if (data.currentStatus == "1000") {
    logData.old_state = data.oldState;
    logData.current_state = data.currentState;
    logData.user_ip = data.req.socket.remoteAddress;
    logData.uid = data.req.params.id;
  } else {
    logData.old_state = data.oldState;
    logData.current_state = data.currentState;
    logData.user_ip = data.req.socket.remoteAddress;
    logData.uid = data.req.params.id;
  }

  return logData;
};

module.exports = {
  LogCombineData,
};
