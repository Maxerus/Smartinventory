//import mssql
const mssql = require("mssql");
//import express module
const express = require("express");
//import fs module
const fs = require("fs");
//create router
const router = express.Router();
//import mssql connection module
const dbConnectMsSQL = require("../config/sqlConnectString");
//set methods
router.get("/", (req, res) => {
    // Select the database
    const selectData = async () => {
        try {
            await mssql.connect(dbConnectMsSQL);
            const res = await mssql.query(`
            SELECT * FROM [inventorydb].[dbo].[products]
            `);
            return res['recordset']
        } catch (err) {
            console.log(err);
            return err
        }
    }
    // wait data for Display

    const getData = async () => {
        const data = await Promise.resolve(selectData())
        return data
    }

    // working respon data from selectData()
    (async () =>{
        // res.send(await getData())

        // ส่งค่าไปที่หน้า index.ejs
        // console.log(await getData());
        res.render('pages/index.ejs', {products :await getData()})
    })()

});
// export module
module.exports = router;
