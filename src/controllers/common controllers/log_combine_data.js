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

const LoanCombineData = (data) => {
  logData = {};
  logData.old_state = data.oldState;
  logData.current_state = data.loanData.Loan_state;
  logData.LoanId = data.loanData.LoanId;
  logData.assigned = data.loanData.jobAssignees_id;
  logData.user_ip = data.req.socket.remoteAddress;
  logData.uid = data.loanData.uid;
  return logData;
};

module.exports = {
  LogCombineData,
  LoanCombineData,
};
