class AliasVose {
  constructor(list) {
    // Determine relative probabilities.
    const scalar =
      list.length /
      list.reduce((acc, item) => {
        return acc + item.weight;
      }, 0);

    // Partition outcomes into tiny and big work queues.
    const [tinys, bigs] = list.reduce(
      (acc, item) => {
        const prob = item.weight * scalar;
        acc[prob < 1 ? 0 : 1].push({
          prob: prob,
          item: item
        });

        return acc;
      },
      [[], []]
    );

    this.table = [];

    while (tinys.length && bigs.length) {
      const tiny = tinys.pop();
      const big = bigs.pop();

      // Add tiny work item to table, top off with big work item.
      this.table.push({
        prob: tiny.prob,
        item: tiny.item,
        alias: big.item
      });
      // Reduce big work item probability by top-off amount.
      big.prob += tiny.prob - 1;
      // Return big work item to tiny or big work queue.
      (big.prob < 1 ? tinys : bigs).push(big);
    }

    // Add all remaining work items to table.
    while (bigs.length || tinys.length) {
      this.table.push({
        prob: 1,
        item: (bigs.pop() || tinys.pop()).item
      });
    }
  }

  rand() {
    // Choose a table entry, then choose its tiny or top-off item.
    const bucket = this.table[Math.floor(Math.random() * this.table.length)];
    return Math.random() < bucket.prob ? bucket.item : bucket.alias;
  }
}

// global variables ftw
var clicks = 0;
const weights = {
  intact: [76, 22, 2], // common, uncommon, rare
  exceptional: [70, 26, 4],
  flawless: [60, 34, 6],
  radiant: [50, 40, 10]
};

// jQuery master race.
$("#relic_form").submit(() => {
  const chosen = $("#choice").val();

  const vose = new AliasVose([
    {
      weight: weights[chosen][0],
      label: "Common"
    },
    {
      weight: weights[chosen][1],
      label: "Uncommon"
    },
    {
      weight: weights[chosen][2],
      label: "Rare"
    }
  ]);

  // noprotect
  const looper = Number.parseInt($("#counter").val());
  const results = {};
  for (var i = looper; i > 0; i--) {
    const out = vose.rand();
    results[out.label] = (results[out.label] || 0) + 1;
  }

  console.log(results);

  $("#result").html(
    "Common: " +
      results["Common"] +
      "<br>" +
      "Uncommon: " +
      results["Uncommon"] +
      "<br>" +
      "Rare: " +
      results["Rare"] +
      "<br>"
  );
  return false;
});
