const configSQL = {
    user: 'maxcpf',
    password: 'Mm21052541',
    server: 'localhost',
    database: 'inventorydb',
    port: 1433,
    stream: false,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true, // ตั้งค่าใช้ Certificate ใน Server เป็น True

    },
}
// export config เอาไปใช้ข้างนอก
module.exports = configSQL; 