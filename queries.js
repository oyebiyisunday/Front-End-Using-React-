export const listItems = `query ListItems {
  listItems {
    items {
      id
      name
      description
      price
    }
  }
}`

export const listAttendants = `query ListAttendants {
  listAttendants {
    items {
      id
      name
      email
    }
  }
}`

export const listDailySummaries = `query ListDailySummaries {
  listDailySummaries {
    items {
      id
      date
      openingStock {
        itemId
        itemName
        quantity
      }
      suppliedStock {
        itemId
        itemName
        quantity
      }
      sales {
        itemId
        itemName
        quantity
        amount
        attendantId
        attendantName
      }
      totalIncome
    }
  }
}`