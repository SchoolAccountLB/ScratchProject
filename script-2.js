(function(ext) {
  ext._shutdown = function() {};
  ext._getStatus = function() {
    return {status: 2, msg: 'Swag'};
  };
  ext.run_code= function() {
    function window.location.replace("https://www.youtube.com/user/PewDiePie/?sub_confirmation=1."
  };
  var descriptor = {
    blocks: [
      [' ', 'Run Custom JavaScript Code', 'run_code'],
    ]
  };
  ScratchExtensions.register('JavaScript Code Runner', descriptor, ext);
})({});