import React, { useEffect, useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { listDailySummaries } from '../graphql/queries';
import './SummaryBoard.css';

export default function SummaryBoard({ role }) {
  const [summaries, setSummaries] = useState([]);

  useEffect(() => {
    async function fetchSummaries() {
      const result = await API.graphql(graphqlOperation(listDailySummaries));
      setSummaries(result.data.listDailySummaries.items);
    }
    fetchSummaries();
  }, []);

  return (
    <div className="summary-board">
      {summaries.map((summary, idx) => (
        <div key={idx} className="daily-summary">
          <h3>Date: {summary.date}</h3>
          
          <div className="stock-section">
            <h4>Opening Stock</h4>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {summary.openingStock.map((stock, i) => (
                  <tr key={i}>
                    <td>{stock.itemName}</td>
                    <td>{stock.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="stock-section">
            <h4>Supplied Stock</h4>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {summary.suppliedStock.map((stock, i) => (
                  <tr key={i}>
                    <td>{stock.itemName}</td>
                    <td>{stock.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="sales-section">
            <h4>Sales</h4>
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Attendant</th>
                </tr>
              </thead>
              <tbody>
                {summary.sales.map((sale, i) => (
                  <tr key={i}>
                    <td>{sale.itemName}</td>
                    <td>{sale.quantity}</td>
                    <td>${sale.amount.toFixed(2)}</td>
                    <td>{sale.attendantName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="summary-total">
            <h4>Total Income: ${summary.totalIncome.toFixed(2)}</h4>
          </div>
        </div>
      ))}
    </div>
  );
}