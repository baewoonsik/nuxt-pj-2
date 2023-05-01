import { defineStore } from "pinia";

interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  phone: string;
}

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: [
      // 테스트용 데이터
      {
        id: "1",
        username: "admin",
        password: "admin",
        email: "123@naver.com",
        phone: "010-1234-5678",
      },
      {
        id: "2",
        username: "user",
        password: "user",
        email: "1234@naver.com",
        phone: "010-5678-1234",
      },
      {
        id: "3",
        username: "test",
        password: "test",
        email: "12345@nate.com",
        phone: "010-7532-1597",
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
});
