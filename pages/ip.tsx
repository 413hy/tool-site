import { useEffect, useState } from 'react';

export default function IP() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch('/api/ip')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">IP 查询结果</h1>
      {data ? (
        <pre className="bg-gray-100 p-4 rounded-md text-sm">{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>查询中...</p>
      )}
    </div>
  );
}