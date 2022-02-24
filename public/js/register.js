$(window).on("load", function () {
  $("body").addClass("loaded");
});

const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const user = document.querySelector("#user");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");
const date = document.querySelector("#date");
const submitButton = document.querySelector("#submit-button");

// add click event to submit button
submitButton.addEventListener("click", async (e) => {
  // tp prevent the page to be reloaded on button click
  e.preventDefault();

  const data = {
    fname: fname.value,
    lname: lname.value,
    user: user.value,
    email: email.value,
    password: password.value,
    repassword: repassword.value,
    date: date.value,
  };
  // send data using GET request
  // www.ff.com/?name=ahmad&email=sss@ff.com&
  try {
    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const answer = await response.json();
    // deal with the answer
    if (answer.result === "ok") {
    const message = document.querySelector("#message-ok");
      message.classList.remove("visually-hidden");
      message.lastElementChild.textContent = "Login successful";
    } else {
      const message = document.querySelector("#message-fail");
      message.classList.remove("visually-hidden");
      message.lastElementChild.textContent = answer.result;
    }
  } catch (error) {
    console.log(error);
  }
});
