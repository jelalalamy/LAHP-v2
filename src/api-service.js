const apiService = (function () {
    "use strict";

    const module = {};

    module.getQuote = function () {
        return fetch("https://api.goprogram.ai/inspiration").then((res) => res.json());
    }

    return module;
})();

export default apiService;