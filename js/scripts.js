$(document).ready(function() {

  $("form#questions").submit(function(event) {
    event.preventDefault();
    const userName=$("input#name").val().toUpperCase();
    const question1=$("#color").val();
    const question2=$("#age").val();
    const question3=$("#socks").val();
    const question4=$("#drink").val();
    const question5=$("#eliminate").val();
    alert(userName);
    
    const totalString = (question1+question2+question3+question4+question5);
    alert(totalString);

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
    alert(totalAs);
    alert(totalBs);
    alert(totalCs);
    
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

// 1. a,b,c
// 2. a,b,c
// 3. a,b,c
// 4. a,b,c
// 5. a,b,c

// if a>b and a>c, then a language
// if b>a and b>c, then b language
// if c>a and c>b, then c language
//  else --->
//  if a=b then ask a f/u ? (show this)
// 	if black then a lang.
// 	if white then b
// if b=c then ask a f/u ?
// 	if black then b,
// 	if white then c

// If a=c then same as above

// 1. which of the primary colors if your fav?
// a. red(ruby)  b. blue(python)  c.yellow(C++)

// 2. Select the number closest to your age?
// a. 0(ruby)    b. 100(python)   c. 21(c++)

// 3. What's your opinon of wearing socks with sandals?
// a. Hate it(ruby) b.Love it(python)  c. neutral(c++)

// 4. Choose a drink?
// a. icy cold IPA (ruby) b.Black coffee(python)  b. Caprisun(C++)

// 5. If you could eliminate only one of the following, which would it be?
// a. poisonous snakes(ruby)  b.cargo shorts (python) c.your old myspace acct (c++)