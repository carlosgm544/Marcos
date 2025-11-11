import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
          <Button size="lg">Leer un fragmento</Button>
          <Button variant="outline" size="lg">
            Comprar el libro
          </Button>
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
          <Input placeholder="Tu nombre" icon={<User />} />
          <Input placeholder="Tu correo electrónico" icon={<Mail />} />
        </div>
        <Textarea placeholder="Escribe tu mensaje..." rows={4} />
        <Button className="w-fit">Enviar mensaje</Button>
      </section>
    </main>
  );
}
