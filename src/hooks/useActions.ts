import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../store/actions-creators";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
