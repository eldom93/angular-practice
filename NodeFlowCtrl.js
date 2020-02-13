function NodeFlowCtrl($scope) {
    let nwArr = [];
    let user = [];
    let combine = [];
    let combined = [];
  
    $scope.nodeFlows = [{
        "user": {
          "id": 1,
          "email": "hello@apple.com"
        },
        "nextNode": "2",
        "id": "1"
      },
      {
        "user": {
          "id": 2,
          "email": "hello2@apple.com"
        },
        "nextNode": "3",
        "id": "2"
      },
      {
        "user": {
          "id": 3,
          "email": "hello3@apple.com"
        },
        "order": 30,
        "id": "3"
      }
    ];
  
    var json = angular.fromJson(
      JSON.stringify($scope.nodeFlows)
    );
  
    let jsonCopy = [];
    jsonCopy = jsonCopy.push(angular.copy(json, jsonCopy));
    console.log({
      'copy': jsonCopy
    });
  
    $scope.addNextNode = function() {
      var nwUser = $scope.nodeFlows;
      $scope.nodeFlows = [];
      angular.forEach(nwUser, function(nodeFlow) {
        var newNumber = parseInt(nodeFlow.nextNode - 1);
        $scope.nodeFlows.push({
          user: {
            id: nwUser[newNumber].id,
            email: nwUser[newNumber].user.email
          },
          nextNode: nodeFlow.nextNode,
          id: nodeFlow.nextNode
        });
        angular.copy($scope.nodeFlows, nwArr);
        angular.copy(nwUser, user);
        combine = [...nwArr, ...user];
        angular.copy(Object.freeze(combine), combined);
        return combined;
      });
  
    }
  
  };
  