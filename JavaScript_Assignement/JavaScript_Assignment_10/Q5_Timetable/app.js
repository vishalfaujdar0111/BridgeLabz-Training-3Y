(function () {
  const API = "http://localhost:3005/timetable";
  const daySelect = document.getElementById("day");
  const schedule = document.getElementById("schedule");
  const message = document.getElementById("message");

  async function loadTimetable() {
    const day = daySelect.value;
    schedule.innerHTML = "";
    message.textContent = "Loading timetable…";
    try {
      // Fetch the selected day as a query parameter.
      const response = await fetch(API + "?day=" + encodeURIComponent(day));
      if (!response.ok) throw new Error("Request failed");
      const classes = await response.json();
      message.textContent = "";
      if (!classes.length) {
        message.textContent = "No classes today.";
        return;
      }
      classes.forEach(item => {
        const card = document.createElement("article");
        card.className = "class-card";
        const subject = document.createElement("h2");
        subject.textContent = item.subject;
        const faculty = document.createElement("p");
        faculty.textContent = "Faculty: " + item.faculty;
        const time = document.createElement("p");
        time.textContent = "Time: " + item.time;
        card.append(subject, faculty, time);
        schedule.appendChild(card);
      });
    } catch (error) {
      message.className = "message error";
      message.textContent = "Could not load the timetable. Check JSON Server on port 3005.";
    }
  }
  daySelect.addEventListener("change", loadTimetable);
  loadTimetable();
})();
