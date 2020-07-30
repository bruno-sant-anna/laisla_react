import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
    return (
        <PageDefault>
            <h1>Gerar Ficha Técnica</h1>

            <Link to="/cadastro/categoria">
                Ficha Técnica do Produto
            </Link>
        </PageDefault>
    )
}

export default CadastroVideo;