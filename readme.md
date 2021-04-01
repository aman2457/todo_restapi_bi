## Restful API for Todo app

This is a backend example of a REST
API for Todo App.

# server url
[herokuserver](https://apricot-sundae-79677.herokuapp.com/)


### REST API's

The REST API to the example app is described below.

### 1. Add Api :
<ul>
  <li> This api request to server for posting the task details.It adds the data</li>
  <li>The data fields which are required are as follows :- </li>
  <ul>
    <li>Task name :- This is a field which ask for title of the task.</li>
    <li>Task description :- It is a field which adds a brief description about task.</li>
    <li>Creator :- It stores the name of Author of the task</li>
    <li>Duration :- It store the duration for which the task will be running (in Seconds) after the specified duration task will be deleted</li>
    <li>createdAt :- Its a auto generated field which store the timestamps for the creation of Task</li>
</ul>
  <li>The url for endpoint of live server is https://apricot-sundae-79677.herokuapp.com/add .</li>
  <li>[Image of the Post Response i.e Add](https://user-images.githubusercontent.com/54279054/113316698-42977b80-932c-11eb-886c-4c872c3a7836.png)</li>


### 2. List Api :
<ul>
  <li> This api request to server for getting all the task details.It fetches the data</li>
  <li>This api returns all the stored task . </li>
  <ul>
    <li>Task name :- This is a field which ask for title of the task.</li>
    <li>Task description :- It is a field which adds a brief description about task.</li>
    <li>Creator :- It stores the name of Author of the task</li>
    <li>Duration :- It store the duration for which the task will be running (in Seconds) after the specified duration task will be deleted</li>
    <li>createdAt :- Its a auto generated field which store the timestamps for the creation of Task</li>
</ul>
  <li>The url for endpoint of live server is https://apricot-sundae-79677.herokuapp.com/list .</li>
  <li>[Image of the Post Response i.e Add](https://user-images.githubusercontent.com/54279054/113316698-42977b80-932c-11eb-886c-4c872c3a7836.png)</li>


