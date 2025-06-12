// Task completion script for tasks.html

let completedTasks = 0;
const taskButtons = document.querySelectorAll(".complete-task");

taskButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (!btn.classList.contains("done")) {
      btn.textContent = "✅ Completed";
      btn.classList.add("done");
      completedTasks++;

      // Optional: Disable the button after completion
      btn.disabled = true;

      if (completedTasks === 5) {
        alert("🎉 All 5 tasks completed for today! Well done.");
      }
    }
  });
});
