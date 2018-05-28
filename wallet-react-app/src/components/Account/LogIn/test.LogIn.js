import React from "react";
import { shallow } from "enzyme";

import LogInForm from "./LogInForm";

describe("LogInForm", () => {
  let component, props;

  beforeEach(() => {
    props = {};
    component = shallow(<LogInForm {...props} />);
  });

  it("should create component", () => {
    expect(component).toMatchSnapshot();
  });
});
