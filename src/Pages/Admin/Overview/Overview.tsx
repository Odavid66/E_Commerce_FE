import './Overview.css';

export function Overview() {
  return (
    <div className="overview">
      <h1 className="overview__title">Welcome, Admin</h1>
      <p className="overview__subtitle">Here's what's happening in your store today.</p>
      
      <div className="overview__stats">
        <div className="stat-card">
          <h3>Total Sales</h3>
          <p className="stat-value">$12,450</p>
          <span className="stat-change positive">+15% from last week</span>
        </div>
        <div className="stat-card">
          <h3>Active Orders</h3>
          <p className="stat-value">34</p>
          <span className="stat-change negative">-2% from last week</span>
        </div>
        <div className="stat-card">
          <h3>New Customers</h3>
          <p className="stat-value">128</p>
          <span className="stat-change positive">+8% from last week</span>
        </div>
      </div>
    </div>
  );
}
