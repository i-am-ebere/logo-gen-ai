import React from "react";
import * as FileSystem from "expo-file-system";
import "react-native-get-random-values";
import { nanoid } from "nanoid";

export function useFavoriteLogo() {
  const favLogosDir = FileSystem.documentDirectory + "logos/";
  const favLogo = (logoId: string) => favLogosDir + `fav_ai_logo_${logoId}.png`;
  const [logos, setLogos] = React.useState<string[]>([]);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("");

  async function ensureDirExists() {
    const dirInfo = await FileSystem.getInfoAsync(favLogosDir);
    if (!dirInfo.exists) {
      await FileSystem.makeDirectoryAsync(favLogosDir, { intermediates: true });
    }
  }

  async function saveLogoFile(logoURL: string) {
    try {
      setErrorMessage("");
      const logoId = nanoid();
      await ensureDirExists();
      await FileSystem.downloadAsync(logoURL, favLogo(logoId));
      setMessage("Logo saved!");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    } catch (e) {
      setErrorMessage("Unable to save file");
    }
  }

  async function deleteLogoFile(logoURL: string) {
    try {
      setErrorMessage("");
      await FileSystem.deleteAsync(logoURL);
      await getSaveLogos();
    } catch (e) {
      setErrorMessage("unable to delete file");
    }
  }

  async function getSaveLogos() {
    try {
      setErrorMessage("");
      await ensureDirExists();
      const dirFileName = await FileSystem.readDirectoryAsync(favLogosDir);
      const filesWithDirName = dirFileName.map(
        (file) => `${favLogosDir}/${file}`,
      );
      setLogos(filesWithDirName);
    } catch (e) {
      setErrorMessage("Error fetching favorite logos");
    }
  }

  return {
    saveLogoFile,
    getSaveLogos,
    favLogosDir,
    deleteLogoFile,
    logos,
    errorMessage,
    message,
  };
}
