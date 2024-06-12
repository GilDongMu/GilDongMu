import { useEffect } from "react";

const InstallButton = () => {
  useEffect(() => {
    let deferredPrompt;
    const addBtn = document.querySelector(".download-button");
    addBtn.style.display = "none";

    window.addEventListener("beforeinstallprompt", e => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI notify the user they can install the PWA
      addBtn.style.display = "block";

      addBtn.addEventListener("click", () => {
        // Show the install prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
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
