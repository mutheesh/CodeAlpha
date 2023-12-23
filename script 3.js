function addIssue() {
  var title = document.getElementById('issueTitle').value;
  var description = document.getElementById('issueDescription').value;

  if (title && description) {
      var issueContainer = document.getElementById('issueContainer');

      var issueDiv = document.createElement('div');
      issueDiv.className = 'issue';

      var issueTitle = document.createElement('h3');
      issueTitle.textContent = title;

      var issueDescription = document.createElement('p');
      issueDescription.textContent = description;

      issueDiv.appendChild(issueTitle);
      issueDiv.appendChild(issueDescription);

      issueContainer.appendChild(issueDiv);

      // Clear the form
      document.getElementById('newIssueForm').reset();
  } else {
      alert('Please fill in both title and description.');
  }
}