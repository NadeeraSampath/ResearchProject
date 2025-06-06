const timelineData = [
  {
    date: "2024 May 24",
    title: "Group Created",
    content: "Group was created and discussed the areas.",
    icon: "fa-users",
  },
  {
    date: "2024 May 31",
    title: "Form Submission",
    content: "Filled out the Google form.",
    icon: "fa-file-alt",
  },
  {
    date: "2024 June 6",
    title: "Research Meeting",
    content: "Zoom meeting. Found some research papers.",
    icon: "fa-chart-bar",
  },
  {
    date: "2024 June 13",
    title: "Draft Creation",
    content: "Created one-pager document. Zoom meeting in the evening.",
    icon: "fa-file-alt",
  },
  {
    date: "2024 June 28",
    title: "Sketch Received",
    content: "Mr. Kavindu Yakupitiya gave us a sketch.",
    icon: "fa-bullseye",
  },
  {
    date: "2024 July 4",
    title: "Zoom Session",
    content: "There was a Zoom session.",
    icon: "fa-calendar-alt",
  },
  {
    date: "2024 July 14",
    title: "Supervisors Assigned",
    content: "Assigned supervisors. Filled a Google form.",
    icon: "fa-user-edit",
  },
  {
    date: "2024 August 24",
    title: "Proposal Finalized",
    content: "Finalized proposal at staff canteen.",
    icon: "fa-tools",
  },
  {
    date: "2025 August 25",
    title: "Proposal Submitted",
    content: "Project proposal submitted.",
    icon: "fa-paper-plane",
  },
  {
    date: "2025 September 7",
    title: "Presentation Created",
    content: "Proposal presentation created.",
    icon: "fa-desktop",
  },
  {
    date: "2024 September 30",
    title: "Proposal Presented",
    content: "Proposal presentation via Zoom in the evening.",
    icon: "fa-chalkboard-teacher",
  },
  {
    date: "2024 November 20",
    title: "Network Diagram",
    content: "Created network diagram. Studied tools like VyOS.",
    icon: "fa-network-wired",
  },
  {
    date: "2024 December 3",
    title: "Progress Presentation",
    content: "Progress presentation created.",
    icon: "fa-chart-line",
  },
  {
    date: "2024 December 4",
    title: "Evaluation 1",
    content: "Evaluation 1 via Zoom.",
    icon: "fa-comments",
  },
  {
    date: "2025 February 13",
    title: "Unattended Meeting",
    content: "Zoom meeting. No one joined.",
    icon: "fa-calendar-times",
  },
  {
    date: "2025 February 14",
    title: "Supervisor Change",
    content: "Internal supervisor changed.",
    icon: "fa-exchange-alt",
  },
  {
    date: "2025 April 2",
    title: "Evaluation 2",
    content: "Evaluation 2 via Zoom.",
    icon: "fa-clipboard-check",
  },
  {
    date: "2025 May 26",
    title: "Thesis Draft Submitted",
    content: "Thesis draft submitted.",
    icon: "fa-file-upload",
  },
];

const container = document.getElementById("timeline-content");

timelineData.forEach((event, index) => {
  const wrapper = document.createElement("div");
  wrapper.className = `timeline-item ${index % 2 === 0 ? "left" : "right"}`;

  wrapper.innerHTML = `
    <div class="timeline-content">
      <div class="timeline-icon"><i class="fas ${event.icon}"></i></div>
      <div class="timeline-date">${event.date}</div>
      <h5>${event.title}</h5>
      <p>${event.content}</p>
    </div>
  `;

  container.appendChild(wrapper);
});
