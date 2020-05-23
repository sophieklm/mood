import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoodForm from "../components/MoodForm";

Enzyme.configure({ adapter: new Adapter() });

describe("<MoodForm />", () => {
  let wrapper;
  let mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();
    wrapper = shallow(<MoodForm submit={mockSubmit} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("handleChange", () => {
    it("should call setState on data", () => {
      const mockData = {
        name: "mood",
        value: "mood",
      };
      const expected = {
        data: {
          mood: "mood",
        },
        errors: [],
      };
      wrapper.instance().handleChange(null, mockData);
      expect(wrapper.state()).toEqual(expected);
    });
  });

  describe("handleSubmit", () => {
    it("should call preventDefault", () => {
      const mockPreventDefault = jest.fn();
      const mockEvent = {
        preventDefault: mockPreventDefault,
      };
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockPreventDefault).toHaveBeenCalled();
    });
  });

  describe("Select", () => {
    it("should call handle change", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleChange");
      wrapper.instance().forceUpdate();
      const mockData = {
        name: "mood",
        value: "mood",
      };
      let event;
      wrapper.find(".mood").simulate("change", event, mockData);
      expect(spy).toHaveBeenCalledWith(event, mockData);
    });
  });

  describe("input", () => {
    it("should call handle input change", () => {
      const spy = jest.spyOn(wrapper.instance(), "handleInputChange");
      wrapper.instance().forceUpdate();
      const mockData = {
        target: {
          name: "comment",
          value: "comment",
        },
      };
      wrapper.find("input").simulate("change", mockData);
      expect(spy).toHaveBeenCalledWith(mockData);
    });
  });
});
