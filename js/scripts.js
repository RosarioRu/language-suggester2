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
    
    if (totalAs>totalBs && totalAs>totalCs) {
      let result = "Ruby";
      $(".show-results").show();
      $("#results").show();
      $("#result").text(result);
      $("#insert-name").text(userName);
    } else if (totalBs>totalAs && totalBs>totalCs) {
      let result = "Python";
      $(".show-results").show();
      $("#results").show();
      $("#result").text(result);
      $("#insert-name").text(userName);
    } else if (totalCs>totalAs && totalCs>totalBs) {
      let result = "C++";
      $(".show-results").show();
      $("#results").show();
      $("#result").text(result);
      $("#insert-name").text(userName);
    } else if (totalAs===totalBs) {
      $(".show-results").hide();
      $("#results").hide();
      $("#questions").hide();    
      $(".tie").show();
      $("form#tied").submit(function(event) {
      event.preventDefault();
        if ("Chocolate" ===$("#tie-breaker").val()) {
          let result = "Ruby";
          $(".show-results").show();
          $("#results").show();
          $("#result").text(result);
          $("#insert-name").text(userName);
        } else {
          let result = "Python";
          $(".show-results").show();
          $("#results").show();
          $("#result").text(result);
          $("#insert-name").text(userName);
        }
      });
    } else {
      let result = "Javascript";
      $(".show-results").show();
      $("#results").show();
      $("#result").text(result);
    }
  });
});
