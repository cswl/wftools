// use exnet;
function calcCritChance() {
  const weapon_cc = Number.parseInt($("#weapon_cc").val());
  const riven_check = $("#riven_check").prop("checked");

  // Calculate the modded critical mulitplier
  let weapon_cd = Number.parseInt($("#weapon_cd").val());
  const riven_cd = riven_check ? Number.parseInt($("#riven_cd").val()) : 0;
  const organ_shtr = $("#organ_shtr").prop("checked") ? 90 : 0;
  weapon_cd = ((100 + organ_shtr + riven_cd) * weapon_cd) / 100;
  console.log("weapon_cd modded", weapon_cd);

  console.log(riven_check);
  const true_steel = $("#true_steel").prop("checked") ? 60 : 0;
  const true_punish = $("#true_punish").prop("checked") ? 40 : 0;
  const riven_cc = riven_check ? Number.parseInt($("#riven_cc").val()) : 0;
  const mod_cc = true_steel + true_punish + riven_cc;
  console.log("weapon_cc modded", mod_cc);

  const deadly_intent = Number.parseFloat($("#deadly_intent").val());

  const buff_charm = $("#buff_charm").prop("checked") ? 200 : 0;
  const buff_cateye = $("#buff_cateye").prop("checked") ? 60 : 0;
  const buff_arcane = $("#buff_arcane").prop("checked") ? 30 : 0;
  const maiming_strike = $("#maiming_strike").prop("checked") ? 90 : 0;
  const riven_slide = riven_check ? Number.parseInt($("#riven_slide").val()) : 0;
  const static_cc = buff_charm + buff_cateye + buff_arcane + maiming_strike + riven_slide;
  console.log("static_cc ", static_cc);

  const blood_rush_rank = Number.parseInt($("#blood_rushrank").val());
  const combo_mult = Number.parseFloat($("#combo_mult").val());

  const crit_chance = ((100 + mod_cc + deadly_intent) * weapon_cc) / 100 + static_cc;
  const blood_rush = 100 + blood_rush_rank * combo_mult;
  const total_crit_chance = (crit_chance * blood_rush) / 100;
  console.log("total_crit_chance", total_crit_chance);

  $("#result_cc").text(total_crit_chance.toFixed(2) + "%");

  const crit_level = Math.floor(total_crit_chance / 100);
  const result_cd = crit_level > 1 ? crit_level * (weapon_cd - 1) + 1 : weapon_cd;
  $("#result_cd").text(result_cd.toFixed(2));
}

$(document).ready(() => {
  calcCritChance();
  $("#crit_form input").on("change keyup paste", calcCritChance);
  $("#crit_form select").on("change", calcCritChance);
});
