import { defineStore } from "pinia";

interface User {
  id?: string;
  username: string;
  password?: string;
  email: string;
  phone: string;
}

interface UserInfo {
  username: string;
  email: string;
  phone: string;
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

    userInfo: [] as UserInfo[],
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

    getUserInfo(username: string) {
      const index = this.user.findIndex((user) => user.username === username);
      if (index !== -1) {
        this.userInfo.push({
          username: this.user[index].username,
          email: this.user[index].email,
          phone: this.user[index].phone,
        });
      }
    },
  },
});
