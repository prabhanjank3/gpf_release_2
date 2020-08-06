import { getNextSunday, getPreviousMonday } from "../utilities/utilities";

const initialStore = {
  data: {
    taskData: {},
    goalData: {},
    projectData: {}
  },
  dataTree: {},
  duration: {
    fromDate: getPreviousMonday(new Date()),
    toDate: getNextSunday(new Date())
  },
  isDataLoading: true,
  lookup: {},
  authData: {
    isLoggedIn: false,
    userData: {
      name: "",
      email: ""
    }
  }
};
const getUpdatedDataTree = (dataTree, projectId, goalId, taskId, object) => {
  const dataTree1 = {
    ...dataTree,
    [projectId]: {
      ...dataTree[projectId],
      childs: {
        ...dataTree[projectId]["childs"],
        [goalId]: {
          ...dataTree[projectId]["childs"][goalId],
          childs: {
            ...dataTree[projectId]["childs"][goalId]["childs"],
            [taskId]: {
              ...dataTree[projectId]["childs"][goalId]["childs"][taskId],
              ...object
            }
          }
        }
      }
    }
  };
  console.log("Function datatree");
  console.log(dataTree1);
  return dataTree;
};
const reducer = (state = initialStore, action) => {
  if (action.type === "UPDATE_DURATION") {
    console.log(action);
    state = {
      ...state,
      duration: {
        ...action.payLoad
      }
    };
  }
  if (action.type === "UPDATE_SEPARATEDATA_LOOKUP") {
    console.log(action);
    state = {
      ...state,
      data: action.payLoad.separateData,
      lookup: action.payLoad.lookup
    };
  }
  if (action.type === "UPDATE_TASKDATA") {
    console.log(action);
    state = {
      ...state,
      data: {
        ...state.data,
        taskData: action.payLoad
      }
    };
  }
  if (action.type === "UPDATE_GOALDATA") {
    console.log(action);
    state = {
      ...state,
      Data: {
        ...state.Data,
        goalData: action.payLoad
      }
    };
  }
  if (action.type === "UPDATE_PROJECTDATA") {
    console.log(action);
    state = {
      ...state,
      Data: {
        ...state.Data,
        projectData: action.payLoad
      }
    };
  }
  if (action.type === "UPDATE_STATEDATA") {
    console.log(action);

    state = {
      ...state,
      dataTree: {
        ...state.dataTree,
        [action.payLoad.projectId]: {
          ...state.dataTree[action.payLoad.projectId],
          childs: {
            ...state.dataTree[action.payLoad.projectId]["childs"],
            [action.payLoad.goalId]: {
              ...state.dataTree[action.payLoad.projectId]["childs"][
                action.payLoad.goalId
              ],
              childs: {
                ...state.dataTree[action.payLoad.projectId]["childs"][
                  action.payLoad.goalId
                ]["childs"],
                [action.payLoad.taskId]: {
                  ...state.dataTree[action.payLoad.projectId]["childs"][
                    action.payLoad.goalId
                  ]["childs"][action.payLoad.taskId],
                  state: action.payLoad.newState
                }
              }
            }
          }
        }
      }
    };
  }
  if (action.type === "UPDATE_CLOSEDATE") {
    console.log(action);
    state = {
      ...state,
      dataTree: {
        ...state.dataTree,
        [action.payLoad.projectId]: {
          ...state.dataTree[action.payLoad.projectId],
          childs: {
            ...state.dataTree[action.payLoad.projectId]["childs"],
            [action.payLoad.goalId]: {
              ...state.dataTree[action.payLoad.projectId]["childs"][
                action.payLoad.goalId
              ],
              childs: {
                ...state.dataTree[action.payLoad.projectId]["childs"][
                  action.payLoad.goalId
                ]["childs"],
                [action.payLoad.taskId]: {
                  ...state.dataTree[action.payLoad.projectId]["childs"][
                    action.payLoad.goalId
                  ]["childs"][action.payLoad.taskId],
                  closeDate: action.payLoad.newCloseDate
                }
              }
            }
          }
        }
      }
    };
  }
  if (action.type === "UPDATE_ISBLOCKED") {
    console.log(action);
    state = {
      ...state,
      dataTree: {
        ...state.dataTree,
        [action.payLoad.projectId]: {
          ...state.dataTree[action.payLoad.projectId],
          childs: {
            ...state.dataTree[action.payLoad.projectId]["childs"],
            [action.payLoad.goalId]: {
              ...state.dataTree[action.payLoad.projectId]["childs"][
                action.payLoad.goalId
              ],
              childs: {
                ...state.dataTree[action.payLoad.projectId]["childs"][
                  action.payLoad.goalId
                ]["childs"],
                [action.payLoad.taskId]: {
                  ...state.dataTree[action.payLoad.projectId]["childs"][
                    action.payLoad.goalId
                  ]["childs"][action.payLoad.taskId],
                  isBlocked: action.payLoad.isBlocked
                }
              }
            }
          }
        }
      }
    };
  }
  if (action.type === "DATALOADING_ON") {
    console.log(action);
    state = {
      ...state,
      isDataLoading: true
    };
  }
  if (action.type === "DATALOADING_OFF") {
    console.log(action);
    state = {
      ...state,
      isDataLoading: false
    };
  }
  if (action.type === "UPDATE_DATATREE") {
    console.log(action);
    state = {
      ...state,
      dataTree: action.payLoad
    };
  }
  if (action.type === "SET_LOGGED_IN") {
    console.log(action);
    state = {
      ...state,
      authData: {
        ...state.authData,
        isLoggedIn: true
      }
    };
  }

  console.log("Reducer:");
  console.log(state);
  return state;
};
export default reducer;
