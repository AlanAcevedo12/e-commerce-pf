import DataTable from 'react-data-table-component';

const tablaPedidos = [
        {
        "fecha": "2017-12-03",
        "pago_total": 360,
        "direccion_de_envio": { "direccion": "Pasaje privado 123", "CP": 4001 },
        "estado": "Aprobado",
        "idProductos": [1, 2, 3]
      },
      {
        "fecha": "2018-12-02",
        "pago_total": 1230,
        "direccion_de_envio": { "direccion": "Pirulo 6123", "CP": 4005 },
        "estado": "Aprobado",
        "idProductos": [1, 2, 3]
      },
      {
        "fecha": "2018-12-01",
        "pago_total": 2310,
        "direccion_de_envio": { "direccion": "San Martin 129", "CP": 4002 },
        "estado": "Aprobado",
        "idProductos": [1, 2, 3]
      },
      {
        "fecha": "2018-12-06",
        "pago_total": 3210,
        "direccion_de_envio": { "direccion": "Los cocos 1523", "CP": 4008 },
        "estado": "Aprobado",
        "idProductos": [1, 2, 3]
      },
      {
        "fecha": "2018-12-09",
        "pago_total": 1320,
        "direccion_de_envio": { "direccion": "Gatowas 823", "CP": 4009 },
        "estado": "Aprobado",
        "idProductos": [1, 2, 3]
      },
      {
        "fecha": "2018-02-09",
        "pago_total": 5123,
        "direccion_de_envio": { "direccion": "Pingu 5223", "CP": 4001 },
        "estado": "Aprobado",
        "idProductos": [1, 2, 3]
      },
      {
        "fecha": "2018-07-05",
        "pago_total": 1234,
        "direccion_de_envio": { "direccion": "Jacksul 9123", "CP": 4005 },
        "estado": "Aprobado",
        "idProductos": [1, 2, 3]
      },
      {
        "fecha": "2018-11-03",
        "pago_total": 1235,
        "direccion_de_envio": { "direccion": "Wandusk 1293", "CP": 4006 },
        "estado": "Aprobado",
        "idProductos": [1, 2, 3]
      },
      {
        "fecha": "2018-10-07",
        "pago_total": 1230,
        "direccion_de_envio": { "direccion": "Av. Pedro 1523", "CP": 4008 },
        "estado": "Aprobado",
        "idProductos": [1, 2, 3]
      },
      {
        "fecha": "2018-09-01",
        "pago_total": 1803,
        "direccion_de_envio": { "direccion": "Av. Rio Grande 1023", "CP": 4000 },
        "estado": "Aprobado",
        "idProductos": [1, 2, 3]
      }
]

const columnas = [
    { 
     name: 'Fecha',
     selector: row => `${ row.fecha }`,
     sortable: true
    },
    { 
     name: 'Monto',
     selector: row => `${ row.pago_total }`,
     sortable: true
    },
    { 
     name: 'Direccion',
     selector: row => `${ row.direccion_de_envio.direccion }`,
     sortable: true
    },
    {
     name: 'CP',
     selector: row => `${ row.direccion_de_envio.CP }`,
     sortable: true
    },
    { 
     name: 'Estado',
     selector: row => `${ row.estado }`,
     sortable: true
    },
    { 
     name: 'ID Productos',
     selector: row => `${ row.idProductos }`,
     sortable: true
    },
 ]

 const paginacionOpciones={
    rowsPerPageText: 'Filas por pagina',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos'
}

export default function Sales() {
    return (
        <div>
            <DataTable
            columns={columnas}
            data={tablaPedidos}
            title="Pedidos"
            pagination
            paginationComponentOptions={paginacionOpciones}
            fixedHeader
            fixedHeaderScrollHeight="600px"
            />
        </div>
    )
}