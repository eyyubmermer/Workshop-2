// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Bank {
    mapping(address => uint256) balances;

    function deposit() public payable {
        require(msg.value > 0, "value cannot be zero");
        balances[msg.sender] += msg.value;
    }

    function withdraw(uint256 _amount) public {
        require(balances[msg.sender] >= _amount, "you have not enough balance");
        balances[msg.sender] -= _amount;
        payable(msg.sender).transfer(_amount);
    }

    function transfer(address _to, uint256 _amount) public {
        require(balances[msg.sender] >= _amount, "you have not enough balance");
        balances[msg.sender] -= _amount;
        balances[_to] += _amount;
    }

    function viewBalance(address user) public view returns (uint256) {
        return balances[user];
    }

    function viewContractalance() public view returns (uint256) {
        return address(this).balance;
    }
}
