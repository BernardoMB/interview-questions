const express = require('express');
const app = express();
app.use(express.json());

// Your code starts here. Placeholders for .get and .post are provided for
//  your convenience.

let candidates = [
  {
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
    "name": "Jimmy Coder",
    "skills": [ "javascript", "es6", "nodejs", "python" ]
  },
  {
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
    "name": "Jimmy Coder",
    "skills": [ "javascript", "es6", "express", "python" ]
  },
  {
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
    "name": "Jimmy Coder",
    "skills": [ "javascript", "es6" ]
  },
  {
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
    "name": "Jimmy Coder",
    "skills": [ "angular", "es6", "nodejs", "typescript", "python" ]
  },
  {
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
    "name": "Jimmy Coder",
    "skills": []
  },
  {
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
    "name": "Jimmy Coder",
    "skills": [ "nodejs", "express", "python" ]
  },{
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
    "name": "Jimmy Coder",
    "skills": [ "mongodb", "python" ]
  },{
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
    "name": "Jimmy Coder",
    "skills": [ "mongodb", "es6", "python" ]
  },
  {
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
    "name": "Jimmy Coder",
    "skills": [ ]
  },
  {
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
    "name": "Jimmy Coder",
    "skills": [ "javascript", "es6", "nodejs", "express", "python", "angular", "mongodb", "react" ]
  },
  {
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
    "name": "Jimmy Coder",
    "skills": [ "javascript", "es6", "nodejs", "express", "python", "react" ]
  },
  {
    "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
    "name": "Jimmy Coder",
    "skills": [ "javascript", "es6", "nodejs", "express", "python" ]
  }
];

app.post('/candidates', function(req, res) {
  const body = req.body;
  if (!body || Object.keys(body).length === 0) {
    res.status(400).send();
  }
  candidates.push(body);
  res.status(201).send();
});

app.get('/candidates/search', function(req, res) {
  const skills = req.query.skills.split(',');
  if (candidates.length > 0) {
    candidates.sort((a,b) => {
      let matchesOfA = 0;
      let matchesOfB = 0;
      skills.forEach((skill) => {
        if (a.skills.includes(skill)) {
          matchesOfA += 1;
        }
        if (b.skills.includes(skill)) {
          matchesOfB += 1;
        }
      });
      if (matchesOfA === matchesOfB) {
        return a.skills.length - b.skills.length;
      } else {
        return matchesOfA - matchesOfB;
      }
    });
    const bestCadidate = candidates[candidates.length - 1];
    res.status(200).json(bestCadidate);
  } else {
    res.setHeader('content-type', 'application/json');
    res.status(404).send();
  }
});

app.listen(process.env.HTTP_PORT || 3000);

// REuqest boddy example
// {
//   "id": "ae588a6b-4540-5714-bfe2-a5c2a65f547a",
//   "name": "Jimmy Coder",
//   "skills": [ "javascript", "es6", "nodejs", "express", "python" ]
// }