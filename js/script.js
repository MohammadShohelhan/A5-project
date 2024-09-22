const donateButton = document.getElementById("donate-button");
const historyButton = document.getElementById("history-button");
const donateButtonCon = document.getElementById("donate-button-con");
const historyButtonCon = document.getElementById("history-button-con");

historyButton.addEventListener("click", () => {
  donateButton.className =
    "px-12 rounded-md  py-2 bg-white border border-gray-300 shadow-sm font-bold text-lg";
  historyButton.className =
    " bg-lime-400 px-12 rounded-md  py-2  border border-gray-300 shadow-sm font-bold text-lg ";
  historyButtonCon.classList.remove("hidden");
  donateButtonCon.classList.add("hidden");
});
donateButton.addEventListener("click", () => {
  historyButton.className =
    "px-12 rounded-md  py-2 bg-white border border-gray-300 shadow-sm font-bold text-lg";
  donateButton.className =
    " bg-lime-400 px-12 rounded-md  py-2  border border-gray-300 shadow-sm font-bold text-lg ";
  donateButtonCon.classList.remove("hidden");
  historyButtonCon.classList.add("hidden");
});





// =================
document.getElementById("donate-noa-btn").addEventListener("click", () => {
  const userId = document.getElementById("userBlance");
  const Blance = userId.innerText;
  const userBlance = parseFloat(Blance);
  const noakhaliInput = getValue("noakhali-input");
 
  if (noakhaliInput > 0 && noakhaliInput <= userBlance) {
    const userBlance = getInnerText("userBlance");

    const noakhaliValue = getInnerText("noakhali");
    const remainingBlance = userBlance - noakhaliInput;
    const total = noakhaliValue + noakhaliInput;
    userId.innerText = remainingBlance;
    getId("noakhali").innerText = total;
    my_modal_2.showModal();
    document.getElementById("noakhali-input").value = "";

    const historyList = document.getElementById("history-list");
    const div = document.createElement("div");
    div.innerHTML += `
         <div class="bg-base-200 p-8 rounded-lg">
            <h3 class="text-xl font-bold pb-4">
              ${noakhaliInput}  Taka is Donated for Flood-Relief  at Noakhali, Bangladesh
            </h3>
            <p class="font-medium text-gray-500">
              Date : ${new Date()}
            </p>
          </div>
     `;
    historyList.appendChild(div);
  } else {
    alert("oiii");
  }
});
// =================

// 88888888888888888
document.getElementById("donate-feni-btn").addEventListener("click", () => {
  const userId = document.getElementById("userBlance");
  const Blance = userId.innerText;
  const userBlance = parseFloat(Blance);
  const feniInput = getValue("feni-input");
  if (feniInput > 0 && feniInput <= userBlance) {
    const userBlance = getInnerText("userBlance");
    const feniValue = getInnerText("feni");
    const remainingBlance = userBlance - feniInput;

    if (remainingBlance < 0) {
      return alert("");
    } else {
      const total = feniValue + feniInput;
      userId.innerText = remainingBlance;
      getId("feni").innerText = total;
      my_modal_5.showModal();
      document.getElementById("feni-input").value = "";

      const historyList = document.getElementById("history-list");
      const div = document.createElement("div");
      div.innerHTML += `
        <div class="bg-base-200 p-8 rounded-lg">
           <h3 class="text-xl font-bold pb-4">
             ${feniInput}   Taka is Donated for Flood Relief in Feni,Bangladesh
           </h3>
           <p class="font-medium text-gray-500">
             Date : ${new Date()}
           </p>
         </div>
    `;
      historyList.appendChild(div);
    }
  } else {
    alert("oiii");
  }
});
// 888888888888888888888888

document.getElementById("donate-dha-btn").addEventListener("click", () => {
  const userId = document.getElementById("userBlance");
  const Blance = userId.innerText;
  const userBlance = parseFloat(Blance);
  const dhakaInput = getValue("dhaka-input");
  if (dhakaInput > 0 && dhakaInput <= userBlance) {
    const userBlance = getInnerText("userBlance");
    const dhakaValue = getInnerText("dhaka");
    const remainingBlance = userBlance - dhakaInput;

    const total = dhakaValue + dhakaInput;
    userId.innerText = remainingBlance;
    getId("dhaka").innerText = total;
    my_modal_3.showModal();
    document.getElementById("dhaka-input").value = "";

    const historyList = document.getElementById("history-list");
    const div = document.createElement("div");
    div.innerHTML += `
        <div class="bg-base-200 p-8 rounded-lg">
           <h3 class="text-xl font-bold pb-4">
             ${dhakaInput}   Taka is Donated for Flood Relief in Feni,Bangladesh
           </h3>
           <p class="font-medium text-gray-500">
             Date : ${new Date()}
           </p>
         </div>
    `;
    historyList.appendChild(div);
  } else {
    alert("oiii");
  }
});

// const noakhaliValue = getInnerText('noakhali');
// const noakhaliInput = getValue("noakhali-input");
// console.table({noakhaliInput,noakhaliValue})
// const feni = getInnerText('feni');
// const dhaka = getInnerText('dhaka');
// console.table({userBlance,noakhali,feni,dhaka});
