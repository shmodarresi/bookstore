import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import {Provider} from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from 'redux-thunk';
import { cleanup } from "@testing-library/react";
import ProductsList from "../ProductsList.tsx";
import Loading from "../../../components/loading/Loading";
import Alert from "../../../components/alert/Alert";

describe("Testing ProductsList", () => {
  let store, initialState;
  const mockStore = configureMockStore([thunk]);

  beforeEach(() => {
    initialState = {
      item: [
        {
          id: 9781593275846,
          title: "Eloquent JavaScript, Second Edition",
          subtitle: "A Modern Introduction to Programming",
          author: "Marijn Haverbeke",
          price: 20,
        },
      ],
    };
    store = mockStore(initialState);
  });

  afterEach(cleanup);

  it("renders without crashing", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <ProductsList />
      </Provider>
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders loading", () => {
    initialState = { loading: true };
    const wrapper = shallow(
      <Provider store={store}>
        <ProductsList />
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
        <ProductsList />
      </Provider>
    );

    const alert = wrapper.find(Alert);
    expect(alert).toBeTruthy();
  });
});
