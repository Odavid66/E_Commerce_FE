import './AdminTable.css';

interface Column {
  key: string;
  label: string;
}

interface AdminTableProps {
  columns: Column[];
  data: Record<string, any>[];
  onEdit?: (row: Record<string, any>) => void;
  onDelete?: (row: Record<string, any>) => void;
}

export const AdminTable = ({ columns, data, onEdit, onDelete }: AdminTableProps) => {
  return (
    <div className="admin-table__wrapper">
      <table className="admin-table">

        {/* Header */}
        <thead className="admin-table__head">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="admin-table__th">
                {col.label}
              </th>
            ))}
            <th className="admin-table__th">Actions</th>
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="admin-table__row">
              {columns.map((col) => (
                <td key={col.key} className="admin-table__td">
                  {row[col.key]}
                </td>
              ))}
              <td className="admin-table__td admin-table__actions">
                <button
                  className="admin-table__btn admin-table__btn--edit"
                  onClick={() => onEdit?.(row)}
                >
                  Edit
                </button>
                <button
                  className="admin-table__btn admin-table__btn--delete"
                  onClick={() => onDelete?.(row)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}

          {data.length === 0 && (
            <tr>
              <td
                colSpan={columns.length + 1}
                className="admin-table__empty"
              >
                No products found.
              </td>
            </tr>
          )}
        </tbody>

      </table>
    </div>
  );
};