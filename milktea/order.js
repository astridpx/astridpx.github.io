// document.querySelector("#price").disabled = true;

function buy() {
  var btn = document.getElementById("btn");
  var name = document.getElementById("name").value;
  var address = document.getElementById("address").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  if (
    name === "" ||
    address === "" ||
    phone == "" ||
    email === "" ||
    quantity === ""
  ) {
    // if the form have a blank alert
    swal("Error! You cannot leave the from with blank!", "", "error");
  } else {
    //  buy field
    //  Quantity
    var quantity = document.querySelector("#quantity").value;

    let hazelnut = 109;
    let banana = 79;
    let waffle = 99;
    var rocky = 69;
    let amount = 0;

    var index = document.getElementById("item").selectedIndex;

    if (index == 1) {
      amount = hazelnut * quantity;
      document.getElementById("price").value = amount;
      var flav = "Choco Hazelnut";
    } else if (index == 2) {
      amount = banana * quantity;
      document.getElementById("price").value = amount;
      var flav = "Choco Banana";
    } else if (index == 3) {
      amount = waffle * quantity;
      document.getElementById("price").value = amount;
      var flav = "Classic Waffle";
    } else if (index == 4) {
      amount = rocky * quantity;
      document.getElementById("price").value = amount;
      var flav = "Rocky Road";
    }

    var items = document.querySelector("#item").value;

    // Milktea Flavor
    if (items == "") {
      swal("Error! You cannot leave the flavor blank!", "", "warning");
    } else {
      //else if the quanity is blank
      if (quantity < 1) {
        swal("Error! You cannot buy at the quantity of 0!", "", "warning");
      } else {
        // else if the quanity has a value
        swal({
          title:
            "Are you sure you want to buy " +
            quantity +
            " pieces of " +
            flav +
            " worth of " +
            amount +
            "?",
          text: "Once you buy it, you can not cancelled it again!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            swal(quantity + " pieces of " + flav + " Succesfully Ordered!", {
              icon: "success",
            });
            // reset the form
            var form = document.querySelector(".buyer_form");
            form.reset();
          } else {
            swal({ title: "Order Is Cancelled!", icon: "error" });
          }
        });
      }
    } //
  } // else of the buyer info
} // function buy
