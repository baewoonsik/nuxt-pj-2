<script setup lang="ts">
import { useUserStore } from '~/store/userStore';
import { useRouter } from 'nuxt/app';
import { ref } from 'vue';

const userStore = useUserStore();
const username = ref('');
const password = ref('');
const email = ref('');
const phone = ref('');

const router = useRouter();

const handleSubmit = (event: Event) => {
    event.preventDefault();
    const user = {
        id: Math.random().toString(36).substr(2, 9),
        username: username.value,
        password: password.value,
        email: email.value,
        phone: phone.value,
    };
    userStore.addUser(user)
    // 회원가입 완료 후 홈으로 이동
    router.push('/');
};
</script>

<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="card mt-5">
                    <div class="card-body p-5">
                        <h3 class="text-center mb-4">회원가입</h3>
                        <form @submit="handleSubmit">
                            <div class="form-group mb-3">
                                <label for="username">아이디</label>
                                <input v-model="username" type="text" class="form-control" id="username"
                                    placeholder="아이디를 입력하세요">
                            </div>
                            <div class="form-group mb-3">
                                <label for="password">비밀번호</label>
                                <input v-model="password" type="password" class="form-control" id="password"
                                    placeholder="비밀번호를 입력하세요">
                            </div>
                            <div class="form-group mb-3">
                                <label for="email">이메일 주소</label>
                                <input v-model="email" type="email" class="form-control" id="email"
                                    placeholder="이메일을 입력하세요">
                            </div>
                            <div class="form-group mb-3">
                                <label for="phone">전화번호</label>
                                <input v-model="phone" type="text" class="form-control" id="phone"
                                    placeholder="전화번호를 입력하세요">
                            </div>
                            <button type="submit" class="btn btn-primary btn-block mt-4">회원가입</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<style>
.card {
    border: none;
    border-radius: 1rem;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
}

.form-control:focus {
    border-color: #007bff;
    box-shadow: none;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}

.btn-primary:hover {
    background-color: #0069d9;
    border-color: #0062cc;
}

.btn-primary:focus {
    box-shadow: none;
}
</style>