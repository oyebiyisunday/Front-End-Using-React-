export const createDailySummary = `mutation CreateDailySummary($input: CreateDailySummaryInput!) {
  createDailySummary(input: $input) {
    id
    date
    openingStock
    suppliedStock
    totalStock
    sales
    totalIncome
  }
}`;