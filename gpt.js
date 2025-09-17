
document.addEventListener("DOMContentLoaded", () => {
  const searchbar = document.querySelector(".searchbar");
  const right = document.querySelector(".right");
  const newChatBtn = Array.from(document.querySelectorAll(".sider"))
    .find(el => /new chat/i.test(el.textContent));


  const chatBox = document.createElement("div");
  chatBox.style.margin = "100px 400px";
  chatBox.style.fontSize = "20px";
  chatBox.style.display = "flex";
  chatBox.style.flexDirection = "column";
  chatBox.style.gap = "15px";
  right.appendChild(chatBox);

  
  const nightBtn = document.createElement("button");
  nightBtn.textContent = "🌙 Night Mode";
  nightBtn.style.position = "fixed";
  nightBtn.style.top = "20px";
  nightBtn.style.right = "40px";
  nightBtn.style.padding = "8px 14px";
  nightBtn.style.borderRadius = "8px";
  nightBtn.style.border = "none";
  nightBtn.style.cursor = "pointer";
  nightBtn.style.background = "#222";
  nightBtn.style.color = "grey";
  document.body.appendChild(nightBtn);

  let nightMode = false;
  nightBtn.addEventListener("click", () => {
    nightMode = !nightMode;
    if (nightMode) {
      document.body.style.background = "#121212";
      document.body.style.color = "white";
      nightBtn.textContent = "☀️ Day Mode";
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
      nightBtn.textContent = "🌙 Night Mode";
    }
  });
  function addMessage(text, role) {
    const msg = document.createElement("div");
    msg.textContent = text;
    msg.style.padding = "10px 15px";
    msg.style.borderRadius = "12px";
    msg.style.maxWidth = "60%";
    msg.style.wordWrap = "break-word";
    if (role === "user") {
      msg.style.alignSelf = "flex-end";
      msg.style.background = "grey";
      msg.style.color = "white";
    } else {
      msg.style.alignSelf = "flex-start";
      msg.style.background = "#e9e9eb";
      msg.style.color = "#222";
    }
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  
  searchbar.addEventListener("keydown", e => {
    if (e.key === "Enter") {
      e.preventDefault();
      const text = searchbar.value.trim();
      if (!text) return;
      addMessage(text, "user");
      searchbar.value = "";

      
      setTimeout(() => {
        addMessage("🤖: You asked — " + text, "bot");
      }, 600);
    }
  });

  
  if (newChatBtn) {
    newChatBtn.style.cursor = "pointer";
    newChatBtn.addEventListener("click", () => {
      chatBox.innerHTML = "";
    });
  }
});

