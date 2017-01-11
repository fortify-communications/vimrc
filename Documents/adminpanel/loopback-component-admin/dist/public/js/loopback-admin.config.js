angular.module('loopback-admin')

.config(["LoopBackAdminConfigurationProvider", function(LoopBackAdminConfigurationProvider) {
  LoopBackAdminConfigurationProvider.setConfig({"mountPath":"/admin","userModel":"Customer","resourcePath":"config.json","userLoginField":"username","apiInfo":{}});
}]);