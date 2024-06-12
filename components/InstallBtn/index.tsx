import { useEffect } from "react";
// custom.d.ts
interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

interface Window {
  deferredPrompt: BeforeInstallPromptEvent | null;
}

const InstallButton = () => {
  useEffect(() => {
    let deferredPrompt: BeforeInstallPromptEvent | null = null;
    const addBtn =
      document.querySelector<HTMLButtonElement>(".download-button");

    if (!addBtn) {
      console.error("Download button not found");
      return;
    }

    addBtn.style.display = "none";

    window.addEventListener("beforeinstallprompt", (e: Event) => {
      console.log("beforeinstallprompt event fired");
      e.preventDefault();
      deferredPrompt = e as BeforeInstallPromptEvent;
      addBtn.style.display = "block";

      addBtn.addEventListener("click", () => {
        console.log("Install button clicked");
        if (!deferredPrompt) {
          console.error("Deferred prompt is not available");
          return;
        }

        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(choiceResult => {
          if (choiceResult.outcome === "accepted") {
            console.log("User accepted the install prompt");
          } else {
            console.log("User dismissed the install prompt");
          }
          deferredPrompt = null;
        });
      });
    });
  }, []);

  return (
    <button className="download-button" style={{ display: "none" }}>
      Install App
    </button>
  );
};

export default InstallButton;
