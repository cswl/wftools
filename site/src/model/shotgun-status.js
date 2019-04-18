function calcStatus() {
  let base_status = $("#base_status").val();
  base_status = Number.parseInt(base_status);

  let base_pellets = $("#base_pellets").val();
  base_pellets = Number.parseInt(base_pellets);

  let mod_status = $("#mod_status").val();
  mod_status = Number.parseInt(mod_status) / 100 || 0;

  let mod_ms = $("#mod_ms").val();
  mod_ms = Number.parseInt(mod_ms) / 100 || 0;

  let ms_toggle = $("#ms_toggle").is(":checked");
  console.log(ms_toggle);
  if (!ms_toggle) {
    mod_ms = 0;
  }

  let total_status = ((1 + mod_status) * base_status) / 100;
  console.log(`total_status : ${total_status}`);
  if (total_status > 1) {
    total_status = 1;
  }
  let arsenal_status = 1 - (1 - total_status) ** (1 + mod_ms);
  arsenal_status = arsenal_status * 100;

  $("#arsenal_status").val(arsenal_status.toFixed(2));

  let total_pellets = (1 + mod_ms) * base_pellets;
  console.log(total_pellets);
  let chance_pellet = 1 - (1 - total_status) ** (1 / total_pellets);
  console.log(1 - (1 - chance_pellet) ** total_pellets);
  chance_pellet = chance_pellet * 100;
  $("#chance_pellet").val(chance_pellet.toFixed(2));

  let number_procs = (chance_pellet / 100) * total_pellets;
  $("#number_procs").val(number_procs.toFixed(2));
}

$("#calc").click(calcStatus);
$("#ms_toggle").on("change", calcStatus);
