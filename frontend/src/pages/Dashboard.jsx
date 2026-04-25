import React from 'react'
import { dashboardStyles, trendStyles, chartStyles } from '../assets/dummyStyles'
import {
  GAUGE_COLORS,
  COLORS,
  INCOME_CATEGORY_ICONS,
  EXPENSE_CATEGORY_ICONS,
} from '../assets/color'

const API_BASE = "http://localhost:4000/api";

const getAuthHeader = () => {
  const token = localStorage.getItem("token") || localStorage.getItem("authToken");
  return token ? { Authorization: `Bearer ${token} ` } : {};
};

// to convert date to ISO timeline
function toIsoWithClientTime(dateValue) {
  if (!dateValue) {
    return new Date().toISOString();
  }

  if (typeof dateValue === "string" && dateValue.length === 10) {
    const now = new Date();
    const hhmmss = now.toTimeString().slice(0, 8);
    const combined = new Date(`${dateValue}T${hhmmss}`);
    return combined.toISOString();
  }

  try {
    return new Date(dateValue).toISOString();
  } catch (err) {
    return new Date().toISOString();
  }
}

const Dashboard = () => {
  return (
    <div>
      Layout
    </div>
  )
}

export default Dashboard
