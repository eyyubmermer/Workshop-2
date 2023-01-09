// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Todo {
    struct Task {
        string content;
        bool isCompleted;
    }

    Task[] public tasks;

    function addTask(string memory _content) public {
        //arrayler ve objectler data locationlarla beraber tanımlanır.
        Task memory task;
        task.content = _content;
        task.isCompleted = false;
        tasks.push(task);
    }

    function updateTaskContent(uint256 _id, string memory _content) public {
        tasks[_id].content = _content;
    }

    function updateTaskStatus(uint256 _id) public {
        tasks[_id].isCompleted = !tasks[_id].isCompleted;
    }

    function list() public view returns (Task[] memory) {
        return tasks;
    }

    function removeTask(uint256 index) public {
        for (uint256 i = index; i < tasks.length - 1; i++) {
            tasks[i] = tasks[i + 1];
        }
        tasks.pop();
    }
}
