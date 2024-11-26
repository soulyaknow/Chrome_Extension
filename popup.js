document.getElementById("sendData").addEventListener("click", function () {
  const loginUrl = document.getElementById("loginUrl").value;
  const targetUrl = document.getElementById("targetUrl").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const seleniumEndpoint = "http://localhost:2500/process-url";

  const data = {
    loginUrl: loginUrl,
    targetUrl: targetUrl,
    username: username,
    password: password,
  };

  fetch(seleniumEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Data sent successfully:", data);
    })
    .catch((error) => {
      console.error("Error sending data:", error);
    });
});
