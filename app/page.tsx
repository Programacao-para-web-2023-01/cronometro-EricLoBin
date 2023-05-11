"use client"

import { useEffect, useState } from 'react'
import { clearInterval } from 'timers';
import Contador from './components/Contador';
import Reset from './components/Reset';
import Clock from './components/Clock';

export default function Home() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {setContador((atual: number) => atual + 1)}, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Contador
        contador={contador}
        onIncrement={() => {setContador(contador + 1)}}
      />
      <Reset
        reset={() => {setContador(0)}}
      />
      <Clock />
    </main>
  )
}
