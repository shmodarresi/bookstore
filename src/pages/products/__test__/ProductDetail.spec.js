import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { cleanup } from "@testing-library/react";
import ProductDetail from "../ProductDetail.tsx";
import Loading from "../../../components/loading/Loading";
import Alert from "../../../components/alert/Alert";
import PurchaseForm from "../../purchase/PurchaseForm";

describe("Testing ProductDetail", () => {
  let mockStore, store, initialState;
  beforeEach(() => {
    mockStore = configureStore();
    initialState = {
      item: {
          id: 9781593275846,
          title: "Eloquent JavaScript, Second Edition",
          subtitle: "A Modern Introduction to Programming",
          author: "Marijn Haverbeke",
          price: 20,
        }
    };
    store = mockStore(initialState);

    
  });

  afterEach(cleanup);

  it("renders without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(wrapper.find(PurchaseForm)).toBeTruthy();
  });

  it("renders loading", () => {
    initialState = { loading: true };
    const wrapper = shallow(
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    );

    const loading = wrapper.find(Loading);
    expect(loading).toBeTruthy();
  });

  it("renders Alert", () => {
    initialState = {
      error: {
        message: "Server is lost",
      },
    };
    const wrapper = shallow(
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    );

    const alert = wrapper.find(Alert);
    expect(alert).toBeTruthy();
  });
});
