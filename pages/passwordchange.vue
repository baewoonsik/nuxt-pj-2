<script setup lang="ts">
import { useUserStore } from '~/store/userStore'
import { useRouter } from 'nuxt/app';
import { ref, computed } from 'vue';

const userStore = useUserStore();
const router = useRouter();

const confirmUsername = ref(''); // confirmUsername 변수 생성
const oldPassword = ref(''); // oldPassword 변수 생성
const newPassword = ref(''); // newPassword 변수 생성
const newConfirmPassword = ref(''); // newConfirmPassword 변수 생성

const passwordsMismatch = computed(() => newPassword.value !== newConfirmPassword.value); // 비밀번호가 일치하지 않는지 확인하는 computed 변수 생성

const changePassword = () => { // changePassword 함수 생성
    if (passwordsMismatch.value) { // 비밀번호가 일치하지 않으면
        alert('비밀번호가 일치하지 않습니다.'); // 경고창 띄우기
    } else { // 비밀번호가 일치하면
        const username = confirmUsername.value; // username 변수에 confirmUsername 값 할당
        userStore.changePassword(username, newPassword.value); // userStore의 changePassword 함수 호출
        router.replace('/'); // 루트 페이지로 이동
    }
}
</script>

<template>
    <div class="container">
        <div class="row justify-content-center align-items-center">
            <div class="col-md-6">
                <form @submit.prevent="changePassword"> // changePassword 함수 실행
                    <h2 class="text-center mb-4">비밀번호 변경</h2>
                    <div class="form-group">
                        <label for="username">아이디</label>
                        <input v-model="confirmUsername" type="text" class="form-control" id="confirmUsername"
                            placeholder="아이디"> // confirmUsername 입력란
                    </div>
                    <div class="form-group">
                        <label for="oldPassword">현재 비밀번호</label>
                        <input v-model="oldPassword" type="password" class="form-control" id="oldPassword"
                            placeholder="현재 비밀번호"> // oldPassword 입력란
                    </div>
                    <div class="form-group">
                        <label for="newPassword">새로운 비밀번호</label>
                        <input v-model="newPassword" type="password" class="form-control" id="newPassword"
                            placeholder="새로운 비밀번호"> // newPassword 입력란
                    </div>
                    <div class="form-group">
                        <label for="newPasswordConfirm">새로운 비밀번호 확인</label>
                        <input v-model="newConfirmPassword" type="password" class="form-control" id="newPasswordConfirm"
                            placeholder="새로운 비밀번호 확인"> // newConfirmPassword 입력란
                        <small v-if="passwordsMismatch" class="text-danger">비밀번호가 일치하지 않습니다.</small> // 비밀번호가 일치하지 않으면 경고문구
                        출력
                    </div>
                    <button type="submit" class="btn btn-primary btn-block mt-4">비밀번호 변경</button> // 비밀번호 변경 버튼
                </form>
            </div>
        </div>
    </div>
</template>
  
<style scoped>
@media (max-width: 767px) {
    .form-group {
        margin-bottom: 1rem;
    }
}
</style>