import axios from "axios";
import { getDateInStdFormate } from "../../utilities/utilities";
import Properties from "../../Properties";
var stateData = {};
var lookup = {};
const refreshState = async (startDate, closeDate) => {
  const projectURL =
    Properties.SERVER_URL +
    "/project/during?closeDate=" +
    getDateInStdFormate(closeDate) +
    "&startDate=" +
    getDateInStdFormate(startDate);
  const goalURL =
    Properties.SERVER_URL +
    "/goal/during?closeDate=" +
    getDateInStdFormate(closeDate) +
    "&startDate=" +
    getDateInStdFormate(startDate);
  const taskURL =
    Properties.SERVER_URL +
    "/task/during?closeDate=" +
    getDateInStdFormate(closeDate) +
    "&startDate=" +
    getDateInStdFormate(startDate);
  var consolidatedData = {};
  await Promise.all([
    axios.get(projectURL),
    axios.get(goalURL),
    axios.get(taskURL)
  ])
    .then((responseArray) => {
      stateData.projectData = responseArray[0].data;
      stateData.goalData = responseArray[1].data;
      stateData.taskData = responseArray[2].data;
      stateData.duration = { fromDate: startDate, toDate: closeDate };
    })
    .catch((err) => {
      alert("Error Occurred");
    });

  consolidatedData.projectData = getConsolidatedDataByID(stateData.projectData);
  consolidatedData.goalData = getConsolidatedDataByID(stateData.goalData);
  consolidatedData.taskData = getConsolidatedDataByID(stateData.taskData);

  stateData.goalData.forEach((item) => {
    lookup[item.id] = item.projectId;
  });

  var dataTree = buildDataTree(
    stateData.projectData,
    stateData.goalData,
    stateData.taskData
  );
  var temp = {};
  stateData.goalData.forEach((obj) => {
    temp[obj.id] = [];
  });
  stateData.taskData.forEach((obj) => {
    if (lookup.hasOwnProperty(obj.goalId)) {
      temp[obj.goalId].push(obj);
    }
  });
  stateData.taskData = temp;
  return { datatree: dataTree, lookup: lookup, separateData: consolidatedData };
};

// Helper Functions

const convertChildToArray = (childObject) => {
  return Object.keys(childObject).map((item) => {
    return childObject[item];
  });
};
const getConsolidatedDataByID = (Array) => {
  var tempObj = {};
  Array.map((Item) => (tempObj[Item.id] = Item));
  return tempObj;
};
const buildDataTree = (projectDataArray, goalDataArray, taskDataArray) => {
  var dataTree = {};
  console.log("Data");
  console.log(projectDataArray);
  console.log(goalDataArray);
  console.log(taskDataArray);
  console.log(lookup);
  projectDataArray.forEach((item) => {
    dataTree[item.id] = { ...item, childs: {} };
  });
  console.log(dataTree);
  goalDataArray.forEach((item) => {
    if (
      lookup.hasOwnProperty(item.id) &&
      dataTree.hasOwnProperty(item.projectId)
    ) {
      dataTree[item.projectId]["childs"][item.id] = {
        ...item,
        childs: {}
      };
    }
  });
  taskDataArray.forEach((item) => {
    if (lookup.hasOwnProperty(item.goalId)) {
      dataTree[lookup[item.goalId]]["childs"][item.goalId]["childs"][
        item.id
      ] = item;
    }
  });
  return dataTree;
};

// For Dashboard Page (Updating dashboard task)

const updateStatusOfTask = (id, newState) => {
  return updateTask(id, { state: newState });
};
const updateCloseDateofTask = (id, newCloseDate) => {
  return updateTask(id, { closeDate: newCloseDate });
};
const updateTasktoBlocked = (id) => {
  return updateTask(id, { isBlocked: true });
};
const updateTasktoUnblocked = (id) => {
  return updateTask(id, { isBlocked: false });
};

// Task CRUD Operation
const insertTask = (obj) => {
  return axios.post(Properties.SERVER_URL + "/task", obj, {
    headers: {
      "Content-type": "application/json"
    }
  });
};
const updateTask = (id, obj) => {
  console.log("In Update Task");
  console.log(obj);
  return axios.patch(Properties.SERVER_URL + "/task/" + id, obj, {
    headers: {
      "Content-type": "application/json"
    }
  });
};

// Goal CRUD Operations

const insertGoal = (obj) => {
  return axios.post(Properties.SERVER_URL + "/goal", obj, {
    headers: {
      "Content-type": "application/json"
    }
  });
};
const updateGoal = (id, obj) => {
  return axios.patch(Properties.SERVER_URL + "/goal/" + id, obj, {
    headers: {
      "Content-type": "application/json"
    }
  });
};

// Authentication Actions

const login = (values) => {
  return axios.get(
    Properties.SERVER_URL +
      "/auth?email=" +
      values.email +
      "&password=" +
      values.password
  );
};
const signup = (values) => {
  console.log("Hello");
  console.log(values);
  return axios.post(Properties.SERVER_URL + "/auth", values, {
    headers: {
      "Content-type": "application/json"
    }
  });
};

export {
  refreshState,
  convertChildToArray,
  updateStatusOfTask,
  updateCloseDateofTask,
  updateTasktoBlocked,
  updateTasktoUnblocked,
  updateTask,
  insertTask,
  insertGoal,
  updateGoal,
  login,
  signup
};
