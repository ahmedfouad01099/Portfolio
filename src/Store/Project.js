import { updateObject } from "../../src/util/utility";

const START_SELECTING_PRODUCT =
  "PORTOFOLIO/STORE/PROJECT/START_SELECTING_PROJECT";
const FINISH_SELECTING_PRODUCT =
  "PORTOFOLIO/STORE/PROJECT/FINISH_SELECTING_PROJECT";

const initialState = {
  projects: [
    {
      name: "E-commerce App",
      portifolioImg: "assets/img/icon.png",
      imgs: [
        "/assets/img/tonymoly/1.png",
        "/assets/img/tonymoly/2.png",
        "/assets/img/tonymoly/3.png",
        "/assets/img/tonymoly/4.png",
        "/assets/img/tonymoly/5.png",
        "/assets/img/tonymoly/6.png",
        "/assets/img/tonymoly/7.png",
        "/assets/img/tonymoly/8.png",
        "/assets/img/tonymoly/9.png",
      ],
      Category: "E-commerce Application",
      Client: "Jordan Company",
      Project_date: " 2 months ago",
      Project_URL:
        "Android APK: https://drive.google.com/file/d/12JSw02vZNrs3hYYQ5NxCsG3mMz6b3Yad/view?usp=sharing",
      desc: "",
    },
  ],
  project: {},
  loading: false,
};

export const onStartSelectingProject = () => {
  return { type: START_SELECTING_PRODUCT };
};

const startSelectingProject = (state, action) => {
  return updateObject(state, { loading: true });
};

export const onSelectingProduct = (project) => {
  return (dispatch) => {
    dispatch(onStartSelectingProject());
    setTimeout(() => {
      dispatch(onFinishSelectingProject(project));
    }, 500);
  };
};

export const onFinishSelectingProject = (project) => {
  return {
    type: FINISH_SELECTING_PRODUCT,
    project,
  };
};

const finishSelectingProject = (state, action) => {
  return updateObject(state, { loading: false, project: action.project });
};
export function ProjectReducer(state = initialState, action) {
  switch (action.type) {
    case START_SELECTING_PRODUCT:
      return startSelectingProject(state, action);

    case FINISH_SELECTING_PRODUCT:
      return finishSelectingProject(state, action);
    default:
      return state;
  }
}
