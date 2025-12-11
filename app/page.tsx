"use client";

import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export default function Home() {
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);

  return (
    <>
      <div
        className="h-screen overflow-hidden p-4 sm:p-6 sm:min-h-screen"
        style={{ backgroundColor: "#F4F3EF" }}
      >
        <div
          style={{ width: "70%", maxWidth: "none" }}
          className="w-full sm:w-[70%]"
        >
          <p className="font-semibold sm:font-normal leading-tight tracking-tight text-foreground text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.8rem]">
            Hey! Wir verbinden Beratung, Technologie und KI zu Lösungen, die
            wirken. Hinter den Kulissen entsteht gerade ein neues Kapitel – ein
            Ort, an dem sich Erfahrung, Technologie und neue Ideen treffen.
          </p>
        </div>
      </div>

      {/* Floating Navigation */}
      <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[calc(100%-2rem)] sm:max-w-none">
        <div className="flex items-center justify-center gap-3 sm:gap-6 bg-background/95 backdrop-blur-sm border border-border rounded-full px-9 py-3 sm:px-8 sm:py-2 shadow-lg">
          <a
            href="mailto:info@snxlabs.de?subject=Kontaktanfrage&body=Hallo%20SNX%20Labs%2C%0D%0A%0D%0A"
            className={cn(
              buttonVariants({ variant: "default", size: "default" }),
              "text-xs sm:text-sm px-2 sm:px-4 h-8 sm:h-9 no-underline cursor-pointer relative z-10"
            )}
            style={{ pointerEvents: "auto" }}
          >
            <span className="hidden sm:inline">Kontaktiere uns</span>
            <span className="sm:hidden">Kontakt</span>
          </a>
          <div className="h-4 w-px bg-border" />
          <button
            onClick={() => setIsImpressumOpen(true)}
            className="text-xs sm:text-sm text-foreground hover:text-foreground/80 transition-colors pb-0.5 whitespace-nowrap"
          >
            Impressum
          </button>
        </div>
      </nav>

      {/* Impressum Dialog */}
      <Dialog open={isImpressumOpen} onOpenChange={setIsImpressumOpen}>
        <DialogContent
          className="max-w-2xl rounded-none border-2 max-h-[90vh] overflow-y-auto"
          style={{ backgroundColor: "#F4F3EF" }}
        >
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Impressum
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm text-foreground">
            <div>
              <h3 className="font-semibold mb-2">Webseitenbetreiber</h3>
              <p>Maximilian Scheffel</p>
              <p>Thanh Nguyen</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Angaben gemäß § 5 TMG</h3>
              <p className="font-semibold">
                Scheffel, Maximilian; Nguyen, Thanh GbR als SNX Labs
              </p>
              <p className="mt-2">
                Gesellschaft bürgerlichen Rechts (GbR)
                <br />
                Kirchhöfnerstr. 17
                <br />
                30453 Hannover
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Kontakt</h3>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:info@snxlabs.de?subject=Kontaktanfrage%20von%20SNX%20Labs%20Website&body=Hallo%20SNX%20Labs%2C%0D%0A%0D%0A"
                  className="underline hover:text-foreground/80"
                >
                  info@snxlabs.de
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h3>
              <p>
                Scheffel, Maximilian; Nguyen, Thanh GbR
                <br />
                Kirchhöfnerstr. 17
                <br />
                30453 Hannover
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">
                Informationen zur Online-Streitbeilegung
              </h3>
              <p className="text-xs text-muted-foreground">
                Die EU-Kommission hat eine Internetplattform zur
                Online-Beilegung von Streitigkeiten (sog. OS-Plattform)
                geschaffen. Die OS-Plattform dient als Anlaufstelle zur
                außergerichtlichen Beilegung von Streitigkeiten betreffend
                vertragliche Verpflichtungen, die aus Online-Kaufverträgen
                erwachsen. Sie können die OS-Plattform unter dem folgenden Link
                erreichen:{" "}
                <a
                  href="http://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground/80"
                >
                  http://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG)
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
      <div className="fixed bottom-20 sm:bottom-8 left-4 sm:left-8 z-40">
        <p className="text-xs sm:text-sm text-muted-foreground uppercase">
          currently in private
        </p>
      </div>
    </>
  );
}
