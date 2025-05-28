const Store = {
  menu: null,
  cart: [],
};

const proxiedStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;
    if (property === "menu") {
      console.log('dispatch', property)
      // we are using window instead document because we have the DOM and the ShadowDOM
      window.dispatchEvent(new Event("appmenuchange"));
    }

    if (property === "cart") {
      window.dispatchEvent(new Event("appcartchange"));
    }
    return true
  },
});

export default proxiedStore;
