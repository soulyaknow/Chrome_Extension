// chrome.action.onClicked.addListener((tab) => {
//   if (tab.url) {
//     const seleniumEndpoint = "http://localhost:5000/process-url";

//     fetch(seleniumEndpoint, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ url: tab.url })
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log("URL sent successfully:", data);
//     })
//     .catch(error => {
//       console.error("Error sending URL:", error);
//     });
//   }
// });

chrome.action.onClicked.addListener(() => {
  chrome.runtime.openOptionsPage(); // Opens the popup when the extension is clicked
});
