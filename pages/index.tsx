import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold mb-6">轻量工具站</h1>
      <ul className="space-y-4">
        <li>
          <Link href="/ip" className="text-blue-500 hover:underline">IP 查询工具</Link>
        </li>
        <li>
          <Link href="/base64" className="text-blue-500 hover:underline">Base64 编解码器</Link>
        </li>
      </ul>
    </main>
  );
}