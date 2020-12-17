function submitForm() {
  if (
    $("input[name='fname']").val() == "" ||
    $("input[name='fsurname']").val() == "" ||
    $("input[name='fsubject']").val() == "" ||
    $("input[name='fmessage']").val() == "" ||
    $("input[name='fmail']").val() == ""
  ) {
    alert("Molimo Vas popunite sva polja");

    if ($("input[name='fname']").val() == "")
      $("input[name='fname']")[0].style.backgroundColor = "#FFF200";
    if ($("input[name='fsurname']").val() == "")
      $("input[name='fsurname']")[0].style.backgroundColor = "#FFF200";
    if ($("input[name='fsubject']").val() == "")
      $("input[name='fsubject']")[0].style.backgroundColor = "#FFF200";
    if ($("input[name='fmessage']").val() == "")
      $("input[name='fmessage']")[0].style.backgroundColor = "#FFF200";
    if ($("input[name='fmail']").val() == "")
      $("input[name='fmail']")[0].style.backgroundColor = "#FFF200";
  } else {
    alert("Hvala!");
    window.location.reload();
  }
}

jQuery.validator.setDefaults({
  debug: true,
  success: "valid",
});

$("#myForm").validate({
  rules: {
    email: {
      required: true,
      email: true,
    },
  },
});
