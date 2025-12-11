"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export default function Home() {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);

  return (
    <>
      <div
        className="min-h-screen p-3 sm:p-6"
        style={{ backgroundColor: "#F4F3EF" }}
      >
        <div
          style={{ width: "70%", maxWidth: "none" }}
          className="w-full sm:w-[70%]"
        >
          <p className="font-normal leading-tight tracking-tight text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.8rem]">
            Hey! Wir verbinden Beratung, Technologie und KI zu Lösungen, die
            wirken. Hinter den Kulissen entsteht gerade ein neues Kapitel – ein
            Ort, an dem sich Erfahrung, Technologie und neue Ideen treffen.
          </p>
        </div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] sm:w-auto">
        <div className="flex items-center justify-center gap-3 sm:gap-6 bg-background/95 backdrop-blur-sm border border-border rounded-full px-4 py-2 sm:px-8 sm:py-3 shadow-lg">
          <button
            onClick={() => setIsImpressumOpen(true)}
            className="text-xs sm:text-sm text-foreground hover:text-foreground/80 transition-colors pb-0.5 whitespace-nowrap"
          >
            Impressum
          </button>
          <div className="h-4 w-px bg-border" />
          <Button
            variant="default"
            size="default"
            className="text-xs sm:text-sm px-3 sm:px-4 h-8 sm:h-9"
          >
            <span className="hidden sm:inline">Kontaktiere uns</span>
            <span className="sm:hidden">Kontakt</span>
          </Button>
        </div>
      </nav>

      {/* Impressum Dialog */}
      <Dialog open={isImpressumOpen} onOpenChange={setIsImpressumOpen}>
        <DialogContent
          className="max-w-2xl rounded-none border-2"
          style={{ backgroundColor: "#F4F3EF" }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Impressum
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-foreground">
            <div>
              <h3 className="font-semibold mb-2">Angaben gemäß § 5 TMG</h3>
              <p>snx labs</p>
              <p className="mt-2">
                {/* Hier können Sie Ihre Adresse eintragen */}
                Musterstraße 123
                <br />
                12345 Musterstadt
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Kontakt</h3>
              <p>
                Telefon: {/* Ihre Telefonnummer */}
                <br />
                E-Mail: {/* Ihre E-Mail-Adresse */}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h3>
              <p>
                {/* Ihr Name */}
                <br />
                {/* Ihre Adresse */}
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Haftungsausschluss</h3>
              <div className="space-y-2 text-xs text-muted-foreground">
                <p>
                  <strong>Haftung für Inhalte</strong>
                  <br />
                  Die Inhalte unserer Seiten wurden mit größter Sorgfalt
                  erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität
                  der Inhalte können wir jedoch keine Gewähr übernehmen.
                </p>
                <p>
                  <strong>Haftung für Links</strong>
                  <br />
                  Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                  deren Inhalte wir keinen Einfluss haben. Deshalb können wir
                  für diese fremden Inhalte auch keine Gewähr übernehmen.
                </p>
                <p>
                  <strong>Urheberrecht</strong>
                  <br />
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                  diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                  Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                  Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                  der schriftlichen Zustimmung des jeweiligen Autors bzw.
                  Erstellers.
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Bottom Left Text */}
      <div className="fixed bottom-4 sm:bottom-8 left-4 sm:left-8 z-50">
        <p className="text-xs sm:text-sm text-muted-foreground uppercase">
          currently in private
        </p>
      </div>
    </>
  );
}
