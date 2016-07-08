// Factory "morphs" into a Pudding class.
// The reasoning is that calling load in each context
// is cumbersome.

(function() {

  var contract_data = {
    abi: [{"constant":true,"inputs":[],"name":"GetAnswer","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"inputs":[],"type":"constructor"}],
    binary: "60606040527f2081e911000000000000000000000000000000000000000000000000000000006060908152732afb0af6c9ce57cbafded86cebf48935e3f8196990632081e911906064906000906004818660325a03f41560025750505060268060686000396000f3606060405260e060020a6000350463bdf3ccb38114601a575b005b602a6060908152602090f3",
    unlinked_binary: "60606040527f2081e91100000000000000000000000000000000000000000000000000000000606090815273__TestLib_______________________________90632081e911906064906000906004818660325a03f41560025750505060268060686000396000f3606060405260e060020a6000350463bdf3ccb38114601a575b005b602a6060908152602090f3",
    address: "0xd1f97250cdaa229c891775055ba280b9673ea707",
    generated_with: "2.0.6",
    contract_name: "MetaCoin"
  };

  function Contract() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before creating new instance of this contract.");
    }

    Contract.Pudding.apply(this, arguments);
  };

  Contract.load = function(Pudding) {
    Contract.Pudding = Pudding;

    Pudding.whisk(contract_data, Contract);

    // Return itself for backwards compatibility.
    return Contract;
  }

  Contract.new = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before calling new().");
    }

    return Contract.Pudding.new.apply(Contract, arguments);
  };

  Contract.at = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: lease call load() first before calling at().");
    }

    return Contract.Pudding.at.apply(Contract, arguments);
  };

  Contract.deployed = function() {
    if (Contract.Pudding == null) {
      throw new Error("MetaCoin error: Please call load() first before calling deployed().");
    }

    return Contract.Pudding.deployed.apply(Contract, arguments);
  };

  if (typeof module != "undefined" && typeof module.exports != "undefined") {
    module.exports = Contract;
  } else {
    // There will only be one version of Pudding in the browser,
    // and we can use that.
    window.MetaCoin = Contract;
  }

})();
