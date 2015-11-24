function CaclController($scope) {
  $scope.firstOperand = '';
  $scope.secondOperand = '';
  $scope.result = 0;
  $scope.operator = '';

  $scope.setOperand = function(operand) {

    if ($scope.operator === '') {
      $scope.firstOperand += operand;
    } else {
      $scope.secondOperand += operand;
    }
    console.log($scope.firstOperand);
  }

  $scope.calculate = function(operator) {

    if ($scope.firstOperand !== '') {
      switch ($scope.operator) {
        case '+':
          $scope.result = parseInt($scope.firstOperand) + parseInt($scope.secondOperand);
          $scope.firstOperand = $scope.result;
          break;
        case '-':
          $scope.result = parseInt($scope.firstOperand) - parseInt($scope.secondOperand);
          $scope.firstOperand = $scope.result;
          break;
        case '/':
          $scope.result = parseInt($scope.firstOperand) / parseInt($scope.secondOperand);
          $scope.firstOperand = $scope.result;
          break;
        case '*':
          $scope.result = parseInt($scope.firstOperand) * parseInt($scope.secondOperand);
          $scope.firstOperand = $scope.result;
          break;
        case '^2':
          $scope.result = Math.pow(parseInt($scope.firstOperand), 2);
          $scope.firstOperand = $scope.result;
          break;
        case '=':
          $scope.result += parseInt($scope.firstOperand);
          break;
        default:
          $scope.operator = operator;
      }
      if (operator === '=') {
        $scope.operator = '';
      } else {
        $scope.operator = operator;
      }
      $scope.secondOperand = '';

    } else {
      alert("Please type the first operand");
    }


  }

  $scope.clear = function() {
    $scope.firstOperand = '';
    $scope.secondOperand = '';
    $scope.result = 0;
    $scope.operator = '';
    $scope.displayResults = '';
  }
}