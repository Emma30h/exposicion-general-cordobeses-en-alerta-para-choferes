// Configuración de la guía en vivo (datos públicos: no contiene secretos)
window.VIVO = {
  SUPABASE_URL: "https://mzxewusumcmgdujzbcdc.supabase.co",
  SUPABASE_KEY: "sb_publishable_Se18ZKgk8DtlGb9tyjbadA_uJmEnrG3",
  CANAL: "dmca-presentacion-unica",
  // Clave pública: la guía solo acepta cambios de lámina firmados por el expositor (_privado/CLAVE_EXPOSITOR.txt)
  CLAVE_PUBLICA: {"kty":"EC","crv":"P-256","x":"gWyGs2V6t7y_mjJGDDCXnirqG_WT-IgfcbnttU5es7A","y":"Hnif8f96trIwd0ymArA7uRSLSttQ6drt_B7oUAuRKTE"},
  // Clave del expositor cifrada con la contraseña (PBKDF2 + AES-GCM); el expositor la destraba una vez por computadora
  CLAVE_CIFRADA: {"iter":310000,"salt":"TNSYd4v/dEo1q9Vi3LDs7g==","iv":"2dHL9/fPEUTr7nJJ","ct":"Gc+HmtYzNbdkw+8hls/w7k0huMtuOh1z/y0Lty9gJDdwZi3UwL7Ydx5UvXj/f98znVNvhdOs5h/1m2oP0V6hFl67PzCipsYeAmBCVv6cDHdm6HlMZI1jgZTIAGvhwtJsPKb2/0GgVuFgBBRIsXiRuJ65BDbz3oIgmZDaXg9nd5E3icPhCPiEjZEO9DGqgR9MArBYOJlrtyKRibgljwOnRMrcH7F6EYoGQ+lXihynYjYKNIsLm77qoV5v6hAlRPz975WPe01vA1snUMjZPGt+tRKbeEjErcL1rzmGA6yz"},
  // Vacío: el QR apunta a guia.html junto a la presentación publicada. Completar si la guía se publica en otro lado.
  URL_GUIA: ""
};
