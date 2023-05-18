//in ra n so fibo
let number = parseInt(prompt("So luong fibo can in"));

let cnt = 0;
let F0 = 0;
let F1 = 1;
if (number > 2) {
  document.write("0 1");
  cnt += 2;
}
while (cnt <= number) {
  if (number == 1) {
    document.write("0");
    break;
  }
  if (number == 2) {
    document.write("0 1");
    break;
  }
  let Fn = F0 + F1;
  F0 = F1;
  F1 = Fn;
  document.write(Fn + " ");
  ++cnt;
}
