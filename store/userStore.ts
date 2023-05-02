import { defineStore } from "pinia";

interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  phone: string;
  isLogin?: boolean;
}

export const useUserStore = defineStore({
  id: "user",

  state: () => ({
    user: [
      {
        id: "1",
        username: "admin",
        password: "admin",
        email: "123@naver.com",
        phone: "010-1234-5678",
      },
      {
        id: "2",
        username: "test",
        password: "test",
        email: "123@naver.com",
        phone: "010-1234-5678",
      },
      {
        id: "3",
        username: "out",
        password: "out",
        email: "123@naver.com",
        phone: "010-1234-5678",
      },
    ] as User[],
  }),

  actions: {
    addUser(user: User) {
      this.user.push(user);
    },

    changePassword(username: string, newPassword: string) {
      const index = this.user.findIndex((user) => user.username === username);
      console.log(index);
      if (index !== -1) {
        this.user[index].password = newPassword;
      }
    },
  },

  // state: () => ({
  //   user: JSON.parse(
  //     typeof localStorage !== "undefined"
  //       ? localStorage.getItem("user") || "[]"
  //       : "[]"
  //   ) as User[],
  // }),

  // actions: {
  //   addUser(user: User) {
  //     localStorage.setItem("user", JSON.stringify(this.user));
  //     this.user.push(user);
  //   },

  //   changePassword(username: string, newPassword: string) {
  //     const index = this.user.findIndex((user) => user.username === username);
  //     console.log(index);
  //     if (index !== -1) {
  //       this.user[index].password = newPassword;
  //       localStorage.setItem("user", JSON.stringify(this.user));
  //     }
  //   },
  // },
});
