# Mood

REST API Server with React frontend to allow a user to perform a mood check in and see insights about their mood.

### To Do:

- Make "feeling" multi-select and store as array
- Get validations and error messages to render nicely
- Reverse table order - use date object rather than string
- Fix specs

## Run:

```
npm install
npm start // start the server
npm run start:web // start the web app
```

## Navigate to:

```
http://localhost:3000 // frontent form
http://localhost:3000/insights // frontend insights
http://localhost:3001/moods // to see the server response
```

### It should look a little something like this:

![Screenshot Mood](images/screenshot_mood.png)
![Screenshot Insights](images/screenshot_insights.png)
