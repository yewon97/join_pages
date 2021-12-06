function form_check() { // form요소 submit 전 유효성 검사
  let u_name = document.getElementById("u_name");
  let u_id = document.getElementById("u_id");
  let pwd = document.getElementById("pwd");
  let repwd = document.getElementById("repwd");
  let mobile = document.getElementById("mobile");
  let agree = document.getElementById("agree");

  if(u_name.value == "") {
    let err_txt = document.querySelector(".err_name");
    err_txt.innerHTML = "* 이름을 입력하세요."
  }
}

let submit_join_form = document.querySelector("#join_form");
submit_join_form.addEventListener('submit', (e) => {
  form_check();
  e.preventDefault();
});