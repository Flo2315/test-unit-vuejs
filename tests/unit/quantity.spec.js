import { mount } from "@vue/test-utils";
import Quantity from "@/components/Quantity.vue";

describe("Quantity.vue", () => {
  it("renders msg quantity default is 1", async () => {
    const wrapper = mount(Quantity);
    const text = wrapper.find("p");

    expect(text.text()).toEqual("Current quantity: 1");
  });

  it("renders quantity default equal 1", async () => {
    const wrapper = mount(Quantity);

    expect(wrapper.vm.quantity).toBe(1);
  });

  it("renders props.minQuantity when passed", async () => {
    const minQuantity = 2;
    const wrapper = mount(Quantity, {
      propsData: { minQuantity }
    });

    expect(wrapper.vm.minQuantity).toBe(minQuantity);
  });

  it("renders default value props.minQuantity", async () => {
    const wrapper = mount(Quantity);

    expect(wrapper.vm.minQuantity).toBe(1);
  });

  it("renders props.maxQuantity when passed", async () => {
    const maxQuantity = 15;
    const wrapper = mount(Quantity, {
      propsData: { maxQuantity }
    });

    expect(wrapper.vm.maxQuantity).toBe(maxQuantity);
  });

  it("renders default value props.maxQuantity", async () => {
    const wrapper = mount(Quantity);

    expect(wrapper.vm.maxQuantity).toBe(10);
  });

  it("renders button inrement", async () => {
    const wrapper = mount(Quantity);
    const button = wrapper.find("button.increment");

    expect(button.exists()).toBe(true);
  });

  it("renders button decrement", async () => {
    const wrapper = mount(Quantity);
    const button = wrapper.find("button.decrement");

    expect(button.exists()).toBe(true);
  });

  it("renders decrement button disable if quantity less or equal to minQuantity", async () => {
    const wrapper = mount(Quantity);
    const button = wrapper.find("button.decrement");

    expect(button.attributes("disabled")).toBe("disabled");
  });

  it("renders increment button disable if quantity greater than or equal to maxQuantity", async () => {
    const wrapper = mount(Quantity, {
      data() {
        return {
          quantity: 10
        };
      }
    });

    const button = wrapper.find("button.increment");

    expect(button.attributes("disabled")).toBe("disabled");
  });

  it("call increment method when click increment button", async () => {
    const mockMethod = jest.spyOn(Quantity.methods, "increment");
    const wrapper = mount(Quantity);
    const button = wrapper.find("button.increment");

    button.trigger("click");

    expect(mockMethod).toHaveBeenCalled();
  });

  it("renders quantity equal 2 when click increment button", async () => {
    const wrapper = mount(Quantity);
    const button = wrapper.find("button.increment");

    button.trigger("click");

    expect(wrapper.vm.quantity).toBe(2);
  });

  it("call decrement method when click decrement button", async () => {
    const mockMethod = jest.spyOn(Quantity.methods, "decrement");
    const wrapper = mount(Quantity, {
      data() {
        return {
          quantity: 10
        };
      }
    });
    const button = wrapper.find("button.decrement");

    button.trigger("click");

    expect(mockMethod).toHaveBeenCalled();
  });

  it("renders quantity equal 9 when click decrement button", async () => {
    const wrapper = mount(Quantity, {
      data() {
        return {
          quantity: 10
        };
      }
    });
    const button = wrapper.find("button.decrement");

    button.trigger("click");

    expect(wrapper.vm.quantity).toBe(9);
  });
});
