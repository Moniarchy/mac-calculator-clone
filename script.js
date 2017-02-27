function Calculator() {
  this.operandContainer = []
  this.operatorContainer = []
}

Calculator.prototype.evaluate = function evaluate() {
  // do the function logic
}

Calculator.prototype.sendOperandToContainer = function sendOperand( number ) {
  //is operand stack empty?
    //yes: push operand
    //no: was last thing pushed into a stack an operator?
      // yes: push operand
      // no: concat number
}

Calculator.prototype.sendOperatorToContainer = function sendOperatorToContainer( operator ) {
  //is operator stack empty
    //yes: push operator
    //no: does the top thing in the operator stack(peek) have a higher precedence than operator?
      //yes: process/evaluate
      //no: push operator
}

Calculator.prototype.getValueFromButtonPressed = function getValueFromButtonPressed() {
  // do the function logic
}

Calculator.prototype.getOperatorPrecedence = function getOperatorPrecedence() {
  // do the function logic
}
