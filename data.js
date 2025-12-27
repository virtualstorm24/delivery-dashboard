const dfd = require("danfojs-node");
const path = require("path");

async function main() {
  console.log("Loading delivery data...\n");

  // Load CSV file (use __dirname to get path relative to this script)
  const csvPath = path.join(__dirname, "data.csv");
  const df = await dfd.readCSV(csvPath);

  // === BASIC INFO ===
  console.log("=== Dataset Overview ===");
  console.log("Shape:", df.shape);
  console.log("Columns:", df.columns);

  console.log("\n=== First 5 Rows ===");
  df.head(5).print();

  console.log("\n=== Column Types ===");
  df.ctypes.print();

  // === DELIVERY STATUS ANALYSIS ===
  console.log("\n=== Delivery Status Breakdown ===");
  df["Status"].valueCounts().sortValues({ ascending: false }).print();

  // === SHIPPER ANALYSIS ===
  console.log("\n=== Orders by Shipper ===");
  df["Shipper"].valueCounts().sortValues({ ascending: false }).print();

  // === SERVICE LEVEL ANALYSIS ===
  console.log("\n=== Service Level Distribution ===");
  df["Service Level"].valueCounts().sortValues({ ascending: false }).print();

  // === REGIONAL ANALYSIS ===
  console.log("\n=== Orders by Destination Sub-Region ===");
  df["Destination Sub-Region"].valueCounts().sortValues({ ascending: false }).print();

  // === VENDOR ANALYSIS ===
  console.log("\n=== Top Vendors ===");
  df["Vendor"].valueCounts().sortValues({ ascending: false }).head(10).print();

  // === NUMERIC STATISTICS ===
  console.log("\n=== Numeric Statistics ===");
  const numericColumns = ["Age", "Distance From Hub", "Cube", "# Items"];
  for (const col of numericColumns) {
    const colData = df[col].dropNa();
    console.log(`\n${col}:`);
    console.log(`  Count: ${colData.shape[0]}`);
    console.log(`  Mean:  ${colData.mean().toFixed(2)}`);
    console.log(`  Min:   ${colData.min()}`);
    console.log(`  Max:   ${colData.max()}`);
    console.log(`  Sum:   ${colData.sum().toFixed(2)}`);
  }

  // === SURVEY SCORE ANALYSIS ===
  console.log("\n=== Survey Score Distribution ===");
  df["Survey Score"].valueCounts().sortValues({ ascending: false }).print();

  // Calculate average survey score (excluding nulls)
  const surveyScores = df["Survey Score"].dropNa();
  if (surveyScores.shape[0] > 0) {
    console.log("Average Survey Score:", surveyScores.mean().toFixed(2));
    console.log("Total Responses:", surveyScores.shape[0]);
  }

  // === DESTINATION CITIES ===
  console.log("\n=== Top 10 Destination Cities ===");
  df["Destination City"].valueCounts().sortValues({ ascending: false }).head(10).print();

  // === DELIVERY TYPE ===
  console.log("\n=== Order Types ===");
  df["Type"].valueCounts().sortValues({ ascending: false }).print();

  // === MISSING VALUES ===
  console.log("\n=== Missing Values by Column ===");
  df.isNa().sum().sortValues({ ascending: false }).print();
}

main().catch(console.error);
