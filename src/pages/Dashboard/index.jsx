import { useContext } from "react";

import { Container } from "./style";

import Header from "./Header";
import Filter from "./Filter";
import List from "./List";
import Form from "./Form";

import { ContextExpenses } from "../../contexts/ContextExpenses";

function Dashboard({ setHomepage }) {
  const { financialExpenses } = useContext(ContextExpenses);

  return (
    <>
      <Header setHomepage={setHomepage} />
      <Container>
        <div className="form">
          <Form />

          {financialExpenses.length > 0 && (
            <div className="total--money">
              <h2>
                Valor total: <span>$ {12345}</span>
              </h2>
              <span>O valor se refere ao saldo</span>
            </div>
          )}
        </div>

        <div className="list">
          <Filter />
          <List />
        </div>
      </Container>
    </>
  );
}

export default Dashboard;
