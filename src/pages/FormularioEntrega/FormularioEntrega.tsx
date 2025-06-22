import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./FormularioEntrega.css";
import Navbar from "../../components/Navbar/NavBar";

const FormularioEntrega = () => {
  const navigate = useNavigate();
  const [formaPagamento, setFormaPagamento] = useState("");
  const [erro, setErro] = useState("");

  const [formData, setFormData] = useState({
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    uf: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { cep, rua, numero, bairro, cidade, uf } = formData;

    if (
      !cep ||
      !rua ||
      !numero ||
      !bairro ||
      !cidade ||
      !uf ||
      !formaPagamento
    ) {
      setErro("Dados não preenchidos");
      return;
    }

    setErro(""); // limpa o erro se estiver tudo certo
    navigate("/ObrigadoPelaCompra");
  };

  return (
    <div className="form-container">
      <Navbar />
      <h2 className="form-title">Complete seu pedido</h2>

      {erro && <div className="alert alert-danger">{erro}</div>}

      <form onSubmit={handleSubmit}>
        <section className="form-section">
          <div className="section-header">
            <span className="icon">📍</span>
            <div>
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <div className="inputs-container">
            <input
              type="text"
              placeholder="CEP"
              name="cep"
              value={formData.cep}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Rua"
              name="rua"
              value={formData.rua}
              onChange={handleChange}
            />
            <div className="input-row">
              <input
                type="text"
                placeholder="Número"
                name="numero"
                value={formData.numero}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Complemento"
                name="complemento"
                value={formData.complemento}
                onChange={handleChange}
              />
            </div>
            <div className="input-row">
              <input
                type="text"
                placeholder="Bairro"
                name="bairro"
                value={formData.bairro}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Cidade"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="UF"
                name="uf"
                className="uf"
                value={formData.uf}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        <section className="form-section">
          <div className="section-header">
            <span className="icon">💰</span>
            <div>
              <h3>Pagamento</h3>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </div>

          <div className="payment-options">
            <button
              type="button"
              className={`payment-option ${
                formaPagamento === "credito" ? "selected" : ""
              }`}
              onClick={() => setFormaPagamento("credito")}
            >
              💳 CARTÃO DE CRÉDITO
            </button>
            <button
              type="button"
              className={`payment-option ${
                formaPagamento === "debito" ? "selected" : ""
              }`}
              onClick={() => setFormaPagamento("debito")}
            >
              🏦 CARTÃO DE DÉBITO
            </button>
            <button
              type="button"
              className={`payment-option ${
                formaPagamento === "dinheiro" ? "selected" : ""
              }`}
              onClick={() => setFormaPagamento("dinheiro")}
            >
              💵 DINHEIRO
            </button>
          </div>
        </section>

        <button type="submit" className="btn-finalizar">
          FINALIZAR
        </button>
      </form>
    </div>
  );
};

export default FormularioEntrega;
