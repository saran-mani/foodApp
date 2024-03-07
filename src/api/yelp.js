import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer yO3JyOAEiGO4vzZrE7jckrKsTov8kh63ZV16CUa5ag7emtnmiCefozvahm7P66NfGJe1JCNC6Dcpk9Dhz7BadWbE6KSTWnOvrwqL8Ep--EAxq4Fatp2kLaaknmvpZXYx",
  },
});
