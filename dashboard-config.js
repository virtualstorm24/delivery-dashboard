// ============================================================
// DASHBOARD CONFIGURATION
// Edit this file to customize your analytics dashboard
// ============================================================

const CONFIG = {
  // Path to your CSV file
  csvFile: "./data.csv",

  // Dashboard title
  title: "Delivery Data Analytics Dashboard",

  // Revenue/Financial settings
  financial: {
    revenueColumn: "Total Cost",      // Column containing monetary values
    breakEven: 161000,                // Daily costs - break-even point
    currencySymbol: "$"
  },

  // Summary stat cards - which columns to calculate stats from
  summaryStats: {
    statusColumn: "Status",           // Column for delivery status
    deliveredValue: "Delivered",      // Value that means "delivered"
    rejectedValue: "Rejected",        // Value that means "rejected"
    distanceColumn: "Distance From Hub",
    ageColumn: "Age"
  },

  // Chart configurations
  // Types: "pie", "horizontal-bar", "vertical-bar", "histogram"
  charts: [
    {
      id: "status-chart",
      title: "Delivery Status",
      column: "Status",
      type: "pie",
      color: "#2196F3"
    },
    {
      id: "shipper-chart",
      title: "Orders by Shipper",
      column: "Shipper",
      type: "horizontal-bar",
      limit: 10,
      color: "#FF9800"
    },
    {
      id: "service-chart",
      title: "Service Level Distribution",
      column: "Service Level",
      type: "pie",
      color: "#4CAF50"
    },
    {
      id: "cities-chart",
      title: "Top 10 Destination Cities",
      column: "Destination City",
      type: "horizontal-bar",
      limit: 10,
      color: "#9C27B0"
    },
    {
      id: "region-chart",
      title: "Orders by Region",
      column: "Destination Sub-Region",
      type: "horizontal-bar",
      limit: 12,
      color: "#00BCD4"
    },
    {
      id: "survey-chart",
      title: "Survey Scores",
      column: "Survey Score",
      type: "vertical-bar",
      sortByLabel: true,  // Sort by the label value (1, 2, 3, 4, 5)
      color: "#4CAF50"
    },
    {
      id: "type-chart",
      title: "Order Types",
      column: "Type",
      type: "horizontal-bar",
      color: "#E91E63"
    },
    {
      id: "items-chart",
      title: "Items per Order",
      column: "# Items",
      type: "vertical-bar",
      limit: 10,
      sortByLabel: true,
      color: "#795548"
    },
    {
      id: "vendor-chart",
      title: "Top 15 Vendors",
      column: "Vendor",
      type: "horizontal-bar",
      limit: 15,
      color: "#3F51B5",
      height: 500
    },
    {
      id: "distance-chart",
      title: "Distance from Hub Distribution",
      column: "Distance From Hub",
      type: "histogram",
      color: "#FF5722"
    },
    {
      id: "age-chart",
      title: "Order Age Distribution",
      column: "Age",
      type: "histogram",
      color: "#607D8B"
    }
  ]
};

// Export for use in dashboard
if (typeof module !== 'undefined') {
  module.exports = CONFIG;
}
