# Restful API for Todo app

This is a backend example of a REST
API for Todo App.

## Server Url
[Live Server](https://apricot-sundae-79677.herokuapp.com/)

## Technology Used :- 
<ul>
  <li> Nodejs </li>
  <li> ExpressJS</li>
  <li> MongoDB as database</li>
  <li> Heroku for your deployment </li>
  <li> Git for version controlling </li>
  <ul>


## REST API's

The REST API to the todo app is described below.

### 1. Add Api :-
<ul>
  <li> This api request to server for posting the task details.It adds the data</li>
  <li>The data fields which are required are as follows :- </li>
  <ul>
    <li>Task name :- This is a field which ask for title of the task.</li>
    <li>Task description :- It is a field which adds a brief description about task.</li>
    <li>Creator :- It stores the name of Author of the task</li>
    <li>Duration :- It store the duration for which the task will be running (in Seconds) after the specified duration task will be deleted</li>   
</ul>
  <li>The url for endpoint of live server is https://apricot-sundae-79677.herokuapp.com/add .</li>
  <li>[Image of the Post Response i.e Add](https://user-images.githubusercontent.com/54279054/113316698-42977b80-932c-11eb-886c-4c872c3a7836.png)</li>


### 2. List Api :-
<ul>
  <li> This api request to server for getting all the task details.It fetches the data</li>
  <li>This api returns all the stored task with the following fields. </li>
  <ul>
    <li> Id :- An auto generted id for the record .</li>
    <li>Task name :- It contains the task name</li>
    <li>Task description :- It contains a short description about the task.</li>
    <li>Creator :- It contains the name of Author of the task</li>
    <li>Duration :- It conatins the duration for which the task will be running (in Seconds) after the specified duration task will be deleted</li>
    <li>createdAt :- Its a auto generated field which store the timestamps for the creation of Task</li>
    <li>ExpiredAt :- It is also a auto generated field which tell when the task was destroyed </li>
</ul>
  <li>The url for endpoint of live server is https://apricot-sundae-79677.herokuapp.com/list .</li>
  <li>[Image of the Get Response i.e List](https://user-images.githubusercontent.com/54279054/113318099-ba19da80-932d-11eb-90f5-53a3583f2f7c.png)
</li>


