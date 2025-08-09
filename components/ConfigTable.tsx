import React, { useState } from 'react';
import { data } from '../app/constants/index';

const ConfigTable = () => {

  const today = new Date().toLocaleDateString();
  const [search, setSearch] = useState('');
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // Exemple de données (vide pour démonstration)
  

  const totalEntries = data.length;
  const startEntry = totalEntries === 0 ? 0 : (currentPage - 1) * entries + 1;
  const endEntry = Math.min(currentPage * entries, totalEntries);

  const columns = [
    'Date', 'Client', 'Produit', 'Quantité', 'Prix Unitaire',
    'Total', 'Mode de Paiement', 'Statut', 'Actions'
  ];

  return (
    <div className="stats-card">
      
      {/* Section 1 */}
      <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-base font-bold">
            Recettes (ventes) d'aujourd'hui le {today}
          </h2>
          <label className="text-sm">
            Show
            <input
              type="number"
              min="1"
              value={entries}
              onChange={(e) => setEntries(Number(e.target.value))}
              className="mx-2 px-2 py-1 border rounded w-16"
            />
            entries
          </label>
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="search" className="text-sm font-medium">Search:</label>
          <input
            id="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-1 border rounded"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="overflow-auto">
        <table className="min-w-full border border-gray-300">
          
          <thead className="">
            <tr className='rounded-2xl'>
              {columns.map((col, index) => (
                <th key={index} className="px-4 py-2 text-left">
                  {col}
                  {/*<button className="ml-2 text-xs">
                    o
                  </button>*/}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {data.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="text-center py-4 text-gray-500 bg-gray-50">
                  No data available in table
                </td>
              </tr>
            ) : (
              data.slice(startEntry - 1, endEntry).map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : ''}>
                  {columns.map((col, i, columns) => (
                    <td key={i} className="px-4 py-2">
                      {row[columns[i].toLowerCase()] || 'N/A'}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>

        </table>
        <div className="mt-2 text-sm text-gray-600">
          Showing {startEntry} to {endEntry} of {totalEntries} entries
        </div>
      </div>

      {/* Section 3 */}
      <div className="flex justify-end items-center mt-4 gap-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              endEntry < totalEntries ? prev + 1 : prev
            )
          }
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ConfigTable;
