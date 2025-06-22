import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../pages/Register/Register.css";
import logo2 from "../../assets/devwearball.png";
import { Link } from "react-router-dom";
import api from "../../api/api";
import InputMask from "react-input-mask";

//login

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  cpf?: string;
}

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    cpf: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validateCPF = (cpf: string): boolean => {
    const cleanedCPF = cpf.replace(/[^\d]/g, "");
    if (cleanedCPF.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cleanedCPF)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += parseInt(cleanedCPF.charAt(i)) * (10 - i);
    }
    let firstVerifier = 11 - (sum % 11);
    if (firstVerifier >= 10) firstVerifier = 0;

    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += parseInt(cleanedCPF.charAt(i)) * (11 - i);
    }
    let secondVerifier = 11 - (sum % 11);
    if (secondVerifier >= 10) secondVerifier = 0;

    return (
      firstVerifier === parseInt(cleanedCPF.charAt(9)) &&
      secondVerifier === parseInt(cleanedCPF.charAt(10))
    );
  };

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password: string): boolean => {
    return password.length >= 8;
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Nome é obrigatório";
    if (!formData.email.trim()) {
      newErrors.email = "E-mail é obrigatório";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "E-mail inválido";
    }

    if (!formData.password) {
      newErrors.password = "Senha é obrigatória";
    } else if (!validatePassword(formData.password)) {
      newErrors.password = "Senha deve ter pelo menos 8 caracteres";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirme sua senha";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "As senhas não coincidem";
    }

    if (!formData.cpf.trim()) {
      newErrors.cpf = "CPF é obrigatório";
    } else if (!validateCPF(formData.cpf)) {
      newErrors.cpf = "CPF inválido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const ExecuteRegister = async () => {
    try {
      const { name, email, password, cpf } = formData;

      const response = await api.post("/api/users", {
        name,
        email,
        password,
        cpf,
      });

      if (response.data && response.status === 201) {
        setSuccessMessage("Registro bem-sucedido!");
        setFormData({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          cpf: "",
        });

        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        setError(response.data.error || "Erro desconhecido no registro");
      }
    } catch (error: unknown) {
      console.error("Erro ao registrar:", error);

      if (error instanceof Error) {
        const axiosError = error as import("axios").AxiosError;

        if (axiosError.response) {
          const backendError =
            (axiosError.response.data as { error?: string })?.error ||
            alert("Registros já constam na base de dados");
          setError(backendError || "");
          alert(`Tente novamente ou mais tarde`);
          return;
        } else if (axiosError.request) {
          setError("");
          alert(
            "Não foi possível conectar ao servidor. Tente novamente mais tarde."
          );
        } else {
          setError("Ocorreu um erro inesperado. Tente novamente.");
        }
      } else {
        setError("Erro desconhecido. Tente novamente.");
      }
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (validateForm()) {
      ExecuteRegister();
    } else {
      console.log("Formulário inválido", errors);
    }
  };

  return (
    <div className="login-page">
      <div className="row2">
        {successMessage && (
          <div className="alert alert-success">{successMessage}</div>
        )}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit} className="form-signin2">
          <img src={logo2} className="Logo2" alt="Logo DevWear" />
          <h6 className="mb-7">
            <p>
              <strong>{"<DevWear/>"}</strong>
            </p>
          </h6>
          <h6 className="mb-3 text-secondary">Registre sua conta aqui!</h6>

          <input
            type="text"
            name="name"
            placeholder="Nome"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
          />
          {errors.name && (
            <div className="invalid-feedback d-block text-start">
              {errors.name}
            </div>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
          />
          {errors.email && (
            <div className="invalid-feedback d-block text-start">
              {errors.email}
            </div>
          )}

          <input
            type="password"
            name="password"
            placeholder="Senha"
            value={formData.password}
            onChange={handleChange}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          {errors.password && (
            <div className="invalid-feedback d-block text-start">
              {errors.password}
            </div>
          )}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`form-control ${
              errors.confirmPassword ? "is-invalid" : ""
            }`}
          />
          {errors.confirmPassword && (
            <div className="invalid-feedback d-block text-start">
              {errors.confirmPassword}
            </div>
          )}

          <InputMask
            mask="999.999.999-99"
            value={formData.cpf}
            onChange={handleChange}
          >
            {(inputProps: React.InputHTMLAttributes<HTMLInputElement>) => (
              <input
                {...inputProps}
                type="text"
                name="cpf"
                placeholder="CPF (xxx.xxx.xxx-xx)"
                className={`form-control ${errors.cpf ? "is-invalid" : ""}`}
              />
            )}
          </InputMask>
          {errors.cpf && (
            <div className="invalid-feedback d-block text-start">
              {errors.cpf}
            </div>
          )}

          <div className="mt-4">
            <button type="submit" className="btn btn-primary w-100">
              Registrar
            </button>
          </div>

          <div className="links mt-3">
            <span>Já tem uma conta? </span>
            <Link to="/"> Logue aqui!</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
