var axios = require("axios");

export default {
  getUserInfo: function() {
    return axios.get(`/api/profile/user/unique`);
  }
};
