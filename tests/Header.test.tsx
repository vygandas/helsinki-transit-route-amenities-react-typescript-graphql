import * as React from "react";
import Header from "../src/views/partial/Header";
import "./__mocks__/setupTests";
import { shallow } from "enzyme";

describe("Header component renders correctly", () => {

    it("should render without throwing an error", () => {
        expect(shallow(<Header/>).find(".header-partial").exists()).toBe(true);
    });

});
