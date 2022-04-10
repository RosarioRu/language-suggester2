$(document).ready(function() {
  $("form#questions").submit(function(event) {
    event.preventDefault();
    const userName=$("input#name").val().toUpperCase();
    const question1=$("#color").val();
    const question2=$("#age").val();
    const question3=$("#socks").val();
    const question4=$("#drink").val();
    const question5=$("#eliminate").val();
    const totalString = (question1+question2+question3+question4+question5);

    function countLetter(string, letter) {
      let count=0;
      for (let i=0; i<string.length; i++) {
        if(string.charAt(i)===letter) {
          count +=1;
        }
      }
        return count;
      }
    const totalAs=(countLetter(totalString, "a"));
    const totalBs=(countLetter(totalString, "b"));
    const totalCs=(countLetter(totalString, "c"));
    
    let result;
    if (totalAs>totalBs && totalAs>totalCs) {
      result = "Ruby";
      $(".show-results").show();
      $("#result").text(result);
      $("#insert-name").text(userName);
    } else if (totalBs>totalAs && totalBs>totalCs) {
      result = "Python";
      $(".show-results").show();
      $("#result").text(result);
      $("#insert-name").text(userName);
    } else if (totalCs>totalAs && totalCs>totalBs) {
      result = "C++";
      $(".show-results").show();
      $("#result").text(result);
      $("#insert-name").text(userName);
    } else if (totalAs===totalBs) {
      $(".show-results").hide();
      $("#questions").hide();    
      $(".tie").show();
      $("form#tied").submit(function(event) {
      event.preventDefault();
        if ("Chocolate" ===$("#tie-breaker").val()) {
          result = "Ruby";
          $(".show-results").show();
          $("#result").text(result);
          $("#insert-name").text(userName);
        } else {
          result = "Python";
          $(".show-results").show();
          $("#result").text(result);
          $("#insert-name").text(userName);
        }
      });
    } else {
      result = "Javascript";
      $(".show-results").show();
      $("#result").text(result);
      $("#insert-name").text(userName);
    }
      $("#results").show();      
  });
});
