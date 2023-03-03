let regPhone = /^\+([0-9]{1,3})?([-. ])?\(?([0-9]{3})\)?([-. ])?([0-9]{3})([-. ])?([0-9]{4})$/i;
let regEmail =
  /^((([0-9A-Za-z]{1}[-0-9A-z.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}.){1,}[-A-Za-z]{2,})$/;
// let regName = /^[а-яА-Я]{30}|[a-zA-Z]{30}$/;

function validate(regex, value) {
  return regex.test(value);
}

export function validateEmail(value) {
  return validate(regEmail, value);
}

export function validatePhone(value) {
  return validate(regPhone, value);
}

export function validateName(value) {
  const MIN_LENGTH = 2;
  const MAX_LENGTH = 20;

  return value.length >= MIN_LENGTH && value.length <= MAX_LENGTH;
}
