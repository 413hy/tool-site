import { useState } from 'react';

export default function Base64() {
  const [input, setInput] = useState('');
  const [encoded, setEncoded] = useState('');
  const [decoded, setDecoded] = useState('');

  const handleEncode = async () => {
    const res = await fetch('/api/base64', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'encode', text: input })
    });
    const data = await res.json();
    setEncoded(data.result);
  };

  const handleDecode = async () => {
    const res = await fetch('/api/base64', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'decode', text: input })
    });
    const data = await res.json();
    setDecoded(data.result);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Base64 编解码</h1>
      <textarea
        className="w-full p-2 border mb-4"
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="输入要编码或解码的文本"
      />
      <div className="flex space-x-2 mb-4">
        <button onClick={handleEncode} className="px-4 py-2 bg-blue-500 text-white rounded">编码</button>
        <button onClick={handleDecode} className="px-4 py-2 bg-green-500 text-white rounded">解码</button>
      </div>
      {encoded && <p><strong>编码结果：</strong> {encoded}</p>}
      {decoded && <p><strong>解码结果：</strong> {decoded}</p>}
    </div>
  );
}