angular.module('SwipeAdmin').controller('AddBlogCtrl', AddBlogCtrl);

AddBlogCtrl.$inject = ['$scope', '$modalInstance', 'BlogService'];

function AddBlogCtrl($scope, $modalInstance, BlogService) {


  $scope.SaveBlog = function(){
    BlogService.Blogs.save($scope.blog,
      function(data) {
        $scope.blog = {};
        alert("Blog Added!");
      },
      function(e) {
        // failure
        alert("Error");
      });
  }

  $scope.Close = function(){
    $modalInstance.close();
  }

};
