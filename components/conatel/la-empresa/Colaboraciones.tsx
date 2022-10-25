import GeneralHeader from '../GeneralHeader';

function Colaboraciones() {
    return (
        <div id='colaboraciones'>
            <GeneralHeader>Colaboraciones</GeneralHeader>
            <div className='mt-10 grid grid-cols-3 p-5 font-bold sm:grid-cols-2'>
                <div>
                    Consideramos que la colaboración entre empresas supone una
                    inversión de recursos que hacen que nuestros proyectos sigan
                    evolucionando.
                </div>
                <div>
                    La unión con mayoristas del sector puede fortalecer,
                    promover y ampliar conocimientos para mejorar la calidad y
                    gestión de nuestro servicio, y también de nuestros
                    productos.
                </div>
                <div>
                    Asimismo, creemos que esa diversidad promoverá la aparición
                    de nuevas ideas para el desempeño de nuestra labor diaria,
                    pudiendo ofrecer así una mayor calidad a nuestros clientes.
                </div>
            </div>
        </div>
    );
}
export default Colaboraciones;
