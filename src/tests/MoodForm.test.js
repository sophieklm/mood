import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MoodForm from "../components/MoodForm";

Enzyme.configure({ adapter: new Adapter() });

describe("<MoodForm />", () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation((init) => [init, setState]);

  beforeEach(() => {
    wrapper = Enzyme.mount(Enzyme.shallow(<MoodForm />).get(0));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Mood Input", () => {
    it("Should capture mood correctly onChange", () => {
      expect(wrapper.find("mood")).toBeDefined();
      const mood = wrapper.find("mood").at(0);
      mood.instance().value = "Test";
      mood.simulate("change");
      expect(setState).toHaveBeenCalledWith("Test");
    });
  });

  describe("Feeling Input", () => {
    it("Should capture feeling correctly onChange", () => {
      const feeling = wrapper.find("feeling").at(0);
      feeling.instance().value = "Testing";
      feeling.simulate("change");
      expect(setState).toHaveBeenCalledWith("Testing");
    });
  });

  describe("Comment Input", () => {
    it("Should capture comment correctly onChange", () => {
      const comment = wrapper.find("input").at(0);
      comment.instance().value = "Tester";
      comment.simulate("change");
      expect(setState).toHaveBeenCalledWith("Tester");
    });
  });
});
