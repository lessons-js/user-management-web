const mockUsers = [{ "id": 1, "userName": "Oleg", "email": "oleg@gmail.com", "phoneNumber": 360507076591, "name": "Oleg", "phone": 360507076591 }, { "id": 2, "userName": "Max", "email": "Max@gmail.com", "phoneNumber": 3606678909 }, { "id": 3, "userName": "Viktor", "email": "Viktor@gmail.com", "phoneNumber": 3806622261986 }];
const fakeErrorResponse = {
  error: 'Oops, some error happend',
}

export function getUsersWithDelay(delay = 3000, returnSuccess = true) {
  return new Promise((res, rej) => {
    setTimeout(() => returnSuccess ? res({ data: mockUsers }) : rej(fakeErrorResponse), delay);
  });
}

export function updateUsersWithDelay(userToUpdate = 1, delay = 3000, returnSuccess = true) {
  return new Promise((res, rej) => {
    setTimeout(() => returnSuccess ? res({ data: userToUpdate }) : rej(fakeErrorResponse), delay);
  });
}

export function deleteUserWithDelay(userId, delay = 3000, returnSuccess = true) {
  return new Promise((res, rej) => {
    setTimeout(() => returnSuccess ? res({ data: { ok: true } }) : rej(fakeErrorResponse), delay);
  });
}

export function addUserWithDelay(user, delay = 3000, returnSuccess = true) {
  return new Promise((res, rej) => {
    setTimeout(() => returnSuccess ? res({ data: user }) : rej(fakeErrorResponse), delay);
  });
}