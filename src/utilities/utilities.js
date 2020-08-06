const getNextSunday = d => {
  d.setDate(d.getDate() + ((7 - d.getDay()) % 7));
  return d;
};
const getPreviousMonday = d => {
  var day = d.getDay();
  if (day === 0) day = 7;

  d.setDate(d.getDate() - day + 1);
  return d;
};
const getDateInStdFormate = date => {
  console.log("In getDateinForm");
  console.log(date.getFullYear());
  return (
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
};
const getStageSagregatedData = dataArray => {
  console.log(dataArray);
  var sagregatedObject = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: []
  };
  dataArray.forEach((task, index) => {
    sagregatedObject[task.state].push(task);
  });
  return sagregatedObject;
};
export {
  getNextSunday,
  getPreviousMonday,
  getDateInStdFormate,
  getStageSagregatedData
};
