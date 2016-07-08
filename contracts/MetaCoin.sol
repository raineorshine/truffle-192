import 'TestLib.sol';

contract MetaCoin {
  function MetaCoin() {
    TestLib.Set();
  }

  function GetAnswer() constant returns(uint) {
    return 42;
  }
}
