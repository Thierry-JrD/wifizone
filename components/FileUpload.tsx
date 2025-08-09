import React, { useState } from 'react';

const FileUpload = () => {
  const [fileName, setFileName] = useState('Aucun fichier');

  return (
    <div className="py-2 px-3 border border-gray-200 rounded-3xl text-sm overflow-hidden">
      <label className="flex items-center gap-2 cursor-pointer">
        <div>
          Fichier
        </div>
        <span className="text-gray-500">{fileName}</span>
        <input
          type="file"
          className="hidden"
          onChange={(e) =>
            setFileName(e.target.files[0]?.name || 'Aucun fichier')
          }
      />
      </label>
    </div>
  );
};

export default FileUpload;