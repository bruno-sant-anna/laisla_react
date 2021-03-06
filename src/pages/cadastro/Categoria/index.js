import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria() {
    const valoresIniciais = {
        modelito: '',
        cliente: '',
        descricao: '',
        cor: ''
    }

    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor, // modelito: 'valor'
        })
    }

    function handleChange(infosDoEvento) {
        const { getAttribute, value } = infosDoEvento.target;
        setValue(
            getAttribute('name'),
            value
        );
    }

    return (
        <PageDefault>
            <h2>Cadastrar Ficha Tecnica: {values.modelito}</h2>

            <form onSubmit={function handleSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }}>

                <FormField 
                    label="Nome da Peça"
                    type="text"
                    name="modelito"
                    value={values.modelito}
                    onChange={handleChange}
                />
                <FormField 
                    label="Cliente"
                    type="text"
                    name="cliente"
                    value={values.cliente}
                    onChange={handleChange}
                />
                {/* <div>
                    <label>
                        Cliente:
                        <input
                            type="text"
                            value={values.cliente}
                            name="cliente"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}
                <FormField 
                    label="Descrição"
                    type="text"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />
                {/* <div>
                    <label>
                        Descrição:
                        <input
                            type="text"
                            value={values.descricao}
                            name="descricao"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}
                <FormField 
                    label="Cor"
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />
                {/* <div>
                    <label>
                        Cor:
                        <input
                            type="color"
                            value={values.cor}
                            name="cor"
                            onChange={handleChange}
                        />
                    </label>
                </div> */}

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.modelito}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria;