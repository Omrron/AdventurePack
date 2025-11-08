// Function to generate a Minecraft-style UUID string (This is now global)
function generateUuid() {
  const s = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return s() + s() + "-" + s() + "-" + s() + "-" + s() + "-" + s() + s() + s();
}
