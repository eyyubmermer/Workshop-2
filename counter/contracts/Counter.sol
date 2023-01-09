// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Counter {
    uint256 value = 0;

    function increase() public {
        value++;
    }

    function decrease() public {
        value--;
    }

    function reset() public {
        value = 0;
    }

    function viewValue() public view returns (uint256) {
        return value;
    }
}
