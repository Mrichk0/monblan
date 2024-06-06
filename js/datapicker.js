$(document).ready(function () {
  $("#dateFrom").datepicker({
    format: "dd-mm-yyyy",
    autoclose: true,
  });

  $("#dateTo").datepicker({
    format: "dd-mm-yyyy",
    autoclose: true,
  });

  $("#clearDateFrom").on("click", function () {
    $("#dateFrom").val("").datepicker("update");
    $("#dateFrom").datepicker("hide");
  });

  $("#clearDateTo").on("click", function () {
    $("#dateTo").val("").datepicker("update");
    $("#dateTo").datepicker("hide");
  });
});
