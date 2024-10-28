import {
  Page,
  Layout,
  Card,
  FormLayout,
  TextField,
  Button,
  Link,
  Banner,
} from "@shopify/polaris";
import { useState } from "react";
import { TitleBar } from "@shopify/app-bridge-react";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [error, setError] = useState("");
  const [captchaCorrecto, setCaptchaCorrecto] = useState(false);

  // Valor del captcha simulado
  const captchaCorrectoValor = "12345";

  // Validación de usuario alfanumérico
  const handleUsuarioChange = (value) => {
    const alfanumericoRegex = /^[a-zA-Z0-9]*$/;
    if (alfanumericoRegex.test(value)) {
      setUsuario(value);
      setError(""); // Limpiar el error si es válido
    } else {
      setError("El usuario solo debe contener caracteres alfanuméricos.");
    }
  };

  // Manejo del captcha
  const handleCaptchaChange = (value) => setCaptcha(value);

  // Validación del ingreso
  const handleIngresar = () => {
    if (captcha !== captchaCorrectoValor) {
      setError("Captcha incorrecto, por favor inténtelo de nuevo.");
      return;
    }
    if (usuario === "SisclinetUsuario" && contraseña === "ContraseñaSecreta") {
      alert("Usuario y contraseña válidos. Ingresando...");
    } else {
      setError("Usuario o contraseña incorrectos.");
    }
  };

  return (
    <Page>
      <TitleBar title="Inicio de sesión - Servientrega" />
      <Layout>
        <Layout.Section>
          <Card title="Iniciar Sesión" sectioned>
            <FormLayout>
              {error && (
                <Banner title="Error" status="critical">
                  <p>{error}</p>
                </Banner>
              )}
              <TextField
                label="Usuario Sisclinet"
                value={usuario}
                onChange={handleUsuarioChange}
                placeholder="Ingresa tu usuario"
                autoComplete="off"
              />
              <TextField
                label="Contraseña"
                type="password"
                value={contraseña}
                onChange={(value) => setContraseña(value)}
                placeholder="Ingresa tu contraseña"
                autoComplete="off"
              />
              <TextField
                label="Captcha: Ingrese 12345"
                value={captcha}
                onChange={handleCaptchaChange}
                placeholder="Ingresa el captcha"
                autoComplete="off"
              />
              <Button primary onClick={handleIngresar}>
                Ingresar
              </Button>
            </FormLayout>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
              <p>Aún no eres cliente Servientrega?</p>
              <Link url="https://www.servientrega.com" external>
                Vincúlate con nosotros
              </Link>
            </div>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
