import './Customers.css';

// Mock data for customers
const MOCK_CUSTOMERS = [
  { id: '1', name: 'Alice Johnson', email: 'alice.j@example.com', joinDate: '2026-05-12', status: 'active', orders: 5 },
  { id: '2', name: 'Bob Smith', email: 'bob.smith@example.com', joinDate: '2026-05-20', status: 'active', orders: 2 },
  { id: '3', name: 'Charlie Davis', email: 'charlie.d@example.com', joinDate: '2026-05-25', status: 'inactive', orders: 0 },
  { id: '4', name: 'Diana Prince', email: 'diana.p@example.com', joinDate: '2026-06-01', status: 'active', orders: 12 },
  { id: '5', name: 'Evan Wright', email: 'evan.w@example.com', joinDate: '2026-06-02', status: 'active', orders: 1 },
];

export function Customers() {
  return (
    <div className="admin-customers-page">
      <div className="admin-customers-container">
        
        <header className="admin-customers__header">
          <div>
            <p className="admin-customers__eyebrow">Admin Dashboard</p>
            <h1>Customers</h1>
          </div>
          <div className="admin-customers__summary">
            {MOCK_CUSTOMERS.length} Total Customers
          </div>
        </header>

        <main className="admin-customers__card">
          <table className="admin-customers__table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Join Date</th>
                <th>Total Orders</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_CUSTOMERS.map((customer) => (
                <tr key={customer.id}>
                  <td data-label="Customer">
                    <div className="customer-name">{customer.name}</div>
                    <div className="customer-email">{customer.email}</div>
                  </td>
                  <td data-label="Join Date">{new Date(customer.joinDate).toLocaleDateString()}</td>
                  <td data-label="Total Orders">{customer.orders}</td>
                  <td data-label="Status">
                    <span className={`status-badge status-badge--${customer.status}`}>
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
        
      </div>
    </div>
  );
}
