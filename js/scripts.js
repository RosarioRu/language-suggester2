$(document).ready(function() {

  $("form#questions").submit(function(event) {
    event.preventDefault();
    const userName=$("input#name").val();
    const userColor=$("#color").val();
    const userAge=$("#age").val();

    let total = (userColor+userAge);
    alert(total);
    alert(total.count(a));
    
    
    // let ayes = total.count("a");
    
    // let quote = (100 - age) * 3;
    // if (gender === 'male' && age < 26) {
    //   quote += 50;
    // }

    // $("#rate").text(quote);
    // $("#quote").show()




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