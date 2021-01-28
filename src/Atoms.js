import { atom } from "recoil";



const userState = atom({
  key: "investment_user",
  default: {
    email: null,
    userId: null,
    userToken: null,
    name: null,
  },
  persistence_UNSTABLE: {
    type: "investment_user",
  },
});






export { userState};
