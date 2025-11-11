import { Button } from "lucide-react";
import { Input } from "lucide-react";
import { Textarea } from "lucide-react";
import { Mail, BookOpenText, User } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="p-6 md:p-12 grid gap-8">
      {/* Hero */}
      <section className="text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          La mujer de Marcos
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Una historia sobre lo que pudo haber sido... y no fue.
        </motion.p>
        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-black text-white rounded-xl text-lg">Leer un fragmento</button>
          <button className="px-6 py-3 border border-black rounded-xl text-lg">Comprar el libro</button>
        </div>
      </section>

      {/* Sobre el libro */}
      <section className="grid gap-4 md:grid-cols-2 items-center">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Sobre el libro</h2>
          <p className="text-muted-foreground">
            Laura lo tenía todo: una casa frente al parque, un marido trabajador,
            hijos universitarios y tardes tranquilas. Pero la tristeza otoñal se
            convierte en un espejo implacable. "La mujer de Marcos" es una
            novela irónica, melancólica y lúcida sobre la identidad femenina, el
            tedio y la belleza de lo cotidiano.
          </p>
        </div>
        <div className="rounded-xl shadow-lg p-4 bg-background border text-center">
          <BookOpenText className="mx-auto mb-2 h-10 w-10" />
          <p className="text-muted-foreground italic">
            "Algunas mujeres nos dejamos deslumbrar fácilmente. Y luego solo
            somos la mujer del príncipe."
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section className="grid gap-4">
        <h2 className="text-2xl font-semibold">Contacto</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <input className="border p-2 rounded" placeholder="Tu nombre" />
          <input className="border p-2 rounded" placeholder="Tu correo electrónico" />
        </div>
        <textarea className="border p-2 rounded" placeholder="Escribe tu mensaje..." rows={4} />
        <button className="px-6 py-2 bg-black text-white rounded-xl w-fit">Enviar mensaje</button>
      </section>
    </main>
  );
}
  );
}
