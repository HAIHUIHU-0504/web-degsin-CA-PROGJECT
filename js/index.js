// contact.js

// 限制出发日期只能选未来
let departureDate = document.getElementById("departure_date");
let today = new Date().toISOString().split("T")[0];
departureDate.min = today;

// 点击按钮时验证表单
let button = document.getElementById("submit");
button.onclick = function() {
  let name = document.getElementById("name").value.trim();
  let tel = document.getElementById("tel_number").value.trim();
  let email = document.getElementById("email").value.trim();
  let children = document.getElementById("children").value;
  let age = document.getElementById("age").value;
  let date = document.getElementById("departure_date").value;

  // 验证 name
  if (name === "") {
    alert("Please enter your name.");
    return;
  }

  // 验证电话
  if (tel === "") {
    alert("Please enter your contact number.");
    return;
  }

  let phoneRule = /^[0-9+\-\s]{6,15}$/;
  if (!phoneRule.test(tel)) {
    alert("Please enter a valid contact number (digits only).");
    return;
  }

  // 验证邮箱
  if (email === "") {
    alert("Please enter your email.");
    return;
  }

  let emailRule = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRule.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // 验证出发日期
  if (date <= today) {
    alert("Please select a future departure date.");
    return;
  }

  // 验证儿童与年龄
  if (children > 0 && age === "") {
    alert("Please enter the age of your children.");
    return;
  }

  if (age && (age < 3 || age > 16)) {
    alert("Sorry, we only accept children aged between 3 and 16.");
    return;
  }

  alert("Form submitted successfully!");
};
